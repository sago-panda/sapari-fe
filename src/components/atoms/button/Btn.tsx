import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { btnLabel, btnVariants } from './btn.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { fontVariants } from '../../../styles/typography.css';

type BtnVariants = RecipeVariants<typeof btnVariants>;

type BtnProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
  BtnVariants & {
    children: ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  };

export default function Btn({
  children,
  color,
  state,
  size,
  disabled = false,
  className = '',
  onClick,
  ...props
}: BtnProps) {
  return (
    <button
      type='button'
      className={`${btnVariants({ color, state, size })} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className={`${fontVariants({ ellipsis: '1line' })} ${btnLabel}`}>
        {children}
      </span>
    </button>
  );
}
