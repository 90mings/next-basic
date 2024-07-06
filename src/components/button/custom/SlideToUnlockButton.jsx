'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { GText, CustomIcon } from '@/components';
import { BOX_S_64 } from '@/constants/common';

const SlideToUnlockButton = ({ onSuccess, isOneWay = false }) => {
  // 가변처리
  const [w, setW] = useState(620);

  const [isDragging, setIsDragging] = useState(false);
  const [unlock, setUnlock] = useState(false);
  const [startX, setStartX] = useState(0);
  const [sliderX, setSliderX] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef) {
      setW(buttonRef.current.clientWidth);
    }
  }, [buttonRef]);

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
      setSliderX(Math.min(Math.max(0, distance), w));
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
      setSliderX(Math.min(Math.max(0, distance), w));
    } else {
      setSliderX(distance);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (isOneWay) {
      if (sliderX >= w - w * 0.8) {
        handleOnSuccess();
      } else {
        setSliderX(0);
      }
    } else {
      if (Math.abs(sliderX) >= w - w * 0.8) {
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
        width: '100%',
        height: '100%',
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
          width: '100%',
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
        <HStack
          w="100%"
          h="100%"
          justifyContent={'space-between'}
          px={'5%'}
          spacing={0}
        >
          <CustomIcon
            w={BOX_S_64}
            h={BOX_S_64}
            name="doubleArrowLeft"
            color="#00000066"
          />
          <GText fontWeight={600} fontSize={40} color="#00000066">
            {unlock ? '시작하기!' : '밀어서 시작하기'}
          </GText>
          <CustomIcon
            w={BOX_S_64}
            h={BOX_S_64}
            name="doubleArrowRight"
            color="#00000066"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default SlideToUnlockButton;
