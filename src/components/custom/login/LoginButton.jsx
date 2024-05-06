'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import AppleLogo from '@/svgs/apple.svg';
import GoogleLogo from '@/svgs/google.svg';
import KakaoLogo from '@/svgs/kakao.svg';
import NaverLogo from '@/svgs/naver.svg';
import { GText } from '@/components';

const LoginButton = (props) => {
  const { id, type = 'Button', value = 0, isActive = false } = props;
  const { onClick, isDisabled = false } = props;

  const [iconImage, setIconImage] = useState(null);
  const [text, setText] = useState('button');
  const [bgColor, setBgColor] = useState('#FFF');
  const [fontColor, setFontColor] = useState('#FFF');

  const handleButtonType = () => {
    if (type === 'naver') {
      setIconImage(NaverLogo);
      setText('네이버 로그인');
      setBgColor('#3BAC37');
      setFontColor('#FFF');
    }
    if (type === 'kakao') {
      setIconImage(KakaoLogo);
      setText('카카오톡 로그인');
      setBgColor('#FEC240');
      setFontColor('#000');
    }
    if (type === 'google') {
      setIconImage(GoogleLogo);
      setText('구글 로그인');
      setBgColor('#FFF');
      setFontColor('#181600');
    }
    if (type === 'apple') {
      setIconImage(AppleLogo);
      setText('애플 로그인');
      setBgColor('#000');
      setFontColor('#FFF');
    }
  };

  useEffect(() => {
    handleButtonType();
  }, []);

  return (
    <Button
      id={id}
      border="1px solid #D7D7D7"
      w="100%"
      h={'80px'}
      bg={bgColor}
      borderRadius={'10px'}
      _active={{}}
      _focus={{}}
      _hover={{}}
      onClick={() => {
        onClick(value);
      }}
      size="xl"
      px={5}
    >
      <HStack
        w="100%"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        px={'30px'}
      >
        <Box w="40px">
          <Image w="100%" h="100%" src={iconImage?.src} />
        </Box>
        <Center>
          <GText
            fontWeight={600}
            fontSize={{ lg: 32, md: '30px', sm: '28px' }}
            color={fontColor}
          >
            {text}
          </GText>
        </Center>
        <Box w="54px" />
      </HStack>
    </Button>
  );
};

export default LoginButton;
