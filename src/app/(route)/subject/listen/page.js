'use client';

import { useEffect, useState } from 'react';
import { Center } from '@chakra-ui/react';
import { TYPE_SUBJECT } from '@/constants/common';
import {
  CustomSliderTrack,
  GText,
  StepMain,
  StepDoubleListenButton,
  Navbar,
  StepContentForm,
} from '@/components';
import useModal from '@/hooks/useModal';

const SubjectListenPage = () => {
  const [isPause, setIsPause] = useState(false);
  const type = TYPE_SUBJECT;
  const { openModal } = useModal();

  useEffect(() => {
    setTimeout(() => {
      openModal({
        text: '연습할 단어들을<br />먼저 들어보세요.',
      });
    });
  }, []);

  return (
    <StepMain type={type} paddingBottom={'370px'}>
      <Navbar type={type} text={'들어보기'} />

      <StepContentForm>
        <Center h={'100%'} w={'100%'} borderRadius={'40px'} bg={'#FFF'}>
          <GText fontWeight={700} fontSize={{ md: '200px' }}>
            아
          </GText>
        </Center>
      </StepContentForm>

      <CustomSliderTrack
        type={type}
        onChange={(value) => {
          console.log('Track', value);
        }}
      />

      <StepDoubleListenButton
        isPause={isPause}
        type={type}
        isSingle
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

export default SubjectListenPage;
