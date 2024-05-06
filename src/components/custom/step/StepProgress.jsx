'use client';

import { Wrap, Box, Center, HStack, Image, WrapItem } from '@chakra-ui/react';
import { GText } from '@/components';
import Bad from '@/svgs/bad.svg';
import Good from '@/svgs/good.svg';

const StepProgress = (props) => {
  const { datas = [] } = props;
  return (
    <Box w={'100%'} pt={'50px'} px={'50px'}>
      <Wrap justify={'center'}>
        {datas.map((data, index) => {
          // const isRetTest = data
          const dataIndex = index + 1;
          const key = `testKey${dataIndex}`;
          return (
            <WrapItem key={key}>
              <Center
                position={'relative'}
                w={'60px'}
                h={'60px'}
                borderRadius={'50%'}
                bg={'#FFF'}
                border={'1px solid'}
                borderColor={'#00000080'}
              >
                <GText
                  fontWeight={600}
                  fontSize={{ lg: '26px', md: '26px', sm: '26px' }}
                  color={'#555'}
                >
                  {dataIndex}
                </GText>
                {/*
              <Box w="100%" h="100%" borderRadius={'50%'} position={'absolute'}>
                <Image w="100%" src={Bad.src} />
              </Box>
              */}
              </Center>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};

export default StepProgress;
