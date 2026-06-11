import { useState } from 'react';
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

  const onClickFilter = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const target = e?.target as HTMLButtonElement;
    console.log('필터 클릭', target.value);
    setCurrent(Number(target.value));
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <div className={styles.filterStyle}>
      {list?.map((item, index) => (
        <Btn
          key={item.id || index}
          color={current === index ? 'primaryEmpty' : 'empty'}
          radius='round'
          size='filter'
          onClick={onClickFilter}
          value={index}
        >
          {item.name}
        </Btn>
      ))}
    </div>
  );
}
