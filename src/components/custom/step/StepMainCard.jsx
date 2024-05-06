'use client';

import { HStack, Image, VStack, WrapItem } from '@chakra-ui/react';
import { CustomIcon, GText } from '@/components';
import {
  TYPE_CONSONANT,
  TYPE_RING_SOUND,
  TYPE_SUBJECT,
  TYPE_VOWEL,
} from '@/constants/common';

import Stamp from '@/svgs/stamp.svg';

const StepMainCard = (props) => {
  const { type, step = 1, question = 1, isComplete = false } = props;
  const { onClick } = props;

  const setFlagColor = (type) => {
    if (!isComplete) return '#CCC';
    if (type === TYPE_RING_SOUND) {
      return '#5BCBE3';
    } else if (type === TYPE_SUBJECT) {
      return '#AC70AF';
    } else if (type === TYPE_CONSONANT) {
      return '#466E05';
    } else if (type === TYPE_VOWEL) {
      return '#FEC750';
    }
  };

  const handleOnClick = () => {
    if (onClick && isComplete) {
      onClick();
    }
  };

  return (
    <WrapItem
      borderRadius={'20px'}
      w={'340px'}
      maxW="50%"
      h={'180px'}
      bg="#FFF"
      pl={'20px'}
      pr="10px"
      onClick={handleOnClick}
    >
      <VStack justifyContent={'space-around'} w="100%" h={'100%'}>
        <HStack w="100%" h={'85px'} justifyContent={'space-between'}>
          <HStack spacing={'14px'}>
            <CustomIcon
              w="60px"
              h="100%"
              color={setFlagColor(type)}
              name="flag"
            />
            <GText fontWeight={700} color={!isComplete && '#999'}>
              {step}단계
            </GText>
          </HStack>
          {isComplete && <Image h={'85px'} src={Stamp.src} />}
        </HStack>
        <HStack w="100%" justifyContent={'space-between'}>
          <GText
            fontWeight={500}
            fontSize={{ lg: '32px', md: '30px', sm: '28px' }}
            color={isComplete ? '#666666' : '#CCCCCC'}
          >
            {question}문제
          </GText>
          <CustomIcon
            w="64px"
            h="100%"
            color={!isComplete ? '#CCC' : '#71523A'}
            name="next"
          />
        </HStack>
      </VStack>
    </WrapItem>
  );
};

export default StepMainCard;
