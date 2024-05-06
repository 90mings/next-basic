'use client';

import { Box, HStack, Image } from '@chakra-ui/react';
import { CustomIcon, GText } from '@/components';
import Doc from '@/svgs/doc.svg';

const StepMainBottom = (props) => {
  const { q = 6 } = props;
  const { onClick } = props;
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Box
      position={'fixed'}
      bottom={'0'}
      h={'120px'}
      w={'100%'}
      bg={'#AAAAAA'}
      borderTopRadius={'40px'}
      _hover={{
        cursor: 'pointer',
      }}
      onClick={handleOnClick}
    >
      <HStack h="100%" justifyContent={'space-between'} px={'30px'}>
        <Box w="40%">
          <HStack justifyContent={'start'} spacing={3}>
            <Image w={'64px'} src={Doc.src} />
            <GText fontWeight={700} color={'#FFF'}>
              테스트
            </GText>
          </HStack>
        </Box>
        <Box w="40%">
          <HStack justifyContent={'end'}>
            <GText
              fontWeight={500}
              fontSize={{ md: '30px', sm: '28px' }}
              color={'#FFF'}
            >
              {q}문제
            </GText>
            <CustomIcon w={'64px'} h={'100%'} color={'#FFF'} name={'next'} />
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default StepMainBottom;
