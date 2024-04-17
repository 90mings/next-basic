import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { radioAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    width: '18px',
    height: '18px',
    border: '1px solid',
    borderColor: '#000920',
    _hover: {
      border: '1px solid',
      borderColor: '#02CD80 !important',
      color: '#02CD80',
      background: '#FFF !important',
    },
    _checked: {
      borderColor: '#02CD80 !important',
      color: '#02CD80',
      background: '#FFF !important',
    },
    _disabled: {
      borderColor: '#000920 !important',
      color: '#000920',
      background: '#FFF !important',
    },
  },
});

export const radioTheme = defineMultiStyleConfig({ baseStyle });
