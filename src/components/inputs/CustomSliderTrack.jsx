'use client';

import {
  TYPE_CONSONANT,
  TYPE_RING_SOUND,
  TYPE_SUBJECT,
  TYPE_VOWEL,
} from '@/constants/common';

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { GText } from '..';

const CustomSliderTrack = (props) => {
  const { value = 0 } = props;
  const { isNav = false, bottom = '240px' } = props;
  const { max = 100, step = 1 } = props;
  const { type, onChange } = props;

  const setFillTrackColor = () => {
    if (type === TYPE_RING_SOUND) {
      return '#186F81';
    }
    if (type === TYPE_SUBJECT) {
      return '#632066';
    }
    if (type === TYPE_CONSONANT) {
      return '#466E05';
    }
    if (type === TYPE_VOWEL) {
      return '#71523A';
    }
  };

  const setThumbColor = () => {
    if (isNav) {
      return '#FFF';
    }
    if (type === TYPE_RING_SOUND) {
      return '#5DCBE3';
    }
    if (type === TYPE_SUBJECT) {
      return '#AC70AF';
    }
    if (type === TYPE_CONSONANT) {
      return '#75B125';
    }
    if (type === TYPE_VOWEL) {
      return '#FEC751';
    }
  };

  const handleSliderValue = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  if (isNav) {
    return (
      <Box px={'50px'}>
        <VStack spacing={'7px'}>
          <Box w="100%">
            <Slider
              defaultValue={value}
              min={1}
              max={3}
              step={1}
              onChange={(val) => {
                handleSliderValue(val);
              }}
            >
              <SliderTrack bg={'#00000033'} h={'22px'} borderRadius={'20px'}>
                <SliderFilledTrack bg={setFillTrackColor()} />
              </SliderTrack>
              <SliderThumb boxSize={'60px'} bg={setThumbColor()} />
            </Slider>
          </Box>
          <Box w="100%" pb={'22px'}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
              <GText fontWeight={600} fontSize={{ md: '30px' }} color={'#000'}>
                느리게
              </GText>
              <GText fontWeight={600} fontSize={{ md: '30px' }} color={'#000'}>
                보통
              </GText>
              <GText fontWeight={600} fontSize={{ md: '30px' }} color={'#000'}>
                빠르게
              </GText>
            </HStack>
          </Box>
        </VStack>
      </Box>
    );
  } else {
    return (
      <Box
        position={isNav ? 'relative' : 'absolute'}
        bottom={bottom}
        w={'100%'}
        px={'50px'}
      >
        <Slider
          defaultValue={value}
          min={0}
          max={100}
          step={1}
          onChange={(val) => {
            handleSliderValue(val);
          }}
        >
          <SliderTrack bg={'#00000033'} h={'22px'} borderRadius={'20px'}>
            <SliderFilledTrack bg={setFillTrackColor()} />
          </SliderTrack>
          <SliderThumb boxSize={'60px'} bg={setThumbColor()} />
        </Slider>
      </Box>
    );
  }
};

export default CustomSliderTrack;
