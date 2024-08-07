'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Center, HStack, Image } from '@chakra-ui/react';
import Ear from '@/svgs/ear.svg';
import { CustomIcon, GText } from '@/components';
import {
  TYPE_RING_SOUND,
  TYPE_VOWEL,
  TYPE_CONSONANT,
  TYPE_SUBJECT,
} from '@/constants/common';
import { BOX_S_64, PADDING_30, RADIUS_S_20 } from '@/constants/common';

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
    if (type === TYPE_VOWEL) {
      setBgColor('#71523A');
      setFontColor('#71523A');
    }
    if (type === TYPE_SUBJECT) {
      setBgColor('#632066');
      setFontColor('#632066');
    }
    if (type === TYPE_CONSONANT) {
      setBgColor('#466E05');
      setFontColor('#466E05');
    }
  };

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Center h={'100%'}>
      <Button
        w={'100%'}
        h={'71.4%'}
        bg={'#FFF'}
        boxSizing="border-box"
        borderRadius={RADIUS_S_20}
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
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
          px={PADDING_30}
        >
          <HStack spacing={5}>
            <Center
              w={BOX_S_64}
              h={BOX_S_64}
              borderRadius={'50%'}
              bg={bgColor}
              p={'2.5%'}
            >
              <Image w="100%" h="100%" objectFit={'contain'} src={Ear?.src} />
            </Center>
            <GText fontWeight={700} color={fontColor} fontSize={38}>
              들어보기
            </GText>
          </HStack>
          <Center w={BOX_S_64} h={BOX_S_64}>
            <CustomIcon w="100%" h="100%" color={fontColor} name="next" />
          </Center>
        </HStack>
      </Button>
    </Center>
  );
};

export default StepSingleListenButton;
