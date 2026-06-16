import { fontVariants } from '../../../styles/typography.css';
import { vars } from '../../../styles/theme.css.ts';
import * as styles from './smallLiveCard.css.ts';
import { calcLiveDate } from '../../../shared/dayjs';

type SmallLiveCardProps = {
  state?: 'live' | 'waiting' | 'default';
};

export default function SmallLiveCard({
  state = 'default',
}: SmallLiveCardProps) {
  // const isNotToday = new Date('2026-06-16');
  const isToday = new Date();
  return (
    <div className={styles.wrapSmallLiveCard}>
      <div className={styles.img}>
        {state === 'waiting' && (
          <div className={styles.waiting}>
            <div>{calcLiveDate(isToday).day}</div>

            <div
              style={{
                fontFamily: vars.font.bold,
                fontSize: '24px',
                marginTop: '-4px',
              }}
            >
              {calcLiveDate(isToday).time}
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: '0 2px' }}>
        <div
          className={fontVariants({ state: 'liveTitleMedium' })}
          style={{ width: '100%' }}
        >
          웨이크 메이크
        </div>
        <div
          className={`${fontVariants({ state: 'cardContent', ellipsis: '2lines' })} ${styles.content}`}
        >
          평상형 원목침대 프레임 가정의 달 특가 평상형 원목침대 프레임 가정의 달
          특가
        </div>
      </div>
    </div>
  );
}
