import { vars } from '../../../styles/theme.css.ts';
import { fontVariants } from '../../../styles/typography.css.ts';
import * as styles from './liveCard.css.ts';

export default function LiveCard() {
  const price = 16900;
  return (
    <div className={styles.smallLiveCardStyle}>
      {/* 이미지 */}
      <div className={styles.liveImg}></div>
      {/* 제목, 내용 */}
      <div className={styles.wrapText}>
        <div className={fontVariants({ state: 'liveTitleBold' })}>
          웨이크 메이크
        </div>
        <div
          className={`${fontVariants({ state: 'liveContent' })} ${styles.liveContent}`}
        >
          평상형 원목침대 프레임 가정의 달 특가 평상형 원목침대 프레임 가정의 달
          특가
        </div>
      </div>
      {/* 미니 카드 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          gap: '8px',
          marginTop: '10px',
        }}
      >
        {/* 미니 카드 이미지 */}
        <div
          style={{
            width: '44px',
            height: '44px',
            backgroundColor: vars.color.off_white,
            flexShrink: 0,
            // border: `1px solid ${vars.color.border}`,
            ...vars.radius.small,
          }}
        ></div>
        {/* 미니 카드 제목, 내용 */}
        <div
          style={{
            width: '100%',
            minWidth: 0,
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              width: '100%',
              marginBottom: '2px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            className={fontVariants({ state: 'miniCardTitle' })}
          >
            평상형 원목침대 프레임 가정의 달 특가
          </div>
          <div className={fontVariants({ state: 'liveTitleBold' })}>
            <span style={{ color: vars.color.focus }}>37%</span>{' '}
            {price.toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
}
