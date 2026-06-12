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
    grade: {
      bronze: {
        base: '#D9A07A',
        bg30: '#E8B48A',
        bg60: '#C1845A',
        bg100: '#7C4A1E',
      },
      silver: {
        base: '#A8B4C0',
        bg30: '#D8E2EA',
        bg60: '#A8B4C0',
        bg100: '#6B7280',
      },
      gold: {
        base: '#F5D060',
        bg30: '#F5D060',
        bg60: '#D4A017',
        bg100: '#92620A',
      },
      diamond: {
        base: '#89D4F5',
        bg30: '#89D4F5',
        bg60: '#3B82C4',
        bg100: '#1A3A5C',
      },
    },
  },
  font: {
    regular: 'minsans_regular',
    medium: 'minsans_medium',
    bold: 'minsans_bold',
    light: 'minsans_light',
    jalnan: 'jalnan_bold',
  },
  radius: {
    small: {
      borderRadius: '4px',
    },
    medium: {
      borderRadius: '8px',
    },
    large: {
      borderRadius: '12px',
    },
    round: {
      borderRadius: '9999px',
    },
  },
});
