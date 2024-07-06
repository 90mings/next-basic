'use client';

import {
  Box,
  VStack,
  Center,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Image,
} from '@chakra-ui/react';
import { GText, DefaultButton } from '@/components';
import useModal from '@/hooks/useModal';

import Ok from '@/svgs/alert-ok.svg';
import No from '@/svgs/alert-no.svg';
import Check from '@/svgs/alert-check.svg';
import Re from '@/svgs/alert-re.svg';
import Good from '@/svgs/alert-good.svg';
import utils from '@/utils/index';
import { RADIUS_S_10 } from '@/constants/common';
import { RADIUS_S_40 } from 'src/constants/common';

const CustomModal = () => {
  const { modal, closeModal } = useModal();
  const { isOpen, onClose } = modal;
  const {
    onAgree,
    onAgreeText = '확인',
    onCancel,
    onCancelText = '넘어가기',
  } = modal;
  const { text } = modal;
  const { status, step } = modal;

  const handleFinaly = () => {
    closeModal();
  };

  const handleOnClick = () => {
    if (onAgree) {
      onAgree();
    }
  };

  const handleOnClickCancel = () => {
    if (onCancel) {
      onCancel();
    }
    handleFinaly();
  };

  const setImage = () => {
    if (status === 0) {
      return null;
    }
    if (status === 1) {
      return Ok.src;
    }
    if (status === 2) {
      return No.src;
    }
    if (status === 3) {
      return Check.src;
    }
    if (status === 4) {
      return Re.src;
    }
    if (status === 5) {
      return Good.src;
    }
  };

  const setText = () => {
    if (status === 0) {
      return '';
    }
    if (status === 1) {
      return '정답';
    }
    if (status === 2) {
      return '오답';
    }
    if (status === 3) {
      return `${step}단계 완료`;
    }
    if (status === 4) {
      return `${step}점 이상 통과`;
    }
    if (status === 5) {
      return `테스트 통과`;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleFinaly}
      // size="lg"
    >
      <ModalOverlay />
      <ModalContent
        alignSelf="center"
        borderRadius={RADIUS_S_40}
        w={'100%'}
        maxW={'87.5%'}
        h={'100%'}
        maxH={'40.3vh'}
        px={'6.25%'}
      >
        <ModalBody
          w={'100%'}
          h={'100%'}
          position={'relative'}
          pt={'12.3%'}
          pb={'7.4%'}
          px={0}
        >
          <VStack h={'100%'} justifyContent={'space-between'} spacing={0}>
            <Center w={'100%'}>
              <Box
                minW={{
                  xl: '100px',
                  lg: '90px',
                  md: '80px',
                  sm: '70px',
                  xs: '60px',
                }}
                w={'28.57%'}
              >
                <Image src={setImage()} />
              </Box>
            </Center>

            <Box>
              <Center h={'100%'}>
                <GText
                  fontWeight={700}
                  textAlign={'center'}
                  color={'#000'}
                  fontSize={80}
                >
                  {setText()}
                </GText>
              </Center>
            </Box>

            <Box w={'100%'} h={'19%'}>
              <Center w={'100%'} h={'100%'}>
                <HStack w={'100%'} h={'100%'} justifyContent="center">
                  <Box
                    w={
                      status === 2 && utils.isNotEmpty(onCancel)
                        ? '50%'
                        : '100%'
                    }
                    h={'100%'}
                  >
                    <DefaultButton
                      onClick={handleOnClick}
                      theme="info"
                      borderRadius={RADIUS_S_10}
                      size="sm"
                      text={onAgreeText}
                      fontSize={30}
                    />
                  </Box>
                  {status === 2 && utils.isNotEmpty(onCancel) && (
                    <Box w={'50%'} h={'100%'}>
                      <DefaultButton
                        onClick={handleOnClickCancel}
                        theme="info"
                        outline
                        fontColor={'#75B125'}
                        borderRadius={RADIUS_S_10}
                        size="sm"
                        text={'넘어가기'}
                        fontSize={30}
                      />
                    </Box>
                  )}
                </HStack>
              </Center>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
