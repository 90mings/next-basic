import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    // color: '#CCD2E3',
    bg: '#000920',
    // height: '56px',
  },
  button: {
    height: '56px',
  },
  panel: {
    paddingLeft: '0px',
    paddingRight: '0px',
    // height: '56px',
    // h: '56px',
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
