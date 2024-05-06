'use client';

import { GText } from '@/components';
import { useEffect, useState } from 'react';
import {
  TYPE_CONSONANT,
  TYPE_RING_SOUND,
  TYPE_VOWEL,
  TYPE_SUBJECT,
} from '@/constants/common';
import { useRouter } from 'next/navigation';
import { RING_SOUND, CONSONANT, SUBJECT, VOWEL } from '@/constants/pageURL';

const { Box, Text, Center } = require('@chakra-ui/react');

const MainInfoButton = (props) => {
  const { type } = props;
  const isActive = true;

  const [text, setText] = useState(null);
  const [top, setTop] = useState(null);
  const [left, setLeft] = useState(null);
  const [bottom, setBottom] = useState(null);
  const [right, setRight] = useState(null);
  const [transform, setTransform] = useState(null);
  const [bg, setBg] = useState('#999999');
  const [countBg, setCountBg] = useState('#555');
  const [borderColor, setBorderColor] = useState('#777');
  const [bgGradient, setBgGradient] = useState(
    'linear(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
  );
  const textShadow = '0px 2px 4px rgba(0, 0, 0, 0.14)';

  const router = useRouter();
  useEffect(() => {
    switch (type) {
      case TYPE_RING_SOUND:
        setText(
          <GText textShadow={textShadow} fontWeight={700} color="#FFFFFF">
            링사운드
            <br />
            듣기
          </GText>,
        );
        setBottom('45px');
        setLeft('50%');
        setTransform('translate(-50%,0%)');
        if (isActive) {
          setBg('#4DC6E0');
          setBorderColor('#389CB1');
          setCountBg('#218CA3');
        }
        break;
      case TYPE_CONSONANT:
        setText(
          <GText textShadow={textShadow} fontWeight={700} color="#FFFFFF">
            자음
            <br />
            듣기
          </GText>,
        );
        setRight('40px');
        setTop('57%');

        if (isActive) {
          setBg('#8DC642');
          setBorderColor('#75B125');
          setCountBg('#75B125');
        }
        break;
      case TYPE_VOWEL:
        setText(
          <GText
            textShadow={textShadow}
            fontWeight={700}
            color={isActive ? '#664E1A' : '#FFF'}
          >
            모음
            <br />
            듣기
          </GText>,
        );
        setLeft('41.49px');
        setTop('57%');
        if (isActive) {
          setBg('#FEC240');
          setBorderColor('#C59835');
          setCountBg('#DC9C12');
        }
        break;
      default:
        setText(
          <GText textShadow={textShadow} fontWeight={700} color="#FFFFFF">
            주제별
            <br />
            듣기
          </GText>,
        );
        setLeft('50%');
        setTop('86px');
        setTransform('translate(-50%,0%)');
        if (isActive) {
          setBg('#965D99');
          setBorderColor('#8030C5');
          setCountBg('#8D5191');
        }
        break;
    }
  }, [type]);

  const handleOnClick = () => {
    // router
    if (type === TYPE_RING_SOUND) {
      router.push(RING_SOUND.root);
    }
    if (type === TYPE_SUBJECT) {
      router.push(SUBJECT.root);
    }
    if (type === TYPE_CONSONANT) {
      router.push(CONSONANT.root);
    }
    if (type === TYPE_VOWEL) {
      router.push(VOWEL.root);
    }
  };

  return (
    <Box
      zIndex={2}
      position={'absolute'}
      as="button"
      w={'160px'}
      h={'160px'}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      transform={transform}
      border={`4px solid ${borderColor}`}
      borderRadius="50%"
      lineHeight="40px"
      bg={bg}
      bgGradient={bgGradient}
      boxShadow={'0px 6px 14px 0px #00000033'}
      onClick={handleOnClick}
    >
      <Center
        position={'absolute'}
        top={0}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        borderRadius={'40px'}
        // w="84px"
        minW="70px"
        maxW="100px"
        h="60px"
        bg={countBg}
        px={3}
      >
        <Text
          fontWeight={700}
          fontSize={'24px'}
          lineHeight={'38px'}
          color={'#FFF'}
        >
          10/10
        </Text>
      </Center>
      <Box pt={'10px'}>{text}</Box>
    </Box>
  );
};

export default MainInfoButton;
