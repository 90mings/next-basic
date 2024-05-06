'use client';

import {
  Box,
  Center,
  HStack,
  Image,
  Tab,
  TabList,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { SimpleNavbar, GText } from '@/components';
import { useState } from 'react';

import Rank1 from '@/svgs/rank1.svg';
import Rank2 from '@/svgs/rank2.svg';
import Rank3 from '@/svgs/rank3.svg';
import Rank from '@/svgs/rank.svg';

const MyPageRank = () => {
  const [voiceType, setVoiceType] = useState(0);

  const setTabFontColor = (index) => {
    if (voiceType === index) {
      return '#FFF';
    }
    return '#186F81';
  };

  const setTabBgColor = (index) => {
    if (voiceType === index) {
      return '#218CA3';
    }
    return '#FFF';
  };

  const rankInfo = (props) => {
    const { rank } = props;
    const setRankImage = (rank) => {
      if (rank === 1) {
        return <Image src={Rank1.src} />;
      }
      if (rank === 2) {
        return <Image src={Rank2.src} />;
      }
      if (rank === 3) {
        return <Image src={Rank3.src} />;
      }
      return (
        <Center position={'relative'}>
          <Image src={Rank.src} />;
          <Center position={'absolute'} w={'100%'} h={'100%'} top={'10px'}>
            <GText color="#FFF" fontWeight={700} fontSize={'38px'}>
              {rank}위
            </GText>
          </Center>
        </Center>
      );
    };

    return (
      <HStack alignItems={'center'} spacing={'20px'}>
        <Box>{setRankImage(rank)}</Box>
        <Box>
          <VStack>
            <Box w={'100%'}>
              <GText fontWeight={700} lineHeight={'45px'}>
                김일등
              </GText>
            </Box>
            <Box w={'100%'}>
              <GText
                fontWeight={500}
                fontSize={{ md: '28px' }}
                color={'#2683FB'}
                lineHeight={'35px'}
              >
                학습시간 : 20분
              </GText>
            </Box>
          </VStack>
        </Box>
      </HStack>
    );
  };
  const rankCard = (props) => {
    return (
      <Box
        w={'100%'}
        h={'174px'}
        py={'20px'}
        pl={'40px'}
        borderRadius={'40px'}
        bg={'#FFF'}
      >
        {rankInfo(props)}
      </Box>
    );
  };

  return (
    <main>
      <Box position={'relative'} h="100vh" bg="#E7FBFF">
        <SimpleNavbar text="랭킹" bg={'#5DCBE3'} fontColor={'#FFF'} />
        <Box w={'100%'} px={'50px'} py={'30px'}>
          <Tabs
            h={'80px'}
            w="100%"
            variant="toggleButton"
            index={voiceType}
            onChange={async (index) => {
              setVoiceType(index);
            }}
            bg={'#E7FBFF'}
            px="50px"
          >
            <TabList w="100%">
              <HStack w="100%" h="80px" spacing={0}>
                <Tab w="50%" h="100%" bg={setTabBgColor(0)}>
                  <GText
                    fontWeight={600}
                    fontSize={{ md: '30px' }}
                    color={setTabFontColor(0)}
                  >
                    금주랭킹
                  </GText>
                </Tab>
                <Tab w="50%" h="100%" bg={setTabBgColor(1)}>
                  <GText
                    fontWeight={600}
                    fontSize={{ md: '30px' }}
                    color={setTabFontColor(1)}
                  >
                    월간랭킹
                  </GText>
                </Tab>
              </HStack>
            </TabList>
          </Tabs>
        </Box>

        <Box
          w="100%"
          h={'calc(100vh - 240px - 180px)'}
          px={'50px'}
          pb={'30px'}
          overflow={'auto'}
        >
          <VStack spacing={'20px'}>
            {rankCard({ rank: 1 })}
            {rankCard({ rank: 2 })}
            {rankCard({ rank: 3 })}
            {rankCard({ rank: 4 })}
            {rankCard({ rank: 12 })}
          </VStack>
        </Box>

        <Box
          w={'100%'}
          h={'180px'}
          bg={'#FFF'}
          position={'fixed'}
          bottom={0}
          borderTopRadius={'40px'}
          borderTop={'2px solid #00000080'}
        >
          <Box w={'100%'} h={'100%'}>
            <HStack h={'100%'}>
              <Box w={'40%'} h={'100%'} borderRight={'1px solid #DDDDDD'}>
                <Center h={'100%'}>
                  <GText
                    fontWeight={700}
                    fontSize={{ md: '48px' }}
                    color={'#218CA3'}
                  >
                    나의 랭킹
                  </GText>
                </Center>
              </Box>
              <Box w={'60%'} h={'100%'}>
                <Center h={'100%'}>{rankInfo({ rank: 40 })}</Center>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default MyPageRank;
