'use client';

import { Button, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { GText } from '@/components';
import utils from '@/utils';
import { RADIUS_S_20 } from '@/constants/common';

const JoinInput = (props) => {
  const { value, onChange, onClick } = props;
  const { fontSize, placeholder = '닉네임을 입력하세요' } = props;

  const [tempFontSize, setTempFontSize] = useState('');

  useEffect(() => {
    if (fontSize) {
      const temp = utils.getFontSize(fontSize);
      setTempFontSize(temp);
    }
  }, [fontSize]);

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <InputGroup h={'12%'} mt={'2%'}>
      <Input
        value={value}
        onChange={handleOnChange}
        fontSize={tempFontSize}
        borderLeftRadius={RADIUS_S_20}
        h={'100%'}
        placeholder={placeholder}
        _placeholder={{
          fontSize: tempFontSize,
          fontWeight: 400,
          color: '#999',
        }}
      />
      <InputRightAddon
        borderRightRadius={RADIUS_S_20}
        p={0}
        h="100%"
        w={'30%'}
        bg="#FEC240"
        border={'1px solid #CB9A31'}
      >
        <Button
          onClick={handleOnClick}
          borderRightRadius={RADIUS_S_20}
          border="0"
          w="100%"
          h="100%"
          _hover={{}}
          _active={{}}
        >
          <GText fontWeight={600} color="#664E1A" fontSize={38}>
            중복체크
          </GText>
        </Button>
      </InputRightAddon>
    </InputGroup>
  );
};

export default JoinInput;
