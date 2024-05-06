'use client';

import { Box, Image } from '@chakra-ui/react';
import LeafSvgs from '@/svgs/leaf/index';
import AppleBasic from '@/svgs/apple-basic.svg';
import AppleReady from '@/svgs/apple-ready.svg';
import AppleActive from '@/svgs/apple-active.svg';
import { useEffect, useState } from 'react';
import CSS from './TreeLeaf.module.css';

const TreeLeaf = (props) => {
  const { leatData } = props;

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
    if (leatData) {
      if (leatData?.subject1) {
        const ret = checkSubject(leatData.subject1);
        setSubject01(ret);
      }
      if (leatData?.subject2) {
        const ret = checkSubject(leatData.subject2);
        setSubject02(ret);
      }
      if (leatData?.subject3) {
        const ret = checkSubject(leatData.subject3);
        setSubject03(ret);
      }
      if (leatData?.subject4) {
        const ret = checkSubject(leatData.subject4);
      }
      if (leatData?.subject5) {
        const ret = checkSubject(leatData.subject5);
      }
      if (leatData?.subject6) {
        const ret = checkSubject(leatData.subject6);
      }
      if (leatData?.subject7) {
        const ret = checkSubject(leatData.subject7);
      }
      if (leatData?.subject8) {
        const ret = checkSubject(leatData.subject8);
      }
      if (leatData?.subject9) {
        const ret = checkSubject(leatData.subject9);
      }
      if (leatData?.subject10) {
        const ret = checkSubject(leatData.subject10);
      }
    }
  }, []);

  const checkSubject = (subject) => {
    let retData = {
      step8Clear: false,
      step9Clear: false,
      step10Clear: false,
    };
    const keysArray = Object.keys(subject);
    const keyCnt = keysArray.length;
    if (keyCnt > 0) {
      retData.subJectCount = keyCnt;
      if (keyCnt > 7) {
        retData.step8Clear = true;
        if (keyCnt > 8) {
          retData.step9Clear = true;
        }
        if (keyCnt > 9) {
          const step10 = subject?.step10;
          if (step10 && step10 === true) {
            retData.step10Clear = true;
          }
        }
      }
    }
    return retData;
  };

  const setAppleImage = (subject) => {
    // console.log(subject);
    if (subject.step10Clear === true) {
      return AppleActive.src;
    } else if (subject.step9Clear === true) {
      return AppleReady.src;
    } else {
      return AppleBasic.src;
    }
  };

  return (
    <Box className={`${CSS.leafForm}`}>
      {/* leaf */}
      <Image
        className={`${CSS.leaf} ${CSS.leaf01}`}
        src={subject01.step8Clear ? LeafSvgs.leaf01Active : LeafSvgs.leaf01}
      />
      <Image
        className={`${CSS.leaf} ${CSS.leaf02}`}
        src={subject02.step8Clear ? LeafSvgs.leaf02Active : LeafSvgs.leaf02}
      />
      <Image
        className={`${CSS.leaf} ${CSS.leaf03}`}
        src={subject03.step8Clear ? LeafSvgs.leaf03Active : LeafSvgs.leaf03}
      />
      <Image
        className={`${CSS.leaf} ${CSS.leaf04}`}
        src={subject04.step8Clear ? LeafSvgs.leaf04Active : LeafSvgs.leaf04}
      />
      <Image
        className={`${CSS.leaf} ${CSS.leaf05}`}
        src={subject05.step8Clear ? LeafSvgs.leaf05Active : LeafSvgs.leaf05}
      />
      <Image
        className={`${CSS.leaf} ${CSS.leaf06}`}
        src={subject06.step8Clear ? LeafSvgs.leaf06Active : LeafSvgs.leaf06}
      />
      <Image
        className={`${CSS.leaf} ${CSS.leaf07}`}
        src={subject07.step8Clear ? LeafSvgs.leaf07Active : LeafSvgs.leaf07}
      />
      <Image
        className={`${CSS.leaf} ${CSS.leaf08}`}
        src={subject08.step8Clear ? LeafSvgs.leaf08Active : LeafSvgs.leaf08}
      />
      <Image
        className={`${CSS.leaf} ${CSS.leaf09}`}
        src={subject09.step8Clear ? LeafSvgs.leaf09Active : LeafSvgs.leaf09}
      />
      <Image
        className={`${CSS.leaf} ${CSS.leaf10}`}
        src={subject10.step8Clear ? LeafSvgs.leaf10Active : LeafSvgs.leaf10}
      />

      {/* apple */}
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
  );
};

export default TreeLeaf;
