import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css.ts';

export const defaultLayout = style({
  boxSizing: 'border-box',
  width: '100%',
  minWidth: '320px',
  maxWidth: '900px',
  margin: '0 auto',
  //   border: '1px solid red',
});
