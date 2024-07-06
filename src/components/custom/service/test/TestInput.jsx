import { Input } from '@chakra-ui/react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import utils from '@/utils/index';

const TestInput = forwardRef((props, ref) => {
  const {
    value,
    placeholder = '',
    color = '#000000',
    max = 999999,
    borderRadius = '40px',
    borderColor = '#00000080',
    fontWeight = 700,
    fontSize = '150px',
    border = '4px dashed',
    px = 4,
  } = props;

  const { isDisabled = false, readOnly = false } = props;
  const { onChange, onKeyDown, onBlur } = props;
  const { textAlign = 'center', bg, type } = props;

  const [tempBg, setTempBg] = useState('transparent');

  const [tempFontSize, setTempFontSize] = useState('');

  useEffect(() => {
    if (fontSize) {
      if (typeof fontSize === 'string') {
        setTempFontSize(fontSize);
      } else {
        const temp = utils.getFontSize(fontSize);
        setTempFontSize(temp);
      }
    }
  }, [fontSize]);

  /*
  if (type === TYPE_RING_SOUND) {
    setTempBg('#E7FBFF');
  }
  if (type === TYPE_SUBJECT) {
    setTempBg('#FEEDFF');
  }
  if (type === TYPE_CONSONANT) {
    setTempBg('#FAFFE7');
  }
  if (type === TYPE_VOWEL) {
    setTempBg('#FFF6E4');
  }
  */

  const handleOnChange = (event) => {
    if (onChange) {
      return onChange(event);
    }
  };

  const handleOnKeyDown = (event) => {
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
      px={px}
      w={'100%'}
      h={'100%'}
      border={border}
      borderColor={borderColor}
      borderRadius={borderRadius}
      maxLength={max}
      placeholder={placeholder}
      readOnly={readOnly}
      isDisabled={isDisabled}
      type={'text'}
      value={value || ''}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
      onBlur={handleOnBlur}
      color={color}
      fontWeight={fontWeight}
      fontSize={tempFontSize}
      bg={bg ? bg : 'transparent'}
      textAlign={textAlign}
      _placeholder={{
        color: '#BABABA',
      }}
      ref={ref}
    />
  );
});

export default TestInput;
