'use client';

import { useEffect, useState } from 'react';
import { Box, Center, HStack, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { TYPE_SUBJECT } from '@/constants/common';
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
    <StepMain type={type} paddingBottom={'50px'}>
      <Navbar type={type} text={'5단계'} />

      <StepProgress datas={datas} />

      <Center w={'100%'} px={'50px'} pt={'50px'}>
        <GText fontWeight={700} color={'#000000'}>
          이야기를 듣고 적절한 답을 채우세요.
        </GText>
      </Center>

      <Box w="100%" px={'50px'} pt={'50px'}>
        <Center w={'100%'} h={'120px'} borderRadius={'20px'} bg={'#FFF'}>
          <GText fontWeight={700} color={'#000000'}>
            누구와 함께 여행을 가나요?
          </GText>
        </Center>
      </Box>

      <Box w={'100%'} px={'50px'} pt={'30px'}>
        <Center h={'500px'}>
          <TestInput
            value={value}
            fontSize={{ md: '80px' }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </Center>
      </Box>

      <StepDoubleListenButton
        isPause={isPause}
        type={type}
        isTest
        isVeri
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
