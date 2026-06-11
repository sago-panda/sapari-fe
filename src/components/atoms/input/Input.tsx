// import React from 'react';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import * as styles from './input.css';

type InputVariants = RecipeVariants<typeof styles.inputVariant>;

export default function Input({
  placeholder = 'Input',
  size = 'small',
}: {
  placeholder?: string;
} & InputVariants) {
  return (
    <input
      className={styles.inputVariant({ size })}
      placeholder={placeholder}
    />
  );
}
