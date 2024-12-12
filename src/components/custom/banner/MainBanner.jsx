'use client';

import { Box, Center, Flex, HStack, Img } from '@chakra-ui/react';

const MainBanner = (props) => {
  const { right, left } = props;
  return (
    <Box
      w={'100%'}
      h={'45rem'}
      maxW={1920}
      // maxH={720}
    >
      <Flex
        direction="row"
        // justify="center"
        // align="center"
        // bg="gray.100"
      >
        {right && right}
        {left && left}
      </Flex>
    </Box>
  );
};

export default MainBanner;
