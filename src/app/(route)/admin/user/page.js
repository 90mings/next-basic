'use client';

import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import AdminSideLogo from '@/svgs/admin-side-logo.svg';
import AdminSideUser from '@/svgs/admin-side-user.svg';
import { SearchInput, DefaultPaginate, ContentBox } from '@/components';
import { FORM_MIN_WIDTH_PX } from '@/constants/common';
import {
  TYPE_CONSONANT,
  TYPE_RING_SOUND,
  TYPE_SUBJECT,
  TYPE_VOWEL,
} from '@/constants/common';

const AdminUserPage = (props) => {
  const handleLogout = () => {
    console.log('handleLogout');
  };

  const itemCard = (data) => {
    const { step = 1, type } = data || {};

    const setText = () => {
      if (type === TYPE_RING_SOUND) {
        return `${step}단계`;
      } else if (type === TYPE_VOWEL) {
        if (step > 8) {
          return `${step}`;
        } else {
          return `${step}-10단계`;
        }
      } else {
        return `${step}-10단계`;
      }
    };

    /*
    <Center w={'100px'} h={'30px'} border={'1px solid #EEE'}>
      <Text
        fontWeight={500}
        fontSize={'12px'}
        color={'#E13529'}
        textAlign={'center'}
      >
        관공서-10단계
      </Text>
    </Center>
    */

    return (
      <Center
        w={type === TYPE_SUBJECT ? '100px' : '60px'}
        h={'30px'}
        boxSizing="border-box"
        border={'1px solid #EEE'}
      >
        <Text
          fontWeight={500}
          fontSize={'12px'}
          color={'#666666'}
          textAlign={'center'}
        >
          {setText()}
        </Text>
      </Center>
    );
  };

  const testCard = () => {
    return (
      <Center
        w={'60px'}
        h={'30px'}
        bg={'#D9D9D9'}
        boxSizing="border-box"
        border={'1px solid #EEE'}
      >
        <Text
          fontWeight={500}
          fontSize={'12px'}
          color={'#666666'}
          textAlign={'center'}
        >
          TEST
        </Text>
      </Center>
    );
  };

  const userInfoCard = () => {
    const commomProps = {
      w: '168px',
      minW: '168px',
      h: '100%',
      px: '24px',
      pt: '20px',
      pb: '23px',
      boxSizing: 'border-box',
      borderRight: '1px solid #F1F1F1',
    };
    return (
      <Box
        w={'100%'}
        h={'372px'}
        boxSizing="border-box"
        border={'1px solid #EEE'}
        bg={'#FFF'}
      >
        <HStack h={'100%'} spacing={0} alignItems={'start'}>
          {/* 1번째 */}
          <Center pt={'24px'} {...commomProps}>
            <VStack h={'100%'} justifyContent={'space-between'} spacing={0}>
              <Box w={'100%'}>
                <VStack spacing={0}>
                  <Text
                    fontWeight={700}
                    fontSize={'18px'}
                    color={'#000'}
                    textAlign={'center'}
                  >
                    홍길동
                  </Text>
                  <Text
                    fontWeight={700}
                    fontSize={'16px'}
                    color={'#000'}
                    textAlign={'center'}
                  >
                    (카카오톡)
                  </Text>
                </VStack>
              </Box>
              <Box w={'100%'}>
                <VStack spacing={'24px'}>
                  <Box>
                    <Box>
                      <Text
                        fontWeight={700}
                        fontSize={'13px'}
                        color={'#E13529'}
                        textAlign={'center'}
                      >
                        총 학습시간
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontWeight={500}
                        fontSize={'13px'}
                        color={'#E13529'}
                        textAlign={'center'}
                      >
                        1시간 28분 30초
                      </Text>
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <Text
                        fontWeight={700}
                        fontSize={'13px'}
                        color={'#666'}
                        textAlign={'center'}
                      >
                        가입일시
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontWeight={500}
                        fontSize={'13px'}
                        color={'#666'}
                        textAlign={'center'}
                      >
                        2024.01.01 12:59
                      </Text>
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <Text
                        fontWeight={700}
                        fontSize={'13px'}
                        color={'#666'}
                        textAlign={'center'}
                      >
                        최근 로그인 일시
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontWeight={500}
                        fontSize={'13px'}
                        color={'#666'}
                        textAlign={'center'}
                      >
                        2024.01.01 12:59
                      </Text>
                    </Box>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </Center>
          {/* 2번째 */}
          <Box {...commomProps}>
            <VStack spacing={0}>
              <Box>
                <Text
                  fontWeight={700}
                  fontSize={'14px'}
                  color={'#000'}
                  textAlign={'center'}
                >
                  링사운드 듣기
                </Text>
              </Box>
              <Box pt={'10px'}>
                <VStack spacing={0}>
                  {itemCard({ type: TYPE_RING_SOUND, step: 1 })}
                  {itemCard({ type: TYPE_RING_SOUND, step: 2 })}
                  {itemCard({ type: TYPE_RING_SOUND, step: 3 })}
                  {itemCard({ type: TYPE_RING_SOUND, step: 4 })}
                  {itemCard({ type: TYPE_RING_SOUND, step: 5 })}
                </VStack>
              </Box>

              <Box pt={'20px'}>
                <VStack spacing={0}>{testCard()}</VStack>
              </Box>
            </VStack>
          </Box>
          {/* 3번째 */}
          <Center {...commomProps}>
            <VStack spacing={0}>
              <Box w={'100%'}>
                <Text
                  fontWeight={700}
                  fontSize={'14px'}
                  color={'#000'}
                  textAlign={'left'}
                >
                  모음 듣기
                </Text>
              </Box>
              <Box w={'100%'} pt={'10px'}>
                <HStack spacing={0} alignItems={'start'}>
                  <Box>
                    <VStack spacing={0}>
                      {itemCard({ type: TYPE_VOWEL, step: 1 })}
                      {itemCard({ type: TYPE_VOWEL, step: 2 })}
                      {itemCard({ type: TYPE_VOWEL, step: 3 })}
                      {itemCard({ type: TYPE_VOWEL, step: 4 })}
                      {itemCard({ type: TYPE_VOWEL, step: 5 })}
                      {itemCard({ type: TYPE_VOWEL, step: 6 })}
                      {itemCard({ type: TYPE_VOWEL, step: 7 })}
                      {itemCard({ type: TYPE_VOWEL, step: 8 })}
                      {itemCard({ type: TYPE_VOWEL, step: 9 })}
                      {itemCard({ type: TYPE_VOWEL, step: 10 })}
                    </VStack>
                  </Box>
                  <Box>
                    <VStack spacing={0}>
                      {testCard()}
                      {testCard()}
                      {testCard()}
                      {testCard()}
                      {testCard()}
                      {testCard()}
                      {testCard()}
                      {testCard()}
                      {testCard()}
                      {testCard()}
                    </VStack>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Center>

          {/* 4번째 */}
          <Center {...commomProps} w={'auto'}>
            <VStack spacing={0}>
              <Box w={'100%'}>
                <Text
                  fontWeight={700}
                  fontSize={'14px'}
                  color={'#000'}
                  textAlign={'left'}
                >
                  자음 듣기
                </Text>
              </Box>
              <Box w={'100%'} pt={'10px'}>
                <HStack alignItems={'start'} spacing={'24px'}>
                  <Box>
                    <HStack spacing={0}>
                      <Box>
                        <VStack spacing={0}>
                          {itemCard({ type: TYPE_CONSONANT, step: 1 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 2 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 3 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 4 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 5 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 6 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 7 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 8 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 9 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 10 })}
                        </VStack>
                      </Box>
                      <Box>
                        <VStack spacing={0}>
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                        </VStack>
                      </Box>
                    </HStack>
                  </Box>

                  <Box>
                    <HStack spacing={0}>
                      <Box>
                        <VStack spacing={0}>
                          {itemCard({ type: TYPE_CONSONANT, step: 11 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 12 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 13 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 14 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 15 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 16 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 17 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 18 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 19 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 20 })}
                        </VStack>
                      </Box>
                      <Box>
                        <VStack spacing={0}>
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                        </VStack>
                      </Box>
                    </HStack>
                  </Box>

                  <Box>
                    <HStack spacing={0}>
                      <Box>
                        <VStack spacing={0}>
                          {itemCard({ type: TYPE_CONSONANT, step: 21 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 22 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 23 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 24 })}
                          {itemCard({ type: TYPE_CONSONANT, step: 25 })}
                        </VStack>
                      </Box>
                      <Box>
                        <VStack spacing={0}>
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                          {testCard()}
                        </VStack>
                      </Box>
                    </HStack>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Center>

          {/* 5번째 */}
          <Box {...commomProps} border={0}>
            <VStack spacing={0}>
              <Box w={'100%'}>
                <Text
                  fontWeight={700}
                  fontSize={'14px'}
                  color={'#000'}
                  textAlign={'left'}
                >
                  주제별 듣기
                </Text>
              </Box>
              <Box w={'100%'} pt={'10px'}>
                <VStack spacing={0}>
                  {itemCard({
                    type: TYPE_SUBJECT,
                    step: '가족',
                  })}
                  {itemCard({
                    type: TYPE_SUBJECT,
                    step: '음식',
                  })}
                  {itemCard({
                    type: TYPE_SUBJECT,
                    step: '쇼핑',
                  })}
                  {itemCard({
                    type: TYPE_SUBJECT,
                    step: '시간',
                  })}
                  {itemCard({
                    type: TYPE_SUBJECT,
                    step: '여행',
                  })}
                  {itemCard({
                    type: TYPE_SUBJECT,
                    step: '병워',
                  })}
                  {itemCard({
                    type: TYPE_SUBJECT,
                    step: '전화',
                  })}
                  {itemCard({
                    type: TYPE_SUBJECT,
                    step: '인터넷',
                  })}
                  {itemCard({
                    type: TYPE_SUBJECT,
                    step: '관공서',
                  })}
                  {itemCard({
                    type: TYPE_SUBJECT,
                    step: '종교',
                  })}
                </VStack>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>
    );
  };

  return (
    <ContentBox>
      <HStack h={'100%'} spacing={0}>
        <Box w={'210px'} minW={'210px'} h={'100%'} bg={'#000920'}>
          <Center w={'100%'} h={'60px'}>
            <Image src={AdminSideLogo.src} />
          </Center>
          <Box w={'100%'} h={'60px'} bg={'#1B2B65'} px={'20px'}>
            <HStack w={'100%'} h={'100%'}>
              <Box>
                <Image src={AdminSideUser.src} />
              </Box>
              <Box>
                <Text fontWeight={700} fontSize={'16px'} color={'#CCD2E3'}>
                  사용자
                </Text>
              </Box>
            </HStack>
          </Box>
        </Box>

        <Box w={'calc(100% - 210px)'} minW={FORM_MIN_WIDTH_PX} h={'100%'}>
          <VStack spacing={0} h={'100%'}>
            <Box w={'100%'} h={'60px'} px={'20px'}>
              <HStack h={'100%'} justifyContent={'space-between'}>
                <Box w={'272px'}>
                  <SearchInput placeholder={'닉네임을 입력하세요'} />
                </Box>
                <Box>
                  <HStack spacing={'27px'}>
                    <Box>
                      <Text
                        fontWeight={700}
                        fontSize="16px"
                        textAlign="center"
                        color={'#000920'}
                      >{`관리자 님`}</Text>
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
            <Box
              w={'100%'}
              h={'calc(100% - 60px - 50px)'}
              p={'20px'}
              overflow={'auto'}
            >
              <VStack spacing={0}>
                {userInfoCard()}
                {userInfoCard()}
                {userInfoCard()}
              </VStack>
            </Box>

            <Box w={'100%'} h={'50px'} bg={'#F9F9F9'}>
              <Center h={'100%'}>
                <DefaultPaginate
                  currentPage={1}
                  setCurrentPage={() => {}}
                  totalCount={3}
                  contentNum={1}
                />
              </Center>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </ContentBox>
  );
};

export default AdminUserPage;
