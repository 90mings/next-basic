'use client';

import {
  Box,
  Center,
  Image,
  VStack,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import Bad from '@/svgs/bad.svg';
import Good from '@/svgs/good.svg';
import { deviceInfoState } from 'src/stores/commonRecoil';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import utils from 'src/utils';
import { useChapter } from 'src/hooks/useChapter';

const StepProgress = (props) => {
  const { datas = [], type } = props;

  const { branchInfo } = useChapter();

  const deviceInfo = useRecoilValue(deviceInfoState);

  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);

  useEffect(() => {
    if (datas.length > 0) {
      const tempData = [];
      datas.map((data, index) => {
        const temp = { ...data };
        temp.index = index + 1;
        tempData.push(temp);
      });

      if (type) {
        setRow1(tempData.slice(0, 6));
        setRow2(tempData.slice(6, 12));
      } else if (tempData.length < 11) {
        setRow1(tempData);
        setRow2([]);
        setRow3([]);
      } else if (tempData.length < 25) {
        setRow1(tempData.slice(0, 10));
        setRow2(tempData.slice(10, 20));
        setRow3([]);
      } else {
        setRow1(tempData.slice(0, 10));
        setRow2(tempData.slice(10, 20));
        setRow3(tempData.slice(20));
      }
    } else {
      setRow1([]);
      setRow2([]);
      setRow3([]);
    }
  }, [datas]);

  const setRowH = () => {
    if (row3.length > 0) {
      return '33%';
    }
    if (row2.length > 0) {
      return '50%';
    }
    if (row1.length > 0) {
      return '100%';
    }
  };

  const handleItmeH = () => {
    if (!deviceInfo.isMobile) return '30px';
    if (row3.length > 0) {
      return '65%';
    }
    if (row2.length > 0) {
      return '60%';
    }
    if (row1.length < 7) {
      return '50%';
    } else if (row1.length > 6) {
      if (deviceInfo.w < 501) {
        return `${(deviceInfo.w - 20) / row1.length}%`;
      }
      return '50%';
    }
  };

  return (
    <Center
      w={'100%'}
      h={'100%'}
      // px={'20px'}
      // bg={'#EEEEEE'}
    >
      <VStack spacing={'3px'} w={'100%'} h={'100%'} justifyContent={'center'}>
        {row1.length > 0 && (
          <Grid
            alignItems={'center'}
            columnGap={'3px'}
            gap={'3px'}
            h={setRowH()}
            templateColumns={`repeat(${row1.length}, 1fr)`}
          >
            {row1.map((data, index) => {
              const key = `testRow1${index}`;
              return (
                <GridItem
                  key={key}
                  w={'auto'}
                  h={handleItmeH()}
                  minH={'30px'}
                  aspectRatio={1}
                  borderRadius={'50%'}
                  border={'1px solid'}
                  borderColor={'#00000080'}
                  bg={'#FFF'}
                >
                  <Center h={'100%'} position={'relative'}>
                    <Text
                      fontWeight={600}
                      fontSize={utils.isMobile() ? '1.2rem' : '18px'}
                      color={'#555'}
                      lineHeight={'10%'}
                    >
                      {data.index}
                    </Text>
                    {utils.isNotEmpty(data?.isCorrect) && (
                      <Box
                        w="100%"
                        h="100%"
                        borderRadius={'50%'}
                        position={'absolute'}
                      >
                        <Image
                          w="100%"
                          src={data.isCorrect ? Good.src : Bad.src}
                        />
                      </Box>
                    )}
                  </Center>
                </GridItem>
              );
            })}
          </Grid>
        )}
        {row2.length > 0 && (
          <Grid
            alignItems={'center'}
            columnGap={'3px'}
            gap={'3px'}
            h={setRowH()}
            templateColumns={`repeat(${row2.length}, 1fr)`}
          >
            {row2.map((data, index) => {
              const key = `testRow2${index}`;
              return (
                <GridItem
                  key={key}
                  w={'auto'}
                  h={handleItmeH()}
                  minH={'30px'}
                  aspectRatio={1}
                  borderRadius={'50%'}
                  border={'1px solid'}
                  borderColor={'#00000080'}
                  bg={'#FFF'}
                >
                  <Center h={'100%'} position={'relative'}>
                    <Text
                      fontWeight={600}
                      fontSize={utils.isMobile() ? '1.2rem' : '18px'}
                      color={'#555'}
                      lineHeight={'10%'}
                    >
                      {data.index}
                    </Text>
                    {utils.isNotEmpty(data?.isCorrect) && (
                      <Box
                        w="100%"
                        h="100%"
                        borderRadius={'50%'}
                        position={'absolute'}
                      >
                        <Image
                          w="100%"
                          src={data.isCorrect ? Good.src : Bad.src}
                        />
                      </Box>
                    )}
                  </Center>
                </GridItem>
              );
            })}
          </Grid>
        )}
        {row3.length > 0 && (
          <Grid
            alignItems={'center'}
            columnGap={'3px'}
            gap={'3px'}
            h={setRowH()}
            templateColumns={`repeat(${row3.length}, 1fr)`}
          >
            {row3.map((data, index) => {
              const key = `testRow3${index}`;
              return (
                <GridItem
                  key={key}
                  w={'auto'}
                  h={handleItmeH()}
                  minH={'30px'}
                  aspectRatio={1}
                  borderRadius={'50%'}
                  border={'1px solid'}
                  borderColor={'#00000080'}
                  bg={'#FFF'}
                >
                  <Center h={'100%'} position={'relative'}>
                    <Text
                      fontWeight={600}
                      fontSize={utils.isMobile() ? '1.2rem' : '18px'}
                      color={'#555'}
                      lineHeight={'10%'}
                    >
                      {data.index}
                    </Text>
                    {utils.isNotEmpty(data?.isCorrect) && (
                      <Box
                        w="100%"
                        h="100%"
                        borderRadius={'50%'}
                        position={'absolute'}
                      >
                        <Image
                          w="100%"
                          src={data.isCorrect ? Good.src : Bad.src}
                        />
                      </Box>
                    )}
                  </Center>
                </GridItem>
              );
            })}
          </Grid>
        )}
      </VStack>
    </Center>
  );
};

export default StepProgress;
