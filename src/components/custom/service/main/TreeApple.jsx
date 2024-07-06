'use client';

import { Box, Image } from '@chakra-ui/react';
import AppleBasic from '@/svgs/apple-basic.svg';
import AppleReady from '@/svgs/apple-ready.svg';
import AppleActive from '@/svgs/apple-active.svg';
import { useEffect, useState } from 'react';
import CSS from './Tree.module.css';

const TreeApple = (props) => {
  const { data = [], isWide = false } = props;

  const dataFormat = {
    step8Clear: false,
    step9Clear: false,
    step10Clear: false,
  };

  const [subject01, setSubject01] = useState(dataFormat);
  const [subject02, setSubject02] = useState(dataFormat);
  const [subject03, setSubject03] = useState(dataFormat);
  const [subject04, setSubject04] = useState(dataFormat);
  const [subject05, setSubject05] = useState(dataFormat);
  const [subject06, setSubject06] = useState(dataFormat);
  const [subject07, setSubject07] = useState(dataFormat);
  const [subject08, setSubject08] = useState(dataFormat);
  const [subject09, setSubject09] = useState(dataFormat);
  const [subject10, setSubject10] = useState(dataFormat);

  useEffect(() => {
    if (data) {
      if (data[0]?.passTopicBranchId || data[0]?.ninePassTopicBranchId) {
        const ret = checkSubject(data[0]);
        setSubject01(ret);
      }
      if (data[1]?.passTopicBranchId || data[1]?.ninePassTopicBranchId) {
        const ret = checkSubject(data[1]);
        setSubject02(ret);
      }
      if (data[2]?.passTopicBranchId || data[2]?.ninePassTopicBranchId) {
        const ret = checkSubject(data[2]);
        setSubject03(ret);
      }
      if (data[3]?.passTopicBranchId || data[3]?.ninePassTopicBranchId) {
        const ret = checkSubject(data[3]);
        setSubject04(ret);
      }
      if (data[4]?.passTopicBranchId || data[4]?.ninePassTopicBranchId) {
        const ret = checkSubject(data[4]);
        setSubject05(ret);
      }
      if (data[5]?.passTopicBranchId || data[5]?.ninePassTopicBranchId) {
        const ret = checkSubject(data[5]);
        setSubject06(ret);
      }
      if (data[6]?.passTopicBranchId || data[6]?.ninePassTopicBranchId) {
        const ret = checkSubject(data[6]);
        setSubject07(ret);
      }
      if (data[7]?.passTopicBranchId || data[7]?.ninePassTopicBranchId) {
        const ret = checkSubject(data[7]);
        setSubject08(ret);
      }
      if (data[8]?.passTopicBranchId || data[8]?.ninePassTopicBranchId) {
        const ret = checkSubject(data[8]);
        setSubject09(ret);
      }
      if (data[9]?.passTopicBranchId || data[9]?.ninePassTopicBranchId) {
        const ret = checkSubject(data[9]);
        setSubject10(ret);
      }
    }
  }, [data]);

  const checkSubject = (topic) => {
    let retData = {
      step9Clear: false,
      step10Clear: false,
    };
    if (topic?.passTopicBranchId) {
      retData.step10Clear = true;
      return retData;
    }
    if (topic?.ninePassTopicBranchId) {
      retData.step9Clear = true;
      return retData;
    }
  };

  const setAppleImage = (topic) => {
    if (topic?.step10Clear === true) {
      return AppleActive.src;
    } else if (topic?.step9Clear === true) {
      return AppleReady.src;
    } else {
      return AppleBasic.src;
    }
  };

  return (
    <Box
      position={'absolute'}
      zIndex={4}
      w={'84.7950%'}
      maxW={isWide ? '70%' : null}
      h={{
        xl: '37.0149%',
        lg: '37.0149%',
        md: '37.0149%',
        sm: '28%',
        xs: '28%',
      }}
      objectFit={'contain'}
      left={'50%'}
      transform={'translate(-50%, 0%)'}
      bottom={'44.5515%'}
    >
      <Box position={'relative'} w={'100%'} h={'100%'}>
        <Image
          className={`${CSS.apple} ${CSS.apple01}`}
          src={setAppleImage(subject01)}
        />
        <Image
          className={`${CSS.apple} ${CSS.apple02}`}
          src={setAppleImage(subject02)}
        />
        <Image
          className={`${CSS.apple} ${CSS.apple03}`}
          src={setAppleImage(subject03)}
        />
        <Image
          className={`${CSS.apple} ${CSS.apple04}`}
          src={setAppleImage(subject04)}
        />
        <Image
          className={`${CSS.apple} ${CSS.apple05}`}
          src={setAppleImage(subject05)}
        />
        <Image
          className={`${CSS.apple} ${CSS.apple06}`}
          src={setAppleImage(subject06)}
        />
        <Image
          className={`${CSS.apple} ${CSS.apple07}`}
          src={setAppleImage(subject07)}
        />
        <Image
          className={`${CSS.apple} ${CSS.apple08}`}
          src={setAppleImage(subject08)}
        />
        <Image
          className={`${CSS.apple} ${CSS.apple09}`}
          src={setAppleImage(subject09)}
        />
        <Image
          className={`${CSS.apple} ${CSS.apple10}`}
          src={setAppleImage(subject10)}
        />
      </Box>
    </Box>
  );
};

export default TreeApple;
