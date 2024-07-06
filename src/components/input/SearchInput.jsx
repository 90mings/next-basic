import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement, border } from '@chakra-ui/react';
import utils from '@/utils/index';

const SearchInput = (props) => {
  const { placeholder = '입력하세요', value = '' } = props;
  const {
    isDisabled,
    szie = 'md',
    onClick,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    isClickComp = false, // 컴포넌트 전체 클릭
    borderRadius = '4px',
    // variant = '',
  } = props;

  const handleChange = (event) => {
    if (utils.isNotEmpty(onChange)) {
      onChange(event);
    }
  };

  const handleClick = () => {
    if (!isDisabled) {
      if (isClickComp) {
        handleResultClick();
      }
    }
  };

  const handleOnClick = (event) => {
    if (onClick) {
      return onClick(event);
    }
  };

  const handleResultClick = (event) => {
    handleOnClick(event);
  };

  const handleOnKeyDown = (event) => {
    if (utils.isEmpty(onKeyDown) && event.keyCode === 13) {
      handleOnClick(event);
    } else if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return (
    <InputGroup szie={szie} onClick={handleClick}>
      <Input
        // variant={variant}
        _hover={{
          cursor: isClickComp ? 'pointer' : '',
        }}
        border={'1px solid #000920'}
        borderRadius={borderRadius}
        readOnly={isClickComp}
        isDisabled={isDisabled}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <InputRightElement
        onClick={handleResultClick}
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
