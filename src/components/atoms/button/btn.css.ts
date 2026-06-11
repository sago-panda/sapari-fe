import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/theme.css';

export const btnBase = style({
  boxSizing: 'border-box',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  gap: '4px',
  lineHeight: '130%',
  letterSpacing: '-0.04em',
  cursor: 'pointer',
});

export const btnVariant = recipe({
  base: btnBase,
  variants: {
    color: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
        fontFamily: vars.font.medium,
      },
      primaryEmpty: {
        backgroundColor: vars.color.white,
        color: vars.color.primary,
        border: `1px solid ${vars.color.primary}`,
      },
      primaryLight: {
        backgroundColor: vars.color.primaryLight,
        color: vars.color.primary,
      },
      empty: {
        backgroundColor: vars.color.white,
        color: vars.color.text.main,
        border: `1px solid ${vars.color.border}`,
      },
      disabled: {
        backgroundColor: vars.color.off_white,
        color: vars.color.text.secondary,
      },
    },
    size: {
      small: {
        padding: '6px 12px',
        fontSize: '12px',
      },
      medium: {
        padding: '10px 20px',
        fontSize: '14px',
      },
      large: {
        padding: '14px 28px',
        fontSize: '16px',
      },
      full: {
        width: '100%',
        fontSize: '16px',
        padding: '10px 0',
      },
      filter: {
        height: '34px',
        padding: '8px 14px',
        fontSize: '14px',
      },
    },
    radius: {
      small: {
        borderRadius: '4px',
      },
      medium: {
        borderRadius: '8px',
      },
      large: {
        borderRadius: '12px',
      },
      round: {
        borderRadius: '9999px',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
    radius: 'medium',
  },
});
