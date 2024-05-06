'use client';
import { Box, Center, Checkbox, HStack, Image, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import MainTitle from '@/svgs/main-title.svg';
import { GText, MainBottom, LoginButton } from '@/components';
import { MAIN } from '@/constants/pageURL';

// Login
const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push(MAIN.join);
  };

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#ECFBFF">
        <Center
          w="100%"
          position={'absolute'}
          top={{ lg: 90, md: 90, sm: 110 }}
          zIndex={10}
        >
          <VStack spacing={0}>
            <Box w="100%" px={'160px'}>
              <Image
                pb={'75.35px'}
                w={{ lg: '480.9px', md: '480.9px', sm: '480.9px' }}
                maxW={700}
                src={MainTitle.src}
              />
            </Box>
            <VStack w="100%" spacing={'14px'} px={'128px'}>
              <LoginButton
                id="login_kakao_button"
                type="kakao"
                onClick={() => {
                  handleLogin();
                }}
              />
              <LoginButton
                id="login_naver_button"
                type="naver"
                onClick={() => {
                  handleLogin();
                }}
              />
              <LoginButton
                id="login_google_button"
                type="google"
                onClick={() => {
                  handleLogin();
                  // handleLoginClick();
                }}
              />

              <LoginButton
                id="login_apple_button"
                type="apple"
                onClick={() => {
                  handleLogin();
                  // handleLoginClick();
                }}
              />
            </VStack>
            <Box w="100%" pt="30px" px={'130px'}>
              <HStack justifyContent="start" alignItems="center">
                <Checkbox
                  variant={'customStyle'}
                  iconSize="xl"
                  isChecked
                  // tempAutoLogin
                  onChange={() => {
                    // setTempAutoLogin(!tempAutoLogin);
                  }}
                />
                <Box>
                  <GText
                    fontWeight={600}
                    fontSize={{
                      lg: '24px',
                      md: '24px',
                      sm: '26px',
                    }}
                    color="#000920"
                  >
                    자동 로그인
                  </GText>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Center>

        <MainBottom isNav={false} />
      </Box>
    </main>
  );
};

export default Login;
