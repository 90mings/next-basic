'use client';
import { Box, Center, Image, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import SplashTitle from '@/svgs/splash-title.svg';
import SplashBottom from '@/svgs/splash-bottom.svg';
import SlideToUnlockButton from 'src/components/buttons/SlideToUnlockButton';
import { GText } from '@/components/g';

// splash
const Home = () => {
  console.log('process', process);
  const router = useRouter();

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#ECFBFF">
        <Center position={'absolute'} top={20} zIndex={10} w={'100%'}>
          <Image
            position={'absolute'}
            top={0}
            w={{ md: '70%', sm: '70%' }}
            src={SplashTitle.src}
          />
        </Center>

        <Box
          w="100%"
          h="100%"
          position={'fixed'}
          bottom={0}
          backgroundImage={SplashBottom.src}
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          backgroundPosition="bottom"
        >
          <Box w="100%" maxH={'500px'} position={'fixed'} bottom={0}>
            <Center w="100%" px={3} pb={'80px'}>
              <SlideToUnlockButton />
            </Center>

            <Center w="100%" pb={'116px'}>
              <GText
                fontWeight={400}
                fontSize={{ md: '30px', sm: '28px' }}
                lineHeight={'36px'}
                color={'#00000080'}
              >
                Ⓒ 2024. eeum2024. All Rights Reserved.
              </GText>
            </Center>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
