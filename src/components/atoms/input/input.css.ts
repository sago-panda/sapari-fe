import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const inputStyle = style({
  boxSizing: 'border-box',
  width: '100%',
  border: 'none',
  lineHeight: '130%',
  letterSpacing: '-0.04em',

  color: vars.color.text.main,
  ':focus': {
    outline: 'none',
  },
});

export const inputVariant = recipe({
  base: inputStyle,
  variants: {
    size: {
      small: {
        fontSize: '14px',
        padding: '17px 16px',
      },
      searchModal: {
        height: '50px',
        fontSize: '16px',
        fontFamily: vars.font.medium,
      },
      searchBar: {
        fontSize: '16px',
        fontFamily: vars.font.medium,
        color: vars.color.brown,
      },
      price: {
        height: '32px',
        fontSize: '14px',
        padding: '7px 8px',
        textAlign: 'center',
        border: `1px solid ${vars.color.border}`,
        borderRadius: '4px',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});
