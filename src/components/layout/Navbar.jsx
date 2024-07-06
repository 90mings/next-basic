'use client';

import {
  Box,
  Center,
  HStack,
  IconButton,
  Tab,
  TabList,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import {
  GText,
  CustomIcon,
  StepSingleListenButton,
  CustomSliderTrack,
} from '@/components';
import { useRouter } from 'next/navigation';

import {
  TYPE_RING_SOUND,
  TYPE_CONSONANT,
  TYPE_SUBJECT,
  TYPE_VOWEL,
} from '@/constants/common';
import { BOX_S_64 } from '@/constants/common';
import { useRecoilState } from 'recoil';
import { listenInfoState } from '@/stores/commonRecoil';
import { RADIUS_S_40 } from '@/constants/common';

const Navbar = (props) => {
  const { onClickBack, onClickListen } = props;
  const {
    text,
    subText,
    type,
    isMain = false,
    count = -1,
    maxCount = -1,
  } = props;
  const [listenInfo, setListenInfo] = useRecoilState(listenInfoState);
  const router = useRouter();

  const setTitle = () => {
    if (type === TYPE_RING_SOUND) {
      return (
        <GText fontWeight={700} color={'#FFF'} fontSize={setFontSize()}>
          {text || '링사운드 듣기'}
        </GText>
      );
    }
    if (type === TYPE_SUBJECT) {
      return subText ? (
        <VStack spacing={0}>
          <GText fontWeight={700} color={'#FFF'} fontSize={setFontSize()}>
            {text}
          </GText>
          <GText fontWeight={600} color={'#000'} fontSize={setSubFontSize()}>
            {subText}
          </GText>
        </VStack>
      ) : (
        <GText fontWeight={700} color={'#FFF'} fontSize={setFontSize()}>
          {text || '주제별 듣기'}
        </GText>
      );
    }
    if (type === TYPE_CONSONANT) {
      return subText ? (
        <VStack spacing={0}>
          <GText fontWeight={700} color={'#FFF'} fontSize={setFontSize()}>
            {text}
          </GText>
          <GText fontWeight={600} color={'#000'} fontSize={setSubFontSize()}>
            {subText}
          </GText>
        </VStack>
      ) : (
        <GText fontWeight={700} color={'#FFF'} fontSize={setFontSize()}>
          {text || '자음 듣기'}
        </GText>
      );
    }
    if (type === TYPE_VOWEL) {
      return subText ? (
        <VStack spacing={0}>
          <GText fontWeight={700} color={'#000'} fontSize={setFontSize()}>
            {text}
          </GText>
          <GText fontWeight={600} color={'#71523A'} fontSize={setSubFontSize()}>
            {subText}
          </GText>
        </VStack>
      ) : (
        <GText fontWeight={700} color={'#000'} fontSize={setFontSize()}>
          {text || '모음 듣기'}
        </GText>
      );
    }
  };

  const handleBack = () => {
    if (onClickBack) {
      onClickBack();
    } else {
      router.back();
    }
  };

  const setBgColor = (isListen = false) => {
    if (type === TYPE_RING_SOUND) {
      if (isListen) {
        return '#218CA3';
      } else {
        return '#5DCBE3';
      }
    }
    if (type === TYPE_VOWEL) {
      if (isListen) {
        return '#71523A';
      } else {
        return '#FEC751';
      }
    }
    if (type === TYPE_CONSONANT) {
      if (isListen) {
        return '#466E05';
      } else {
        return '#75B125';
      }
    }
    if (type === TYPE_SUBJECT) {
      if (isListen) {
        return '#632066';
      } else {
        return '#AC70AF';
      }
    }
  };

  const setTabBgColor = (index) => {
    if (type === TYPE_RING_SOUND) {
      if (listenInfo.voice === index) {
        return '#218CA3';
      } else {
        return '#E7FBFF';
      }
    }
    if (type === TYPE_VOWEL) {
      if (listenInfo.voice === index) {
        return '#71523A';
      } else {
        return '#FFF6E4';
      }
    }
    if (type === TYPE_CONSONANT) {
      if (listenInfo.voice === index) {
        return '#466E05';
      } else {
        return '#FAFFE7';
      }
    }
    if (type === TYPE_SUBJECT) {
      if (listenInfo.voice === index) {
        return '#632066';
      } else {
        return '#FEEDFF';
      }
    }
  };

  const setTabFontColor = (index) => {
    if (type === TYPE_RING_SOUND) {
      if (listenInfo.voice === index) {
        return '#FFF';
      } else {
        return '#186F81';
      }
    }
    if (type === TYPE_VOWEL) {
      if (listenInfo.voice === index) {
        return '#FFF6E4';
      } else {
        return '#71523A';
      }
    }
    if (type === TYPE_CONSONANT) {
      if (listenInfo.voice === index) {
        return '#FFFFFF';
      } else {
        return '#466E05';
      }
    }
    if (type === TYPE_SUBJECT) {
      if (listenInfo.voice === index) {
        return '#FFFFFF';
      } else {
        return '#632066';
      }
    }
  };

  const setFontSize = () => {
    if (isMain) {
      return 48;
    }
    return 38;
  };

  const setSubFontSize = () => {
    if (isMain) {
      return 30;
    }
  };

  const handleOnClickListen = () => {
    if (onClickListen) {
      onClickListen();
    }
  };

  const handleNav = () => {
    if (!isMain) {
      return (
        <Box
          bg={setBgColor()}
          w={'100%'}
          h={'7.4627%'}
          zIndex={2}
          position={'relative'}
        >
          <HStack
            justifyContent="space-between"
            h={'100%'}
            alignItems="center"
            px={'2.5%'}
          >
            <Box
              h={'66%'}
              w={'16.38%'}
              onClick={() => {
                handleBack();
              }}
            >
              <HStack w={'100%'} h={'100%'} alignContent={'flex-start'}>
                <IconButton
                  w={BOX_S_64}
                  h={'100%'}
                  border={0}
                  _hover={{}}
                  _active={{}}
                >
                  <CustomIcon
                    w="70%"
                    h="70%"
                    color={type !== TYPE_VOWEL ? '#FFF' : '#000'}
                    name="back"
                  />
                </IconButton>
              </HStack>
            </Box>
            <Box>{setTitle()}</Box>

            <Box h={'66%'} w={'16.38%'} position={'relative'}>
              {count !== -1 && (
                <HStack
                  alignContent={'flex-end'}
                  w={'100%'}
                  h={'100%'}
                  bg={'#FFF'}
                  borderRadius={RADIUS_S_40}
                >
                  <Center w={'100%'} h={'100%'}>
                    <GText
                      fontWeight={700}
                      fontSize={34}
                      color={'#000'}
                    >{`${count}/${maxCount}`}</GText>
                  </Center>
                </HStack>
              )}
            </Box>
          </HStack>
        </Box>
      );
    } else {
      return (
        <Box
          position={'relative'}
          h={type === TYPE_RING_SOUND ? '29.8507%' : '38.8060%'}
          minH={type === TYPE_RING_SOUND ? '29.8507%' : '38.8060%'}
          bg={setBgColor()}
        >
          <VStack spacing={0} h={'100%'}>
            <Box
              w="100%"
              h={type === TYPE_RING_SOUND ? '37.5000%' : '28.8462%'}
              minH={type === TYPE_RING_SOUND ? '37.5000%' : '28.8462%'}
            >
              <HStack
                justifyContent="space-between"
                h="100%"
                alignItems="center"
                px={'2.5%'}
              >
                <HStack h={'66%'} w={'16.38%'} alignContent={'flex-start'}>
                  <IconButton
                    w={BOX_S_64}
                    h={'100%'}
                    border={0}
                    onClick={() => {
                      handleBack();
                    }}
                  >
                    <CustomIcon
                      w="70%"
                      h="70%"
                      color={type !== TYPE_VOWEL ? '#FFF' : '#000'}
                      name="back"
                    />
                  </IconButton>
                </HStack>
                <Box>{setTitle()}</Box>

                <Box h={'44%'} w={'16.38%'} position={'relative'}>
                  {count !== -1 && (
                    <HStack
                      alignContent={'flex-end'}
                      w={'100%'}
                      h={'100%'}
                      bg={'#FFF'}
                      borderRadius={RADIUS_S_40}
                    >
                      <Center w={'100%'} h={'100%'}>
                        <GText
                          fontWeight={700}
                          fontSize={34}
                          color={'#000'}
                        >{`${count}/${maxCount}`}</GText>
                      </Center>
                    </HStack>
                  )}
                </Box>
              </HStack>
            </Box>

            <Center
              w={'100%'}
              h={type === TYPE_RING_SOUND ? '20.0000%' : '15.3848%'}
              minH={type === TYPE_RING_SOUND ? '20.0000%' : '15.3848%'}
            >
              <Tabs
                w={'100%'}
                h={'100%'}
                variant="toggleButton"
                index={listenInfo.voice}
                onChange={async (index) => {
                  setListenInfo({
                    ...listenInfo,
                    voice: index,
                  });
                }}
                px={'6.25%'}
              >
                <TabList w={'100%'} h={'100%'}>
                  <HStack w={'100%'} h={'100%'} spacing={0}>
                    <Tab w={'50%'} h={'100%'} bg={setTabBgColor(0)}>
                      <GText
                        fontWeight={600}
                        fontSize={30}
                        color={setTabFontColor(0)}
                      >
                        여성음성
                      </GText>
                    </Tab>
                    <Tab w={'50%'} h={'100%'} bg={setTabBgColor(1)}>
                      <GText
                        fontWeight={600}
                        fontSize={30}
                        color={setTabFontColor(1)}
                      >
                        남성음성
                      </GText>
                    </Tab>
                  </HStack>
                </TabList>
              </Tabs>
            </Center>

            {type !== TYPE_RING_SOUND && (
              <Box
                w={'100%'}
                h={'28.8462%'}
                minH={'28.8462%'}
                px={'6.25%'}
                position={'relative'}
                py={1}
              >
                <CustomSliderTrack
                  isNav={isMain}
                  value={listenInfo.speed}
                  type={type}
                  onChange={(value) => {
                    setListenInfo({
                      ...listenInfo,
                      speed: value,
                    });
                  }}
                />
              </Box>
            )}

            <Box
              position={type === TYPE_RING_SOUND ? 'absolute' : null}
              bottom={0}
              w="100%"
              h={type === TYPE_RING_SOUND ? '35.0000%' : '26.9231%'}
              minH={type === TYPE_RING_SOUND ? '35.0000%' : '26.9231%'}
              px={'6.25%'}
              bg={setBgColor(true)}
            >
              <StepSingleListenButton
                type={type}
                onClick={handleOnClickListen}
              />
            </Box>
          </VStack>
        </Box>
      );
    }
  };

  return handleNav();
};

export default Navbar;
