'use client';

import { Center, Wrap } from '@chakra-ui/react';
import { TYPE_RING_SOUND } from '@/constants/common';
import { StepMainBottom, StepMain, StepMainCard, Navbar } from '@/components';
import { useRouter } from 'next/navigation';
import { RING_SOUND } from 'src/constants/pageURL';

const RingsoundPage = () => {
  const router = useRouter();
  const type = TYPE_RING_SOUND;
  return (
    <StepMain type={type}>
      <Navbar
        type={type}
        isMain
        onClickListen={() => {
          console.log('onClickListen');
          router.push(RING_SOUND.listen);
        }}
      />

      <Center w="100%" pt={'30px'} px={'50px'}>
        <Wrap spacingX={'19px'} spacingY={'19px'} w={'100%'} justify={'start'}>
          {StepMainCard(TYPE_RING_SOUND, 1, 5, true)}
          {StepMainCard(TYPE_RING_SOUND, 2, 5)}
          {StepMainCard(TYPE_RING_SOUND, 3, 10)}
          {StepMainCard(TYPE_RING_SOUND, 4, 5)}
          {StepMainCard(TYPE_RING_SOUND, 5, 5)}
        </Wrap>
      </Center>

      <StepMainBottom
        q={7}
        onClick={() => {
          router.push(RING_SOUND.test);
        }}
      />
    </StepMain>
  );
};

export default RingsoundPage;
