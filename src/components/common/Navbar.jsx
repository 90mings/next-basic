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
import { useRecoilState } from 'recoil';
import { listenTypeState } from '@/stores/common';

const Navbar = (props) => {
  const { onClickBack, onClickListen } = props;
  const { text, subText, type, isMain = false, count, maxCount } = props;
  const [voiceType, setVoiceType] = useRecoilState(listenTypeState);
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
      console.log('onClickBack');
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
        return '#AC70AF';
      } else {
        return '#AC70AF';
      }
    }
  };

  const setTabBgColor = (index) => {
    if (type === TYPE_RING_SOUND) {
      if (voiceType === index) {
        return '#218CA3';
      } else {
        return '#E7FBFF';
      }
    }
    if (type === TYPE_VOWEL) {
      if (voiceType === index) {
        return '#71523A';
      } else {
        return '#FFF6E4';
      }
    }
    if (type === TYPE_CONSONANT) {
      if (voiceType === index) {
        return '#466E05';
      } else {
        return '#FAFFE7';
      }
    }
    if (type === TYPE_SUBJECT) {
      if (voiceType === index) {
        return '#632066';
      } else {
        return '#FEEDFF';
      }
    }
  };

  const setTabFontColor = (index) => {
    if (type === TYPE_RING_SOUND) {
      if (voiceType === index) {
        return '#FFF';
      } else {
        return '#186F81';
      }
    }
    if (type === TYPE_VOWEL) {
      if (voiceType === index) {
        return '#FFF6E4';
      } else {
        return '#71523A';
      }
    }
    if (type === TYPE_CONSONANT) {
      if (voiceType === index) {
        return '#FFFFFF';
      } else {
        return '#466E05';
      }
    }
    if (type === TYPE_SUBJECT) {
      if (voiceType === index) {
        return '#FFFFFF';
      } else {
        return '#632066';
      }
    }
  };

  const setFontSize = () => {
    if (isMain) {
      return '48px';
    }
    return '';
  };

  const setSubFontSize = () => {
    if (isMain) {
      return '30px';
    }
  };

  const handleOnClickListen = () => {
    if (onClickListen) {
      onClickListen();
    }
  };

  return (
    <Box bg={setBgColor()} w="100%" zIndex={2} position={'relative'}>
      <Box h={isMain ? '150px' : '100px'}>
        <HStack
          justifyContent="space-between"
          h="100%"
          alignItems="center"
          px="20px"
        >
          <Box w="110px">
            <IconButton
              w="64px"
              h="64px"
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
          </Box>
          <Box>{setTitle()}</Box>
          {count ? (
            <Box w={'110px'} h={'66px'} bg={'#FFF'} borderRadius={'40px'}>
              <Center h={'100%'}>
                <GText
                  fontWeight={700}
                  fontSize={{ md: '34px' }}
                  color={'#000'}
                >{`${count}/${maxCount}`}</GText>
              </Center>
            </Box>
          ) : (
            <Box w="110px" />
          )}
        </HStack>
      </Box>
      {isMain && (
        <Tabs
          w="100%"
          variant="toggleButton"
          index={voiceType}
          onChange={async (index) => {
            setVoiceType(index);
          }}
          bg={setBgColor()}
          px="50px"
          pb={'30px'}
        >
          <TabList w="100%">
            <HStack w="100%" h="80px" spacing={0}>
              <Tab w="50%" h="100%" bg={setTabBgColor(0)}>
                <GText
                  fontWeight={600}
                  fontSize={{ md: '30px' }}
                  color={setTabFontColor(0)}
                >
                  여성음성
                </GText>
              </Tab>
              <Tab w="50%" h="100%" bg={setTabBgColor(1)}>
                <GText
                  fontWeight={600}
                  fontSize={{ md: '30px' }}
                  color={setTabFontColor(1)}
                >
                  남성음성
                </GText>
              </Tab>
            </HStack>
          </TabList>
        </Tabs>
      )}
      {type !== TYPE_RING_SOUND && (
        <CustomSliderTrack
          isNav={isMain}
          type={type}
          onChange={(value) => {
            console.log(value);
          }}
        />
      )}
      {isMain && (
        <Box w="100%" h="140px" py={'20px'} px={'50px'} bg={setBgColor(true)}>
          <StepSingleListenButton type={type} onClick={handleOnClickListen} />
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
