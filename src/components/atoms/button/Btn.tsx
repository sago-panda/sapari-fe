import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { btnVariant } from './btn.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';

type BtnVariants = RecipeVariants<typeof btnVariant>;

type BtnProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
  BtnVariants & {
    children: ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  };

export default function Btn({
  children,
  color,
  size,
  radius,
  disabled = false,
  className = '',
  onClick,
  ...props
}: BtnProps) {
  return (
    <button
      type='button'
      className={`${btnVariant({ color, size, radius })} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
