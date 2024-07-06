'use client';

import MainBottomImage from '@/svgs/main-bottom.svg';
import TreeBottomImage from '@/svgs/main-tree-bottom.svg';
import { Box, Image } from '@chakra-ui/react';
import utils from '@/utils/index';
import Lottie from 'react-lottie-player';
import animationData from '../../../../public/animation/animation.json';
import { deviceInfoState } from '@/stores/commonRecoil';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';

const MainBottom = ({
  children,
  isStart = false,
  isTree = false,
  isNav = true,
  isMain = false,
}) => {
  const deviceInfo = useRecoilValue(deviceInfoState);
  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    setIsWide(deviceInfo.isWide);
  }, [deviceInfo]);

  const image = isTree ? TreeBottomImage : MainBottomImage;
  const bp = utils.getBreakpoint();

  const getBottom = () => {
    if (isStart || isTree) {
      return 0;
    }
    if (isWide) {
      switch (bp) {
        case 'xs':
          return '-14.1791%';
        case 'sm':
          return '-14.1791%';
        case 'md':
          return '-14.1791%';
        case 'lg':
          return '-14.1791%';
        case 'xl':
          return '-14.1791%';
        default:
          return '-14.1791%';
      }
    }
    return 0;
  };

  const getHeight = () => {
    if (isNav) {
      return 'calc(100% - 100px)';
    }
    return '100%';
  };

  const handleBottom = () => {
    if (isStart && isTree) {
      return (
        <Box w={'100%'} h={'100%'} zIndex={3} position={'relative'} bottom={0}>
          <Lottie
            loop={false}
            animationData={animationData}
            play={true}
            style={{
              width: '100%',
              position: 'fixed',
              bottom: 0,
            }}
          />
        </Box>
      );
    } else {
      return (
        <Image position={'absolute'} w={'100%'} bottom={0} src={image?.src} />
      );
    }
  };

  if (!isMain) {
    return (
      <Box w={'100%'} h={'70.45%'} position={'fixed'} bottom={getBottom()}>
        {children}
        {handleBottom()}
      </Box>
    );
  }
};

export default MainBottom;

/*
return (
  <Box
    w="100%"
    h={'397px'}
    position={'fixed'}
    bottom={0}

    backgroundImage={image.src}
    backgroundRepeat="no-repeat"
    backgroundSize="contain"
    backgroundPosition="bottom"
  >
    <Box position={'relative'} zIndex={1}>
      <Box
        w="100%"
        zIndex={2}
        position={'absolute'}
        bottom={'0'}
        h={'29.63%'}
        bg="#98522D"
      ></Box>
      
      <Image
        zIndex={3}
        position={'absolute'}
        top={'30px'}
        src={GroundLine.src}
      />
    </Box>
  </Box>
);
*/
