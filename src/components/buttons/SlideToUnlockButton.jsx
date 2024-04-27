'use client';

import { useEffect, useState, useRef } from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { CustomIcon } from '..';
import GText from '@/components/g';

const SwipeButton = ({ width, height = 110, onSuccess, isOneWay = false }) => {
  useEffect(() => {
    // buttonRef.current.click();
    // buttonRef.current.focus();
  }, []);

  const [isDragging, setIsDragging] = useState(false);
  const [unlock, setUnlock] = useState(false);
  const [startX, setStartX] = useState(0);
  const [sliderX, setSliderX] = useState(0);
  const buttonRef = useRef(null);

  const handleOnSuccess = () => {
    setUnlock(true);
    setSliderX(0);
    buttonRef.current.blur();
    if (onSuccess) {
      onSuccess();
    }
  };

  // touch
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const distance = e.touches[0].clientX - startX;
    if (isOneWay) {
      setSliderX(Math.min(Math.max(0, distance), width));
    } else {
      setSliderX(distance);
    }
  };

  // mouse
  const handleMouseStart = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientX - startX;
    if (isOneWay) {
      setSliderX(Math.min(Math.max(0, distance), width));
    } else {
      setSliderX(distance);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);

    if (isOneWay) {
      if (sliderX >= width) {
        handleOnSuccess();
      } else {
        setSliderX(0);
      }
    } else {
      if (Math.abs(sliderX) >= width) {
        handleOnSuccess();
      } else {
        setSliderX(0);
      }
    }
  };

  return (
    <Box
      tabIndex="0"
      ref={buttonRef}
      style={{
        boxSizing: 'content-box',
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: '#00000066',
        borderRadius: '120px',
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onFocus={() => {}}
    >
      <Box
        style={{
          boxSizing: 'content-box',
          borderRadius: '120px',
          width: `${width}px`,
          height: '100%',
          backgroundColor: unlock ? '#496E0B' : '#FEC240',
          transition: 'transform 0.3s ease',
          transform: `translateX(${sliderX}px)`,
        }}
        onMouseDown={handleMouseStart}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
      >
        <HStack w="100%" h="100%" justifyContent={'space-between'} px={'30px'}>
          <CustomIcon
            w={'64px'}
            h={'64px'}
            name="doubleArrowLeft"
            color="#00000066"
          />
          <GText
            fontWeight={600}
            fontSize={{
              xs: '34px',
              sm: '36px',
              md: '40px',
            }}
            color="#00000066"
          >
            {unlock ? '시작하기!' : '밀어서 시작하기'}
          </GText>
          <CustomIcon
            w={'64px'}
            h={'64px'}
            name="doubleArrowRight"
            color="#00000066"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default SwipeButton;
