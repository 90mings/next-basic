'use client';

import { Center, HStack, Text } from '@chakra-ui/react';
import useLocale from '@/hooks/useLocale';
import { LANGUAGES } from '@/constants/lang';

const SignUpHeader = () => {
  const { localeText } = useLocale();
  return (
    <Center w={'100%'} h={'100%'} maxH={56} bg={'#D9E7EC'}>
      <Center h={'100%'} py={'1rem'} maxW={1920}>
        <HStack>
          <Text fontSize={'1rem'} fontWeight={400} color={'#556A7E'}>
            {localeText(LANGUAGES.HEADER_SIGN_MSG)}
          </Text>
          <Text
            textDecoration={'underline'}
            fontSize={'1rem'}
            fontWeight={500}
            color={'#556A7E'}
          >
            {localeText(LANGUAGES.HEADER_SIGN_UP)}
          </Text>
        </HStack>
      </Center>
    </Center>
  );
};

export default SignUpHeader;
