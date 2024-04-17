import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  label: {
    // fontFamily: 'mono', // change the font family of the label
  },
  control: {
    marginTop: '2px',
    borderColor: '#E3E8F1 !important',
    borderRadius: 4,
    backgroundColor: '#FFF',
    _checked: {
      border: '1px solid',
      borderColor: '#02CD80 !important',
      color: '#FFF',
      background: '#02CD80 !important',
    },
  },
});

export const checkboxTheme = defineMultiStyleConfig({
  defaultProps: {
    size: 'lg',
  },
  baseStyle,
});
