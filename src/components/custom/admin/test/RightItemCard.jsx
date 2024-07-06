'use client';

import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import utils from '@/utils/index';

const RightItemCard = (props) => {
  const { data } = props;
  const [type1, setType1] = useState({});
  const [type2, setType2] = useState({});
  const [type3, setType3] = useState({});
  const [type4, setType4] = useState({});
  const [type5, setType5] = useState({});
  const [type6, setType6] = useState({});
  const [type7, setType7] = useState({});

  useEffect(() => {
    if (data?.testResultObject) {
      const jsonData = JSON.parse(data.testResultObject);
      setType1(jsonData[0]);
      setType2(jsonData[1]);
      setType3(jsonData[2]);
      setType4(jsonData[3]);
      setType5(jsonData[4]);
      setType6(jsonData[5]);
      setType7(jsonData[6]);
    }
  }, [data]);

  const testCategoryCard = (data) => {
    if (utils.isEmpty(data)) return;
    const type = Object.keys(data)[0];
    const value = data[type];
    let typeText = null;
    switch (Number(type)) {
      case 1:
        typeText = 'Ling6';
        break;
      case 2:
        typeText = '모음';
        break;
      case 3:
        typeText = '이중모음';
        break;
      case 4:
        typeText = '자음초성';
        break;
      case 5:
        typeText = '자음종성';
        break;
      case 6:
        typeText = '일음절';
        break;
      case 7:
        typeText = '문장';
        break;
      default:
        typeText = '없음';
        break;
    }

    return (
      <Center
        w={'100%'}
        h={'100%'}
        borderRight={type !== 7 ? '1px solid #DDD' : null}
      >
        <VStack spacing={1}>
          <Box>
            <Text fontWeight={400} fontSize={'16px'} color={'#666666'}>
              {typeText}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={800} fontSize={'21px'} color={'#000000'}>
              {value}
            </Text>
          </Box>
        </VStack>
      </Center>
    );
  };

  return (
    <Box
      w={'100%'}
      minW={'80px'}
      h={'130px'}
      px={'20px'}
      borderBottom={'1px solid #F1F1F1'}
    >
      <Box w={'100%'} h={'20px'}>
        <Text fontWeight={400} fontSize={'16px'}>
          {utils.parseDateToStr(data.createdAt, '.', true)} 검사결과
        </Text>
      </Box>
      <Center w={'100%'} h={'calc(100% - 20px)'}>
        <HStack
          w={'100%'}
          h={'70px'}
          justifyContent={'space-around'}
          spacing={0}
        >
          {testCategoryCard(type1)}
          {testCategoryCard(type2)}
          {testCategoryCard(type3)}
          {testCategoryCard(type4)}
          {testCategoryCard(type5)}
          {testCategoryCard(type6)}
          {testCategoryCard(type7)}
        </HStack>
      </Center>
    </Box>
  );
};

export default RightItemCard;
