import { Center, WrapItem } from '@chakra-ui/react';
import { GText } from '@/components';

const FullStopTestInput = (props) => {
  const { w = '24%', maxW = '160px' } = props;
  const { fontWeight = 700, fontSize = { md: '80px' } } = props;
  return (
    <WrapItem w={w} maxW={maxW}>
      <Center alignItems={'end'} h={'100%'}>
        <GText fontWeight={fontWeight} fontSize={fontSize} color={'#000'}>
          .
        </GText>
      </Center>
    </WrapItem>
  );
};

export default FullStopTestInput;
