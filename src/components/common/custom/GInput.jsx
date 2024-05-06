'use client';

import { Box, Input, InputGroup, VStack } from '@chakra-ui/react';
import { GText } from '@/components';

// GInput
const GInput = (props) => {
  const { value, onChange } = props;
  const { title, placeholder = '' } = props;

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e1);
    }
  };

  return (
    <Box maxW="100%">
      <VStack spacing={2}>
        {title && (
          <Box w="100%">
            <GText
              lineHeight={'45px'}
              fontWeight={500}
              fontSize={{
                md: '38px',
              }}
            >
              {title}
            </GText>
          </Box>
        )}
        <InputGroup h={140}>
          <Input
            value={value}
            onChange={handleOnChange}
            fontSize={{ lg: '40px', md: '38px', sm: '36px' }}
            fontWeight={700}
            color={'#222'}
            borderRadius={'20px'}
            h="100%"
            placeholder={placeholder}
            _placeholder={{
              fontSize: '38px',
              fontWeight: 400,
              color: '#999',
              lineHeight: '45.6px',
            }}
          />
        </InputGroup>
      </VStack>
    </Box>
  );
};

export default GInput;
