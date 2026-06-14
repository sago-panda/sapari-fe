import { vars } from '../../../styles/theme.css';
import { fontVariants } from '../../../styles/typography.css';

export default function SmallLiveCard() {
  return (
    <div
      style={{
        width: '120px',
        display: 'flex',
        flexDirection: 'column',
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
          className={fontVariants({ state: 'cardContent', ellipsis: '2lines' })}
          style={{
            width: '100%',
            marginTop: '4px',
            height: '36px',
          }}
        >
          평상형 원목침대 프레임 가정의 달 특가 평상형 원목침대 프레임 가정의 달
          특가
        </div>
      </div>
    </div>
  );
}
