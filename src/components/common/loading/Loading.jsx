'use client';

import { Box, HStack } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useRecoilValue } from 'recoil';
import { loadingNoShadeState } from '@/stores/commonRecoil';

const Loading = () => {
  const globalLoadingNoShade = useRecoilValue(loadingNoShadeState);
  return (
    <Box
      position="absolute"
      zIndex={99999}
      w="100%"
      h={document.getElementsByTagName('html')[0].scrollHeight}
      // bgColor="blackAlpha.600"
      // bgColor="blackAlpha.700"
      bgColor={globalLoadingNoShade ? '' : 'blackAlpha.700'}
    >
      <HStack justifyContent="center" alignItems="center" h="100%">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </HStack>
    </Box>
  );
};

export default Loading;
