'use client';

import { Box, HStack, IconButton } from '@chakra-ui/react';
import { GText, CustomIcon } from '@/components';
import { useRouter } from 'next/navigation';

const SimpleNavbar = (props) => {
  const { text } = props;
  const { bg = '#FFF', fontColor = '#000' } = props;
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Box bg={bg} w="100%" h="100px" zIndex={2}>
      <HStack
        justifyContent="space-between"
        h="100%"
        alignItems="center"
        px="20px"
      >
        <Box w="100px">
          <IconButton
            w="64px"
            h="64px"
            border={0}
            onClick={() => {
              handleBack();
            }}
          >
            <CustomIcon w="70%" h="70%" color={fontColor} name="back" />
          </IconButton>
        </Box>
        <Box>
          <GText fontWeight={700} color={fontColor}>
            {text}
          </GText>
        </Box>
        <Box w="100px" />
      </HStack>
    </Box>
  );
};

export default SimpleNavbar;
