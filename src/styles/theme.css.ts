import { createGlobalTheme } from '@vanilla-extract/css';
export const vars = createGlobalTheme(':root', {
  color: {
    focus: '#EA580C',
    primary: '#FF8933',
    primaryLight: '#FFEDD5',
    brown: '#7D6B63',
    text: {
      main: '#4C4C4C',
      secondary: '#757575',
    },
    border: '#DDDDDD',
    off_white: '#F8F8F8',
    white: '#FFFFFF',
    background: '#F9F9F9',
  },
  font: {
    regular: 'minsans_regular',
    medium: 'minsans_medium',
    bold: 'minsans_bold',
    light: 'minsans_light',
    jalnan: 'jalnan_bold',
  },
});
