'use client';

import { useEffect, useState } from 'react';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import { TYPE_CONSONANT } from '@/constants/common';
import {
  CustomSliderTrack,
  GText,
  StepMain,
  StepDoubleListenButton,
  Navbar,
  StepProgress,
  StepContentForm,
  TestInput,
} from '@/components';
import useModal from '@/hooks/useModal';

const StepTestPage = () => {
  const [isPause, setIsPause] = useState(false);
  const type = TYPE_CONSONANT;
  const { openModal } = useModal();

  const datas = [
    { step1: true },
    { step2: false },
    { step3: false },
    { step4: true },
    { step5: false },
    { step6: false },
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

  const [value, setValue] = useState('빠');
  return (
    <StepMain type={type} paddingBottom={'50px'}>
      <Navbar type={type} text={'테스트'} />

      <StepProgress datas={datas} />

      <Center w={'100%'} px={'50px'} pt={'50px'}>
        <GText fontWeight={700} color={'#000000'}>
          소리를 듣고 빈칸을 채우세요.
        </GText>
      </Center>

      <Box w="100%" px={'50px'} pt={'50px'}>
        <HStack>
          <Box w={'340px'} h={'340px'}>
            <Center>
              <GText
                fontWeight={700}
                fontSize={{ md: '240px' }}
                fontColor={'#000'}
              >
                아
              </GText>
            </Center>
          </Box>
          <Box w={'340px'} h={'340px'}>
            <TestInput
              value={value}
              fontSize={{ md: '240px' }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Box>
        </HStack>
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

export default StepTestPage;
