'use client';

import { Box, Center, Textarea } from '@chakra-ui/react';
import { SimpleNavbar } from '@/components';

// MyPagePersonal
const MyPagePersonal = () => {
  const text = `이음앱에서 처리하는 모든 개인정보는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 수집·보유·처리되고 있습니다.\n\n이음은 개인정보보호법에 따라 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리 방침을 두고 있습니다.\n\n 이음은 개인정보처리방침을 변경하는 경우에는 시행의 시기, 변경된 내용을 정보주체가 쉽게 확인 할 수 있도록 변경 전·후를 비교하여 공개하도록 합니다.`;

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#FAFFE7">
        <SimpleNavbar
          text="개인정보 처리방침"
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

export default MyPagePersonal;
