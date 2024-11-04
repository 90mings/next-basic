'use client';

import { Box, HStack, Text, Button } from '@chakra-ui/react';
import { SearchInput } from '@/components';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ADMIN } from '@/constants/pageURL';

import useSign from '@/hooks/useSign';
import useModal from '@/hooks/useModal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  adminSearchByState,
  adminSearchFlagState,
  adminUserModalState,
} from '@/stores/userRecoil';

const AdminNavbar = () => {
  const [adminUserModal, setAdminUserModal] =
    useRecoilState(adminUserModalState);
  const [adminSearchBy, setAdminSearchBy] = useRecoilState(adminSearchByState);
  const setAdminSearchFlag = useSetRecoilState(adminSearchFlagState);

  const { adminUser, logoutProcess } = useSign();
  const { openModal } = useModal();

  const pathName = usePathname();
  const [isUser, setIsUser] = useState(true);

  useEffect(() => {
    setAdminSearchBy('');
    setAdminSearchFlag(false);
    if (pathName === ADMIN.user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [pathName]);

  const handleLogout = () => {
    console.log('handleLogout');
    openModal({
      type: 'confirm',
      text: '로그아웃 하시겠습니까?',
      onAgree: () => {
        logoutProcess();
      },
    });
  };

  const handleAddTestUser = () => {
    setAdminUserModal({
      ...adminUserModal,
      isOpen: true,
      type: 1,
    });
  };

  const handleUserSearch = () => {
    setAdminSearchFlag(true);
  };

  return (
    <Box w={'100%'} h={'60px'} px={'20px'} borderBottom={'1px solid #DDDDDD'}>
      <HStack h={'100%'} justifyContent={'space-between'}>
        <Box w={'272px'}>
          {isUser ? (
            <SearchInput
              value={adminSearchBy}
              onChange={(e) => {
                setAdminSearchBy(e.target.value);
              }}
              onClick={handleUserSearch}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleUserSearch();
                }
              }}
              placeholder={'닉네임을 입력하세요'}
            />
          ) : (
            <Button
              onClick={handleAddTestUser}
              _hover={{}}
              _active={{}}
              w={'104px'}
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
                사용자 추가
              </Text>
            </Button>
          )}
        </Box>
        <Box>
          <HStack spacing={'27px'}>
            <Box>
              <Text
                fontWeight={700}
                fontSize="16px"
                textAlign="center"
                color={'#000920'}
              >{`${adminUser.id} 님`}</Text>
            </Box>
            <Box w={'88px'} h={'40px'}>
              <Button
                onClick={handleLogout}
                _hover={{}}
                _active={{}}
                w={'100%'}
                h={'100%'}
                border={'1px solid #999999'}
                borderRadius={'4px'}
                bg={'#FFF'}
              >
                <Text
                  fontWeight={400}
                  fontSize="15px"
                  textAlign="center"
                  color={'#555555'}
                >
                  로그아웃
                </Text>
              </Button>
            </Box>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default AdminNavbar;
