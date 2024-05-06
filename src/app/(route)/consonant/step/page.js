'use client';

import { useEffect, useState } from 'react';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import { TYPE_CONSONANT } from '@/constants/common';
import {
  GText,
  StepMain,
  StepDoubleListenButton,
  Navbar,
  StepProgress,
} from '@/components';
import useModal from '@/hooks/useModal';

const StepPage = () => {
  const [isPause, setIsPause] = useState(false);
  const type = TYPE_CONSONANT;
  const { openModal } = useModal();

  const datas = [
    { step1: true },
    { step2: false },
    { step3: false },
    { step4: true },
    { step5: false },
    { step6: false },
    { step7: true },
    { step8: false },
    { step9: false },
    { step10: true },
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

  return (
    <StepMain type={type} paddingBottom={'50px'}>
      <Navbar type={type} text={'테스트'} />

      <StepProgress datas={datas} />

      <Center w={'100%'} px={'50px'} pt={'50px'}>
        <GText fontWeight={700} color={'#000000'}>
          들려주는 말소리와 일치하는 단어를 고르세요.
        </GText>
      </Center>

      {/* 2항목 */}
      <Box w="100%" px={'50px'} pt={'50px'}>
        <VStack>
          <HStack w="100%" justifyContent={'space-around'}>
            <Center
              w="340px"
              h="340px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                마비
              </GText>
            </Center>
            <Center
              w="340px"
              h="340px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                차비
              </GText>
            </Center>
          </HStack>
        </VStack>
      </Box>

      {/* 3항목 */}
      {/*  
      <Box w="100%" px={'50px'} pt={'50px'}>
        <VStack spacing={'20px'}>
          <Center
            w="100%"
            h="220px"
            borderRadius={'40px'}
            border={'2px solid #00000080'}
            bg={'#FFF'}
          >
            <GText fontWeight={700} fontSize={{ md: '80px' }}>
              아
            </GText>
          </Center>
          <Center
            w="100%"
            h="220px"
            borderRadius={'40px'}
            border={'2px solid #00000080'}
            bg={'#FFF'}
          >
            <GText fontWeight={700} fontSize={{ md: '80px' }}>
              음
            </GText>
          </Center>
          <Center
            w="100%"
            h="220px"
            borderRadius={'40px'}
            border={'2px solid #00000080'}
            bg={'#FFF'}
          >
            <GText fontWeight={700} fontSize={{ md: '80px' }}>
              쉬
            </GText>
          </Center>
        </VStack>
      </Box>
    */}

      {/* 4항목 */}
      {/*
      <Box w="100%" px={'50px'} pt={'50px'}>
        <VStack spacing={'20px'}>
          <HStack w="100%" justifyContent={'space-around'}>
            <Center
              w="340px"
              h="340px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                아
              </GText>
            </Center>
            <Center
              w="340px"
              h="340px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                아
              </GText>
            </Center>
          </HStack>
          <HStack w="100%" justifyContent={'space-around'}>
            <Center
              w="340px"
              h="340px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                쉬
              </GText>
            </Center>
            <Center
              w="340px"
              h="340px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                이
              </GText>
            </Center>
          </HStack>
        </VStack>
      </Box>
  */}
      {/* 6항목 */}
      {/*
      <Box w="100%" px={'50px'} pt={'50px'}>
        <VStack spacing={'20px'}>
          <HStack w="100%" justifyContent={'space-around'}>
            <Center
              w="340px"
              h="220px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                아
              </GText>
            </Center>
            <Center
              w="340px"
              h="220px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                음
              </GText>
            </Center>
          </HStack>
          <HStack w="100%" justifyContent={'space-around'}>
            <Center
              w="340px"
              h="220px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                우
              </GText>
            </Center>
            <Center
              w="340px"
              h="220px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                쉬
              </GText>
            </Center>
          </HStack>
          <HStack w="100%" justifyContent={'space-around'}>
            <Center
              w="340px"
              h="220px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                이
              </GText>
            </Center>
            <Center
              w="340px"
              h="220px"
              borderRadius={'40px'}
              border={'2px solid #00000080'}
              bg={'#FFF'}
            >
              <GText fontWeight={700} fontSize={{ md: '80px' }}>
                스
              </GText>
            </Center>
          </HStack>
        </VStack>
      </Box>
*/}

      <StepDoubleListenButton
        isPause={isPause}
        type={type}
        // isSingle
        // isDisabled
        // isPause
        onClick={() => {
          setIsPause(!isPause);
          console.log('StepDoubleListenButton onClick');
        }}
        onClickRestart={() => {
          console.log('StepDoubleListenButton onClickRestart');
        }}
      />
    </StepMain>
  );
};

export default StepPage;
