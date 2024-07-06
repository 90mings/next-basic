'use client';

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  VStack,
  HStack,
  Center,
} from '@chakra-ui/react';
import { GText } from '@/components';
import {
  TYPE_CONSONANT,
  TYPE_RING_SOUND,
  TYPE_SUBJECT,
  TYPE_VOWEL,
  RADIUS_S_20,
} from '@/constants/common';

const CustomSliderTrack = (props) => {
  const { value = 0 } = props;
  const { isNav = false, bottom = '18.5%' } = props;
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

  const handleOnChange = (value) => {
    if (onChange) {
      onChange(value);
    }
    /*
    const audio = audioRef.current;
    audio.currentTime = value;
    setCurrentTime(value);
    */
  };

  if (isNav) {
    return (
      <Center w={'100%'} h={'100%'}>
        <VStack w={'100%'} spacing={'7px'}>
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
              <SliderTrack
                bg={'#00000033'}
                h={{
                  xl: '22px',
                  lg: '22px',
                  md: '18px',
                  sm: '15px',
                  xs: '12px',
                }}
                borderRadius={RADIUS_S_20}
              >
                <SliderFilledTrack bg={setFillTrackColor()} />
              </SliderTrack>
              <SliderThumb
                boxSize={{
                  xl: '60px',
                  lg: '55px',
                  md: '45px',
                  sm: '38px',
                  xs: '30px',
                }}
                bg={setThumbColor()}
              />
            </Slider>
          </Box>
          <Box w="100%">
            <HStack justifyContent={'space-between'} alignItems={'center'}>
              <GText fontWeight={600} fontSize={30} color={'#000'}>
                느리게
              </GText>
              <GText fontWeight={600} fontSize={30} color={'#000'}>
                보통
              </GText>
              <GText fontWeight={600} fontSize={30} color={'#000'}>
                빠르게
              </GText>
            </HStack>
          </Box>
        </VStack>
      </Center>
    );
  } else {
    return (
      <Box
        px={'6.25%'}
        w={'100%'}
        h={'60px'}
        position={isNav ? 'relative' : 'absolute'}
        bottom={{
          xl: '17%',
          lg: '17%',
          md: '16%',
          sm: '16%',
          xs: '16%',
        }}
      >
        <Slider
          isReadOnly={true}
          value={value}
          min={0}
          max={max}
          onChange={handleOnChange}
          /*
          onChange={(val) => {
            handleSliderValue(val);
          }}
          */
        >
          <SliderTrack
            bg={'#00000033'}
            h={{ xl: '22px', lg: '22px', md: '18px', sm: '15px', xs: '12px' }}
            borderRadius={RADIUS_S_20}
          >
            <SliderFilledTrack bg={setFillTrackColor()} />
          </SliderTrack>
          <SliderThumb
            boxSize={{
              xl: '60px',
              lg: '55px',
              md: '45px',
              sm: '38px',
              xs: '35px',
            }}
            bg={setThumbColor()}
          />
        </Slider>
      </Box>
    );
  }
};

export default CustomSliderTrack;
