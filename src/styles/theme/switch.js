import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
    // width: '100px',
    // height: '60px',
    // size: 'lg',
    width: '100px',
    height: '60px',
  },
  thumb: {
    bg: '#FFF',
    mt: '7px',
    ml: '3px',
    w: '44px',
    h: '44px',
    _checked: {
      bg: '#FFF',
      transform: 'translateX(50px)',
    },
  },
  track: {
    width: '100px',
    height: '60px',
    bg: '#466E05',
    // bg: 'red',
    _checked: {
      bg: '#75B125',
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
