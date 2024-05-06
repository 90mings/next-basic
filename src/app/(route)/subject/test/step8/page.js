'use client';

import { useEffect, useState } from 'react';
import { Box, Center, VStack } from '@chakra-ui/react';
import { TYPE_SUBJECT } from '@/constants/common';
import {
  GText,
  StepMain,
  StepDoubleListenButton,
  Navbar,
  StepProgress,
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
      <Navbar type={type} text={'8단계'} />

      <StepProgress datas={datas} />

      <Center w={'100%'} px={'50px'} pt={'50px'}>
        <GText fontWeight={700} color={'#000000'}>
          질문을 듣고 적절한 답을 고르세요.
        </GText>
      </Center>

      <Box w="100%" px={'50px'} pt={'50px'}>
        <VStack spacing={'20px'}>
          <Center
            w="100%"
            h="220px"
            borderRadius={'40px'}
            border={'2px solid #00000080'}
            bg={'#FFF'}
          >
            <GText fontWeight={700} fontSize={{ md: '80px' }}>
              환불하려고
            </GText>
          </Center>
          <Center
            w="100%"
            h="220px"
            borderRadius={'40px'}
            border={'2px solid #00000080'}
            bg={'#FFF'}
          >
            <GText fontWeight={700} fontSize={{ md: '80px' }}>
              후기 남기면
            </GText>
          </Center>
          <Center
            w="100%"
            h="220px"
            borderRadius={'40px'}
            border={'2px solid #00000080'}
            bg={'#FFF'}
          >
            <GText fontWeight={700} fontSize={{ md: '80px' }}>
              만원씩
            </GText>
          </Center>
        </VStack>
      </Box>

      <StepDoubleListenButton
        isPause={isPause}
        type={type}
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
