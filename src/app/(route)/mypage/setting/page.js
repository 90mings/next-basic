'use client';

import { Box, Center, Image, Switch, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { SimpleNavbar, MyPageButton, CustomIcon } from '@/components';
import MyPageAlert from '@/svgs/my-page-alert.svg';
import MyPageDoc from '@/svgs/my-page-doc.svg';
import { MY_PAGE } from '@/constants/pageURL';

// MyPage
const MyPage = () => {
  const router = useRouter();

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#FAFFE7">
        <SimpleNavbar text="앱설정" bg={'#75B125'} fontColor={'#FFF'} />
        <Center w="100%">
          <Box w={'100%'} maxW={'600px'} pt={'50px'}>
            <VStack spacing={'20px'}>
              <Box w={'100%'} h="120px">
                <MyPageButton
                  leftIcon={<Image src={MyPageAlert.src} />}
                  rightIcon={<Switch size={'lg'} />}
                  bg={'#FFF'}
                  borderColor={'#00000080'}
                  borderRadius={'20px'}
                  fontWeight={700}
                  fontColor={'#466E05'}
                  text="앱 알림"
                  pr={5}
                />
              </Box>
              <Box w={'100%'} h="120px">
                <MyPageButton
                  onClick={() => {
                    router.push(MY_PAGE.terms);
                  }}
                  leftIcon={<Image src={MyPageDoc.src} />}
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
                  text="서비스 이용약관"
                />
              </Box>
              <Box w={'100%'} h="120px">
                <MyPageButton
                  onClick={() => {
                    router.push(MY_PAGE.personal);
                  }}
                  leftIcon={<Image src={MyPageDoc.src} />}
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
                  text="개인정보 처리방침"
                />
              </Box>
            </VStack>
          </Box>
        </Center>
      </Box>
    </main>
  );
};

export default MyPage;
