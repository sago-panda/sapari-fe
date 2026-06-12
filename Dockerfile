# syntax=docker/dockerfile:1.7@sha256:a57df69d0ea827fb7266491f2813635de6f17269be881f696fbfdf2d83dda33e
# ─────────────────────────────────────────────────────────────────────────────
# 정적 SPA(React+TS+Vite) 배포 이미지 — frontend-deploy-guide.html §1~9 적용
#   §2 베이스 = scratch(런타임), §3 서버 = static-web-server, §4 멀티스테이지+레이어순서,
#   §5 digest 핀(아래 주석 참고), §6 최적화 Dockerfile.
#
# ★ 이 repo 특수사정 (가이드의 npm/alpine 가정과 다름):
#   - 패키지매니저: Yarn Berry 4.14.1 + PnP + zero-install(.yarn/cache 커밋)  → npm ci 아님
#   - Vite 8 = rolldown 기반 → 플랫폼 네이티브 바이너리(@rolldown/binding-linux-x64-gnu) 필요
#     → 빌드 베이스는 musl(alpine)이 아니라 glibc(bookworm-slim) 여야 gnu 바인딩이 맞음
#     → PnP 네이티브는 'unplugged'로 풀려야 동작 → 빌드 시 yarn install 로 머티리얼라이즈
#
# §5 digest 핀(적용됨): FROM 은 태그@digest 로 고정 — 태그 덮어쓰기/변조에 영향 안 받음.
#   베이스 업데이트 시 digest 갱신:
#   docker buildx imagetools inspect node:22-bookworm-slim | grep -i digest
#   docker buildx imagetools inspect joseluisq/static-web-server:2-alpine | grep -i digest
# ─────────────────────────────────────────────────────────────────────────────

# ── 1) 빌드 스테이지 (glibc — rolldown linux-x64-gnu 네이티브 바인딩 호환) ──
FROM node:22-bookworm-slim@sha256:7af03b14a13c8cdd38e45058fd957bf00a72bbe17feac43b1c15a689c029c732 AS build
WORKDIR /app
ENV CI=true

# §4 레이어 순서: 의존성 정의 + zero-install 캐시를 소스보다 먼저 복사
#   → 소스만 바뀌면 아래 yarn install 레이어는 캐시 적중.
#   PnP/zero-install이라 .yarn/cache(zip)를 통째로 가져와 오프라인 설치한다.
COPY .yarnrc.yml package.json yarn.lock ./
COPY .pnp.* ./
COPY .yarn/ ./.yarn/

# zero-install 캐시에서 설치 + PnP unplugged(네이티브 바이너리) 머티리얼라이즈
#   corepack 미사용 — corepack 은 yarn 을 무검증 다운로드함. repo 에 커밋된
#   yarnPath 본(.yarn/releases)을 node 로 직접 실행해 다운로드 자체를 제거.
#   경로는 .yarnrc.yml 에서 동적으로 읽음 → `yarn set version` 업데이트 시 자동 추종(하드코딩 없음).
RUN node "$(sed -n 's/^yarnPath: *//p' .yarnrc.yml)" install --immutable

# §4 그다음 소스 복사 후 빌드
COPY . .
RUN node "$(sed -n 's/^yarnPath: *//p' .yarnrc.yml)" build
# → /app/dist (Vite 산출물). package.json scripts.build = "tsc -b && vite build"

# ── 2) 정적 서버 바이너리 추출 (§3) ──
# static-web-server alpine 변형 = musl 정적 링크 → scratch에 그대로 복사 가능.
# (debian :2 변형은 glibc 동적링크라 scratch에서 못 뜸 → alpine 사용)
FROM joseluisq/static-web-server:2-alpine@sha256:8aa4c9a140a76f18d154656503dbd856effd9d7cd75e6092348d522e73b3ca28 AS sws

# ── 3) 런타임 스테이지 (§2: scratch — OS 없음) ──
FROM scratch
COPY --from=sws /usr/local/bin/static-web-server /sws
COPY --from=build /app/dist /public

# scratch엔 /etc/passwd 없음 → 숫자 UID로만 지정 (nobody)
USER 65534:65534
EXPOSE 8080

# SPA: 404는 index.html로 fallback(--page-fallback). 압축/보안헤더 on. 로그 stdout→Loki.
ENTRYPOINT ["/sws"]
CMD ["--host", "0.0.0.0", "--port", "8080", "--root", "/public", "--page-fallback", "/public/index.html", "--compression", "true", "--security-headers", "true", "--log-level", "info"]
