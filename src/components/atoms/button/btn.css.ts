import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/theme.css';

export const btnBase = style({
  boxSizing: 'border-box',
  width: 'fit-content',
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  // gap: '4px',
  lineHeight: 1.3,
  letterSpacing: '-0.04em',
  fontSize: '16px',
  cursor: 'pointer',
  ...vars.radius.medium,
});

export const btnLabel = style({
  minWidth: 0,
});

export const btnVariants = recipe({
  base: btnBase,
  variants: {
    color: {
      // 주황 배경, 하얀 글씨
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
        border: `1px solid ${vars.color.primary}`,
      },
      // 흰색 배경, 주황 글씨, 주황 테두리
      primaryEmpty: {
        backgroundColor: vars.color.white,
        color: vars.color.primary,
        border: `1px solid ${vars.color.primary}`,
        fontFamily: vars.font.medium,
      },
      // 연한 주황 배경, 주황 글씨
      primaryLight: {
        backgroundColor: vars.color.primaryLight,
        color: vars.color.primary,
        border: `1px solid ${vars.color.primaryLight}`,
      },
      // 흰색 배경, 회색 글씨, 연한 회색 테두리
      empty: {
        backgroundColor: vars.color.white,
        color: vars.color.text.main,
        border: `1px solid ${vars.color.border}`,
      },
      // off-white 배경, 회색 글씨
      disabled: {
        backgroundColor: vars.color.off_white,
        color: vars.color.text.secondary,
        border: `1px solid ${vars.color.off_white}`,
      },
    },
    state: {
      option: {
        height: '32px',
        padding: '8px 10px',
        fontSize: '14px',
        fontFamily: vars.font.medium,
        ...vars.radius.small,
      },
      filter: {
        height: '34px',
        padding: '8px 14px',
        fontSize: '14px',
        fontFamily: vars.font.medium,
        ...vars.radius.round,
      },
      thinBtn: {
        // default font size : 16px
        height: '48px',
        padding: '14px 28px',
      },
      roundBtn: {
        // default font size : 16px
        height: '48px',
        padding: '14px 28px',
        ...vars.radius.round,
      },
      thickBtn: {
        // default font size : 16px
        height: '54px',
        padding: '16px 32px',
      },
    },
    size: {
      full: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});
