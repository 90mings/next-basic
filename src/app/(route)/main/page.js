'use client';

import { Box, Center, Image } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { MainBottom, TreeLeaf, MainNavbar, MainInfoButton } from '@/components';
import { MAIN } from '@/constants/pageURL';
import {
  TYPE_CONSONANT,
  TYPE_RING_SOUND,
  TYPE_SUBJECT,
  TYPE_VOWEL,
} from '@/constants/common';
import TreeStemImage from '@/svgs/tree-stem.svg';
import GroundLeaf from '@/svgs/ground-leaf.svg';

// Main
const Main = ({ data }) => {
  const router = useRouter();

  const handleJoin = () => {
    router.push(MAIN.main);
  };

  const leaf = {
    subject1: {
      step1: true,
      step2: true,
      step3: true,
      step4: true,
      step5: true,
      step6: true,
      step7: true,
      step8: true,
      step9: true,
      step10: true,
    },
    subject2: {
      step1: true,
      step2: true,
      step3: true,
      step4: true,
      step5: true,
      step6: true,
      step7: true,
      step8: true,
      step9: true,
    },
    subject3: {
      step1: true,
      step2: true,
      step3: true,
      step4: true,
      step5: true,
      step6: true,
      step7: true,
      step8: true,
    },
  };

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#ECFBFF">
        <MainInfoButton type={TYPE_RING_SOUND} />
        <MainInfoButton type={TYPE_SUBJECT} />
        <MainInfoButton type={TYPE_CONSONANT} />
        <MainInfoButton type={TYPE_VOWEL} />

        <MainNavbar />
        <Center w="100%">
          <TreeLeaf pt="247px" leatData={leaf} />
          <Image
            zIndex={3}
            position={'absolute'}
            left={'50%'}
            transform={'translate(-50%, 0%)'}
            bottom={'380px'}
            src={TreeStemImage.src}
          />
        </Center>
        <Image
          zIndex={2}
          position={'absolute'}
          bottom={{ md: '347px', sm: '300px' }}
          src={GroundLeaf.src}
        />
        <MainBottom isMain />
      </Box>
    </main>
  );
};

export default Main;
