'use client';

import { Search2Icon } from '@chakra-ui/icons';
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { DefaultInput } from '..';

const SearchInput = (props) => {
  // 기본
  const {
    value,
    placeholder = '',
    color,
    type = 'text',
    max = 999999,
    borderRadius,
    borderColor,
    fontWeight,
    fontSize,
    _placeholder,
    _hover,
  } = props;
  // 권한
  const {
    isDisabled = false,
    isClickComp = false, // 컴포넌트 전체 클릭
  } = props;
  // 이벤트
  const { onClick, onChange, onKeyDown, onBlur, onFocus } = props;
  // chakra ui prop
  const { textAlign = 'left' } = props;

  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  const handleClick = () => {
    if (!isDisabled) {
      if (isClickComp) {
        handleOnClick();
      }
    }
  };

  const handleOnClick = (event) => {
    if (onClick) {
      return onClick(event);
    }
  };

  const handleOnKeyDown = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return (
    <InputGroup onClick={handleClick}>
      <DefaultInput
        w="100%"
        h="100%"
        _hover={{
          ..._hover,
          cursor: isClickComp ? 'pointer' : '',
        }}
        type={type}
        borderRadius={borderRadius}
        borderColor={borderColor}
        color={color}
        max={max}
        fontSize={fontSize}
        fontWeight={fontWeight}
        readOnly={isClickComp}
        isDisabled={isDisabled}
        placeholder={placeholder}
        value={value || ''}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        _placeholder={_placeholder}
        textAlign={textAlign}
      />
      <InputRightElement
        h={'100%'}
        onClick={handleOnClick}
        _hover={{
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
      >
        <Search2Icon color="dark.default" />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
