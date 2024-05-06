'use client';

import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { SimpleNavbar, GText } from '@/components';

import {
  TYPE_CONSONANT,
  TYPE_RING_SOUND,
  TYPE_SUBJECT,
  TYPE_VOWEL,
} from '@/constants/common';

import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

// MyPage
const MyPage = () => {
  const router = useRouter();

  const chartData = {
    data: {
      datasets: [
        {
          data: [0, 0], // 카운트, 총 수
          borderColor: ['#5BCBE3', '#EEE'],
          backgroundColor: ['#5BCBE3', '#EEE'],
          borderRadius: [0, 0],
          tooltips: { enabled: false },
          hover: { mode: null },
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
      hover: {
        mode: false,
      },
    },
  };

  const progressCard = (data) => {
    const { type } = data;
    const { count, maxCount, isComplete } = data;
    let chartDataSet = JSON.parse(JSON.stringify(chartData));

    const setColor = (type) => {
      if (type === TYPE_RING_SOUND) {
        return '#5DCBE3';
      }
      if (type === TYPE_VOWEL) {
        return '#FEC751';
      }
      if (type === TYPE_CONSONANT) {
        return '#75B125';
      }
      if (type === TYPE_SUBJECT) {
        return '#AC70AF';
      }
    };
    chartDataSet.data.datasets[0].borderColor[0] = setColor(type);
    chartDataSet.data.datasets[0].backgroundColor[0] = setColor(type);
    chartDataSet.data.datasets[0].data = [count, maxCount - count];

    const setTitle = () => {
      if (type === TYPE_RING_SOUND) {
        return '링사운드 듣기';
      }
      if (type === TYPE_SUBJECT) {
        return '주제별 듣기';
      }
      if (type === TYPE_CONSONANT) {
        return '자음 듣기';
      }
      if (type === TYPE_VOWEL) {
        return '모음 듣기';
      }
    };

    const setStateText = () => {
      if (isComplete) {
        return '테스트 완료';
      }
      return '테스트 이전';
    };

    const setStateFontColor = () => {
      if (isComplete) {
        return '#2683FB';
      }
      return '#E13529';
    };

    return (
      <Center
        w={'100%'}
        h={'420px'}
        maxH={'420px'}
        bg={'#FFF'}
        borderRadius={'20px'}
      >
        <VStack
          spacing={0}
          w={'100%'}
          h={'100%'}
          justifyContent={'space-between'}
        >
          <Center h={'100%'} w={'100%'} py={'20px'}>
            <VStack h={'100%'} justifyContent={'space-between'}>
              <GText fontWeight={700} color="#000">
                {setTitle()}
              </GText>
              <Center position={'relative'}>
                <Box w={'180px'} h={'180px'}>
                  <Doughnut
                    options={chartDataSet.options}
                    data={chartDataSet.data}
                  />
                </Box>
                <Center position={'absolute'}>
                  <GText
                    fontWeight={700}
                    fontSize={{ md: '30px' }}
                  >{`${count}/${maxCount}`}</GText>
                </Center>
              </Center>
              <GText
                fontWeight={500}
                fontSize={{ md: '28px' }}
                color={setStateFontColor()}
              >
                {setStateText()}
              </GText>
            </VStack>
          </Center>
          <Center
            w={'100%'}
            borderTop={'2px solid #EEEEEE'}
            pt={'20px'}
            pb={'24px'}
          >
            <GText fontWeight={700} fontSize={{ md: '28px' }}>
              2시간 28분
            </GText>
          </Center>
        </VStack>
      </Center>
    );
  };

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#FAFFE7">
        <SimpleNavbar text="프로필" bg={'#75B125'} fontColor={'#FFF'} />
        <Box w="100%" pt={'50px'} px="50px">
          <VStack spacing={'20px'}>
            <Box w={'100%'}>
              <HStack spacing={'20px'}>
                {progressCard({
                  type: TYPE_RING_SOUND,
                  count: 2,
                  maxCount: 5,
                  isComplete: true,
                })}
                {progressCard({
                  type: TYPE_VOWEL,
                  count: 5,
                  maxCount: 10,
                  isComplete: true,
                })}
              </HStack>
            </Box>
            <Box w={'100%'}>
              <HStack spacing={'20px'}>
                {progressCard({
                  type: TYPE_CONSONANT,
                  count: 4,
                  maxCount: 25,
                  isComplete: false,
                })}
                {progressCard({
                  type: TYPE_SUBJECT,
                  count: 6,
                  maxCount: 10,
                  isComplete: false,
                })}
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Box>
    </main>
  );
};

export default MyPage;
