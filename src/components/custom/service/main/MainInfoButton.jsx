'use client';

import { GText } from '@/components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RING_SOUND, CONSONANT, SUBJECT, VOWEL } from '@/constants/pageURL';
import {
  TYPE_CONSONANT,
  TYPE_RING_SOUND,
  TYPE_VOWEL,
  TYPE_SUBJECT,
  NAV_MAIN_S,
} from '@/constants/common';
import { Box, Center } from '@chakra-ui/react';
import utils from '@/utils/index';
import { RADIUS_S_40 } from '@/constants/common';

const MainInfoButton = (props) => {
  const { type, isActive = false, isWide = false, data = [] } = props;

  const [countInfo, setCountInfo] = useState({
    passCount: 0,
    maxCount: 0,
  });

  useEffect(() => {
    if (data.length > 0) {
      let arr = [...data];
      let passItems = [];
      if (type === TYPE_RING_SOUND) {
        arr.pop();
        arr.map((item) => {
          if (
            item.passRingSoundStepId !== 0 &&
            utils.isNotEmpty(item.passRingSoundStepId)
          ) {
            passItems.push(item);
          }
        });
      } else if (type === TYPE_VOWEL) {
        arr.map((item) => {
          if (
            item.vowelStepId !== 0 &&
            utils.isNotEmpty(item.passVowelBranchId)
          ) {
            passItems.push(item);
          }
        });
      } else if (type === TYPE_CONSONANT) {
        arr.map((item) => {
          if (
            item.consonantsBranchId !== 0 &&
            utils.isNotEmpty(item.passConsonantsBranchId)
          ) {
            passItems.push(item);
          }
        });
      } else if (type === TYPE_SUBJECT) {
        arr.map((item) => {
          if (
            item.topicBranchId !== 0 &&
            utils.isNotEmpty(item.passTopicBranchId)
          ) {
            passItems.push(item);
          }
        });
      }
      setCountInfo({
        passCount: passItems.length,
        maxCount: arr.length,
      });
    }
  }, [data]);

  const [text, setText] = useState(null);
  const [top, setTop] = useState(null);
  const [bottom, setBottom] = useState(null);
  const [left, setLeft] = useState(null);
  const [right, setRight] = useState(null);
  const [transform, setTransform] = useState(null);
  const [bg, setBg] = useState('#999999');
  const [countBg, setCountBg] = useState('#555');
  const [borderColor, setBorderColor] = useState('#777');
  const [bgGradient, setBgGradient] = useState(
    'linear(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
  );
  const textShadow = '0px 2px 4px rgba(0, 0, 0, 0.14)';

  const router = useRouter();

  useEffect(() => {
    const bp = utils.getBreakpoint();
    switch (type) {
      case TYPE_RING_SOUND:
        setText(
          <GText
            textShadow={textShadow}
            fontSize={isWide ? 33 : 38}
            fontWeight={700}
            color="#FFFFFF"
          >
            링사운드
            <br />
            듣기
          </GText>,
        );
        setTop(null);
        setLeft('50%');
        setBottom(isWide ? '2%' : '4.6%');
        setTransform('translate(-50%, 0%)');
        setBg('#4DC6E0');
        setBorderColor('#389CB1');
        setCountBg('#218CA3');
        break;
      case TYPE_CONSONANT:
        setText(
          <GText
            textShadow={textShadow}
            fontSize={isWide ? 33 : 38}
            fontWeight={700}
            color="#FFFFFF"
          >
            자음
            <br />
            듣기
          </GText>,
        );
        setTop('55.7%');
        // setLeft('74.9%');
        setRight('5%');
        if (isActive) {
          setBg('#8DC642');
          setBorderColor('#75B125');
          setCountBg('#75B125');
        }
        break;
      case TYPE_VOWEL:
        setText(
          <GText
            textShadow={textShadow}
            fontSize={isWide ? 33 : 38}
            fontWeight={700}
            color={isActive ? '#664E1A' : '#FFF'}
          >
            모음
            <br />
            듣기
          </GText>,
        );
        setTop('55.7%');
        setLeft('5%');
        if (isActive) {
          setBg('#FEC240');
          setBorderColor('#C59835');
          setCountBg('#DC9C12');
        }
        break;
      default:
        setText(
          <GText
            textShadow={textShadow}
            fontSize={isWide ? 33 : 38}
            fontWeight={700}
            color="#FFFFFF"
          >
            주제별
            <br />
            듣기
          </GText>,
        );
        setLeft('50%');
        let tempTop = null;
        switch (bp) {
          case 'xs':
            tempTop = '110px';
            break;
          case 'sm':
            tempTop = '130px';
            break;
          case 'md':
            tempTop = '140px';
            break;
          case 'lg':
            tempTop = '160px';
            break;
          case 'xl':
            tempTop = '180px';
            break;
          default:
            tempTop = '0%';
            break;
        }
        setTop(0);
        setTransform(`translate(-50%, calc(10% - ${tempTop}))`);
        if (isActive) {
          setBg('#965D99');
          setBorderColor('#8030C5');
          setCountBg('#8D5191');
        }
        break;
    }
  }, [type, isWide, isActive]);

  const handleOnClick = () => {
    // router
    if (type === TYPE_RING_SOUND) {
      router.push(RING_SOUND.root);
    }
    if (isActive) {
      if (type === TYPE_SUBJECT) {
        router.push(SUBJECT.list);
      }
      if (type === TYPE_CONSONANT) {
        router.push(CONSONANT.list);
      }
      if (type === TYPE_VOWEL) {
        router.push(VOWEL.list);
      }
    }
  };

  if (text) {
    return (
      <Box
        className="no-select"
        _hover={{}}
        _active={{}}
        _focus={{}}
        zIndex={7}
        position={'absolute'}
        as="button"
        w={NAV_MAIN_S}
        h={NAV_MAIN_S}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        transform={transform}
        border={`4px solid ${borderColor}`}
        borderRadius="50%"
        bg={bg}
        bgGradient={bgGradient}
        boxShadow={'0px 6px 14px 0px #00000033'}
        onClick={handleOnClick}
      >
        <Center
          _hover={{}}
          _active={{}}
          _focus={{}}
          bg={countBg}
          position={'absolute'}
          top={0}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          borderRadius={RADIUS_S_40}
          maxW="100px"
          py={{ xl: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
          px={{ xl: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
        >
          <GText fontWeight={700} fontSize={24} color={'#FFF'}>
            {`${countInfo.passCount || 0}/${countInfo.maxCount || 0}`}
          </GText>
        </Center>
        <Box pt={'10px'}>{text}</Box>
      </Box>
    );
  }
};

export default MainInfoButton;
