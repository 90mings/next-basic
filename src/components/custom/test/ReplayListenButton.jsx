'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Center, HStack, VStack } from '@chakra-ui/react';
import { GText } from '@/components';
import {
  TYPE_CONSONANT,
  TYPE_SUBJECT,
  TYPE_VOWEL,
  TYPE_RING_SOUND,
} from '@/constants/common';

const ReplayListenButton = (props) => {
  const { replayStep = 1, isDisabled = false } = props;
  const { type, onClick1, onClick2, onClick3 } = props;

  const [bgColor, setBgColor] = useState('#FFF');
  const [fontColor, setFontColor] = useState('#FFF');

  useEffect(() => {
    handleButtonType();
  }, []);

  const handleButtonType = () => {
    if (type === TYPE_RING_SOUND) {
      if (isDisabled) {
        setFontColor('#FFF');
      } else {
        setFontColor('#186F81');
      }
    }
    if (type === TYPE_VOWEL) {
      if (isDisabled) {
        setFontColor('#FFF');
      } else {
        setFontColor('#71523A');
      }
    }
    if (type === TYPE_CONSONANT) {
      if (isDisabled) {
        setFontColor('#FFF');
      } else {
        setFontColor('#466E05');
      }
    }
    if (type === TYPE_SUBJECT) {
      if (isDisabled) {
        setFontColor('#FFF');
      } else {
        setFontColor('#632066');
      }
    }
  };

  const handleOnClick1 = () => {
    console.log('handleOnClick1');
    if (onClick1) {
      onClick1();
    }
  };
  const handleOnClick2 = () => {
    console.log('handleOnClick2');
    if (onClick2) {
      onClick2();
    }
  };
  const handleOnClick3 = () => {
    console.log('handleOnClick3');
    if (onClick3) {
      onClick3();
    }
  };

  const setButton = (props) => {
    const { target = 0 } = props;
    const { bg, fontColor } = props;
    const { onClick = () => {} } = props;
    return (
      <Button
        isDisabled={isDisabled}
        w={'100%'}
        h={'150px'}
        bg={bg}
        borderRadius={'20px'}
        border={'2px solid'}
        borderColor={'#00000080'}
        _active={{}}
        _focus={{}}
        _hover={{}}
        onClick={onClick}
        size="xl"
        _disabled={{
          bg: '#999999',
          borderColor: '#999999',
        }}
      >
        <VStack
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          px={'30px'}
        >
          <GText
            fontWeight={700}
            fontSize={{ md: '48px', sm: '46px' }}
            color={fontColor}
          >
            {`${target}구간`}
          </GText>
          <GText
            fontWeight={700}
            fontSize={{ md: '48px', sm: '46px' }}
            color={fontColor}
          >
            {`다시듣기`}
          </GText>
        </VStack>
      </Button>
    );
  };

  return (
    <Box position={'fixed'} bottom={'220px'} w={'100%'} h={'150px'} px={'50px'}>
      <HStack spacing={'20px'}>
        {setButton({
          onClick: handleOnClick1,
          target: 1,
          fontColor: fontColor,
          bg: bgColor,
        })}
        {setButton({
          onClick: handleOnClick2,
          target: 2,
          fontColor: fontColor,
          bg: bgColor,
        })}
        {setButton({
          onClick: handleOnClick2,
          target: 3,
          fontColor: fontColor,
          bg: bgColor,
        })}
      </HStack>
    </Box>
  );
};

export default ReplayListenButton;
