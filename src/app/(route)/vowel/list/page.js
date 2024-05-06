'use client';

import { useEffect, useState } from 'react';
import { Box, Center, HStack, Image, VStack } from '@chakra-ui/react';
import { TYPE_VOWEL } from '@/constants/common';
import { GText, StepMain, Navbar } from '@/components';
import useModal from '@/hooks/useModal';
import VowelTree from '@/svgs/vowel-tree.svg';
import VowelLeafLeft from '@/svgs/vowel-leaf-left.svg';
import VowelLeafRight from '@/svgs/vowel-leaf-right.svg';
import DefaultLeafLeft from '@/svgs/default-leaf-left.svg';
import DefaultLeafRight from '@/svgs/default-leaf-right.svg';
import ListBack from '@/svgs/list-back.svg';
import utils from '@/utils/index';

const ConsonantListPage = () => {
  const type = TYPE_VOWEL;
  const { openModal } = useModal();

  const listData = [
    {
      title: '1. 아',
      fontSize: { md: '90px' },
      lineHeight: '108px',
      isHiddenCount: false,
    },
    {
      title: '2. 우',
      fontSize: { md: '90px' },
      lineHeight: '108px',
      isHiddenCount: false,
    },
    {
      title: '3. 이',
      fontSize: { md: '90px' },
      lineHeight: '108px',
      isHiddenCount: false,
    },
    {
      title: '4. 에,애',
      fontSize: { md: '90px' },
      lineHeight: '108px',
      isHiddenCount: false,
    },
    {
      title: '5. 오',
      fontSize: { md: '90px' },
      lineHeight: '108px',
      isHiddenCount: false,
    },
    {
      title: '6. 어',
      fontSize: { md: '90px' },
      lineHeight: '108px',
      isHiddenCount: false,
    },
    {
      title: '7. 으',
      fontSize: { md: '90px' },
      lineHeight: '108px',
      isHiddenCount: false,
    },
    {
      title: '8.\n이중모음',
      isLineChange: true,
      fontSize: { md: '70px' },
      lineHeight: '84px',
      isHiddenCount: false,
    },
    {
      title: '9.\n단어채우기1',
      isLineChange: true,
      fontSize: { md: '50px' },
      lineHeight: '60px',
      isHiddenCount: true,
    },
    {
      title: '10.\n단어채우기2',
      isLineChange: true,
      fontSize: { md: '50px' },
      lineHeight: '60px',
      isHiddenCount: true,
    },
  ];

  listData.reverse();

  useEffect(() => {
    /*
    setTimeout(() => {
      openModal({
        text: '연습할 단어들을<br />먼저 들어보세요.',
      });
    });
    */
  }, []);

  const listItemCard = (key, index, data) => {
    return (
      <Box
        key={key}
        onClick={() => {
          console.log('click', index + 1);
        }}
        position={'absolute'}
        w={'100%'}
        top={`${290 * index}`}
        // pr={'85px'}
        pl={'40px'}
        // px={'86px'}
        // pl={'320px'}
        // pr={'320px'}
      >
        <HStack justifyContent={index % 2 === 1 ? 'start' : 'end'}>
          <Center position={'relative'}>
            <Image
              src={index % 2 === 1 ? VowelLeafLeft.src : VowelLeafRight.src}
            />
            <Center
              position={'absolute'}
              pt={'10px'}
              // pl={index % 2 === 1 ? '30px' : ''}
              pl={'30px'}
              pb={data?.isLineChange ? '10px' : ''}
            >
              <VStack spacing={0}>
                {utils.parseTextLine(data?.title).map((splitText, index) => {
                  const boxKey = `boxKey_${index}`;
                  return (
                    <Box key={boxKey}>
                      <GText
                        fontWeight={700}
                        fontSize={data?.fontSize}
                        color={'#FFF'}
                        lineHeight={data?.lineHeight}
                        textShadow={'0px 4px 10px #00000059'}
                      >
                        {splitText}
                      </GText>
                    </Box>
                  );
                })}
                {data?.isHiddenCount === false && (
                  <Center
                    w={'186px'}
                    h={'78px'}
                    borderRadius={'40px'}
                    bg={'#8D6033'}
                  >
                    <GText
                      fontWeight={700}
                      fontSize={{ md: '34px' }}
                      color={'#FFF'}
                    >
                      0/10단계
                    </GText>
                  </Center>
                )}
              </VStack>
            </Center>
          </Center>
        </HStack>
      </Box>
    );
  };

  return (
    <StepMain type={type} paddingBottom={'0px'}>
      <Navbar type={type} text={'모음 듣기'} count={1} maxCount={10} />
      <Box
        zIndex={3}
        position={'relative'}
        w="100%"
        h={'calc(100vh - 100px)'}
        overflow={'auto'}
      >
        <Box position={'absolute'} zIndex={9} w={'100%'} top={0}>
          {listData.map((item, index) => {
            const key = `listData${index}`;
            return listItemCard(key, index, item);
          })}
        </Box>
        <Center zIndex={9}>
          <Image src={VowelTree.src} />
        </Center>
      </Box>
      <Box position={'fixed'} zIndex={2} bottom={0} w={'100%'}>
        <Image src={ListBack.src} />
      </Box>
    </StepMain>
  );
};

export default ConsonantListPage;
