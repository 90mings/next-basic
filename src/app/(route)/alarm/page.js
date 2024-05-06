'use client';

import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import { SimpleNavbar, GText } from '@/components';

const MyPageAlarm = () => {
  const text = `이음앱에서 처리하는 모든 개인정보는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 수집·보유·처리되고 있습니다.\n\n이음은 개인정보보호법에 따라 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리 방침을 두고 있습니다.\n\n 이음은 개인정보처리방침을 변경하는 경우에는 시행의 시기, 변경된 내용을 정보주체가 쉽게 확인 할 수 있도록 변경 전·후를 비교하여 공개하도록 합니다.`;

  const alarmCard = (props) => {
    const { isActive } = props;
    return (
      <Box
        w={'100%'}
        h={'174px'}
        py={'40px'}
        pl={'30px'}
        borderRadius={'40px'}
        bg={'#FFF'}
      >
        <VStack>
          <Box w={'100%'}>
            <HStack justifyContent={'start'} alignItems={'center'} spacing={3}>
              <Center w={'30px'}>
                <Box
                  w={'20px'}
                  h={'20px'}
                  borderRadius={'50%'}
                  bg={isActive ? '#FEC240' : '#EEEEEE'}
                ></Box>
              </Center>
              <Box>
                <GText fontWeight={700} lineHeight={'45px'}>
                  듣기 연습, 지금 시작 하세요.
                </GText>
              </Box>
            </HStack>
          </Box>
          <Box w={'100%'}>
            <HStack spacing={3}>
              <Center w={'30px'}></Center>
              <Box>
                <GText
                  fontWeight={500}
                  fontSize={{ md: '28px' }}
                  color={'#999'}
                  lineHeight={'35px'}
                >
                  2024. 03. 15 11:15
                </GText>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    );
  };

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#FFF6E4">
        <SimpleNavbar text="알림" bg={'#FEC240'} fontColor={'#000'} />
        <Box w="100%" h={'calc(100vh - 100px)'} p={'50px'}>
          <VStack spacing={'20px'}>
            {alarmCard({ isActive: true })}
            {alarmCard({ isActive: false })}
            {alarmCard({ isActive: false })}
            {alarmCard({ isActive: false })}
          </VStack>
        </Box>
      </Box>
    </main>
  );
};

export default MyPageAlarm;
