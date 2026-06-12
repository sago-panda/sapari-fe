import { vars } from '../../../styles/theme.css';
import { fontVariants } from '../../../styles/typography.css';

export default function SmallLiveCard() {
  return (
    <div
      style={{
        width: '120px',
      }}
    >
      <div
        style={{
          width: '120px',
          height: '182px',
          backgroundColor: vars.color.off_white,
          marginBottom: '8px',
          ...vars.radius.medium,
        }}
      ></div>
      <div className={fontVariants({ state: 'liveTitleMedium' })}>
        웨이크 메이크
      </div>
      <div
        className={fontVariants({ state: 'liveTitleMedium' })}
        style={{
          marginTop: '4px',
          height: '34px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        평상형 원목침대 프레임 가정의 달 특가 평상형 원목침대 프레임 가정의 달
        특가
      </div>
    </div>
  );
}
