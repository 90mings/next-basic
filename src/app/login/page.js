'use client';

import Footer from '@/components/common/custom/Footer';
import ContentBR from '@/components/custom/ContentBR';
import MainTopHeader from '@/components/custom/header/MainTopHeader';
import OrderTextInput from '@/components/input/custom/OrderTextInput';
import LoginMain from '@public/svgs/login/login-main.svg';
import {
  Box,
  Button,
  Center,
  Checkbox,
  HStack,
  Img,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LANGUAGES } from '@/constants/lang';
import useLocale from '@/hooks/useLocale';

const LoginPage = () => {
  const { localeText } = useLocale();

  return (
    <main>
      <Center w={'100%'}>
        <VStack w={'100%'} spacing={0}>
          <MainTopHeader />
          {/* content */}
          <Box w={'100%'} maxW={1920}>
            <VStack spacing={0} justifyContent={'flex-start'}>
              <Box w={'100%'}>
                <Img src={LoginMain.src} />
              </Box>
              <Center w={'100%'} px={'10rem'} py={'2.5rem'}>
                <Text
                  color={'#485766'}
                  fontSize={'3rem'}
                  fontStyle={'normal'}
                  fontWeight={400}
                  lineHeight={'4.5rem'}
                >
                  {localeText(LANGUAGES.HEADER_SIGN_MSG)}
                </Text>
              </Center>
              <Box w={'100%'} px={'40rem'}>
                <VStack spacing={'3.75rem'}>
                  <Box w={'100%'}>
                    <VStack spacing={'2.5rem'}>
                      <Box w={'100%'}>
                        <OrderTextInput title={'Email'} />
                      </Box>
                      <Box w={'100%'}>
                        <OrderTextInput title={'Password'} />
                      </Box>
                      <Box w={'100%'}>
                        <HStack justifyContent={'space-between'}>
                          <Box>
                            <HStack>
                              <Box>
                                <Checkbox />
                              </Box>
                              <Box>
                                <Text
                                  color={'#485766'}
                                  fontSize={'1rem'}
                                  fontWeight={400}
                                  lineHeight={'1.75rem'}
                                >
                                  {localeText(LANGUAGES.KEEP_ME_LOGGED_IN)}
                                </Text>
                              </Box>
                            </HStack>
                          </Box>
                          <Box>
                            <Text
                              color={'#66809C'}
                              fontSize={'1rem'}
                              fontWeight={500}
                              lineHeight={'1.75rem'}
                            >
                              {localeText(LANGUAGES.FORGOT_ACCOUNT)}
                            </Text>
                          </Box>
                        </HStack>
                      </Box>
                    </VStack>
                  </Box>
                  <Box w={'100%'}>
                    <VStack spacing={'1.5rem'}>
                      <Box w={'100%'}>
                        <Button
                          py={'0.88rem'}
                          px={'2rem'}
                          borderRadius={'0.25rem'}
                          bg={'#7895B2'}
                          h={'100%'}
                          w={'100%'}
                        >
                          <Text
                            color={'#FFF'}
                            fontSize={'1.25rem'}
                            fontWeight={400}
                            lineHeight={'2.25rem'}
                          >
                            {localeText(LANGUAGES.LOGIN)}
                          </Text>
                        </Button>
                      </Box>
                      <Box w={'100%'}>
                        <Center>
                          <HStack>
                            <Box>
                              <Text
                                color={'#485766'}
                                fontSize={'1rem'}
                                fontWeight={400}
                                lineHeight={'1.75rem'}
                              >
                                {localeText(LANGUAGES.DONTS_HAVE_AN_ACCOUNT)}
                              </Text>
                            </Box>
                            <Box>
                              <Text
                                color={'#66809C'}
                                fontSize={'1rem'}
                                fontWeight={500}
                                lineHeight={'1.75rem'}
                                textDecoration={'underline'}
                              >
                                {localeText(LANGUAGES.CREATE_AN_ACCOUNT)}
                              </Text>
                            </Box>
                          </HStack>
                        </Center>
                      </Box>
                    </VStack>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </Box>

          <ContentBR h={'10rem'} />

          <Footer />
        </VStack>
      </Center>
    </main>
  );
};

export default LoginPage;
