import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css.ts';

globalStyle('body', {
  fontFamily: vars.font.regular,
  color: vars.color.text.main,
  // 글자의 픽셀 경계를 부드럽게 (Chrome, Safari)
  WebkitFontSmoothing: 'antialiased',
  // 글자의 픽셀 경계를 부드럽게 (Firefox)
  MozOsxFontSmoothing: 'grayscale',
  letterSpacing: '-0.04em',
});
