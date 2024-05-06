'use client';

import { Box, Center, Textarea } from '@chakra-ui/react';
import { SimpleNavbar } from '@/components';

// MyPageTerms
const MyPageTerms = () => {
  const text = `제 1장 총칙\n\n제1조 (목적)\n본 약관은 이음(이하 “이음앱"라 함)이 제공하는 이용조건, 절차, 이용자와 당 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정하는 것을 목적으로 합니다.\n\n제2조 (약관의 명시와 개정)\n① 본 약관의 내용과 주소지, 대표자명, 개인정보관리책임자명, 연락처(전화, 팩스, 전자우편주소 등) 등을 이용자가 알 수 있도록 당 사이트의 초기화면(전면)에 게시합니다.\n\n② 이음앱은 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용 촉진 및 정보보호이용등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. 약관을 개정할 경우에는 적용일자 등을 명시하여 현행약관과 함께 당 사이트에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다.`;

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#FAFFE7">
        <SimpleNavbar
          text="서비스 이용약관"
          bg={'#75B125'}
          fontColor={'#FFF'}
        />
        <Center w="100%" h={'calc(100vh - 100px)'} p={'50px'}>
          <Textarea
            border={0}
            h="100%"
            fontWeight={500}
            fontSize={{
              md: '38px',
            }}
            color={'#000'}
            readOnly
            value={text}
          ></Textarea>
        </Center>
      </Box>
    </main>
  );
};

export default MyPageTerms;
