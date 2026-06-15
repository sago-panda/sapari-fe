import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.locale('ko');

export default dayjs;

export const calcLiveDate = (date: string | Date) => {
  const target = dayjs(date);

  if (target.isSame(dayjs(), 'day')) {
    return { day: '오늘', time: target.format('H:mm') };
  }

  return { day: target.format('M월 D일'), time: target.format('H:mm') };
};

// 날짜 포맷
export const formatDate = (date: string | Date) =>
  dayjs(date).format('YYYY.MM.DD');

export const formatDateTime = (date: string | Date) =>
  dayjs(date).format('YYYY.MM.DD HH:mm');

// 상대 시간 (예: "3분 전")
export const formatRelative = (date: string | Date) => dayjs(date).fromNow();

// D-day 계산 (쿠폰 만료, 자동 구매 확정 등)
export const getDday = (targetDate: string | Date) =>
  dayjs(targetDate).diff(dayjs(), 'day');

// elapsed_seconds → mm:ss / hh:mm:ss (라이브 방송 경과 시간)
export const formatElapsed = (seconds: number) => {
  const d = dayjs.duration(seconds, 'seconds');
  return seconds >= 3600 ? d.format('HH:mm:ss') : d.format('mm:ss');
};
