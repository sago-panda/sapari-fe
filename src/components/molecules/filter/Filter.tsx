import { useEffect, useRef, useState } from 'react';
import { Btn } from '../../atoms';
import * as styles from './filter.css';

export default function Filter({
  list,
  onClick,
}: {
  list: { id?: number; name: string }[];
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  // 기본 값으로 선택되면 안되는 컴포넌트가 있으면 수정
  const [current, setCurrent] = useState(0);
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

  const onClickFilter = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const target = e?.target as HTMLButtonElement;
    console.log('필터 클릭', target.value);
    setCurrent(Number(target.value));
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <div ref={scrollRef} className={styles.filterStyle}>
      {list?.map((item, index) => (
        <Btn
          key={item.id || index}
          color={current === index ? 'primaryEmpty' : 'empty'}
          state='filter'
          onClick={onClickFilter}
          value={index}
        >
          {item.name}
        </Btn>
      ))}
    </div>
  );
}
