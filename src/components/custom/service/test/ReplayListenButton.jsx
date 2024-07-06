'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, HStack, VStack } from '@chakra-ui/react';
import { GText } from '@/components';
import {
  TYPE_CONSONANT,
  TYPE_SUBJECT,
  TYPE_VOWEL,
  TYPE_RING_SOUND,
  RADIUS_S_20,
} from '@/constants/common';
import { listenInfoState } from 'src/stores/commonRecoil';
import { useRecoilValue } from 'recoil';
import { useChapter } from 'src/hooks/useChapter';

const ReplayListenButton = (props) => {
  const {
    targetArr = [],
    isNotFixed = false,
    isStart = false,
    isPlaying = false,
  } = props;
  const { onClickPlaying } = props;
  const { type } = props;

  const { getTTSParam } = useChapter();

  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);
  const audio3Ref = useRef(null);

  const [audio1Src, setAudio1Src] = useState(null);
  const [audio2Src, setAudio2Src] = useState(null);
  const [audio3Src, setAudio3Src] = useState(null);

  const [bgColor, setBgColor] = useState('#FFF');
  const [fontColor, setFontColor] = useState('#FFF');
  const [borderColor, setBorderColor] = useState('#75B125');

  const RING_COLOR = '#186F81';
  const VOWEL_COLOR = '#71523A';
  const CONSONANT_COLOR = '#466E05';
  const TOPIC_COLOR = '#632066';

  useEffect(() => {
    handleButtonType();
  }, [isStart, isPlaying]);

  useEffect(() => {
    if (targetArr?.length && targetArr.length > 0) {
      targetArr.map(async (text, index) => {
        if (index === 0) {
          const result = await getTTSParam(text);
          setAudio1Src(result);
        } else if (index === 1) {
          const result = await getTTSParam(text);
          setAudio2Src(result);
        } else if (index === 2) {
          const result = await getTTSParam(text);
          setAudio3Src(result);
        }
      });
    }
  }, [targetArr]);

  useEffect(() => {
    const audio1Element = audio1Ref?.current;
    const audio2Element = audio2Ref?.current;
    const audio3Element = audio3Ref?.current;
    const handleAudioEnd = () => {
      onClickPlaying(false);
    };
    if (isPlaying) {
      if (audio1Element) {
        audio1Element.addEventListener('ended', handleAudioEnd);
      }
      if (audio2Element) {
        audio2Element.addEventListener('ended', handleAudioEnd);
      }
      if (audio3Element) {
        audio3Element.addEventListener('ended', handleAudioEnd);
      }
    }
    return () => {
      if (audio1Element) {
        audio1Element.removeEventListener('ended', handleAudioEnd);
      }
      if (audio2Element) {
        audio2Element.addEventListener('ended', handleAudioEnd);
      }
      if (audio3Element) {
        audio3Element.addEventListener('ended', handleAudioEnd);
      }
    };
  }, [isPlaying]);

  const setColor = () => {
    if (type === TYPE_RING_SOUND) {
      return RING_COLOR;
    } else if (type === TYPE_VOWEL) {
      return VOWEL_COLOR;
    } else if (type === TYPE_CONSONANT) {
      return CONSONANT_COLOR;
    } else if (type === TYPE_SUBJECT) {
      return TOPIC_COLOR;
    }
  };

  const handleDisAbled = () => {
    if (!isStart) {
      return true;
    }
    if (isPlaying) {
      return true;
    }
  };

  const handleButtonType = () => {
    if (handleDisAbled()) {
      setFontColor('#FFF');
    } else {
      setBorderColor(setColor());
      setFontColor(setColor());
      setBgColor('#FFF');
    }
  };

  const handleOnClick = (index) => {
    if (onClickPlaying) {
      onClickPlaying(true);
    }
    if (index === 1) {
      audio1Ref.current.play();
    } else if (index === 2) {
      audio2Ref.current.play();
    } else if (idnex === 3) {
      audio3Ref.current.play();
    }
  };

  const setButton = (props) => {
    const { text, target } = props;
    const { bg, fontColor, borderColor } = props;
    const { onClick = () => {} } = props;
    const { isDisabled = false } = props;

    const key = `replayBtn${target}`;
    return (
      <Box key={key} w={'100%'} h={'100%'}>
        <Button
          isDisabled={isDisabled}
          w={'100%'}
          h={'100%'}
          bg={bg}
          borderRadius={RADIUS_S_20}
          border={'1px solid'}
          borderColor={borderColor}
          _active={{}}
          _focus={{}}
          _hover={{}}
          onClick={onClick}
          size="xl"
          _disabled={{
            bg: '#999999',
            borderColor: '#999999',
          }}
        >
          <VStack
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <GText fontWeight={700} fontSize={48} color={fontColor}>
              {`${target}구간`}
            </GText>
            <GText fontWeight={700} fontSize={48} color={fontColor}>
              {`다시듣기`}
            </GText>
          </VStack>
        </Button>
      </Box>
    );
  };

  return (
    <Box
      position={isNotFixed ? null : 'fixed'}
      bottom={'16.4%'}
      w={'100%'}
      h={'11.19%'}
      px={'6.25%'}
    >
      <audio
        style={{ display: 'none' }}
        controls
        src={audio1Src}
        ref={audio1Ref}
      />
      <audio
        style={{ display: 'none' }}
        controls
        src={audio2Src}
        ref={audio2Ref}
      />
      <audio
        style={{ display: 'none' }}
        controls
        src={audio3Src}
        ref={audio3Ref}
      />
      <HStack h={'100%'} justifyContent={'space-between'}>
        {targetArr.map((text, index) => {
          const tempIndex = index + 1;
          return setButton({
            onClick: () => {
              handleOnClick(tempIndex);
            },
            target: tempIndex,
            text: text,
            fontColor: fontColor,
            bg: bgColor,
            borderColor: borderColor,
            isDisabled: handleDisAbled(),
          });
        })}
      </HStack>
    </Box>
  );
};

export default ReplayListenButton;
