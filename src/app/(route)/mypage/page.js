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
import { CustomIcon, GText } from 'src/components';
import MyPageDefault from '@/svgs/my-page-default.svg';
import MyPageSmile from '@/svgs/my-page-smile.svg';
import MyPageGraph from '@/svgs/my-page-graph.svg';
import MyPageSetting from '@/svgs/my-page-setting.svg';
import { MY_PAGE } from 'src/constants/pageURL';

// MyPage
const MyPage = () => {
  const router = useRouter();

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#FAFFE7">
        <SimpleNavbar text="마이페이지" bg={'#75B125'} fontColor={'#FFF'} />
        <Box w="100%" pt={'50px'} px="50px">
          <VStack spacing={0}>
            <Box w={'100%'}>
              <Center w={'100%'}>
                <Image src={MyPageDefault.src} />
              </Center>
            </Box>
            <Box w={'100%'} pt={'50px'}>
              <Center w={'100%'}>
                <HStack justifyContent={'cneter'} alignItems={'end'}>
                  <GText
                    fontWeight={700}
                    fontSize={{ md: '48px' }}
                    color={'#000'}
                  >
                    홍길동
                  </GText>
                  <GText
                    fontWeight={700}
                    // fontSize={{ md: '48px' }}
                    color={'#000'}
                  >
                    님 안녕하세요
                  </GText>
                </HStack>
              </Center>
            </Box>

            <Box w={'100%'} maxW={'600px'} pt={'50px'}>
              <VStack spacing={'20px'}>
                <Box w={'100%'} h="120px">
                  <MyPageButton
                    onClick={() => {
                      router.push(MY_PAGE.profile);
                    }}
                    leftIcon={<Image src={MyPageSmile.src} />}
                    rightIcon={
                      <CustomIcon
                        name="next"
                        w={'64px'}
                        h={'64px'}
                        color={'#466E05'}
                      />
                    }
                    bg={'#FFF'}
                    borderColor={'#00000080'}
                    borderRadius={'20px'}
                    fontWeight={700}
                    fontColor={'#466E05'}
                    text="프로필"
                  />
                </Box>
                <Box w={'100%'} h="120px">
                  <MyPageButton
                    onClick={() => {
                      router.push(MY_PAGE.progress);
                    }}
                    leftIcon={<Image src={MyPageGraph.src} />}
                    rightIcon={
                      <CustomIcon
                        name="next"
                        w={'64px'}
                        h={'64px'}
                        color={'#466E05'}
                      />
                    }
                    bg={'#FFF'}
                    borderColor={'#00000080'}
                    borderRadius={'20px'}
                    fontWeight={700}
                    fontColor={'#466E05'}
                    text="학습 진행률"
                  />
                </Box>
                <Box w={'100%'} h="120px">
                  <MyPageButton
                    onClick={() => {
                      router.push(MY_PAGE.setting);
                    }}
                    leftIcon={<Image src={MyPageSetting.src} />}
                    rightIcon={
                      <CustomIcon
                        name="next"
                        w={'64px'}
                        h={'64px'}
                        color={'#466E05'}
                      />
                    }
                    bg={'#FFF'}
                    borderColor={'#00000080'}
                    borderRadius={'20px'}
                    fontWeight={700}
                    fontColor={'#466E05'}
                    text="앱설정"
                  />
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Box>
    </main>
  );
};

export default MyPage;
