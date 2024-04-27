'use client';

import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { CustomIcon, DefaultButton } from '@/components/g';
import useModal from '@/hooks/useModal';

const ConfirmModal = () => {
  const { modal, closeModal } = useModal();
  return (
    <Modal isOpen={modal.isOpen} onClose={closeModal} size="sm">
      <ModalOverlay />
      <ModalContent alignSelf="center">
        <ModalHeader py={1}>
          <Box h="20px" />
        </ModalHeader>
        {modal.isClose === true && <ModalCloseButton w="30px" h="30px" />}
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
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
