'use client';

import TreeBottomImage from '@/svgs/tree-bottom.svg';
import { Box, Image } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { deviceInfoState } from 'src/stores/commonRecoil';

const TestBottom = () => {
  const deviceInfo = useRecoilValue(deviceInfoState);
  const handleW = () => {
    if (deviceInfo.isMobile) {
      return '100%';
    } else {
      return '360px';
    }
  };
  return (
    <Box w={handleW()} position={'fixed'} bottom={0}>
      <Image
        position={'absolute'}
        w={'100%'}
        bottom={0}
        src={TreeBottomImage?.src}
      />
    </Box>
  );
};

export default TestBottom;
