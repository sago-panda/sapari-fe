import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const smallLiveCardStyle = style({
  width: '170px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const liveImg = style({
  width: '170px',
  height: '255px',
  marginBottom: '10px',
  backgroundColor: vars.color.off_white,
  ...vars.radius.medium,
});

export const wrapText = style({
  boxSizing: 'border-box',
  width: '100%',
  padding: '0px 5px',
});

export const liveContent = style({
  width: '100%',
  marginTop: '4px',
  height: '40px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});
