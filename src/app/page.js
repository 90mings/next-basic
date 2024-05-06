'use client';

import { Box, Center, Image } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import MainTitle from '@/svgs/main-title.svg';
import { GText, SlideToUnlockButton, MainBottom } from '@/components';
import { MAIN } from 'src/constants/pageURL';
import { useEffect } from 'react';

// Splash
const Splash = () => {
  const router = useRouter();

  const handleSuccess = () => {
    router.push(MAIN.info);
  };

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#ECFBFF">
        <Center
          position={'absolute'}
          top={{ lg: 170, md: 170, sm: 200 }}
          zIndex={10}
          w={'100%'}
        >
          <Image
            position={'absolute'}
            top={0}
            w={{ md: '70%', sm: '70%' }}
            maxW={700}
            src={MainTitle.src}
          />
        </Center>

        <MainBottom isNav={false} isStart>
          <Box w="100%" maxH={'500px'} position={'fixed'} bottom={0}>
            <Center w="100%" px={3} pb={'80px'}>
              <SlideToUnlockButton
                onSuccess={handleSuccess}
                width={{ lg: 700, md: 620, sm: 500 }}
              />
            </Center>

            <Center w="100%" pb={'116px'}>
              <GText
                fontWeight={400}
                fontSize={{ lg: 32, md: '30px', sm: '28px' }}
                lineHeight={'36px'}
                color={'#00000080'}
              >
                Ⓒ 2024. eeum2024. All Rights Reserved.
              </GText>
            </Center>
          </Box>
        </MainBottom>
      </Box>
    </main>
  );
};

export default Splash;
