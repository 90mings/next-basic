import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  label: {
    // fontFamily: 'mono', // change the font family of the label
  },
  control: {
    width: '20px',
    height: '20px',
    // boxSize: 14,
    // padding: 4,
    marginTop: '1px',
    borderColor: '#E3E8F1 !important',
    borderRadius: '4px',
    backgroundColor: '#FFF',
    _checked: {
      border: '1px solid',
      borderColor: '#D49C21 !important',
      color: '#000000',
      background: '#FEC240 !important',
    },
  },
});

const customStyle = definePartsStyle({
  label: {
    // fontFamily: 'mono', // change the font family of the label
  },
  control: {
    width: '34px',
    height: '34px',
    // boxSize: 14,
    // padding: 4,
    marginTop: '2px',
    borderColor: '#E3E8F1 !important',
    borderRadius: '4px',
    backgroundColor: '#FFF',
    _checked: {
      border: '1px solid',
      borderColor: '#D49C21 !important',
      color: '#000000',
      background: '#FEC240 !important',
    },
  },
});

export const checkboxTheme = defineMultiStyleConfig({
  defaultProps: {
    size: 'xl',
  },
  variants: { customStyle },
  baseStyle,
});
