'use client';

import { Button, HStack, Text } from '@chakra-ui/react';

const DefaultButton = (props) => {
  const { theme, outline = false, leftIcon, rightIcon } = props;

  const {
    size = 'md',
    fontSize = '38px',
    fontWeight = 600,
    lineHeight,
  } = props;

  const { borderRadius, borderColor, bg } = props;
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
      w={'100%'}
      h={'100%'}
      id={id}
      onClick={onClick}
      isDisabled={isDisabled}
      bg={bg || `${tempTheme}.default`}
      _hover={{}}
      _active={{
        bg: isDisabled ? '' : bg ? '' : `${tempTheme}.activeColor`,
      }}
      color={`${tempTheme}.fontColor`}
      borderRadius={borderRadius}
      borderColor={borderColor || `${tempTheme}.borderColor`}
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
