'use client';

import { Center, Wrap } from '@chakra-ui/react';
import { StepMainBottom, StepMain, StepMainCard, Navbar } from '@/components';
import { useRouter } from 'next/navigation';
import { TYPE_CONSONANT } from '@/constants/common';
import { CONSONANT } from '@/constants/pageURL';

const ConsonantPage = () => {
  const router = useRouter();
  const type = TYPE_CONSONANT;
  return (
    <StepMain type={type}>
      <Navbar
        type={type}
        count={1}
        maxCount={5}
        isMain
        onClickListen={() => {
          router.push(CONSONANT.listen);
        }}
      />

      <Center w="100%" pt={'30px'} px={'50px'}>
        <Wrap spacingX={'19px'} spacingY={'19px'} w={'100%'} justify={'start'}>
          {StepMainCard({
            type: type,
            step: 1,
            question: 2,
            isComplete: true,
            onClick: () => {
              console.log('z');
            },
          })}
        </Wrap>
      </Center>

      <StepMainBottom
        q={7}
        onClick={() => {
          router.push(CONSONANT.test);
        }}
      />
    </StepMain>
  );
};

export default ConsonantPage;
