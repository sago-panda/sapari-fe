import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { btnVariant } from './btn.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';

type BtnVariants = RecipeVariants<typeof btnVariant>;

type BtnProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
  BtnVariants & {
    children: ReactNode;
  };

export default function Btn({
  children,
  color,
  size,
  radius,
  disabled = false,
  className = '',
  ...props
}: BtnProps) {
  console.log('Btn rendered with color:', color);
  return (
    <button
      type='button'
      className={`${btnVariant({ color, size, radius })} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
