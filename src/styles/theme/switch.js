import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: '#FFF',
  },
  track: {
    bg: '#E3E8F1',
    _checked: {
      bg: 'positive.default',
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
