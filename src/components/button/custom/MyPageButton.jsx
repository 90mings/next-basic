'use client';

import { Button, HStack, Text } from '@chakra-ui/react';
import { GText } from '@/components';

const DefaultButton = (props) => {
  const { theme, outline = false, leftIcon, rightIcon } = props;

  const { size = 'md', fontSize, fontWeight, lineHeight, pr } = props;

  const { fontColor, borderRadius, borderColor, bg } = props;
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
      bg={bg}
      _hover={{}}
      _active={{
        bg: isDisabled ? '' : bg ? '' : `${tempTheme}.activeColor`,
      }}
      color={fontColor}
      borderRadius={borderRadius}
      borderColor={borderColor || `${tempTheme}.borderColor`}
      size={size}
      _disabled={{
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: 0.5,
      }}
    >
      <HStack
        w={'100%'}
        justifyContent={'space-between'}
        alignItems="center"
        pr={pr}
      >
        <HStack spacing={3}>
          {leftIcon || null}
          <GText
            color={active ? '#02CD80' : ''}
            fontSize={fontSize}
            fontWeight={fontWeight || 600}
            lineHeight={lineHeight}
          >
            {text}
          </GText>
        </HStack>
        {rightIcon || null}
      </HStack>
    </Button>
  );
};

export default DefaultButton;
