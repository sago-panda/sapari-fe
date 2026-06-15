import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

// 카드 헤더? 스타일
export const ranking = style({
  //   boxSizing: 'border-box',
  display: 'flex',
  width: '25px',
  height: '25px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  ...vars.radius.small,
});

export const watch = style({
  display: 'flex',
  overflow: 'hidden',
  width: 'fit-content',
  height: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffffD4',
  color: vars.color.text.secondary,
  fontFamily: vars.font.bold,
  fontSize: '12px',
  lineHeight: '12px',
  borderRadius: '4px',
});

globalStyle(`${watch} span`, {
  padding: '1px 4px 0px 4px',
});

export const live = style({
  display: 'flex',
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  padding: '0px 5px 1px 4px',
  height: '100%',
  alignItems: 'center',
});

// 카드 스타일
export const smallLiveCardStyle = style({
  width: '170px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const liveImg = style({
  boxSizing: 'border-box',
  width: '170px',
  height: '255px',
  marginBottom: '10px',
  backgroundColor: vars.color.primaryLight,
  ...vars.radius.medium,
  padding: '6px',
});

export const wrapRanking = style({
  display: 'flex',
  justifyContent: 'space-between',
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
});

// 미니 카드 부분

export const wrapMiniCard = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: '8px',
  marginTop: '10px',
});

export const miniCardImg = style({
  width: '44px',
  height: '44px',
  backgroundColor: vars.color.off_white,
  flexShrink: 0,
  // border: `1px solid ${vars.color.border}`,
  ...vars.radius.small,
});

export const wrapMiniCardText = style({
  width: '100%',
  minWidth: 0,
});
export const miniCardTitle = style({
  boxSizing: 'border-box',
  width: '100%',
  marginBottom: '2px',
});
