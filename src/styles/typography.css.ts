import { globalFontFace } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

globalFontFace('minsans_bold', {
  src: [
    'local(minsans_bold)',
    "url('../assets/fonts/MinSans-Bold.woff2') format('woff2')",
    "url('../assets/fonts/MinSans-Bold.woff') format('woff')",
  ].join(', '),
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('minsans_medium', {
  src: [
    'local(minsans_medium)',
    "url('../assets/fonts/MinSans-Medium.woff2') format('woff2')",
    "url('../assets/fonts/MinSans-Medium.woff') format('woff')",
  ].join(', '),
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('minsans_regular', {
  src: [
    'local(minsans_regular)',
    "url('../assets/fonts/MinSans-Regular.woff2') format('woff2')",
    "url('../assets/fonts/MinSans-Regular.woff') format('woff')",
  ].join(', '),
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('minsans_light', {
  src: [
    'local(minsans_light)',
    "url('../assets/fonts/MinSans-Light.woff2') format('woff2')",
    "url('../assets/fonts/MinSans-Light.woff') format('woff')",
  ].join(', '),
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('jalnan_bold', {
  src: [
    'local(jalnan_bold)',
    "url('../assets/fonts/Jalnan2.woff2') format('woff2')",
    "url('../assets/fonts/Jalnan2.woff') format('woff')",
  ].join(', '),
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

export const fontVariants = recipe({
  variants: {
    state: {
      logo: {
        fontFamily: 'jalnan_bold',
        fontSize: '24px',
        lineHeight: 1.4,
      },
      liveTitleMedium: {
        fontFamily: 'minsans_medium',
        fontSize: '14px',
        lineHeight: 1.3,
      },
      liveTitleBold: {
        fontFamily: 'minsans_bold',
        fontSize: '14px',
        lineHeight: 1.3,
      },
      liveContent: {
        fontFamily: 'minsans_regular',
        fontSize: '14px',
        lineHeight: 1.4,
      },
      cardTitle: {
        fontFamily: 'minsans_bold',
        fontSize: '16px',
        lineHeight: 1.3,
      },
      cardContent: {
        fontFamily: 'minsans_regular',
        fontSize: '14px',
        lineHeight: 1.3,
      },

      miniCardTitle: {
        fontFamily: 'minsans_regular',
        fontSize: '12px',
        lineHeight: 1.3,
        color: vars.color.text.secondary,
      },
    },
    ellipsis: {
      '1line': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      '2lines': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      },
      '3lines': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
      },
    },
  },
});
