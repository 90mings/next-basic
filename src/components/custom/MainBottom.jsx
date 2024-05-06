'use client';

import MainBottomImage from '@/svgs/main-bottom.svg';
import TreeBottomImage from '@/svgs/main-tree-bottom.svg';
import GroundLeaf from '@/svgs/ground-leaf.svg';
import GroundLine from '@/svgs/ground-lind.svg';
import GroundCloud from '@/svgs/ground-cloud.svg';
import { Box, Image } from '@chakra-ui/react';
import utils from 'src/utils';

const MainBottom = ({
  children,
  isStart = false,
  isTree = false,
  isNav = true,
  isMain = false,
}) => {
  const image = isTree ? TreeBottomImage : MainBottomImage;
  const bp = utils.getBreakpoint();

  const getBottom = () => {
    if (isStart || isTree) {
      return 0;
    }
    switch (bp) {
      case 'sm':
        console.log(1);
        return '-150px';
      case 'md':
        console.log(2);
        return '-200px';
      default:
        return '-200px';
    }
  };

  const getHeight = () => {
    if (isNav) {
      return 'calc(100% - 100px)';
    }
    return '100%';
  };

  if (!isMain) {
    return (
      <Box
        w="100%"
        h={getHeight()}
        position={'fixed'}
        bottom={getBottom()}
        backgroundImage={image.src}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundPosition="bottom"
      >
        {children}
      </Box>
    );
  }
  return (
    <Box
      w="100%"
      h={'397px'}
      position={'fixed'}
      bottom={0}

      /*
      backgroundImage={image.src}
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      backgroundPosition="bottom"
      */
    >
      <Box position={'relative'} zIndex={1}>
        <Box
          w="100%"
          zIndex={2}
          position={'absolute'}
          bottom={'-397px'}
          h={'397px'}
          bg="#98522D"
        ></Box>
        <Image
          zIndex={1}
          position={'absolute'}
          top={'-300px'}
          src={GroundCloud.src}
        />
        <Image
          zIndex={3}
          position={'absolute'}
          top={'30px'}
          src={GroundLine.src}
        />
      </Box>
    </Box>
  );
};

export default MainBottom;
