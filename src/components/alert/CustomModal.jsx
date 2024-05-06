'use client';

import { Box, VStack, Center, HStack } from '@chakra-ui/layout';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/modal';
import { GText, DefaultButton } from '@/components';
import useModal from '@/hooks/useModal';
import { Image } from '@chakra-ui/react';

import Ok from '@/svgs/alert-ok.svg';
import No from '@/svgs/alert-no.svg';
import Check from '@/svgs/alert-check.svg';
import Re from '@/svgs/alert-re.svg';
import Good from '@/svgs/alert-good.svg';

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
    console.log('handleOnClick');
    if (onAgree) {
      onAgree();
    }
  };

  const handleOnClickCancel = () => {
    console.log('handleOnClickCancel');
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
    <Modal isOpen={isOpen} onClose={handleFinaly} size="sm">
      <ModalOverlay />
      <ModalContent
        alignSelf="center"
        borderRadius={'40px'}
        w={'100%'}
        maxW={'700px'}
        minH={'540px'}
        h={'340px'}
        maxH={'340px'}
        px={'50px'}
      >
        <ModalBody p={0} h="100%">
          <VStack spacing={0} justifyContent={'space-between'} h="100%">
            <Box w={'100%'} pt={'50px'}>
              <VStack spacing={'20px'}>
                <Box>
                  <Image src={setImage()} />
                </Box>
                <Box>
                  <GText
                    fontWeight={700}
                    fontSize={{ md: '80px' }}
                    lineHeight={'95px'}
                    textAlign={'center'}
                    color={'#000'}
                  >
                    {setText()}
                  </GText>
                </Box>
              </VStack>
            </Box>

            <Box w={'100%'} pt={'54px'} pb={'40px'}>
              <Center w="100%" h={'80px'}>
                <HStack w="100%" h="100%" justifyContent="center">
                  <Box w={onCancel ? '50%' : '100%'} h="100%">
                    <DefaultButton
                      onClick={handleOnClick}
                      theme="info"
                      borderRadius={'10px'}
                      size="sm"
                      text={onAgreeText}
                      fontSize={{ md: '30px', lg: '30px', sm: '32px' }}
                    />
                  </Box>
                  {onCancel && (
                    <Box w="50%" h="100%">
                      <DefaultButton
                        onClick={handleOnClickCancel}
                        theme="info"
                        outline
                        borderRadius={'10px'}
                        size="sm"
                        text={'넘어가기'}
                        fontSize={{ md: '30px', lg: '30px', sm: '32px' }}
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
