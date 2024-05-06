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
  ReplayListenButton,
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
    /*
    setTimeout(() => {
      openModal({
        text: '연습할 단어들을<br />먼저 들어보세요.',
      });
    });
    */
  }, []);

  const [value, setValue] = useState('');
  return (
    <StepMain type={type} paddingBottom={'400px'}>
      <Navbar type={type} text={'9단계'} />

      <StepProgress datas={datas} />

      <Center w={'100%'} px={'50px'} pt={'50px'}>
        <GText fontWeight={700} color={'#000000'}>
          소리를 듣고 빈칸을 채우세요.
        </GText>
      </Center>

      <Box w="100%" px={'50px'} pt={'50px'}>
        <Wrap w="100%" spacingX={'20px'} spacingY={'24px'}>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Box w={'100%'} aspectRatio={1}>
              <TestInput
                value={value}
                fontSize={{ md: '80px' }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
          </WrapItem>
          <WrapItem w="24%" maxW="160px">
            <Center alignItems={'end'} h={'100%'}>
              <GText fontWeight={700} fontSize={{ md: '80px' }} color={'#000'}>
                .
              </GText>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>

      <ReplayListenButton
        type={type}
        replayStep={3}
        onClick1={() => {
          console.log('StepDoubleListenButton onClick1');
        }}
        onClick2={() => {
          console.log('StepDoubleListenButton onClick2');
        }}
        onClick3={() => {
          console.log('StepDoubleListenButton onClick3');
        }}
      />

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
