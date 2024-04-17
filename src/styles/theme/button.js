import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  boxSizing: 'border-box',
  borderRadius: '4px',
  _hover: {
    // color: 'rgba(0, 9, 32, 1)',
    opacity: '0.8',
  },
  _disabled: {
    opacity: 1,
    bg: '#E5E6E9',
    color: 'rgba(0, 9, 32, 0.5)',
    border: 'none',
  },
  _active: {
    // opacity: '0.8',
  },
});

const chip = defineStyle({
  boxSizing: 'border-box',
  borderRadius: '4px',
  bg: '#FFF',
  border: '1px solid',
  borderColor: '#50555C',
  color: '#000920',
  h: '32px',
  _hover: {
    // color: 'rgba(0, 9, 32, 1)',
    opacity: '0.8',
  },
  _disabled: {
    opacity: 1,
    bg: '#E5E6E9',
    color: 'rgba(0, 9, 32, 0.5)',
    border: 'none',
  },
  _active: {
    bg: '#FFFFFF',
    opacity: '0.8',
    border: '1px solid',
    borderColor: '#02CD80',
    color: '#02CD80',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { outline, chip },
});
