'use client';

import { Box } from '@chakra-ui/react';

const StepContentForm = (props) => {
  const { children } = props;
  const { h, pt } = props;
  const { isListen = false } = props;

  /*
  const getHeightForm = () => {
    if (isListen) {
      return 'calc(100vh - 420px)';
    } else {
      if (bp === 'md') {
        return 'calc(100vh - 100px)';
      } else if (bp === 'sm') {
        return 'calc(100vh - 80px)';
      }
    }
  };
  */

  return (
    <Box h={h} minH={h} w={'100%'} pt={pt} px={'6.25%'}>
      {children}
    </Box>
  );
};

export default StepContentForm;
