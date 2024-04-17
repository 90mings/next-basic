import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    color: 'rgba(0, 9, 32, 1)',
    border: '1px solid',
    borderColor: '#E3E8F1 !important',
    background: '#FFF',
    // borderRadius: 'full',
    borderRadius: '4px',
    _disabled: {
      opacity: 1,
      bg: 'rgba(245, 247, 251, 1)',
      borderColor: 'rgba(245, 247, 251, 1)',
    },
  },
  addon: {
    border: '1px solid',
    borderColor: 'red',
    background: 'gray.200',
    borderRadius: 'full',
    color: 'gray.500',
  },
});

const simpleStyle = definePartsStyle({
  field: {
    color: 'rgba(0, 9, 32, 1)',
    border: '0px solid',
    borderColor: '#E3E8F1 !important',
    background: '#FFF',
    // borderRadius: 'full',
    borderRadius: '0px',
    // fontSize: '12px',
    _disabled: {
      opacity: 1,
      bg: 'rgba(245, 247, 251, 1)',
      borderColor: 'rgba(245, 247, 251, 1)',
    },
  },
  addon: {
    border: '1px solid',
    borderColor: 'red',
    background: 'gray.200',
    borderRadius: 'full',
    color: 'gray.500',
  },
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    variant: null, // null here
  },
  variants: { simpleStyle },
});
