import { useState } from 'react';
import { Btn, HorizontalScroll } from '../../atoms';

export default function Filter({
  list,
  onClick,
}: {
  list: { id?: number; name: string }[];
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  // 기본 값으로 선택되면 안되는 컴포넌트가 있으면 수정
  const [current, setCurrent] = useState(0);

  const onClickFilter = ({
    index,
    e,
  }: {
    index: number;
    e?: React.MouseEvent<HTMLButtonElement>;
  }) => {
    // const target = e?.target as HTMLButtonElement;
    console.log('필터 클릭', index);
    setCurrent(index);
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <HorizontalScroll>
      {list?.map((item, index) => (
        <Btn
          key={index}
          id={String(index)}
          color={current === index ? 'primaryEmpty' : 'empty'}
          state='filter'
          onClick={(e) => onClickFilter({ index, e })}
          value={index}
        >
          {item.name}
        </Btn>
      ))}
    </HorizontalScroll>
  );
}
