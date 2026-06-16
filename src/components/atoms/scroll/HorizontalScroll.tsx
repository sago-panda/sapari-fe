import { useEffect, useRef } from 'react';
import * as styles from './horizontalScroll.css';

export default function HorizontalScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 마우스 휠(세로 스크롤)을 가로 스크롤로 변환
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);
  return (
    <div ref={scrollRef} className={styles.horizontalScrollStyle}>
      {children}
    </div>
  );
}
