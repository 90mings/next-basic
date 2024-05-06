'use client';

import { useEffect, useState } from 'react';
import { Box, Center, HStack, Image, VStack } from '@chakra-ui/react';
import { TYPE_SUBJECT } from '@/constants/common';
import { GText, StepMain, Navbar } from '@/components';
import useModal from '@/hooks/useModal';
import SubJectTree from '@/svgs/subject-tree.svg';
import SubJectMenu from '@/svgs/subject-menu.svg';
import ListBack from '@/svgs/list-back.svg';

const SubjectListPage = () => {
  const type = TYPE_SUBJECT;
  const { openModal } = useModal();

  const listData = [
    { title: '종교' },
    { title: '관공서' },
    { title: '인터넷' },
    { title: '전화' },
    { title: '병원' },
    { title: '여행' },
    { title: '시간' },
    { title: '쇼핑' },
    { title: '음식' },
    { title: '가족' },
  ];
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
          console.log('click');
        }}
        w={'100%'}
        pr={'85px'}
        pl={'150px'}
        // px={'86px'}
        // pl={'320px'}
        // pr={'320px'}
      >
        <HStack justifyContent={index % 2 === 1 ? 'start' : 'end'}>
          <Center position={'relative'}>
            <Image src={SubJectMenu.src} />
            <Box position={'absolute'} bottom={'30px'}>
              <VStack>
                <GText
                  fontWeight={700}
                  fontSize={{ md: '70px' }}
                  color={'#FFF'}
                  textShadow={'0px 4px 10px #00000059'}
                >
                  {data.title}
                </GText>
                <Center
                  w={'186px'}
                  h={'78px'}
                  borderRadius={'40px'}
                  bg={'#9C180E'}
                >
                  <GText
                    fontWeight={700}
                    fontSize={{ md: '34px' }}
                    color={'#FFF'}
                  >
                    0/10단계
                  </GText>
                </Center>
              </VStack>
            </Box>
          </Center>
        </HStack>
      </Box>
    );
  };

  return (
    <StepMain type={type} paddingBottom={'0px'}>
      <Navbar type={type} text={'주제별 듣기'} count={1} maxCount={10} />
      <Box
        zIndex={3}
        position={'relative'}
        w="100%"
        h={'calc(100vh - 100px)'}
        overflow={'auto'}
      >
        <VStack
          position={'absolute'}
          zIndex={9}
          w={'100%'}
          top={0}
          spacing={'20px'}
        >
          {listData.map((item, index) => {
            const key = `listData${index}`;
            return listItemCard(key, index, item);
          })}
        </VStack>
        <Center zIndex={9}>
          <Image src={SubJectTree.src} />
        </Center>
      </Box>
      <Box position={'fixed'} zIndex={2} bottom={0} w={'100%'}>
        <Image src={ListBack.src} />
      </Box>
    </StepMain>
  );
};

export default SubjectListPage;
