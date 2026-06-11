import { style } from '@vanilla-extract/css';

export const filterStyle = style({
  boxSizing: 'border-box',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  overflowX: 'auto',
});
