'use client';

import { Box, HStack, Image } from '@chakra-ui/react';
import { CustomIcon, GText } from '@/components';
import { BOX_S_64, RADIUS_S_40 } from '@/constants/common';
import Doc from '@/svgs/doc.svg';

const StepMainBottom = (props) => {
  const { q = 6, flag = false } = props;
  const { onClick } = props;
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Box
      w={'100%'}
      h={'8.9552%'}
      minH={'8.9552%'}
      bg={'#AAAAAA'}
      borderTopRadius={RADIUS_S_40}
      _hover={{
        cursor: 'pointer',
      }}
      onClick={handleOnClick}
    >
      <HStack h="100%" justifyContent={'space-between'} px={'30px'}>
        <Box w="50%">
          <HStack justifyContent={'flex-start'} spacing={3}>
            <Image w={BOX_S_64} src={Doc.src} />
            <GText fontWeight={700} color={'#FFF'} fontSize={38}>
              테스트{flag ? '(통과)' : ''}
            </GText>
          </HStack>
        </Box>
        <Box w="40%">
          <HStack justifyContent={'flex-end'}>
            <GText fontWeight={500} fontSize={30} color={'#FFF'}>
              {q}문제
            </GText>
            <CustomIcon w={BOX_S_64} h={'100%'} color={'#FFF'} name={'next'} />
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default StepMainBottom;
