import { globalFontFace } from '@vanilla-extract/css';

globalFontFace('minsans_bold', {
  src: [
    'local(minsans_bold)',
    "url('../assets/fonts/MinSans-Bold.woff2') format('woff2')",
    "url('./assets/fonts/MinSans-Bold.woff') format('woff')",
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
