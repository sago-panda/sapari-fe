import * as styles from './deliveryCard.css';
import { Btn } from '../../atoms';
import { fontVariants } from '../../../styles/typography.css';

export default function DeliveryCard() {
  return (
    <div className={styles.deliveryCardStyle}>
      {/* 이미지 */}
      <div className={styles.deliveryCardImg}></div>
      {/* 텍스트 */}
      <div className={styles.deliveryCardContent}>
        <div className={fontVariants({ state: 'cardTitle' })}>결재 완료</div>
        <div
          className={`${fontVariants({ state: 'cardContent' })} ${styles.deliveryCardTitle}`}
        >
          삼립 since 1996 포켓몬 띠부띠부씰빵 5종 12봉 (이상해꽃/리자몽/
          야도란/피카츄/파이리)
        </div>
        <div className={fontVariants({ state: 'cardContent' })}>
          18,500원 / 1개
        </div>
        <div className={styles.deliveryCardButtonGroup}>
          <Btn color='primaryLight' state='option' size='full'>
            구매 확정 D-Day
          </Btn>
          <Btn color='empty' state='option' size='full'>
            배송 정보
          </Btn>
          <Btn color='empty' state='option' size='full'>
            환불 / 교환
          </Btn>
        </div>
      </div>
    </div>
  );
}
