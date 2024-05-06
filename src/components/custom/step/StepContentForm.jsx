'use client';

import { Box } from '@chakra-ui/react';

const StepContentForm = (props) => {
  const { children } = props;
  const { h = '820px' } = props;
  return (
    <Box
      h={h}
      // maxH={'300px'}
      w={'100%'}
      pt={'50px'}
      px={'50px'}
    >
      {children}
    </Box>
  );
};

export default StepContentForm;
