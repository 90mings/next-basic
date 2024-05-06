'use client';

import React, { useState } from 'react';
import {
  Text,
  Box,
  HStack,
  VStack,
  Image,
  Checkbox,
  Center,
  Button,
} from '@chakra-ui/react';
import { DefaultInput } from '@/components';
import AdminLogo from '@/svgs/admin-logo.svg';
import { useRouter } from 'next/navigation';
import { ADMIN } from '@/constants/pageURL';

const AdminLogin = () => {
  const router = useRouter();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = () => {
    console.log('handleLogin');
    router.push(ADMIN.user);
  };

  return (
    <Center w={'100%'} h={'100vh'} bg={'#F1F1F1'}>
      <Center pt={'40px'} pb={'42px'} w={'740px'} maxW={'740px'} bg={'#FFFFFF'}>
        <VStack spacing={0}>
          <Image src={AdminLogo.src} />
          <Center w={'100%'} pt={'31px'}>
            <HStack h={'90px'}>
              <Box w="80%" h={'100%'}>
                <VStack h={'100%'} sp={'10px'}>
                  <Box w="100%" h={'100%'}>
                    <HStack justifyContent="space-between" alignItems="center">
                      <Box w="100px">
                        <Text
                          fontWeight={700}
                          fontSize="16px"
                          textAlign="left"
                          color={'#000920'}
                        >
                          이메일
                        </Text>
                      </Box>
                      <Box w={'100%'} h={'40px'}>
                        <DefaultInput
                          placeholder="이메일을 입력하세요"
                          value={id}
                          onChange={(e) => {
                            setId(e.target.value);
                          }}
                          onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                              checkLogin();
                            }
                          }}
                        />
                      </Box>
                    </HStack>
                  </Box>
                  <Box w="100%">
                    <HStack justifyContent="space-between" alignItems="center">
                      <Box w="100px">
                        <Text
                          fontWeight={700}
                          fontSize="16px"
                          textAlign="left"
                          color={'#000920'}
                        >
                          비밀번호
                        </Text>
                      </Box>
                      <Box w={'100%'} h={'40px'}>
                        <DefaultInput
                          placeholder="비밀번호를 입력하세요"
                          type="password"
                          auto
                          value={pw || ''}
                          onChange={(e) => {
                            setPw(e.target.value);
                          }}
                          onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                              checkLogin();
                            }
                          }}
                        />
                      </Box>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
              <Box w={'110px'} h={'100%'}>
                <Button
                  onClick={handleLogin}
                  _hover={{}}
                  _active={{}}
                  w={'100%'}
                  h={'100%'}
                  borderRadius={'4px'}
                  bg={'#FEC240'}
                >
                  <Text
                    fontWeight={700}
                    fontSize="16px"
                    textAlign="center"
                    color={'#000'}
                  >
                    로그인
                  </Text>
                </Button>
              </Box>
            </HStack>
          </Center>
          <Box w="100%" py={0} pt={'21px'}>
            <HStack justifyContent="left" alignItems="center">
              <Box w={'80px'}></Box>
              <Box h={'25px'}>
                <HStack h={'100%'}>
                  <Checkbox iconSize="md" size={'md'} />
                  <Center h={'100%'}>
                    <Text
                      fontWeight={400}
                      fontSize="13px"
                      lineHeight={'25px'}
                      color="#000920"
                    >
                      계정 정보 기억하기
                    </Text>
                  </Center>
                </HStack>
              </Box>
              <Box />
            </HStack>
          </Box>
          <Box pt={'20px'}>
            <Text fontWeight={400} fontSize="8px" color="#727784">
              Copyright © 2022. ASAP EXPRESS, All rights reserved.
            </Text>
          </Box>
        </VStack>
      </Center>
    </Center>
  );
};

export default AdminLogin;
