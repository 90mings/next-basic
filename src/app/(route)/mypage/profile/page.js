'use client';

import { Box, Center, HStack, Image, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import {
  SimpleNavbar,
  MainBottom,
  MyPageButton,
  JoinInput,
} from '@/components';
import { MAIN } from '@/constants/pageURL';
import { CustomIcon, GInput, GText } from 'src/components';
import MyPageDefault from '@/svgs/my-page-default.svg';
import MyPageSmile from '@/svgs/my-page-smile.svg';
import MyPageGraph from '@/svgs/my-page-graph.svg';
import MyPageSetting from '@/svgs/my-page-setting.svg';

// MyPage
const MyPage = () => {
  const router = useRouter();

  const handleJoin = () => {
    router.push(MAIN.main);
  };

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#FAFFE7">
        <SimpleNavbar text="프로필" bg={'#75B125'} fontColor={'#FFF'} />
        <Box w="100%" pt={'50px'} px="50px">
          <VStack spacing={'40px'}>
            <Box w={'100%'}>
              <GInput title={'프로필'} value={'홍길동'} />
            </Box>
            <Box w={'100%'}>
              <GInput title={'가입SNS'} value={'카카오톡'} />
            </Box>
          </VStack>
        </Box>
      </Box>
    </main>
  );
};

export default MyPage;
