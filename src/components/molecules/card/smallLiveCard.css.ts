import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const wrapSmallLiveCard = style({
  width: '120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const img = style({
  position: 'relative',
  width: '120px',
  height: '182px',
  backgroundColor: vars.color.primaryLight,
  marginBottom: '8px',
  overflow: 'hidden',
  ...vars.radius.medium,
});

export const waiting = style({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#00000080',
  color: vars.color.white,
  // fontFamily: vars.font.bold,
  fontSize: '12px',
  lineHeight: 1.4,
});

export const content = style({
  width: '100%',
  marginTop: '4px',
  height: '36px',
});
