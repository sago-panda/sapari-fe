export type DeliveryStatus =
  | 'PAYMENT_COMPLETED' // 결제완료
  | 'PREPARING' // 재고준비 중 [판매자 처리]
  | 'READY_TO_SHIP' // 배송 준비 [판매자 처리]
  | 'DELIVERY_STARTED' // 배송 시작 [판매자: 운송장 입력 시 전환]
  | 'DELIVERED'; // 배송 완료 [택배사 웹훅 또는 판매자 수동 처리]

export interface DeliveryCardProps {
  orderItemId: number;
  carrierCode: string;
  trackingNumber: string;
  status: DeliveryStatus;
  estimatedDeliveryAt: string;
  deliveredAt: string | null;
}
