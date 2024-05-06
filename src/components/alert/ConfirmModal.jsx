'use client';

import { Box, HStack, VStack, Center } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/modal';
import { GText, CustomIcon, DefaultButton } from '@/components';
import useModal from '@/hooks/useModal';
import utils from '@/utils/index';

const ConfirmModal = () => {
  const { modal, closeModal } = useModal();
  return (
    <Modal isOpen={modal.isOpen} onClose={closeModal} size="sm">
      <ModalOverlay />
      <ModalContent
        alignSelf="center"
        borderRadius={'40px'}
        w={'100%'}
        maxW={'700px'}
        minH={'200px'}
        h={'340px'}
        maxH={'340px'}
        px={'50px'}
      >
        {modal.isClose === true && <ModalCloseButton w="30px" h="30px" />}

        <ModalBody p={0} h="100%">
          <VStack spacing={0} justifyContent={'space-between'} h="100%">
            <Box w={'100%'} pt={'50px'}>
              {utils.isNotEmpty(modal.text) && (
                <VStack spacing={1}>
                  {utils.parseTextLine(modal.text).map((splitText, index) => {
                    let textOption = null;
                    if (modal.textOptions.length > 0) {
                      if (modal.textOptions[index]) {
                        textOption = modal.textOptions[index];
                      }
                    }
                    const boxKey = `boxKey_${index}`;
                    return (
                      <Box key={boxKey}>
                        <GText
                          lineHeight="45px"
                          fontWeight={
                            textOption?.fontWeight ? textOption.fontWeight : 700
                          }
                          fontSize={
                            textOption?.fontSize ? textOption.fontSize : '38px'
                          }
                          textAlign={
                            textOption?.textAlign
                              ? textOption.textAlign
                              : 'center'
                          }
                          color={textOption?.color ? textOption.color : '#000'}
                        >
                          {splitText}
                        </GText>
                      </Box>
                    );
                  })}
                </VStack>
              )}
            </Box>
            <Box w={'100%'} pb={'40px'}>
              <Center w="100%" h={'80px'}>
                <HStack w="100%" h="100%" justifyContent="center">
                  <Box w="50%" h="100%">
                    <DefaultButton
                      onClick={modal.onAgree}
                      theme="info"
                      borderRadius={'10px'}
                      size="sm"
                      text={modal.onAgreeText}
                      fontSize={{ md: '30px', lg: '30px', sm: '32px' }}
                    />
                  </Box>
                  <Box w="50%" h="100%">
                    <DefaultButton
                      onClick={closeModal}
                      theme="info"
                      outline
                      borderRadius={'10px'}
                      size="sm"
                      text="취소"
                      fontSize={{ md: '30px', lg: '30px', sm: '32px' }}
                    />
                  </Box>
                </HStack>
              </Center>
            </Box>
          </VStack>
        </ModalBody>

        {/*
        <ModalBody py="20px">
          {utils.isNotEmpty(modal.text) && (
            <VStack spacing={1}>
              {utils.parseTextLine(modal.text).map((splitText, index) => {
                let textOption = null;
                if (modal.textOptions.length > 0) {
                  if (modal.textOptions[index]) {
                    textOption = modal.textOptions[index];
                  }
                }
                const boxKey = `boxKey_${index}`;
                return (
                  <Box key={boxKey}>
                    <Text
                      fontWeight={
                        textOption?.fontWeight ? textOption.fontWeight : 600
                      }
                      fontSize={
                        textOption?.fontSize ? textOption.fontSize : '16px'
                      }
                      textAlign={
                        textOption?.textAlign ? textOption.textAlign : 'center'
                      }
                      color={textOption?.color ? textOption.color : '#000920'}
                    >
                      {splitText}
                    </Text>
                  </Box>
                );
              })}
            </VStack>
          )}
        </ModalBody>
        <ModalFooter py={2} borderBottomRadius="8px">
          <HStack w="100%" justifyContent="center">
            <Box w="50%">
              <DefaultButton
                onClick={closeModal}
                theme="secondary"
                leftIcon={
                  <CustomIcon name="closeCircle" color="rgba(0, 9, 32, 0.5)" />
                }
                size="sm"
                text="취소"
              />
            </Box>
            <Box w="50%">
              <DefaultButton
                onClick={modal.onAgree}
                theme="info"
                leftIcon={<CustomIcon name="checkCircle" />}
                size="sm"
                text={modal.onAgreeText}
              />
            </Box>
          </HStack>
        </ModalFooter>
        */}
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
