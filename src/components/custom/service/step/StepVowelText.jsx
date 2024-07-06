'use client';

import { Box, Center, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CHOSEONG, JONGSEONG, JUNGSEONG } from 'src/constants/common';
import { useChapter } from 'src/hooks/useChapter';
import utils from 'src/utils';

const StepVowelText = (props) => {
  const { branchInfo } = useChapter();
  const { setSelectText, targetText, isNext } = props;
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [combine, setCombine] = useState('');
  const [init, setInit] = useState(true);
  const [cho, setCho] = useState('');
  const [jung, setJung] = useState('');

  useEffect(() => {
    if (isNext) {
      setCombine('');
      setText1('');
      setText2('');
      setText3('');
      setCho('');
      setJung('');
    }
  }, [isNext]);

  useEffect(() => {
    const initData = async () => {
      await wait(50);
      if (branchInfo?.branchId === 10) {
        const split = splitHangul(targetText.split('')[0]);
        setCho(split.choseong);
        setJung(split.jungseong);
        const combine = combineHangul(split.choseong, split.jungseong);
        setCombine(combine);
      }
      await wait(150);
      setInit(false);
    };
    if (targetText) {
      initData();
    }
  }, [targetText]);

  const wait = (ms) => new Promise((res) => setTimeout(res, ms));

  const getW = () => {
    if (utils.isMobile()) {
      return '88%';
    }
    return '80%';
  };

  const getFontSize = (index) => {
    if (targetText.length === 2) {
      if (index === 1) {
        return utils.getFontSize(180);
      }
      return utils.getFontSize(240);
    } else if (targetText.length === 3) {
      if (index === 1) {
        return utils.getFontSize(80);
      }
      return utils.getFontSize(120);
    }
  };

  const combineHangul = (choseong, jungseong, jongseong = '') => {
    const cho = CHOSEONG;
    const jung = JUNGSEONG;
    const jong = JONGSEONG;

    const choseongIndex = cho.indexOf(choseong);
    const jungseongIndex = jung.indexOf(jungseong);
    const jongseongIndex = jong.indexOf(jongseong);

    if (
      choseongIndex === -1 ||
      jungseongIndex === -1 ||
      jongseongIndex === -1
    ) {
      // throw new Error('Invalid input for Hangul combination');
      return '';
    }

    const unicode =
      0xac00 + choseongIndex * 21 * 28 + jungseongIndex * 28 + jongseongIndex;
    return String.fromCharCode(unicode);
  };

  const splitHangul = (char) => {
    const cho = CHOSEONG;
    const jung = JUNGSEONG;
    const jong = JONGSEONG;

    const charCode = char.charCodeAt(0);

    if (charCode < 0xac00 || charCode > 0xd7a3) {
      // throw new Error('Not a valid Hangul syllable');
      return '';
    }

    const syllableIndex = charCode - 0xac00;

    const choseongIndex = Math.floor(syllableIndex / (21 * 28));
    const jungseongIndex = Math.floor((syllableIndex % (21 * 28)) / 28);
    const jongseongIndex = syllableIndex % 28;

    const choseong = cho[choseongIndex];
    const jungseong = jung[jungseongIndex];
    const jongseong = jong[jongseongIndex];

    return { choseong, jungseong, jongseong };
  };

  useEffect(() => {
    if (targetText) {
      const targetTextArr = targetText.split('');
      let answer = '';
      if (text1 || text2 || text3) {
        if (targetTextArr.length === 1) {
          answer = `${text1}`;
        } else if (targetTextArr.length === 2) {
          if (combine) {
            const combine = combineHangul(cho, jung, text1);
            answer = `${combine}${text2}`;
          } else {
            answer = `${targetTextArr[0]}${text2}`;
          }
          // console.log('2', answer);
        } else if (targetTextArr.length === 3) {
          if (combine) {
            const combine = combineHangul(cho, jung, text1);
            answer = `${combine}${text2}${text3}`;
          } else {
            answer = `${targetTextArr[0]}${text2}${text3}`;
          }
          // console.log('3', answer);
        }
        setSelectText(answer);
      }
    }
  }, [text1, text2, text3]);

  const handleFirst = () => {
    if (targetText) {
      if (targetText.length === 1) {
        return (
          <Center w={'50%'}>
            <Input
              max={1}
              maxLength={1}
              h={'100%'}
              bg={'transparent'}
              border={'2px dashed'}
              borderRadius={'30px'}
              value={text1 || ''}
              textAlign={'center'}
              fontWeight={700}
              fontSize={getFontSize(1)}
              color={'#000'}
              onChange={(e) => {
                setText1(e.target.value);
              }}
            />
          </Center>
        );
      } else if (targetText.length > 1) {
        if (combine) {
          return (
            <Center w={'50%'} h={'80%'}>
              <Box h={'100%'}>
                <VStack h={'100%'} spacing={0}>
                  <Box h={'50%'}>
                    <VStack h={'100%'} justifyContent={'flex-end'}>
                      <Text
                        fontWeight={700}
                        fontSize={getFontSize(1)}
                        color={'#000'}
                      >
                        {combine}
                      </Text>
                    </VStack>
                  </Box>
                  <Box h={targetText.length > 2 ? '40%' : '50%'}>
                    <Input
                      max={1}
                      maxLength={1}
                      h={'100%'}
                      bg={'transparent'}
                      border={'2px dashed'}
                      borderRadius={'30px'}
                      value={text1 || ''}
                      textAlign={'center'}
                      fontWeight={700}
                      fontSize={getFontSize(1)}
                      color={'#000'}
                      onChange={(e) => {
                        setText1(e.target.value);
                      }}
                    />
                  </Box>
                </VStack>
              </Box>
            </Center>
          );
        } else {
          return (
            <Center w={'50%'}>
              <Box h={'100%'}>
                <Text fontWeight={700} fontSize={getFontSize()} color={'#000'}>
                  {targetText.split('')[0]}
                </Text>
              </Box>
            </Center>
          );
        }
      }
    }
  };

  const handleSecond = () => {
    if (targetText && targetText.length > 1) {
      return (
        <Center w={'50%'} h={'80%'}>
          <Input
            max={1}
            maxLength={1}
            h={'100%'}
            bg={'transparent'}
            border={'2px dashed'}
            borderRadius={'30px'}
            value={text2 || ''}
            textAlign={'center'}
            fontWeight={700}
            fontSize={getFontSize()}
            color={'#000'}
            onChange={(e) => {
              setText2(e.target.value);
            }}
          />
        </Center>
      );
    }
  };

  const handleThird = () => {
    if (targetText && targetText.length > 2) {
      return (
        <Center w={'50%'} h={'80%'}>
          <Input
            max={1}
            maxLength={1}
            h={'100%'}
            bg={'transparent'}
            border={'2px dashed'}
            borderRadius={'30px'}
            value={text3 || ''}
            textAlign={'center'}
            fontWeight={700}
            fontSize={getFontSize()}
            color={'#000'}
            onChange={(e) => {
              setText3(e.target.value);
            }}
          />
        </Center>
      );
    }
  };

  return (
    <Center pt={3}>
      <Center w={getW()} maxW={'400px'} aspectRatio={700 / 600}>
        <HStack h={'90%'} justifyContent={'center'}>
          {targetText && !init && handleFirst()}
          {targetText && !init && handleSecond()}
          {targetText && !init && handleThird()}
        </HStack>
      </Center>
    </Center>
  );
};

export default StepVowelText;
