'use client';

import { Box, Button, HStack, Text } from '@chakra-ui/react';
import utils from '@/utils/index';
import useModal from '@/hooks/useModal';
import testUserApi from '@/services/testUserApi';
import { adminTempUserState } from '@/stores/userRecoil';
import { useRecoilValue } from 'recoil';

const LeftItemCard = (props) => {
  const adminTempUser = useRecoilValue(adminTempUserState);
  const { openModal } = useModal();
  const { data, onClick } = props;
  const { testUserId = 0, name = '', phoneNum = '' } = data || {};

  const tempText = `${utils.isNotEmpty(name) ? name : '탈퇴회원'}${
    utils.isNotEmpty(phoneNum) ? `(${utils.parsePhoneNum(phoneNum)})` : ''
  }`;

  const isSelect = adminTempUser?.testUserId === testUserId;

  const getTestUserSendTestLink = async (testUserId) => {
    if (testUserId < 1) {
      openModal({ text: '선택한 유저의 정보를 찾을 수 없습니다.' });
      return;
    }
    const param = {
      testUserId,
    };
    const result = await testUserApi.getTestUserSendTestLink(param);
    openModal({ text: result.message });
  };

  return (
    <Box
      w={'100%'}
      h={'66px'}
      bg={isSelect ? '#F1F7FF' : 'transparent'}
      border={isSelect ? '1px solid #2683FB' : null}
      borderBottom={isSelect ? null : '1px solid #DDDDDD'}
      boxSizing={'border-box'}
      px={'20px'}
      _hover={{
        cursor: 'pointer',
      }}
      onClick={() => {
        onClick(data);
      }}
    >
      <HStack justifyContent={'space-between'} w={'100%'} h={'100%'}>
        <Box>
          <Text fontWeight={400} fontSize={'16px'} color={'#000000'}>
            {tempText}
          </Text>
        </Box>
        <Box>
          <Button
            onClick={(e) => {
              e.preventDefault();
              getTestUserSendTestLink(data?.testUserId || 0);
            }}
            _hover={{}}
            _active={{}}
            w={'66px'}
            h={'38px'}
            border={'1px solid #2683FB'}
            borderRadius={'4px'}
            bg={'#2683FB'}
          >
            <Text
              fontWeight={700}
              fontSize="15px"
              textAlign="center"
              color={'#FFF'}
            >
              평가
            </Text>
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default LeftItemCard;
