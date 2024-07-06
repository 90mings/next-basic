'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Center, HStack, Text } from '@chakra-ui/react';
import { CustomIcon } from '@/components';
import utils from 'src/utils';
import { useRecoilValue } from 'recoil';
import { deviceInfoState } from 'src/stores/commonRecoil';

const TestDoubleListenButton = (props) => {
  const deviceInfo = useRecoilValue(deviceInfoState);
  const {
    isStart = false,
    isPlaying = false,
    isFinish = false,
    reSoundCount = 0,
  } = props;
  const [isNext, setIsNext] = useState(false);
  const { onClick, onClickNext, onClickRestart } = props;

  const [leftIconName, setLeftIconName] = useState('playFill');
  const [rightIconName, setRightIconName] = useState('restartFill');
  const [leftText, setLeftText] = useState('시작하기');
  const [rightText, setRightText] = useState('다시듣기');
  const [leftFontColor, setLeftFontColor] = useState('#75B125');
  const [rightFontColor, setRightFontColor] = useState('#FFF');
  const [leftBgColor, setLeftBgColor] = useState('#FFF');
  const [rightBgColor, setRightBgColor] = useState('#FFF');
  const [leftBorderColor, setLeftBorderColor] = useState('#75B125');
  const [rightBorderColor, setRightBorderColor] = useState('#75B125');

  const [rightIsDisabled, setRightIsDisabled] = useState(true);

  useEffect(() => {
    handleButtonType();
  }, [isStart, reSoundCount]);

  const handleButtonType = () => {
    if (isFinish) {
      setLeftIconName('verifiedFill');
      setLeftText('완료하기');
      setLeftBgColor('#75B125');
      setLeftFontColor('#FFF');
      setIsNext(true);
    } else if (isStart) {
      setLeftIconName('fillRightArrowCircle');
      setLeftText('다음문제');
      setLeftBgColor('#75B125');
      setLeftFontColor('#FFF');
      setIsNext(true);
    } else {
      setLeftIconName('playFill');
      setLeftText('시작하기');
      setLeftFontColor('#75B125');
      setLeftBgColor('#FFF');
      setIsNext(false);
    }

    if ((isStart === false && reSoundCount === 0) || reSoundCount > 0) {
      setRightFontColor('#FFF');
      setRightIsDisabled(true);
    } else {
      setRightFontColor('#75B125');
      setRightIsDisabled(false);
    }
  };

  const handleOnClick = () => {
    if (onClick) {
      if (isNext) {
        onClickNext();
      } else {
        onClick();
      }
    }
  };

  const handleOnClickRestart = () => {
    if (onClickRestart) {
      onClickRestart();
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
        borderRadius={'6px'}
        border={'1px solid'}
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
          <Center w={deviceInfo.isMobile ? '22.2300%' : '34px'}>
            <CustomIcon
              w={'100%'}
              h={'100%'}
              color={fontColor}
              name={iconName}
            />
          </Center>
          <Text
            fontWeight={700}
            fontSize={utils.getFontSize(49)}
            color={fontColor}
          >
            {text}
          </Text>
        </HStack>
      </Button>
    );
  };

  return (
    <Box w={'100%'} h={'100%'}>
      <HStack spacing={'10px'} h={'100%'}>
        <Box h={'100%'} w={'50%'}>
          {setButton({
            onClick: handleOnClick,
            iconName: leftIconName,
            text: leftText,
            fontColor: leftFontColor,
            bg: leftBgColor,
            borderColor: leftBorderColor,
            isDisabled: isPlaying,
          })}
        </Box>
        <Box h={'100%'} w={'50%'}>
          {setButton({
            onClick: handleOnClickRestart,
            iconName: rightIconName,
            text: rightText,
            fontColor: rightFontColor,
            bg: rightBgColor,
            borderColor: rightBorderColor,
            isDisabled: rightIsDisabled,
          })}
        </Box>
      </HStack>
    </Box>
  );
};

export default TestDoubleListenButton;
