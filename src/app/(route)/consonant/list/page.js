'use client';

import { useEffect, useState } from 'react';
import { Box, Center, HStack, Image, VStack } from '@chakra-ui/react';
import { TYPE_CONSONANT } from '@/constants/common';
import { GText, StepMain, Navbar } from '@/components';
import useModal from '@/hooks/useModal';
import ConsonantTree from '@/svgs/consonant-tree.svg';
import ConsonantLeafLeft from '@/svgs/consonant-leaf-left.svg';
import ConsonantLeafRight from '@/svgs/consonant-leaf-right.svg';
import DefaultLeafLeft from '@/svgs/default-leaf-left.svg';
import DefaultLeafRight from '@/svgs/default-leaf-right.svg';
import ListBack from '@/svgs/list-back.svg';
import utils from '@/utils/index';

const ConsonantListPage = () => {
  const type = TYPE_CONSONANT;
  const { openModal } = useModal();

  const listData = [
    { title: '1. ㅁ' },
    { title: '2. ㅂ' },
    { title: '3. ㄴ' },
    { title: '4. ㅈ' },
    { title: '5. ㄷ' },
    { title: '6. ㅅ' },
    { title: '7. ㄱ' },
    { title: '8. ㅎ' },
    { title: '9. ㄸ' },
    { title: '10. ㅌ' },
    { title: '11. ㅃ' },
    { title: '12. ㅍ' },
    { title: '13. ㄲ' },
    { title: '14. ㅋ' },
    { title: '15. ㅉ' },
    { title: '16. ㅊ' },
    { title: '17. ㅆ' },
    { title: '18. ㄹ' },
    { title: `19.\n종성ㅁ`, isLineChange: true },
    { title: '20.\n종성ㅂ', isLineChange: true },
    { title: '21.\n종성ㄱ', isLineChange: true },
    { title: '22.\n종성ㅇ', isLineChange: true },
    { title: '23.\n종성ㄹ', isLineChange: true },
    { title: '24.\n종성ㄴ', isLineChange: true },
    { title: '25.\n종성ㄷ', isLineChange: true },
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
              src={
                index % 2 === 1 ? ConsonantLeafLeft.src : ConsonantLeafRight.src
              }
            />
            <Center
              position={'absolute'}
              pt={'10px'}
              // pl={index % 2 === 1 ? '30px' : ''}
              pl={'30px'}
              pb={data?.isLineChange ? '10px' : ''}
            >
              <VStack spacing={'5px'}>
                {utils.parseTextLine(data?.title).map((splitText, index) => {
                  const boxKey = `boxKey_${index}`;
                  return (
                    <Box key={boxKey}>
                      <GText
                        fontWeight={700}
                        fontSize={{ md: '70px' }}
                        color={'#FFF'}
                        lineHeight={'72px'}
                        textShadow={'0px 4px 10px #00000059'}
                      >
                        {splitText}
                      </GText>
                    </Box>
                  );
                })}
                <Center
                  w={'186px'}
                  h={'78px'}
                  borderRadius={'40px'}
                  bg={'#0C7506'}
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
            </Center>
          </Center>
        </HStack>
      </Box>
    );
  };

  return (
    <StepMain type={type} paddingBottom={'0px'}>
      <Navbar type={type} text={'자음 듣기'} count={1} maxCount={25} />
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
          <Image src={ConsonantTree.src} />
        </Center>
      </Box>
      <Box position={'fixed'} zIndex={2} bottom={0} w={'100%'}>
        <Image src={ListBack.src} />
      </Box>
    </StepMain>
  );
};

export default ConsonantListPage;
