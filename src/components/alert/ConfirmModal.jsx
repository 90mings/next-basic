'use client';

import { Box, HStack, VStack, Center } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/modal';
import { GText, DefaultButton } from '@/components';
import useModal from '@/hooks/useModal';
import utils from '@/utils';
import { deviceInfoState } from '@/stores/commonRecoil';
import { useRecoilValue } from 'recoil';

const ConfirmModal = () => {
  const deviceInfo = useRecoilValue(deviceInfoState);
  const { modal, closeModal } = useModal();

  const isMobile = deviceInfo.isMobile;
  const isWide = deviceInfo.isWide;

  const getWidth = () => {
    if (isWide) {
      return isMobile ? '700px' : '500px';
    } else {
      return '500px';
    }
  };

  return (
    <Modal isOpen={modal.isOpen} onClose={closeModal} size="md">
      <ModalOverlay />
      <ModalContent
        alignSelf="center"
        w={'100%'}
        maxW={getWidth()}
        borderRadius={'20px'}
        px={5}
        mx={5}
      >
        {modal.isClose === true && <ModalCloseButton w="30px" h="30px" />}
        <ModalBody w={'100%'} h={'100%'} position={'relative'} py={'5%'} px={0}>
          <VStack
            w={'100%'}
            h={'100%'}
            justifyContent={'space-between'}
            spacing={2}
          >
            <Box w={'100%'} minH={'100px'} h={isMobile ? '20vh' : '120px'}>
              {utils.isNotEmpty(modal.text) && (
                <VStack spacing={1} h={'100%'} justifyContent={'center'}>
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
                            textOption?.fontSize ? textOption.fontSize : 38
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
            <Box w={'100%'} minH={'50px'} h={isMobile ? '7vh' : '50px'}>
              <Center w="100%" h={'100%'}>
                <HStack w="100%" h="100%" justifyContent="center">
                  <Box w="50%" h="100%">
                    <DefaultButton
                      onClick={modal.onAgree}
                      theme="info"
                      borderRadius={'10px'}
                      size="sm"
                      text={modal.onAgreeText}
                      fontSize={30}
                    />
                  </Box>
                  <Box w="50%" h="100%">
                    <DefaultButton
                      onClick={closeModal}
                      theme="info"
                      fontColor={'#75B125'}
                      outline
                      borderRadius={'10px'}
                      size="sm"
                      text="취소"
                      fontSize={30}
                    />
                  </Box>
                </HStack>
              </Center>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
