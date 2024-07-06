'use client';

import { Button, HStack } from '@chakra-ui/react';
import { GText } from '@/components';

const DefaultButton = (props) => {
  const { theme, outline = false, leftIcon, rightIcon } = props;

  const { size = 'md', fontSize, fontWeight, lineHeight, fontColor } = props;

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
        <GText
          color={fontColor ? fontColor : '#FFF'}
          fontSize={fontSize}
          fontWeight={fontWeight || 600}
          lineHeight={lineHeight}
        >
          {text}
        </GText>
        {rightIcon || null}
      </HStack>
    </Button>
  );
};

export default DefaultButton;
