'use client';
import { DefaultInput } from '@/components';

import {
  Box,
  HStack,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  VStack,
  Center,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SUCCESS } from '@/constants/errorCode';
import useModal from '@/hooks/useModal';
import testUserApi from '@/services/testUserApi';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import utils from '@/utils/index';
import { adminUserModalState } from '@/stores/userRecoil';
import { adminTempUserState } from '@/stores/userRecoil';

const ModalAdminUser = (props) => {
  const resetAdminUserModal = useResetRecoilState(adminUserModalState);
  const adminUserModal = useRecoilValue(adminUserModalState);
  const adminTempUser = useRecoilValue(adminTempUserState);

  useEffect(() => {
    handleSetData();
    return () => {
      resetAdminUserModal();
    };
  }, [adminUserModal]);

  const { isOpen, onClose } = props;
  const { openModal } = useModal();
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const handleActionUser = async () => {
    if (adminUserModal.type === 1) {
      handlePostAddUser();
    } else if (adminUserModal.type === 2) {
      handlePatchUser();
    } else if (adminUserModal.type === 3) {
      handleDeleteUser();
    }
  };

  const handlePostAddUser = async () => {
    const tempName = name.trim();
    const tempPhoneNum = phoneNum.trim();
    if (utils.isEmpty(name)) {
      openModal({ text: '이름을 입력 해주세요' });
      return;
    }
    if (utils.isEmpty(phoneNum)) {
      openModal({ text: '전화번호를 입력 해주세요' });
      return;
    }
    if (!utils.checkPhoneNum(phoneNum)) {
      openModal({ text: '전화번호를 확인 해주세요' });
      return;
    }

    const param = {
      name: tempName,
      phoneNum: tempPhoneNum,
    };
    const result = await testUserApi.postTestUser(param);
    if (result.errorCode === SUCCESS) {
      openModal({
        text: result.message,
        onAgree: () => {
          onClose(SUCCESS);
        },
      });
    } else {
      openModal({ text: result.message });
    }
  };

  const handlePatchUser = async () => {
    const tempName = name.trim();
    const tempPhoneNum = phoneNum.trim();
    if (utils.isEmpty(tempName)) {
      openModal({ text: '이름을 입력 해주세요' });
      return;
    }
    if (utils.isEmpty(tempPhoneNum)) {
      openModal({ text: '전화번호를 입력 해주세요' });
      return;
    }
    if (!utils.checkPhoneNum(tempPhoneNum)) {
      openModal({ text: '전화번호를 확인 해주세요' });
      return;
    }

    if (
      adminTempUser.name === tempName &&
      adminTempUser.phoneNum === tempPhoneNum
    ) {
      openModal({ text: '변경 내용이 없습니다' });
      return;
    }

    const param = {
      testUserId: adminTempUser.testUserId,
      name: tempName,
      phoneNum: tempPhoneNum,
    };
    const result = await testUserApi.patchTestUser(param);
    if (result.errorCode === SUCCESS) {
      openModal({
        text: result.message,
        onAgree: () => {
          onClose(SUCCESS);
        },
      });
    } else {
      openModal({ text: result.message });
    }
  };

  const handleDeleteUser = async () => {
    const param = {
      testUserId: adminTempUser.testUserId,
    };
    const result = await testUserApi.deleteTestUser(param);
    if (result.errorCode === SUCCESS) {
      openModal({
        text: result.message,
        onAgree: () => {
          onClose(SUCCESS);
        },
      });
    } else {
      openModal({ text: result.message });
    }
  };

  const handleSetData = () => {
    if (adminUserModal.type === 2) {
      if (adminTempUser?.name) {
        setName(adminTempUser.name);
        setPhoneNum(adminTempUser.phoneNum);
      }
    }
  };

  const handleText = () => {
    if (adminUserModal.type === 1) {
      return '사용자 추가';
    } else if (adminUserModal.type === 2) {
      return '사용자 수정';
    } else if (adminUserModal.type === 3) {
      return '사용자 삭제';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        alignSelf="center"
        w={'400px'}
        h={adminUserModal.type !== 3 ? '256px' : '200px'}
        borderRadius={0}
      >
        <ModalHeader borderBottom={'1px solid #DADADA'} py={'10px'}>
          <HStack justifyContent={'space-between'}>
            <Box>
              <Text fontWeight={700} fontSize={'20px'} color={'#000920'}>
                {handleText()}
              </Text>
            </Box>
            <Box>
              <ModalCloseButton
                boxSize={'30px'}
                fontSize={'15px'}
                position={'relative'}
                top={0}
                right={0}
              />
            </Box>
          </HStack>
        </ModalHeader>
        <ModalBody w={'100%'} h={'100%'} pb={0}>
          <Center w={'100%'} h={'100%'}>
            {adminUserModal.type !== 3 ? (
              <VStack w={'100%'}>
                <Box w={'100%'} h={'40px'}>
                  <HStack h={'100%'}>
                    <Box w={'70px'}>
                      <Text
                        fontWeight={400}
                        fontSize={'16px'}
                        color={'#000920'}
                      >
                        이름
                      </Text>
                    </Box>
                    <Box w={'calc(100% - 70px)'} h={'100%'}>
                      <DefaultInput
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        fontSize={'16px'}
                        placeholder={'이름을 입력하세요'}
                      />
                    </Box>
                  </HStack>
                </Box>
                <Box w={'100%'} h={'40px'}>
                  <HStack h={'100%'}>
                    <Box w={'70px'}>
                      <Text
                        fontWeight={400}
                        fontSize={'16px'}
                        color={'#000920'}
                      >
                        전화번호
                      </Text>
                    </Box>
                    <Box w={'calc(100% - 70px)'} h={'100%'}>
                      <DefaultInput
                        value={phoneNum}
                        onChange={(e) => {
                          setPhoneNum(e.target.value);
                        }}
                        fontSize={'16px'}
                        placeholder={'‘-’를 제외하고 번호만 입력하세요'}
                      />
                    </Box>
                  </HStack>
                </Box>
              </VStack>
            ) : (
              <Box w={'100%'}>
                <Text fontWeight={400} fontSize={'16px'}>
                  {adminTempUser.name}님의 정보를 삭제하시겠습니까?
                </Text>
              </Box>
            )}
          </Center>
        </ModalBody>
        <ModalFooter pb={'30px'}>
          <HStack w={'100%'}>
            {adminUserModal.type === 3 && (
              <Button
                onClick={onClose}
                _hover={{}}
                _active={{}}
                w={'100%'}
                h={'40px'}
                border={'1px solid #5E9E61'}
                borderRadius={'4px'}
                bg={'#5E9E61'}
              >
                <Text
                  fontWeight={700}
                  fontSize="15px"
                  textAlign="center"
                  color={'#FFF'}
                >
                  {'취소'}
                </Text>
              </Button>
            )}
            <Button
              onClick={handleActionUser}
              _hover={{}}
              _active={{}}
              w={'100%'}
              h={'40px'}
              border={'1px solid'}
              borderColor={adminUserModal.type === 3 ? '#FF0000' : '#5E9E61'}
              borderRadius={'4px'}
              bg={adminUserModal.type === 3 ? '#FF0000' : '#5E9E61'}
            >
              <Text
                fontWeight={700}
                fontSize="15px"
                textAlign="center"
                color={'#FFF'}
              >
                {handleText()}
              </Text>
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAdminUser;
