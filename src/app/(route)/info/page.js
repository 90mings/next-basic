'use client';

import { Box, Center, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { GText, MainBottom } from '@/components';
import { MAIN } from 'src/constants/pageURL';

// Information
const Information = () => {
  const router = useRouter();

  const card = (type) => {
    let comp = '';
    switch (type) {
      case 1:
        comp = (
          <GText fontWeight={700}>
            이 앱은 인공와우 사용자의 말소리 듣기 연습을 위해 제작되었습니다.
          </GText>
        );
        break;
      case 2:
        comp = (
          <GText fontWeight={700}>
            링사운드 듣기 → 모음 듣기 → 자음 듣기 → 주제별 듣기로 구성되어
            있습니다.
          </GText>
        );
        break;
      default:
        comp = (
          <GText fontWeight={700}>
            순서대로 듣기 연습을{' '}
            <span
              style={{
                color: 'red',
              }}
            >
              반복
            </span>
            하면 듣기 능력이 향상됩니다.
          </GText>
        );
        break;
    }

    return (
      <Box
        bg="#FFF"
        borderRadius={'40px'}
        w="100%"
        minH="160px"
        py={'32px'}
        px={'44px'}
      >
        {comp}
      </Box>
    );
  };

  const handleOnSuccess = () => {
    router.push(MAIN.login);
  };

  return (
    <main>
      <Box
        position={'relative'}
        h="100vh"
        bg="#ECFBFF"
        onClick={handleOnSuccess}
      >
        <Center
          position={'absolute'}
          top={{ lg: '60px', md: '80px', sm: '100px' }}
          zIndex={10}
          w={'100%'}
        >
          <VStack px="50px" spacing={'30px'}>
            {card(1)}
            {card(2)}
            {card(3)}
          </VStack>
        </Center>

        <MainBottom isNav={false} isStart isTree />
      </Box>
    </main>
  );
};

export default Information;
