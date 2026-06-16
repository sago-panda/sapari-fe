import { globalStyle, style } from '@vanilla-extract/css';

export const horizontalScrollStyle = style({
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  //   justifyContent: 'center',
  gap: '8px',
  overflowX: 'auto',
  border: '1px solid red',
});

globalStyle(`${horizontalScrollStyle} > *`, {
  flexShrink: 0,
});
