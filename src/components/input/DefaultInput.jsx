'use client';

import { useCallback, useEffect } from 'react';
import { Input } from '@chakra-ui/react';

const DefaultInput = (props) => {
  const {
    value,
    defaultValue = '',
    placeholder = '',
    color = 'rgba(0, 9, 32, 1)',
    type = 'text',
    auto = false,
    max = 999999,
    borderRadius = '4px',
    borderColor,
    fontWeight = 400,
    fontSize = '18px',
  } = props;
  const { isDisabled = false, readOnly = false } = props;
  const { onChange, onKeyDown, onBlur } = props;
  // chakra ui prop
  const { size = 'lg', textAlign = 'left', bg = '#FFF' } = props;

  const handleAutoCompleteByType = useCallback(() => {
    /*
    if (type === 'password') {
      return 'new-password';
    }
    */
    // return 'off';
    return 'one-time-code';
  });

  const handleOnChange = (event) => {
    if (onChange) {
      return onChange(event);
    }
  };

  const handleOnKeyDown = (event) => {
    /*
    if (event.keyCode === 13) {
      if (onKeyDown) {
        return onKeyDown(event);
      }
    }
    */
    const { keyCode } = event;
    if (keyCode === 38 || keyCode === 40) {
      event.preventDefault();
      return;
    }
    if (onKeyDown) {
      return onKeyDown(event);
    }
  };

  const handleOnBlur = (event) => {
    if (onBlur) {
      return onBlur(event);
    }
  };

  return (
    <Input
      w="100%"
      h="100%"
      borderColor={borderColor}
      borderRadius={borderRadius}
      maxLength={max}
      className={type === 'password' && !auto ? 'input-password' : null}
      autoComplete={handleAutoCompleteByType(type)}
      placeholder={placeholder}
      readOnly={readOnly}
      isDisabled={isDisabled}
      type={type === 'password' && !auto ? 'text' : type}
      value={value || ''}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
      onBlur={handleOnBlur}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      bg={bg}
      textAlign={textAlign}
      _placeholder={{
        color: '#BABABA',
      }}
    />
  );
};

export default DefaultInput;
