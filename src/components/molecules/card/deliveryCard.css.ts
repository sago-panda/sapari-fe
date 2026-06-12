import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css.ts';

export const deliveryCardStyle = style({
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

export const deliveryCardImg = style({
  width: '98px',
  minWidth: '98px',
  height: '98px',
  flexShrink: 0,
  border: `1px solid ${vars.color.border}4D`,
  backgroundColor: vars.color.off_white,
  ...vars.radius.medium,
});

export const deliveryCardContent = style({
  width: '100%',
  minWidth: 0,
  paddingTop: '4px',
});

export const deliveryCardTitle = style({
  width: '100%',
  marginTop: '1px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const deliveryCardButtonGroup = style({
  display: 'flex',
  width: '100%',
  marginTop: '6px',
  gap: '10px',
});
