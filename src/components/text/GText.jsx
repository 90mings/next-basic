'use client';

import { Text, useBreakpointValue, useTheme } from '@chakra-ui/react';

const GText = ({
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  children = 'TEXT',
  textShadow,
}) => {
  const theme = useTheme();
  const themeFontSize = useBreakpointValue(theme.fontSizes);
  return (
    <Text
      textShadow={textShadow}
      fontWeight={fontWeight}
      fontSize={fontSize ? fontSize : themeFontSize}
      color={color ? color : '#000000'}
      lineHeight={lineHeight}
      textAlign={textAlign}
    >
      {children}
    </Text>
  );
};

export default GText;
