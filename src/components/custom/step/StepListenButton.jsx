'use client';

import React, { useEffect, useState } from 'react';
import { Button, Center, HStack, Image } from '@chakra-ui/react';
import Ear from '@/svgs/ear.svg';
import { CustomIcon, GText } from '@/components';
import { TYPE_RING_SOUND } from '@/constants/common';

const StepSingleListenButton = (props) => {
  const { type, onClick } = props;

  const [bgColor, setBgColor] = useState('#FFF');
  const [fontColor, setFontColor] = useState('#FFF');

  useEffect(() => {
    handleButtonType();
  }, []);

  const handleButtonType = () => {
    if (type === TYPE_RING_SOUND) {
      setBgColor('#186F81');
      setFontColor('#186F81');
    }
  };

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      w={'100%'}
      h={'100px'}
      bg={'#FFF'}
      borderRadius={'20px'}
      border={'2px solid'}
      borderColor={bgColor}
      _active={{}}
      _focus={{}}
      _hover={{}}
      onClick={() => {
        handleOnClick();
      }}
      size="xl"
    >
      <HStack
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        px={'30px'}
      >
        <HStack spacing={5}>
          <Center h="60px" w="60px" borderRadius={'50%'} bg={bgColor} p={3}>
            <Image w="100%" h="100%" src={Ear?.src} />
          </Center>
          <GText fontWeight={700} color={fontColor}>
            시작하기
          </GText>
        </HStack>
        <Center w="64px" h="100%">
          <CustomIcon w="100%" h="100%" color={fontColor} name="next" />
        </Center>
      </HStack>
    </Button>
  );
};

export default StepSingleListenButton;
