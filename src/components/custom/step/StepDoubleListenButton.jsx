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

const StepDoubleListenButton = (props) => {
  const {
    isPause = false,
    isSingle = false,
    isDisabled = false,
    isTest = false,
    isVeri = false,
  } = props;
  const { type, onClick, onClickRestart } = props;

  const [leftIconName, setLeftIconName] = useState('playFill');
  const [rightIconName, setRightIconName] = useState('restartFill');
  const [leftText, setLeftText] = useState('시작하기');
  const [rightText, setRightText] = useState('다시 듣기');
  const [leftFontColor, setLeftFontColor] = useState('#FFF');
  const [rightFontColor, setRightFontColor] = useState('#FFF');
  const [leftBgColor, setLeftBgColor] = useState('#FFF');
  const [rightBgColor, setRightBgColor] = useState('#FFF');
  const [borderColor, setBorderColor] = useState('#00000080');

  useEffect(() => {
    handleButtonType();
  }, [isPause]);

  const handleButtonType = () => {
    if (isPause) {
      setLeftIconName('pauseFill');
      setLeftText('일시정지');
      if (isSingle) {
        setLeftBgColor('#999');
        setRightBgColor('#999');
        setBorderColor('#999');
      }
    } else {
      setLeftIconName('playFill');
      setLeftText('시작하기');
      if (isSingle) {
        setLeftBgColor('#FFF');
        setRightBgColor('#FFF');
        setBorderColor('#00000080');
      }
    }

    if (type === TYPE_RING_SOUND) {
      if (isDisabled) {
        setLeftFontColor('#FFF');
        setRightFontColor('#FFF');
      } else {
        setLeftFontColor('#186F81');
        setRightFontColor('#186F81');
      }
    }
    if (type === TYPE_VOWEL) {
      if (isDisabled) {
        setLeftFontColor('#FFF');
        setRightFontColor('#FFF');
      } else {
        setLeftFontColor('#71523A');
        setRightFontColor('#71523A');
      }
    }
    if (type === TYPE_CONSONANT) {
      if (isDisabled) {
        setLeftFontColor('#FFF');
        setRightFontColor('#FFF');
      } else {
        setLeftFontColor('#466E05');
        setRightFontColor('#466E05');
      }
    }
    if (type === TYPE_SUBJECT) {
      if (isDisabled) {
        setLeftFontColor('#FFF');
        setRightFontColor('#FFF');
      } else {
        setLeftFontColor('#632066');
        setRightFontColor('#632066');
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
    console.log('handleOnClick');
    if (onClick) {
      onClick();
    }
  };

  const handleOnClickRestart = () => {
    console.log('handleOnClickRestart');
    if (onClickRestart) {
      onClickRestart();
    }
  };

  const setButton = (props) => {
    const { text = '버튼', iconName = 'playFill' } = props;
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
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          px={'30px'}
        >
          <Center w={'64px'}>
            <CustomIcon w="100%" h="100%" color={fontColor} name={iconName} />
          </Center>
          <GText
            fontWeight={700}
            fontSize={{ md: '48px', sm: '46px' }}
            color={fontColor}
          >
            {text}
          </GText>
        </HStack>
      </Button>
    );
  };

  return isSingle ? (
    <Box position={'fixed'} bottom={'50px'} w={'100%'} h={'150px'} px={'50px'}>
      {setButton({
        onClick: handleOnClick,
        iconName: leftIconName,
        text: leftText,
        fontColor: leftFontColor,
        bg: leftBgColor,
      })}
    </Box>
  ) : (
    <Box position={'fixed'} bottom={'50px'} w={'100%'} h={'150px'} px={'50px'}>
      <HStack spacing={'20px'}>
        {setButton({
          onClick: handleOnClick,
          iconName: leftIconName,
          text: leftText,
          fontColor: leftFontColor,
          bg: leftBgColor,
        })}
        {setButton({
          onClick: handleOnClickRestart,
          iconName: rightIconName,
          text: rightText,
          fontColor: rightFontColor,
          bg: rightBgColor,
        })}
      </HStack>
    </Box>
  );
};

export default StepDoubleListenButton;
