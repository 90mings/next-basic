'use client';

import { Button, HStack, Text } from '@chakra-ui/react';

const DefaultButton = (props) => {
  const { theme, outline = false, leftIcon, rightIcon } = props;

  const {
    size = 'md',
    fontSize = '16px',
    fontWeight = 400,
    lineHeight,
  } = props;
  const { id, text = '버튼' } = props;

  const { onClick, active, isDisabled = false } = props;

  let tempTheme = 'positive';
  if (theme !== undefined) {
    tempTheme = theme;
  }
  if (outline) {
    tempTheme += '.outline';
  }

  return (
    <Button
      id={id}
      onClick={onClick}
      isDisabled={isDisabled}
      bg={`${tempTheme}.default`}
      _hover={{}}
      _active={{
        bg: isDisabled ? '' : `${tempTheme}.activeColor`,
      }}
      color={`${tempTheme}.fontColor`}
      borderColor={`${tempTheme}.borderColor`}
      size={size}
      _disabled={{
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: 0.5,
      }}
    >
      <HStack alignItems="center">
        {leftIcon || null}
        <Text
          color={active ? '#02CD80' : ''}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
        >
          {text}
        </Text>
        {rightIcon || null}
      </HStack>
    </Button>
  );
};

export default DefaultButton;
