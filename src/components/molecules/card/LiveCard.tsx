import { vars } from '../../../styles/theme.css.ts';
import { fontVariants } from '../../../styles/typography.css.ts';
import * as styles from './liveCard.css.ts';

const LiveHeader = ({
  state = 'default',
}: {
  state?: 'ranking' | 'live' | 'default';
}) => {
  if (state === 'default') {
    return (
      <div className={styles.wrapRanking}>
        <div
          className={`${fontVariants({ state: 'liveTitleBold' })} ${styles.ranking}`}
        >
          3
        </div>

        <div className={styles.watch}>
          <span>3.4K 시청</span>
        </div>
      </div>
    );
  } else if (state === 'live') {
    return (
      <div
        className={`${fontVariants({ state: 'liveTitleBold' })} ${styles.watch}`}
      >
        <div className={styles.live}>
          {/* <span style={{ fontSize: '8px' }}></span> */}
          <span>•&nbsp;&nbsp;LIVE</span>
        </div>
        <span>3.4K 시청</span>
      </div>
    );
  } else {
    return (
      <div
        className={`${fontVariants({ state: 'liveTitleBold' })} ${styles.watch}`}
      >
        <span>3.4K 시청</span>
      </div>
    );
  }
};

export default function LiveCard({
  state = 'ranking',
}: {
  state: 'ranking' | 'live' | 'default';
}) {
  const price = 16900;

  return (
    <div className={styles.smallLiveCardStyle}>
      {/* 이미지 */}
      <div className={styles.liveImg}>
        {state && <LiveHeader state={state} />}
      </div>
      {/* 제목, 내용 */}
      <div className={styles.wrapText}>
        <div className={fontVariants({ state: 'liveTitleBold' })}>
          웨이크 메이크
        </div>
        <div
          className={`${fontVariants({ state: 'liveContent', ellipsis: '2lines' })} ${styles.liveContent}`}
        >
          평상형 원목침대 프레임 가정의 달 특가 평상형 원목침대 프레임 가정의 달
          특가
        </div>
      </div>
      {/* 미니 카드 */}
      <div className={styles.wrapMiniCard}>
        {/* 미니 카드 이미지 */}
        <div className={styles.miniCardImg}></div>
        {/* 미니 카드 제목, 내용 */}
        <div className={styles.wrapMiniCardText}>
          <div
            className={`${fontVariants({ state: 'miniCardTitle', ellipsis: '1line' })} ${styles.miniCardTitle}`}
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
