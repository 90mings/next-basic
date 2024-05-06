'use client';

import { Box, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import {
  SimpleNavbar,
  MainBottom,
  DefaultButton,
  JoinInput,
} from '@/components';
import { MAIN } from '@/constants/pageURL';

// Join
const Join = () => {
  const router = useRouter();

  const handleJoin = () => {
    router.push(MAIN.main);
  };

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#ECFBFF">
        <SimpleNavbar text="회원가입" />
        <Box
          zIndex={2}
          w="100%"
          position={'absolute'}
          top={{ lg: 170, md: 170, sm: 180 }}
          px="50px"
        >
          <VStack spacing={'34px'}>
            <JoinInput />
            <Box w="100%" maxW="600px" h="120px">
              <DefaultButton
                onClick={handleJoin}
                bg={'#46A927'}
                borderColor={'#496E0B'}
                borderRadius={'10px'}
                fontWeight={700}
                fontColor={'#FFF'}
                text="회원가입"
              />
            </Box>
          </VStack>
        </Box>

        <MainBottom isTree />
      </Box>
    </main>
  );
};

export default Join;
