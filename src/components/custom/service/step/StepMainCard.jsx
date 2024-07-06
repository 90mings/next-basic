'use client';

import { HStack, Image, VStack, Box, GridItem } from '@chakra-ui/react';
import { CustomIcon, GText } from '@/components';
import Stamp from '@/svgs/stamp.svg';
import {
  TYPE_CONSONANT,
  TYPE_RING_SOUND,
  TYPE_SUBJECT,
  TYPE_VOWEL,
  BOX_H_180,
  BOX_S_64,
  RADIUS_S_20,
} from '@/constants/common';
import { PASS_SUCCESS_FLAG } from 'src/constants/common';

const StepMainCard = (props) => {
  const { type, step, passFlag, isActive, question } = props;
  const { onClick } = props;

  const setFlagColor = (type) => {
    if (!isActive) return '#CCC';
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
    if (onClick && isActive) {
      onClick();
    }
  };

  const key = `${step}-${question}`;
  return (
    <GridItem
      key={key}
      borderRadius={RADIUS_S_20}
      w={'100%'}
      h={BOX_H_180}
      bg="#FFF"
      pl={{ lg: '20px', md: '15px', sm: '10px', xs: '8px' }}
      pr={{ lg: '10px', md: '8px', sm: '6px', xs: '4px' }}
      onClick={handleOnClick}
    >
      <VStack
        w={'100%'}
        h={'100%'}
        spacing={{ xl: 3, lg: 0, md: 2, sm: 1, xs: 1 }}
        //
        justifyContent={'center'}
      >
        <HStack w={'100%'} h={'50%'} justifyContent={'space-between'}>
          <HStack spacing={{ lg: '14px', md: '8px', sm: '5px', xs: '3px' }}>
            <CustomIcon
              w={{ xl: '60px', lg: '45px', md: '37px', sm: '31px', xs: '25px' }}
              h="100%"
              color={setFlagColor(type)}
              name="flag"
            />
            <Box>
              <GText fontWeight={700} color={!isActive && '#999'} fontSize={37}>
                {step}단계
              </GText>
            </Box>
          </HStack>
          {passFlag === PASS_SUCCESS_FLAG && (
            <Image
              h={{
                xl: '85.71px',
                lg: '85px',
                md: '67px',
                sm: '50px',
                xs: '40px',
              }}
              src={Stamp.src}
            />
          )}
        </HStack>
        <HStack w="100%" h={'40%'} justifyContent={'space-between'}>
          <GText
            fontWeight={500}
            fontSize={32}
            color={isActive ? '#666666' : '#CCCCCC'}
          >
            {question}문제
          </GText>
          <CustomIcon
            w={BOX_S_64}
            h="100%"
            color={!isActive ? '#CCC' : '#71523A'}
            name="next"
          />
        </HStack>
      </VStack>
    </GridItem>
  );
};

export default StepMainCard;
