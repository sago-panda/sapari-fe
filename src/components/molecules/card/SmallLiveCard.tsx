import { vars } from '../../../styles/theme.css';
import { fontVariants } from '../../../styles/typography.css';

export default function SmallLiveCard() {
  return (
    <div
      style={{
        width: '120px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
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
      <div style={{ padding: '0 2px' }}>
        <div
          className={fontVariants({ state: 'liveTitleMedium' })}
          style={{ width: '100%' }}
        >
          웨이크 메이크
        </div>
        <div
          className={fontVariants({ state: 'cardContent' })}
          style={{
            width: '100%',
            marginTop: '4px',
            height: '36px',
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
    </div>
  );
}
