'use client';

import { Input, Text, VStack } from '@chakra-ui/react';
import { useCallback } from 'react';

const OrderTextInput = (props) => {
  const { title = 'TEXT INPUT TITLE', value, onChange, maxW } = props;

  const handleOnChange = useCallback((value) => {
    console.log('value', value);
    if (onChange) {
      onChange(value);
    }
  });

  return (
    <VStack
      maxW={maxW ? maxW : null}
      h={'5.25rem'}
      alignItems={'flex-start'}
      gap={'0.25rem'}
    >
      <Text
        color={'#7895B2'}
        fontSize={'1rem'}
        fontWeight={400}
        lineHeight={'1.75rem'}
      >
        {title}
      </Text>
      <Input
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
        value={value || ''}
        w={'100%'}
        p={'0.75rem'}
        bg={'#FFF'}
        borderRadius="0.25rem"
        border={'1px solid #9CADBE'}
      />
    </VStack>
  );
};

export default OrderTextInput;
