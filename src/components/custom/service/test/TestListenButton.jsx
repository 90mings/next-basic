'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Center, HStack } from '@chakra-ui/react';
import { CustomIcon, GText } from '@/components';
import {
  TYPE_CONSONANT,
  TYPE_SUBJECT,
  TYPE_VOWEL,
  TYPE_RING_SOUND,
} from '@/constants/common';
import { BOX_S_64 } from '@/constants/common';
import { RADIUS_S_20 } from '@/constants/common';
import utils from 'src/utils';
import ring from 'public/sounds/ring';

const TestListenButton = (props) => {
  const {
    isPause = false,
    isTest = false,
    isVeri = false,
    isNotFixed = false,
  } = props;
  const { type, onClick } = props;

  const [leftIconName, setLeftIconName] = useState('playFill');
  const [leftText, setLeftText] = useState('시작하기');
  const [leftFontColor, setLeftFontColor] = useState('#FFF');
  const [leftBgColor, setLeftBgColor] = useState('#FFF');
  const [leftBorderColor, setLeftBorderColor] = useState('#00000080');

  useEffect(() => {
    handleButtonType();
  }, [isPause]);

  useEffect(() => {
    // ring.ListenRing
  }, []);

  const handleButtonType = () => {
    if (isPause) {
      setLeftIconName('pauseFill');
      setLeftText('일시정지');
      setLeftFontColor('#FFF');
      setLeftBgColor('#999999');
      setLeftBorderColor('#999999');
    } else {
      setLeftIconName('playFill');
      setLeftText('시작하기');
      setLeftBgColor('#FFF');
      if (type === TYPE_RING_SOUND) {
        setLeftFontColor('#186F81');
      }
      if (type === TYPE_VOWEL) {
        setLeftFontColor('#71523A');
      }
      if (type === TYPE_CONSONANT) {
        setLeftFontColor('#466E05');
      }
      if (type === TYPE_SUBJECT) {
        setLeftFontColor('#632066');
      }
    }

    if (isTest || isVeri) {
      if (type === TYPE_RING_SOUND) {
        setLeftBgColor('#186F81');
        setLeftFontColor('#FFF');
      }
      if (type === TYPE_VOWEL) {
        setLeftBgColor('#71523A');
        setLeftFontColor('#FFF');
      }
      if (type === TYPE_CONSONANT) {
        setLeftBgColor('#466E05');
        setLeftFontColor('#FFF');
      }
      if (type === TYPE_SUBJECT) {
        setLeftBgColor('#632066');
        setLeftFontColor('#FFF');
      }
      if (isTest) {
        setLeftIconName('fillRightArrowCircle');
        setLeftText('다음 문제');
      }
      if (isVeri) {
        setLeftIconName('verifiedFill');
        setLeftText('제출하기');
      }
    }
  };

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const setButton = (props) => {
    const { text = '버튼', iconName = 'playFill' } = props;
    const { bg, fontColor, borderColor } = props;
    const { isDisabled = false } = props;
    const { onClick = () => {} } = props;
    return (
      <Button
        isDisabled={isDisabled}
        w={'100%'}
        h={'100%'}
        bg={bg}
        borderRadius={RADIUS_S_20}
        border={'2px solid'}
        borderColor={borderColor}
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
        <HStack
          w={'100%'}
          h={'100%'}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Center w={BOX_S_64}>
            <CustomIcon
              w={'100%'}
              h={'100%'}
              color={fontColor}
              name={iconName}
            />
          </Center>
          <GText
            fontWeight={700}
            fontSize={utils.getFontSize(48)}
            color={fontColor}
          >
            {text}
          </GText>
        </HStack>
      </Button>
    );
  };

  return (
    <Box
      position={isNotFixed ? null : 'fixed'}
      bottom={'3.73%'}
      w={'100%'}
      h={'11.19%'}
      px={'6.25%'}
    >
      {setButton({
        onClick: handleOnClick,
        iconName: leftIconName,
        text: leftText,
        fontColor: leftFontColor,
        bg: leftBgColor,
        borderColor: leftBorderColor,
      })}
    </Box>
  );
};

export default TestListenButton;
