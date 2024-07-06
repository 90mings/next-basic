import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = {
  control: defineStyle({
    width: '23px',
    height: '23px',
    // boxSize: 14,
    // padding: 4,
    borderColor: '#000 !important',
    borderRadius: '4px',
    background: '#FFF !important',
    border: '1px solid',
    _checked: {
      border: '1px solid',
      borderColor: '#D49C21 !important',
      color: '#000000',
      background: '#FEC240 !important',
    },
  }),
  /*
  label: defineStyle({
    width: '34px',
    height: '34px',
  }),
  container: defineStyle({
    width: '34px',
    height: '34px',
  }),
  */
  icon: defineStyle({
    width: '18px',
    height: '18px',
  }),
};

/*
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
*/

const xs = defineStyle({
  control: defineStyle({
    width: '18px',
    height: '18px',
    // boxSize: 14,
    // padding: 4,
    borderColor: '#000 !important',
    borderRadius: '4px',
    background: '#FFF !important',
    border: '1px solid',
    _checked: {
      border: '1px solid',
      borderColor: '#D49C21 !important',
      color: '#000000',
      background: '#FEC240 !important',
    },
  }),
  /*
  label: defineStyle({
    width: '34px',
    height: '34px',
  }),
  container: defineStyle({
    width: '34px',
    height: '34px',
  }),
  */
  icon: defineStyle({
    width: '16px',
    height: '16px',
  }),
});

const sm = defineStyle({
  control: defineStyle({
    width: '23px',
    height: '23px',
    // boxSize: 14,
    // padding: 4,
    borderColor: '#000 !important',
    borderRadius: '4px',
    background: '#FFF !important',
    border: '1px solid',
    _checked: {
      border: '1px solid',
      borderColor: '#D49C21 !important',
      color: '#000000',
      background: '#FEC240 !important',
    },
  }),
  /*
  label: defineStyle({
    width: '34px',
    height: '34px',
  }),
  container: defineStyle({
    width: '34px',
    height: '34px',
  }),
  */
  icon: defineStyle({
    width: '18px',
    height: '18px',
  }),
});

const md = defineStyle({
  control: defineStyle({
    width: '29px',
    height: '29px',
    // boxSize: 14,
    // padding: 4,
    border: '1px solid',
    borderColor: '#000 !important',
    borderRadius: '4px',
    background: '#FFF !important',
    _checked: {
      border: '1px solid',
      borderColor: '#D49C21 !important',
      color: '#000000',
      background: '#FEC240 !important',
    },
  }),
  /*
  label: defineStyle({
    width: '34px',
    height: '34px',
  }),
  container: defineStyle({
    width: '34px',
    height: '34px',
  }),
  */
  icon: defineStyle({
    width: '22px',
    height: '22px',
  }),
});

const lg = defineStyle({
  control: defineStyle({
    width: '32px',
    height: '32px',
    // boxSize: 14,
    // padding: 4,
    border: '1px solid',
    borderColor: '#000 !important',
    borderRadius: '4px',
    background: '#FFF !important',
    _checked: {
      border: '1px solid',
      borderColor: '#D49C21 !important',
      color: '#000000',
      background: '#FEC240 !important',
    },
  }),
  /*
  label: defineStyle({
    width: '34px',
    height: '34px',
  }),
  container: defineStyle({
    width: '34px',
    height: '34px',
  }),
  */
  icon: defineStyle({
    width: '25px',
    height: '25px',
  }),
});

const xl = {
  control: defineStyle({
    width: '34px',
    height: '34px',
    // boxSize: 14,
    // padding: 4,
    border: '1px solid',
    borderColor: '#000 !important',
    borderRadius: '4px',
    background: '#FFF !important',
    _checked: {
      border: '1px solid',
      borderColor: '#D49C21 !important',
      color: '#000000',
      background: '#FEC240 !important',
    },
  }),
  /*
  label: defineStyle({
    width: '34px',
    height: '34px',
  }),
  container: defineStyle({
    width: '34px',
    height: '34px',
  }),
  */
  icon: defineStyle({
    width: '25px',
    height: '25px',
  }),
};

const customSizes = {
  base: definePartsStyle(baseStyle),
  xs: definePartsStyle(xs),
  sm: definePartsStyle(sm),
  md: definePartsStyle(md),
  lg: definePartsStyle(lg),
  xl: definePartsStyle(xl),
};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes: customSizes,
  /*
  sizes: {
    xs: {
      track: { width: '24px', height: '14px' },
      thumb: { width: '12px', height: '12px' },
    },
    sm: {
      track: { width: '32px', height: '20px' },
      thumb: { width: '16px', height: '16px' },
    },
    md: {
      track: { width: '40px', height: '24px' },
      thumb: { width: '20px', height: '20px' },
    },
    lg: {
      track: { width: '48px', height: '28px' },
      thumb: { width: '24px', height: '24px' },
    },
    xl: {
      container: { width: '100px', height: '60px' },
      track: { width: '100px', height: '60px' },
      thumb: { width: '44px', height: '44px', mt: '7px', ml: '3px' },
    },
  },
  */
  // variants: { boxy },
});
