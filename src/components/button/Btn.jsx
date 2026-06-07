import React from 'react';
import { btnVariant } from './btn.css';

export default function Btn({
  children,
  color,
  size,
  radius,
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <div
      className={`${btnVariant({ color, size, radius })} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </div>
  );
}
