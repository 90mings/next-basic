'use client';

import { Center, Wrap } from '@chakra-ui/react';
import { TYPE_SUBJECT } from '@/constants/common';
import { StepMain, StepMainCard, Navbar } from '@/components';
import { useRouter } from 'next/navigation';
import { SUBJECT } from '@/constants/pageURL';

const SubjectPage = () => {
  const router = useRouter();
  const type = TYPE_SUBJECT;
  return (
    <StepMain type={type} paddingBottom={'50px'}>
      <Navbar
        type={type}
        isMain
        onClickListen={() => {
          router.push(SUBJECT.listen);
        }}
      />

      <Center w="100%" pt={'30px'} px={'50px'}>
        <Wrap spacingX={'19px'} spacingY={'19px'} w={'100%'} justify={'start'}>
          {StepMainCard(type, 1, 5, true)}
          {StepMainCard(type, 2, 5)}
          {StepMainCard(type, 3, 10)}
          {StepMainCard(type, 4, 5)}
          {StepMainCard(type, 5, 5)}
          {StepMainCard(type, 5, 5)}
          {StepMainCard(type, 5, 5)}
          {StepMainCard(type, 5, 5)}
          {StepMainCard(type, 5, 5)}
          {StepMainCard(type, 5, 5)}
        </Wrap>
      </Center>
    </StepMain>
  );
};

export default SubjectPage;
