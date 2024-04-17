import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    fontWeight: 400,
  },
  tabpanel: {
    fontFamily: 'Noto Sans KR',
  },
});

const toggleVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props; // extract colorScheme from component props
  return {
    tablist: {
      // tabSize: 'sm',
      boxSizing: 'border-box',
    },
    tab: {
      boxSizing: 'border-box',
      _first: {
        borderLeftRadius: '6px',
      },
      _last: {
        borderRightRadius: '6px',
      },
      bg: 'rgba(229, 230, 233, 1)',
      color: 'rgba(0, 9, 32, 0.5)',
      border: '1px solid',
      borderColor: 'rgba(229, 230, 233, 1)',
      _selected: {
        bg: '#fff',
        border: '1px solid',
        borderColor: 'rgba(0, 9, 32, 1)',
        color: 'rgba(0, 9, 32, 1)',
      },
    },
    tabpanel: {},
  };
});

const colorfulVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props; // extract colorScheme from component props

  return {
    tab: {
      border: '2px solid',
      borderColor: 'transparent',
      // use colorScheme to change background color with dark and light mode options
      bg: mode(`${c}.300`, `${c}.600`)(props),
      borderTopRadius: 'lg',
      borderBottom: 'none',
      _selected: {
        bg: mode('#fff', 'gray.800')(props),
        color: mode(`${c}.500`, `${c}.300`)(props),
        borderColor: 'inherit',
        borderBottom: 'none',
        mb: '-2px',
      },
    },
    tablist: {
      borderBottom: '2x solid',
      borderColor: 'inherit',
    },
    tabpanel: {
      border: '2px solid',
      borderColor: 'inherit',
      borderBottomRadius: 'lg',
      borderTopRightRadius: 'lg',
    },
  };
});

const variants = {
  toggleButton: toggleVariant,
  colorful: colorfulVariant,
};

export const tabsTheme = defineMultiStyleConfig({ baseStyle, variants });
