'use client';

import { StepContentForm } from '@/components';
import { STEP_FORM_PERCENT, RADIUS_S_40 } from '@/constants/common';
import { Button, Center, HStack, VStack } from '@chakra-ui/react';
import { GText } from '@/components';

const TextCard = (props) => {
  const { targetArr = [], onClick, isStart = false, isPlaying = false } = props;

  const handleCard = () => {
    if (!targetArr) return;
    if (targetArr.length > 0) {
      if (targetArr.length === 2) {
        return (
          <VStack h={'100%'}>
            <HStack
              h={'40%'}
              w={'100%'}
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              spacing={'20px'}
            >
              {targetArr.map((item) => {
                return (
                  <Button
                    isDisabled={isPlaying}
                    key={item}
                    _hover={{}}
                    _active={{}}
                    w={'50%'}
                    h={'100%'}
                    borderRadius={RADIUS_S_40}
                    border={'2px solid #00000080'}
                    bg={'#FFF'}
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Center>
                      <GText fontWeight={700} fontSize={80}>
                        {isStart && item}
                      </GText>
                    </Center>
                  </Button>
                );
              })}
            </HStack>
          </VStack>
        );
      } else if (targetArr.length === 3) {
        return (
          <VStack h={'100%'}>
            {targetArr.map((item) => {
              return (
                <Button
                  isDisabled={isPlaying}
                  key={item}
                  _hover={{}}
                  _active={{}}
                  w={'100%'}
                  h={'33%'}
                  borderRadius={RADIUS_S_40}
                  border={'2px solid #00000080'}
                  bg={'#FFF'}
                  onClick={() => {
                    handleOnClick(item);
                  }}
                >
                  <Center>
                    <GText
                      fontWeight={700}
                      fontSize={
                        // item.length > 10 ? 50 : item.length > 20 ? 30 : 80
                        item.length > 20 ? 35 : item.length > 10 ? 50 : 80
                      }
                    >
                      {isStart && item}
                    </GText>
                  </Center>
                </Button>
              );
            })}
          </VStack>
        );
      } else if (targetArr.length === 4) {
        const row1 = targetArr.slice(0, 2);
        const row2 = targetArr.slice(2, 4);
        return (
          <VStack h={'100%'}>
            <HStack
              h={'50%'}
              w={'100%'}
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              spacing={'20px'}
            >
              {row1.map((item) => {
                return (
                  <Button
                    isDisabled={isPlaying}
                    key={item}
                    _hover={{}}
                    _active={{}}
                    w={'50%'}
                    h={'100%'}
                    borderRadius={RADIUS_S_40}
                    border={'2px solid #00000080'}
                    bg={'#FFF'}
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Center>
                      <GText fontWeight={700} fontSize={80}>
                        {isStart && item}
                      </GText>
                    </Center>
                  </Button>
                );
              })}
            </HStack>
            <HStack
              h={'50%'}
              w={'100%'}
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              spacing={'20px'}
            >
              {row2.map((item) => {
                return (
                  <Button
                    isDisabled={isPlaying}
                    key={item}
                    _hover={{}}
                    _active={{}}
                    w={'50%'}
                    h={'100%'}
                    borderRadius={RADIUS_S_40}
                    border={'2px solid #00000080'}
                    bg={'#FFF'}
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Center>
                      <GText fontWeight={700} fontSize={80}>
                        {isStart && item}
                      </GText>
                    </Center>
                  </Button>
                );
              })}
            </HStack>
          </VStack>
        );
      } else if (targetArr.length === 6) {
        const row1 = targetArr.slice(0, 2);
        const row2 = targetArr.slice(2, 4);
        const row3 = targetArr.slice(4, 6);
        return (
          <VStack h={'100%'}>
            <HStack
              h={'50%'}
              w={'100%'}
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              spacing={'20px'}
            >
              {row1.map((item) => {
                return (
                  <Button
                    isDisabled={isPlaying}
                    key={item}
                    _hover={{}}
                    _active={{}}
                    w={'50%'}
                    h={'100%'}
                    borderRadius={RADIUS_S_40}
                    border={'2px solid #00000080'}
                    bg={'#FFF'}
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Center>
                      <GText fontWeight={700} fontSize={80}>
                        {isStart && item}
                      </GText>
                    </Center>
                  </Button>
                );
              })}
            </HStack>
            <HStack
              h={'50%'}
              w={'100%'}
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              spacing={'20px'}
            >
              {row2.map((item) => {
                return (
                  <Button
                    isDisabled={isPlaying}
                    key={item}
                    _hover={{}}
                    _active={{}}
                    w={'50%'}
                    h={'100%'}
                    borderRadius={RADIUS_S_40}
                    border={'2px solid #00000080'}
                    bg={'#FFF'}
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Center>
                      <GText fontWeight={700} fontSize={80}>
                        {isStart && item}
                      </GText>
                    </Center>
                  </Button>
                );
              })}
            </HStack>
            <HStack
              h={'50%'}
              w={'100%'}
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              spacing={'20px'}
            >
              {row3.map((item) => {
                return (
                  <Button
                    isDisabled={isPlaying}
                    key={item}
                    _hover={{}}
                    _active={{}}
                    w={'50%'}
                    h={'100%'}
                    borderRadius={RADIUS_S_40}
                    border={'2px solid #00000080'}
                    bg={'#FFF'}
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Center>
                      <GText fontWeight={700} fontSize={80}>
                        {isStart && item}
                      </GText>
                    </Center>
                  </Button>
                );
              })}
            </HStack>
          </VStack>
        );
      } else if (targetArr.length === 8) {
        const row1 = targetArr.slice(0, 2);
        const row2 = targetArr.slice(2, 4);
        const row3 = targetArr.slice(4, 6);
        const row4 = targetArr.slice(6, 8);
        return (
          <VStack h={'100%'}>
            <HStack
              h={'50%'}
              w={'100%'}
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              spacing={'20px'}
            >
              {row1.map((item) => {
                return (
                  <Button
                    isDisabled={isPlaying}
                    key={item}
                    _hover={{}}
                    _active={{}}
                    w={'50%'}
                    h={'100%'}
                    borderRadius={RADIUS_S_40}
                    border={'2px solid #00000080'}
                    bg={'#FFF'}
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Center>
                      <GText fontWeight={700} fontSize={80}>
                        {isStart && item}
                      </GText>
                    </Center>
                  </Button>
                );
              })}
            </HStack>
            <HStack
              h={'50%'}
              w={'100%'}
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              spacing={'20px'}
            >
              {row2.map((item) => {
                return (
                  <Button
                    isDisabled={isPlaying}
                    key={item}
                    _hover={{}}
                    _active={{}}
                    w={'50%'}
                    h={'100%'}
                    borderRadius={RADIUS_S_40}
                    border={'2px solid #00000080'}
                    bg={'#FFF'}
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Center>
                      <GText fontWeight={700} fontSize={80}>
                        {isStart && item}
                      </GText>
                    </Center>
                  </Button>
                );
              })}
            </HStack>
            <HStack
              h={'50%'}
              w={'100%'}
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              spacing={'20px'}
            >
              {row4.map((item) => {
                return (
                  <Button
                    isDisabled={isPlaying}
                    key={item}
                    _hover={{}}
                    _active={{}}
                    w={'50%'}
                    h={'100%'}
                    borderRadius={RADIUS_S_40}
                    border={'2px solid #00000080'}
                    bg={'#FFF'}
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Center>
                      <GText fontWeight={700} fontSize={80}>
                        {isStart && item}
                      </GText>
                    </Center>
                  </Button>
                );
              })}
            </HStack>
            <HStack
              h={'50%'}
              w={'100%'}
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              spacing={'20px'}
            >
              {row3.map((item) => {
                return (
                  <Button
                    isDisabled={isPlaying}
                    key={item}
                    _hover={{}}
                    _active={{}}
                    w={'50%'}
                    h={'100%'}
                    borderRadius={RADIUS_S_40}
                    border={'2px solid #00000080'}
                    bg={'#FFF'}
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Center>
                      <GText fontWeight={700} fontSize={80}>
                        {isStart && item}
                      </GText>
                    </Center>
                  </Button>
                );
              })}
            </HStack>
          </VStack>
        );
      }
    }
  };

  const handleOnClick = (item) => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <StepContentForm h={STEP_FORM_PERCENT}>{handleCard()}</StepContentForm>
  );
};

export default TextCard;
