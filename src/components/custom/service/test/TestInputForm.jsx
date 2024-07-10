import { Box, WrapItem } from '@chakra-ui/react';
import { TestInput } from 'src/components';

const TestInputForm = (props) => {
  const { w = '24%', maxW = '160px' } = props;
  const { fontWeight = 700, fontSize = { md: '80px' } } = props;
  const { value = '', onChange } = props;
  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e);
      /*
      (e) => {
        setValue(e.target.value);
      }
      */
    }
  };
  return (
    <WrapItem w={w} maxW={maxW}>
      <Box w={'100%'} aspectRatio={1}>
        <TestInput
          value={value}
          fontWeight={fontWeight}
          fontSize={fontSize}
          onChange={handleOnChange}
        />
      </Box>
    </WrapItem>
  );
};

export default TestInputForm;
