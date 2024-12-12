'use client';

import { Box, Center, HStack, Text } from '@chakra-ui/react';
import useLocale from '@/hooks/useLocale';
import { LANG_KEY } from '@/constants/lang';

const SignUpHeader = () => {
  const { localeText } = useLocale();
  return (
    <Box w={'100%'} h={'100%'} maxH={56} maxW={1920} bg={'#D9E7EC'}>
      <Center h={'100%'} py={'1rem'}>
        <HStack>
          <Text fontSize={'1rem'} fontWeight={400} color={'#556A7E'}>
            {localeText(LANG_KEY.HEADER_SIGN_MSG)}
          </Text>
          <Text
            textDecoration={'underline'}
            fontSize={'1rem'}
            fontWeight={500}
            color={'#556A7E'}
          >
            {localeText(LANG_KEY.HEADER_SIGN_UP)}
          </Text>
        </HStack>
      </Center>
    </Box>
  );
};

export default SignUpHeader;
