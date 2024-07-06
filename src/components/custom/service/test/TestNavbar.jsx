'use client';

import { Box, HStack, Text } from '@chakra-ui/react';
import { BOX_S_64 } from '@/constants/common';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { deviceInfoState } from 'src/stores/commonRecoil';
import utils from 'src/utils';

const TestNavbar = (props) => {
  const { type = 0 } = props;
  const deviceInfo = useRecoilValue(deviceInfoState);
  const { bg = '#FFF', fontColor = '#000' } = props;

  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (type) {
      case 1:
        setTitle('Ling 6');
        break;
      case 2:
        setTitle('모음');
        break;
      case 3:
        setTitle('이중모음');
        break;
      case 4:
        setTitle('자음초성');
        break;
      case 5:
        setTitle('자음종성');
        break;
      case 6:
        setTitle('일음절');
        break;
      case 7:
        setTitle('문장');
        break;
      default:
        setTitle('');
        break;
    }
  }, [type]);

  const getH = () => {
    if (deviceInfo.isMobile) {
      return '9.375%';
    } else {
      return '60px';
    }
  };

  return (
    <Box bg={bg} w="100%" h={getH()}>
      <HStack
        justifyContent="space-between"
        h="100%"
        alignItems="center"
        px={'3%'}
      >
        <Box w={BOX_S_64} h={BOX_S_64}></Box>
        <Box>
          <Text
            fontWeight={700}
            fontSize={deviceInfo.isMobile ? utils.getFontSize(53.3335) : '24px'}
            color={fontColor}
          >
            {title}
          </Text>
        </Box>
        <Box w={BOX_S_64} h={BOX_S_64} />
      </HStack>
    </Box>
  );
};

export default TestNavbar;
