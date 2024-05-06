import { Input } from '@chakra-ui/react';
import { useCallback } from 'react';

const TestInput = (props) => {
  const {
    value,
    defaultValue = '',
    placeholder = '',
    color = '#000000',
    type = 'text',
    auto = false,
    max = 999999,
    borderRadius = '40px',
    borderColor = '#00000080',
    fontWeight = 700,
    fontSize = '150px',
  } = props;
  const { isDisabled = false, readOnly = false } = props;
  const { onChange, onKeyDown, onBlur } = props;
  // chakra ui prop
  const { size = 'lg', textAlign = 'center', bg = '#FFF' } = props;

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
      border={'4px dashed'}
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
      bg={'transparent'}
      textAlign={textAlign}
      _placeholder={{
        color: '#BABABA',
      }}
    />
  );
};

export default TestInput;
