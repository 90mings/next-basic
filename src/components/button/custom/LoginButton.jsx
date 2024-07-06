'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, Image } from '@chakra-ui/react';
import { GText } from '@/components';
import AppleLogo from '@/svgs/apple.svg';
import GoogleLogo from '@/svgs/google.svg';
import KakaoLogo from '@/svgs/kakao.svg';
import NaverLogo from '@/svgs/naver.svg';
import {
  SNS_TYPE_KAKAO,
  SNS_TYPE_NAVER,
  SNS_TYPE_GOOGLE,
  SNS_TYPE_APPLE,
  BOX_S_LOGIN,
} from '@/constants/common';
import { RADIUS_S_10 } from '@/constants/common';

const LoginButton = (props) => {
  const { id, type = 'Button', onClick } = props;

  const [iconImage, setIconImage] = useState(null);
  const [text, setText] = useState('button');
  const [bgColor, setBgColor] = useState('#FFF');
  const [fontColor, setFontColor] = useState('#FFF');

  const handleButtonType = () => {
    if (type === SNS_TYPE_KAKAO) {
      setIconImage(KakaoLogo);
      setText('카카오 로그인');
      setBgColor('#FEC240');
      setFontColor('#000');
    } else if (type === SNS_TYPE_NAVER) {
      setIconImage(NaverLogo);
      setText('네이버 로그인');
      setBgColor('#3BAC37');
      setFontColor('#FFF');
    } else if (type === SNS_TYPE_GOOGLE) {
      setIconImage(GoogleLogo);
      setText('구글 로그인');
      setBgColor('#FFF');
      setFontColor('#181600');
    }
    if (type === SNS_TYPE_APPLE) {
      setIconImage(AppleLogo);
      setText('애플 로그인');
      setBgColor('#000');
      setFontColor('#FFF');
    }
  };

  useEffect(() => {
    handleButtonType();
  }, []);

  const handleSnsLogin = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      id={id}
      border="1px solid #D7D7D7"
      w={'100%'}
      h={'25%'}
      bg={bgColor}
      borderRadius={RADIUS_S_10}
      _active={{}}
      _focus={{}}
      _hover={{}}
      onClick={handleSnsLogin}
      size="xl"
      px={'5%'}
    >
      <HStack
        w="100%"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        <Box w={BOX_S_LOGIN} minW={BOX_S_LOGIN}>
          <Image w="100%" h="100%" src={iconImage?.src} />
        </Box>
        <Box>
          <GText fontWeight={600} fontSize={30} color={fontColor}>
            {text}
          </GText>
        </Box>
        <Box w={BOX_S_LOGIN} minW={BOX_S_LOGIN} />
      </HStack>
    </Button>
  );
};

export default LoginButton;
