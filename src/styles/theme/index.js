import { extendTheme, withDefaultProps } from '@chakra-ui/react';

import { radioTheme } from './radio';
import { checkboxTheme } from './checkbox';
import { accordionTheme } from './accordion';
import { buttonTheme } from './button';
import { switchTheme } from './switch';
import { inputTheme } from './input';
import { tabsTheme } from './tabs';
import { selectTheme } from './select';
import { menuTheme } from './menu';

export const theme = extendTheme(
  withDefaultProps({
    defaultProps: {
      variant: 'outline',
    },
  }),
  {
    components: {
      Radio: radioTheme,
      Checkbox: checkboxTheme,
      Accordion: accordionTheme,
      Button: buttonTheme,
      Switch: switchTheme,
      Input: inputTheme,
      Tabs: tabsTheme,
      Select: selectTheme,
      Menu: menuTheme,
    },
    fonts: {
      heading: 'var(--font-noto-sans_KR)',
      body: 'var(--font-noto-sans_KR)',
    },
    fontSizes: {
      base: 10,
      xs: 34,
      sm: 36,
      md: 38,
      lg: 40,
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      /*
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      */
    },
    breakpoints: {
      base: '0em',
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1900px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        200: 'rgba(246, 246, 246, 1)', // 바탕
        300: '#E5E6E9', // 버튼
        400: '#727784', // 버튼 텍스트
        900: '#1C1F37', // 타이틀
      },
      green: {
        500: '#BFFF00',
      },
      navy: {
        900: '#000920', // 사이드바
      },
      red: {
        500: '#FF2E00',
      },
      border: 'rgba(0, 9, 32, 0.25)',
      // TOBE
      positive: {
        default: 'rgba(2, 205, 128, 1)',
        hover: '#0B850B',
        fontColor: '#FFF',
        borderColor: 'rgba(2, 205, 128, 1)',
        activeColor: 'rgba(2, 205, 128, 0.5)',
        outline: {
          default: '#FFF',
          hover: '#0B850B',
          hoverColor: '#FFF',
          fontColor: 'rgba(2, 205, 128, 1)',
          borderColor: 'rgba(2, 205, 128, 1)',
          activeColor: 'rgba(2, 205, 128, 0.5)',
        },
      },
      dark: {
        default: 'rgba(0, 9, 32, 1)',
        hover: '#FFF',
        hoverColor: 'rgba(0, 9, 32, 1)',
        fontColor: '#FFF',
        borderColor: 'rgba(0, 9, 32, 1)',
        activeColor: 'rgba(0, 9, 32, 0.8)',
        outline: {
          default: '#FFF',
          hover: 'rgba(0, 9, 32, 1)',
          hoverColor: '#FFF',
          fontColor: 'rgba(0, 9, 32, 1)',
          borderColor: 'rgba(0, 9, 32, 1)',
          activeColor: 'rgba(0, 9, 32, 0.5)',
        },
      },
      info: {
        default: '#75B125',
        hover: '#FFF',
        hoverColor: '#75B125',
        fontColor: '#FFF',
        borderColor: '#496E0B',
        activeColor: '#75B125',
        outline: {
          default: '#FFF',
          hover: '#496E0B',
          hoverColor: '#FFF',
          fontColor: '#75B125',
          borderColor: '#75B125',
          activeColor: '#75B125',
        },
      },
      danger: {
        default: 'rgba(255, 0, 0, 1)',
        hover: '#FFF',
        hoverColor: 'rgba(255, 0, 0, 1)',
        fontColor: '#FFF',
        borderColor: 'rgba(255, 0, 0, 1)',
        activeColor: 'rgba(255, 0, 0, 0.5)',
        outline: {
          default: '#FFF',
          hover: 'rgba(255, 0, 0, 1)',
          hoverColor: '#FFF',
          fontColor: 'rgba(255, 0, 0, 1)',
          borderColor: 'rgba(255, 0, 0, 1)',
          activeColor: 'rgba(255, 0, 0, 0.5)',
        },
      },
      secondary: {
        default: '#E5E6E9',
        hover: '#FFF',
        hoverColor: 'rgba(185, 187, 193, 1)',
        fontColor: 'rgba(0, 9, 32, 0.5)',
        borderColor: 'rgba(185, 187, 193, 1)',
        activeColor: 'rgba(185, 187, 193, 0.8)',
        outline: {
          default: '#FFF',
          hover: 'rgba(185, 187, 193, 1)',
          hoverColor: 'rgba(0, 9, 32, 1)',
          fontColor: 'rgba(0, 9, 32, 0.5)',
          borderColor: 'rgba(185, 187, 193, 1)',
          activeColor: 'rgba(185, 187, 193, 0.5)',
        },
      },
      underline: {
        default: 'transparent',
        hover: '#0B850B',
        fontColor: 'rgba(0, 9, 32, 1)',
        borderColor: 'transparent',
        activeColor: 'rgba(185, 187, 193, 0.8)',
      },
    },
  },
);
