'use client';

import { Center, Wrap } from '@chakra-ui/react';
import { TYPE_VOWEL } from '@/constants/common';
import { StepMainBottom, StepMain, StepMainCard, Navbar } from '@/components';
import { useRouter } from 'next/navigation';
import { VOWEL } from 'src/constants/pageURL';

const VowelPage = () => {
  const router = useRouter();
  const type = TYPE_VOWEL;
  return (
    <StepMain type={type}>
      <Navbar
        type={type}
        isMain
        onClickListen={() => {
          router.push(VOWEL.listen);
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

      <StepMainBottom
        q={7}
        onClick={() => {
          router.push(VOWEL.test);
        }}
      />
    </StepMain>
  );
};

export default VowelPage;
