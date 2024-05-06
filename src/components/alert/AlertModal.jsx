'use client';

import { Box, VStack, Center } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/modal';
import useModal from '@/hooks/useModal';
import utils from '@/utils/index';
import { GText, DefaultButton } from '@/components';

const AlertModal = () => {
  const { modal, closeModal } = useModal();

  const handleFinaly = () => {
    if (modal.onAgree) {
      modal.onAgree();
    }
    closeModal();
  };

  return (
    <Modal isOpen={modal.isOpen} onClose={handleFinaly} size="sm">
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
                <DefaultButton
                  onClick={modal.onAgree}
                  theme="info"
                  // leftIcon={<CustomIcon name="checkCircle" />}
                  size="sm"
                  borderRadius={'10px'}
                  fontSize={{ md: '30px', lg: '30px', sm: '32px' }}
                  text={modal.onAgreeText}
                />
              </Center>
            </Box>
          </VStack>
        </ModalBody>
        {/*
        <ModalBody p={0} h="100%">
          <Box w="100%" pt={'50px'}>
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
        </ModalBody>
        <ModalFooter h={'80px'} p={0} borderBottomRadius="8px" h="auto">
          <Center w="100%" h={'80px'} pb={'40px'}>
            <DefaultButton
              onClick={modal.onAgree}
              theme="info"
              // leftIcon={<CustomIcon name="checkCircle" />}
              size="sm"
              fontSize={{ md: '30px', lg: '30px', sm: '32px' }}
              text={modal.onAgreeText}
            />
          </Center>
        </ModalFooter>
        */}
      </ModalContent>
    </Modal>
  );
};

export default AlertModal;
