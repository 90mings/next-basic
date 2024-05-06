'use client';

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  VStack,
} from '@chakra-ui/react';
import { GText } from '@/components';

// JoinInput
const JoinInput = () => {
  return (
    <Box maxW="600px">
      <VStack>
        <Box w="100%">
          <GText>닉네임</GText>
        </Box>
        <InputGroup h={140}>
          <Input
            fontSize={{ lg: '40px', md: '38px', sm: '36px' }}
            borderRadius={'20px'}
            h="100%"
            placeholder="닉네임을 입력하세요"
            _placeholder={{
              fontSize: '38px',
              fontWeight: 400,
              color: '#999',
              lineHeight: '45.6px',
            }}
          />
          <InputRightAddon
            borderTopRightRadius={'20px'}
            borderBottomRightRadius={'20px'}
            p={0}
            h="100%"
            w="190px"
            bg="#FEC240"
            border={'1px solid #CB9A31'}
          >
            <Button
              borderTopRightRadius={'20px'}
              borderBottomRightRadius={'20px'}
              border="0"
              w="100%"
              h="100%"
              _hover={{}}
              _active={{}}
            >
              <GText fontWeight={600} color="#664E1A">
                중복체크
              </GText>
            </Button>
          </InputRightAddon>
        </InputGroup>
      </VStack>
    </Box>
  );
};

export default JoinInput;
