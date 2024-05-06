'use client';

import { useEffect, useState } from 'react';
import { Box, Center, Wrap, WrapItem } from '@chakra-ui/react';
import { TYPE_SUBJECT } from '@/constants/common';
import {
  GText,
  StepMain,
  StepDoubleListenButton,
  Navbar,
  StepProgress,
  TestInput,
} from '@/components';
import useModal from '@/hooks/useModal';

const SubjectStepTestPage = () => {
  const [isPause, setIsPause] = useState(false);
  const type = TYPE_SUBJECT;
  const { openModal } = useModal();

  const datas = [
    { step1: true },
    { step2: false },
    { step3: false },
    { step4: true },
    { step5: false },
    { step6: false },
    { step7: false },
    { step8: false },
    { step9: false },
    { step10: false },
  ];
  useEffect(() => {
    setTimeout(() => {
      openModal({
        type: 'custom',
        status: 5,
        step: 2,
        onCancel: () => {},
      });
    });
  }, []);

  const [value, setValue] = useState('');
  return (
    <StepMain type={type} paddingBottom={'50px'}>
      <Navbar type={type} text={'5단계'} />

      <StepProgress datas={datas} />

      <Center w={'100%'} px={'50px'} pt={'50px'}>
        <GText fontWeight={700} color={'#000000'}>
          소리를 듣고 빈칸을 채우세요.
        </GText>
      </Center>

      {/*
      <Box w="100%" px={'50px'} pt={'50px'}>
        <HStack>
          <Box w={'160px'} h={'160px'}>
            <TestInput
              value={value}
              fontSize={{ md: '80px' }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Box>
          <Box w={'160px'} h={'160px'}>
            <TestInput
              value={value}
              fontSize={{ md: '80px' }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Box>
          <Box w={'160px'} h={'160px'}>
            <TestInput
              value={value}
              fontSize={{ md: '80px' }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Box>
          <Box w={'160px'} h={'160px'}>
            <TestInput
              value={value}
              fontSize={{ md: '80px' }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Box>
        </HStack>
      </Box>
            */}
      {/* 
      <Box w="100%" px={'50px'} pt={'50px'}>
        <HStack>
          <Box w={'160px'} h={'160px'}>
            <TestInput
              value={value}
              fontSize={{ md: '80px' }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Box>
          <Box w={'160px'} h={'160px'}>
            <TestInput
              value={value}
              fontSize={{ md: '80px' }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Box>
          <Box w={'160px'} h={'160px'}>
            <TestInput
              value={value}
              fontSize={{ md: '80px' }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Box>
          <Box w={'160px'} h={'160px'}>
            <TestInput
              value={value}
              fontSize={{ md: '80px' }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Box>
        </HStack>
      </Box>
       */}

      <Box w="100%" px={'50px'} pt={'50px'}>
        <Wrap>
          <WrapItem minW="160px" h={'160px'}>
            <Center w="100%" h="100%">
              <GText fontSize={{ md: '80px' }}>나는</GText>
            </Center>
          </WrapItem>
          <WrapItem>
            <Box h={'160px'} maxW={'160px'}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box w={'160px'} maxW={'160px'} h={'160px'}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem minW="100px" h={'160px'}>
            <Center w="100%" h="100%">
              <GText fontSize={{ md: '80px' }}>가</GText>
            </Center>
          </WrapItem>
          <WrapItem minW="160px" h={'160px'}>
            <Center w="100%" h="100%">
              <GText fontSize={{ md: '80px' }}>세명이다.</GText>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>

      <StepDoubleListenButton
        isPause={isPause}
        type={type}
        isTest
        // isSingle
        // isDisabled
        // isPause
        onClick={() => {
          setIsPause(!isPause);
          console.log('StepDoubleListenButton onClick');
        }}
        onClickRestart={() => {
          console.log('StepDoubleListenButton onClickRestart');
        }}
      />
    </StepMain>
  );
};

export default SubjectStepTestPage;
