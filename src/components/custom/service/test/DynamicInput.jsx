'use client';

import { Center, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import utils from '@/utils/index';

const DynamicInput = (props) => {
  const { target, data, setData, step } = props;
  const [timer, setTimer] = useState(null);

  const [text, setText] = useState('');
  const [inputs, setInputs] = useState([]);
  let inputRefs = useRef([]);
  const [timerId, setTimerId] = useState(null);

  const timerRef = useRef(null);

  useEffect(() => {
    if (target) {
      const text = target.data;
      setText(text);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [target]);

  useEffect(() => {
    if (utils.isNotEmpty(text)) {
      const textArr = text.split('');
      const tempTextArry = [];
      textArr.map((value, index) => {
        if (textArr.length === index + 1) {
          tempTextArry.push({ isFinish: true, value });
        } else {
          if (value === ' ') {
            tempTextArry.push({ dummy: true });
          } else {
            tempTextArry.push('');
          }
        }
      });
      setInputs(tempTextArry);
    }
  }, [text]);

  const handleInputChange = (index, value, isSkip = false) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const newInputs = [...inputs];
    newInputs[index] = value;

    if (isHangulComplete(value) || isSkip) {
      const nextIndex = index + 1;
      if (nextIndex < inputRefs.current.length) {
        if (inputRefs.current[nextIndex]) {
          inputRefs.current[nextIndex].focus();
        } else {
          const tempIndex = index + 1;
          handleInputChange(tempIndex, value, isSkip);
        }
      }
    } else if (isChoseong(value)) {
      //
    } else if (value.length > 0) {
      const nextIndex = index + 1;
      const newTimerId = setTimeout(() => {
        if (nextIndex < inputRefs.current.length) {
          if (inputRefs.current[nextIndex]) {
            inputRefs.current[nextIndex].focus();
          } else {
            const tempIndex = nextIndex + 1;
            if (inputRefs.current[tempIndex]) {
              inputRefs.current[tempIndex].focus();
            }
          }
        }
      }, 2000);
      setTimerId(newTimerId);
    }
    setInputs(newInputs);
  };

  const isChoseong = (value) => {
    const choseongUnicode = [
      'ㄱ',
      'ㄲ',
      'ㄴ',
      'ㄷ',
      'ㄸ',
      'ㄹ',
      'ㅁ',
      'ㅂ',
      'ㅃ',
      'ㅅ',
      'ㅆ',
      'ㅇ',
      'ㅈ',
      'ㅉ',
      'ㅊ',
      'ㅋ',
      'ㅌ',
      'ㅍ',
      'ㅎ',
    ];
    const ret = choseongUnicode.includes(value);
    return ret;
  };

  // 종성(28개)
  const JONG_HANGUL = [
    '',
    'ㄱ', // 1
    'ㄲ',
    'ㄳ',
    'ㄴ', // 4
    'ㄵ',
    'ㄶ',
    'ㄷ',
    'ㄹ', // 8
    'ㄺ',
    'ㄻ',
    'ㄼ',
    'ㄽ',
    'ㄾ',
    'ㄿ',
    'ㅀ',
    'ㅁ',
    'ㅂ', // 17
    'ㅄ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];

  const isHangulComplete = (value) => {
    if (value.length === 0) return false;

    const lastChar = value.charCodeAt(value.length - 1);

    if (lastChar < 0xac00 || lastChar > 0xd7a3) return false;

    const lastCharIndex = lastChar - 0xac00;
    const jongseongIndex = lastCharIndex % 28;
    // const jungseongIndex = ((lastCharIndex - jongseongIndex) / 28) % 21;
    // if (jungseongIndex === 0) return false;

    const allowJong = [1, 4, 8, 17];
    if (allowJong.includes(jongseongIndex)) {
      return false;
    } else if (jongseongIndex !== 0) {
      return true;
    }
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputs.length);
    if (data.length > 0) {
      let copiedDatas = utils.copyObject(data);
      if (!copiedDatas[step]?.answerArr) {
        copiedDatas[step]['answerArr'] = [];
      }
      const tempInputs = [...inputs];
      copiedDatas[step].answerArr = tempInputs;
      setData(copiedDatas);
    }
  }, [inputs]);

  const handleOnKeyDown = (event, index, value) => {
    const keyCode = event.keyCode;
    if (keyCode === 13 || keyCode === 38 || keyCode === 40) {
      event.preventDefault();
      handleInputChange(index, value, true);
    }
  };

  const handleForm = useCallback((input, index) => {
    if (input.dummy) {
      return <Center h={'100%'} bg={'#EEE'} />;
    } else if (input.isFinish) {
      return (
        <Center w={'100%'} h={'100%'} bg={'#FFF'}>
          <Text w={'100%'} fontSize={utils.getFontSize(80)} textAlign={'left'}>
            {input.value}
          </Text>
        </Center>
      );
    } else {
      return (
        <Center h={'100%'}>
          <Input
            px={0}
            h={'100%'}
            onKeyDown={(e) => {
              handleOnKeyDown(e, index, e.target.value);
            }}
            value={input || ''}
            ref={(el) => (inputRefs.current[index] = el)}
            bg={'#FFF'}
            border={0}
            textAlign={'center'}
            type="text"
            fontSize={utils.getFontSize(80)}
            onChange={(e) => handleInputChange(index, e.target.value)}
            maxLength={1}
          />
        </Center>
      );
    }
  });

  return (
    <Grid
      w={'80%'}
      maxW={'400px'}
      // w={'320px'}
      aspectRatio={320 / 355}
      // h={'355px'}
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(6, 1fr)"
      gap={0}
    >
      {inputs.map((input, index) => {
        return (
          <GridItem
            key={index}
            w={'100%'}
            // w={'64px'}
            // h={'60px'}
            aspectRatio={64 / 60}
            borderRadius={0}
            border={'1px solid #DDDDDD'}
          >
            {handleForm(input, index)}
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default DynamicInput;
