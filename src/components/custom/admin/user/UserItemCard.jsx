'use client';

import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import {
  TYPE_CONSONANT,
  TYPE_RING_SOUND,
  TYPE_SUBJECT,
  TYPE_VOWEL,
} from '@/constants/common';
import utils from 'src/utils';

const UserItemCard = (props) => {
  const { data } = props;

  const STEP_BASIC = '#FFF';
  const STEP_SUCCESS = '#5E9E61';

  const TEST_BASIC = '#D9D9D9';
  const TEST_SUCCESS = '#31A8EB';
  const TEST_FAIL = '#E13529';

  const {
    ringSoundProgressDatas = [],
    vowelProgressDatas = [],
    consonantsProgressDatas = [],
    topicProgressDatas = [],
  } = data;

  const exportStepAndTest = (targetArr, type) => {
    let tempTest = {};
    let passFlag = 1;
    let tempArr = targetArr.filter((item, index) => {
      const targetIdx = index + 1;
      if (targetIdx < targetArr.length) {
        if (targetIdx === targetArr.length - 1) {
          if (type === TYPE_RING_SOUND) {
            passFlag = item.stepPassFlag;
          } else {
            passFlag = item.branchPassFlag;
          }
        }
        return item;
      }
      tempTest = { ...item };
    });

    return {
      step: tempArr,
      test: tempTest,
      passFlag: passFlag,
    };
  };

  const exportVowelInfo = () => {
    let vowelStep1Arr = [];
    let vowelStep2Arr = [];
    let vowelStep3Arr = [];
    let vowelStep4Arr = [];
    let vowelStep5Arr = [];
    let vowelStep6Arr = [];
    let vowelStep7Arr = [];
    let vowelStep8Arr = [];
    let vowelStep9Arr = [];
    let vowelStep10Arr = [];
    vowelProgressDatas.filter((item) => {
      const branchId = item.branchId;
      if (branchId === 1) {
        vowelStep1Arr.push(item);
      } else if (branchId === 2) {
        vowelStep2Arr.push(item);
      } else if (branchId === 3) {
        vowelStep3Arr.push(item);
      } else if (branchId === 4) {
        vowelStep4Arr.push(item);
      } else if (branchId === 5) {
        vowelStep5Arr.push(item);
      } else if (branchId === 6) {
        vowelStep6Arr.push(item);
      } else if (branchId === 7) {
        vowelStep7Arr.push(item);
      } else if (branchId === 8) {
        vowelStep8Arr.push(item);
      } else if (branchId === 9) {
        vowelStep9Arr.push(item);
      } else if (branchId === 10) {
        vowelStep10Arr.push(item);
      }
    });
    const retVowel1 = exportStepAndTest(vowelStep1Arr);
    const retVowel2 = exportStepAndTest(vowelStep2Arr);
    const retVowel3 = exportStepAndTest(vowelStep3Arr);
    const retVowel4 = exportStepAndTest(vowelStep4Arr);
    const retVowel5 = exportStepAndTest(vowelStep5Arr);
    const retVowel6 = exportStepAndTest(vowelStep6Arr);
    const retVowel7 = exportStepAndTest(vowelStep7Arr);
    const retVowel8 = exportStepAndTest(vowelStep8Arr);
    const retVowel9 = exportStepAndTest(vowelStep9Arr);
    const retVowel10 = exportStepAndTest(vowelStep10Arr);
    const retVowelStep = [
      retVowel1.step[9],
      retVowel2.step[9],
      retVowel3.step[9],
      retVowel4.step[9],
      retVowel5.step[9],
      retVowel6.step[9],
      retVowel7.step[9],
      retVowel8.step[9],
      retVowel9.test,
      retVowel10.test,
    ];
    const retVowelTest = [
      retVowel1.test,
      retVowel2.test,
      retVowel3.test,
      retVowel4.test,
      retVowel5.test,
      retVowel6.test,
      retVowel7.test,
      retVowel8.test,
    ];
    return {
      step: retVowelStep,
      test: retVowelTest,
    };
  };

  const exportConsonantsInfo = () => {
    let consonantsStep1Arr = [];
    let consonantsStep2Arr = [];
    let consonantsStep3Arr = [];
    let consonantsStep4Arr = [];
    let consonantsStep5Arr = [];
    let consonantsStep6Arr = [];
    let consonantsStep7Arr = [];
    let consonantsStep8Arr = [];
    let consonantsStep9Arr = [];
    let consonantsStep10Arr = [];

    let consonantsStep11Arr = [];
    let consonantsStep12Arr = [];
    let consonantsStep13Arr = [];
    let consonantsStep14Arr = [];
    let consonantsStep15Arr = [];
    let consonantsStep16Arr = [];
    let consonantsStep17Arr = [];
    let consonantsStep18Arr = [];
    let consonantsStep19Arr = [];
    let consonantsStep20Arr = [];

    let consonantsStep21Arr = [];
    let consonantsStep22Arr = [];
    let consonantsStep23Arr = [];
    let consonantsStep24Arr = [];
    let consonantsStep25Arr = [];

    consonantsProgressDatas.filter((item) => {
      const branchId = item.branchId;
      if (branchId === 1) {
        consonantsStep1Arr.push(item);
      } else if (branchId === 2) {
        consonantsStep2Arr.push(item);
      } else if (branchId === 3) {
        consonantsStep3Arr.push(item);
      } else if (branchId === 4) {
        consonantsStep4Arr.push(item);
      } else if (branchId === 5) {
        consonantsStep5Arr.push(item);
      } else if (branchId === 6) {
        consonantsStep6Arr.push(item);
      } else if (branchId === 7) {
        consonantsStep7Arr.push(item);
      } else if (branchId === 8) {
        consonantsStep8Arr.push(item);
      } else if (branchId === 9) {
        consonantsStep9Arr.push(item);
      } else if (branchId === 10) {
        consonantsStep10Arr.push(item);
      }

      if (branchId === 11) {
        consonantsStep11Arr.push(item);
      } else if (branchId === 12) {
        consonantsStep12Arr.push(item);
      } else if (branchId === 13) {
        consonantsStep13Arr.push(item);
      } else if (branchId === 14) {
        consonantsStep14Arr.push(item);
      } else if (branchId === 15) {
        consonantsStep15Arr.push(item);
      } else if (branchId === 16) {
        consonantsStep16Arr.push(item);
      } else if (branchId === 17) {
        consonantsStep17Arr.push(item);
      } else if (branchId === 18) {
        consonantsStep18Arr.push(item);
      } else if (branchId === 19) {
        consonantsStep19Arr.push(item);
      } else if (branchId === 20) {
        consonantsStep20Arr.push(item);
      }

      if (branchId === 21) {
        consonantsStep21Arr.push(item);
      } else if (branchId === 22) {
        consonantsStep22Arr.push(item);
      } else if (branchId === 23) {
        consonantsStep23Arr.push(item);
      } else if (branchId === 24) {
        consonantsStep24Arr.push(item);
      } else if (branchId === 25) {
        consonantsStep25Arr.push(item);
      }
    });

    const retConsonants1 = exportStepAndTest(consonantsStep1Arr);
    const retConsonants2 = exportStepAndTest(consonantsStep2Arr);
    const retConsonants3 = exportStepAndTest(consonantsStep3Arr);
    const retConsonants4 = exportStepAndTest(consonantsStep4Arr);
    const retConsonants5 = exportStepAndTest(consonantsStep5Arr);
    const retConsonants6 = exportStepAndTest(consonantsStep6Arr);
    const retConsonants7 = exportStepAndTest(consonantsStep7Arr);
    const retConsonants8 = exportStepAndTest(consonantsStep8Arr);
    const retConsonants9 = exportStepAndTest(consonantsStep9Arr);
    const retConsonants10 = exportStepAndTest(consonantsStep10Arr);

    const retConsonants11 = exportStepAndTest(consonantsStep11Arr);
    const retConsonants12 = exportStepAndTest(consonantsStep12Arr);
    const retConsonants13 = exportStepAndTest(consonantsStep13Arr);
    const retConsonants14 = exportStepAndTest(consonantsStep14Arr);
    const retConsonants15 = exportStepAndTest(consonantsStep15Arr);
    const retConsonants16 = exportStepAndTest(consonantsStep16Arr);
    const retConsonants17 = exportStepAndTest(consonantsStep17Arr);
    const retConsonants18 = exportStepAndTest(consonantsStep18Arr);
    const retConsonants19 = exportStepAndTest(consonantsStep19Arr);
    const retConsonants20 = exportStepAndTest(consonantsStep20Arr);

    const retConsonants21 = exportStepAndTest(consonantsStep21Arr);
    const retConsonants22 = exportStepAndTest(consonantsStep22Arr);
    const retConsonants23 = exportStepAndTest(consonantsStep23Arr);
    const retConsonants24 = exportStepAndTest(consonantsStep24Arr);
    const retConsonants25 = exportStepAndTest(consonantsStep25Arr);

    const retConsonants1Step = [
      retConsonants1.step[9],
      retConsonants2.step[9],
      retConsonants3.step[9],
      retConsonants4.step[9],
      retConsonants5.step[9],
      retConsonants6.step[9],
      retConsonants7.step[9],
      retConsonants8.step[9],
      retConsonants9.step[9],
      retConsonants10.step[9],
    ];
    const retConsonants1Test = [
      retConsonants1.test,
      retConsonants2.test,
      retConsonants3.test,
      retConsonants4.test,
      retConsonants5.test,
      retConsonants6.test,
      retConsonants7.test,
      retConsonants8.test,
      retConsonants9.test,
      retConsonants10.test,
    ];

    const retConsonants2Step = [
      retConsonants11.step[9],
      retConsonants12.step[9],
      retConsonants13.step[9],
      retConsonants14.step[9],
      retConsonants15.step[9],
      retConsonants16.step[9],
      retConsonants17.step[9],
      retConsonants18.step[9],
      retConsonants19.step[9],
      retConsonants20.step[9],
    ];
    const retConsonants2Test = [
      retConsonants11.test,
      retConsonants12.test,
      retConsonants13.test,
      retConsonants14.test,
      retConsonants15.test,
      retConsonants16.test,
      retConsonants17.test,
      retConsonants18.test,
      retConsonants19.test,
      retConsonants20.test,
    ];

    const retConsonants3Step = [
      retConsonants21.step[9],
      retConsonants22.step[9],
      retConsonants23.step[9],
      retConsonants24.step[9],
      retConsonants25.step[9],
    ];
    const retConsonants3Test = [
      retConsonants21.test,
      retConsonants22.test,
      retConsonants23.test,
      retConsonants24.test,
      retConsonants25.test,
    ];
    return {
      step1: retConsonants1Step,
      test1: retConsonants1Test,
      step2: retConsonants2Step,
      test2: retConsonants2Test,
      step3: retConsonants3Step,
      test3: retConsonants3Test,
    };
  };

  const exportTopicInfo = () => {
    let topicStep1Arr = [];
    let topicStep2Arr = [];
    let topicStep3Arr = [];
    let topicStep4Arr = [];
    let topicStep5Arr = [];
    let topicStep6Arr = [];
    let topicStep7Arr = [];
    let topicStep8Arr = [];
    let topicStep9Arr = [];
    let topicStep10Arr = [];
    topicProgressDatas.filter((item) => {
      const branchId = item.branchId;
      if (branchId === 1) {
        topicStep1Arr.push(item);
      } else if (branchId === 2) {
        topicStep2Arr.push(item);
      } else if (branchId === 3) {
        topicStep3Arr.push(item);
      } else if (branchId === 4) {
        topicStep4Arr.push(item);
      } else if (branchId === 5) {
        topicStep5Arr.push(item);
      } else if (branchId === 6) {
        topicStep6Arr.push(item);
      } else if (branchId === 7) {
        topicStep7Arr.push(item);
      } else if (branchId === 8) {
        topicStep8Arr.push(item);
      } else if (branchId === 9) {
        topicStep9Arr.push(item);
      } else if (branchId === 10) {
        topicStep10Arr.push(item);
      }
    });
    const retTopic1 = topicStep1Arr;
    const retTopic2 = topicStep2Arr;
    const retTopic3 = topicStep3Arr;
    const retTopic4 = topicStep4Arr;
    const retTopic5 = topicStep5Arr;
    const retTopic6 = topicStep6Arr;
    const retTopic7 = topicStep7Arr;
    const retTopic8 = topicStep8Arr;
    const retTopic9 = topicStep9Arr;
    const retTopic10 = topicStep10Arr;

    const retTopicStep = [
      retTopic1[9],
      retTopic2[9],
      retTopic3[9],
      retTopic4[9],
      retTopic5[9],
      retTopic6[9],
      retTopic7[9],
      retTopic8[9],
      retTopic9[9],
      retTopic10[9],
    ];
    return {
      step: retTopicStep,
    };
  };

  const retRing = exportStepAndTest(ringSoundProgressDatas, true);
  const ringStep = retRing.step;
  const ringTest = retRing.test;

  const retVowelStep = exportVowelInfo().step;
  const retVowelTest = exportVowelInfo().test;

  const retConsonants1Step = exportConsonantsInfo().step1;
  const retConsonants2Step = exportConsonantsInfo().step2;
  const retConsonants3Step = exportConsonantsInfo().step3;
  const retConsonants1Test = exportConsonantsInfo().test1;
  const retConsonants2Test = exportConsonantsInfo().test2;
  const retConsonants3Test = exportConsonantsInfo().test3;

  const retTopicStep = exportTopicInfo().step;

  const {
    nickName = '탈퇴회원',
    normalUserId,
    createdAt,
    loginAt,
    snsType = 0,
    totalTrainingSeconds = 0,
  } = data;

  const commomProps = {
    w: '168px',
    minW: '168px',
    h: '100%',
    px: '24px',
    pt: '20px',
    pb: '23px',
    boxSizing: 'border-box',
    borderRight: '1px solid #F1F1F1',
  };

  const setFontColor = (flag) => {
    if (flag === 1) return '#666666';
    else return '#FFF';
  };
  const setBgColor = (flag, isTest = false) => {
    if (flag === 1) return isTest ? TEST_BASIC : STEP_BASIC;
    if (flag === 2) return TEST_FAIL;
    if (flag === 3) return isTest ? TEST_SUCCESS : STEP_SUCCESS;
  };

  const itemCard = (data) => {
    const { type, step = 1, passFlag = 1, index = 0 } = data || {};
    const key = `${type}-${step}-${index}`;
    const topicTextArr = [
      '',
      '가족',
      '음식',
      '쇼핑',
      '시간',
      '여행',
      '병원',
      '전화',
      '인터넷',
      '관공서',
      '종교',
    ];

    const setText = () => {
      if (type === TYPE_RING_SOUND) {
        return `${step}단계`;
      } else if (type === TYPE_VOWEL) {
        if (step > 8) {
          return `${step}`;
        } else {
          return `${step}-10단계`;
        }
      } else if (type === TYPE_SUBJECT) {
        return `${topicTextArr[step]}-10단계`;
      } else {
        return `${step}-10단계`;
      }
    };

    return (
      <Center
        key={key}
        w={type === TYPE_SUBJECT ? '100px' : '60px'}
        h={'30px'}
        boxSizing="border-box"
        bg={setBgColor(passFlag)}
        border={'1px solid #EEE'}
      >
        <Text
          fontWeight={500}
          fontSize={'12px'}
          color={setFontColor(passFlag)}
          textAlign={'center'}
        >
          {setText()}
        </Text>
      </Center>
    );
  };

  const testCard = (data) => {
    const { type, step = 1, passFlag = 1, index = 0 } = data || {};
    const key = `${type}-${step}-${index}`;
    return (
      <Center
        key={key}
        w={'60px'}
        h={'30px'}
        bg={setBgColor(passFlag, true)}
        boxSizing="border-box"
        border={'1px solid #EEE'}
      >
        <Text
          fontWeight={500}
          fontSize={'12px'}
          color={setFontColor(passFlag)}
          textAlign={'center'}
        >
          TEST
        </Text>
      </Center>
    );
  };

  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    let formattedTime = '';
    if (h > 0) {
      formattedTime += `${h}시 `;
    }
    if (m > 0) {
      formattedTime += `${m}분 `;
    }
    if (s > 0 || formattedTime === '') {
      formattedTime += `${s}초`;
    }
    return formattedTime.trim();
  };

  const setSnsType = () => {
    switch (Number(snsType)) {
      case 1:
        return '카카오';
      case 2:
        return '네이버';
      case 3:
        return '구글';
      case 4:
        return '애플';
      default:
        return '알수없음';
    }
  };

  return (
    <Box
      w={'100%'}
      h={'372px'}
      boxSizing="border-box"
      border={'1px solid #EEE'}
      bg={'#FFF'}
    >
      <HStack w={'100%'} h={'100%'} spacing={0} alignItems={'flex-start'}>
        <Box pt={'24px'} {...commomProps}>
          <VStack h={'100%'} justifyContent={'space-between'} spacing={0}>
            <Box w={'100%'}>
              <VStack spacing={0}>
                <Text
                  fontWeight={700}
                  fontSize={'18px'}
                  color={'#000'}
                  textAlign={'center'}
                >
                  {nickName}
                </Text>
                <Text
                  fontWeight={700}
                  fontSize={'16px'}
                  color={'#000'}
                  textAlign={'center'}
                >
                  ({setSnsType()})
                </Text>
              </VStack>
            </Box>
            <Box w={'100%'}>
              <VStack spacing={'24px'}>
                <Box>
                  <Box>
                    <Text
                      fontWeight={700}
                      fontSize={'13px'}
                      color={'#E13529'}
                      textAlign={'center'}
                    >
                      총 학습시간
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontWeight={500}
                      fontSize={'13px'}
                      color={'#E13529'}
                      textAlign={'center'}
                    >
                      {formatTime(totalTrainingSeconds)}
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Text
                      fontWeight={700}
                      fontSize={'13px'}
                      color={'#666'}
                      textAlign={'center'}
                    >
                      가입일시
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontWeight={500}
                      fontSize={'13px'}
                      color={'#666'}
                      textAlign={'center'}
                    >
                      {utils.parseDateToStr(createdAt, '.', true)}
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Text
                      fontWeight={700}
                      fontSize={'13px'}
                      color={'#666'}
                      textAlign={'center'}
                    >
                      최근 로그인 일시
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontWeight={500}
                      fontSize={'13px'}
                      color={'#666'}
                      textAlign={'center'}
                    >
                      {utils.parseDateToStr(loginAt, '.', true)}
                    </Text>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
        <Box {...commomProps}>
          <VStack spacing={0}>
            <Box>
              <Text
                fontWeight={700}
                fontSize={'14px'}
                color={'#000'}
                textAlign={'center'}
              >
                링사운드 듣기
              </Text>
            </Box>
            <Box pt={'10px'}>
              <VStack spacing={0}>
                {ringStep.map((item, index) => {
                  return itemCard({
                    type: TYPE_RING_SOUND,
                    step: item.stepId,
                    passFlag: item.stepPassFlag,
                    index: index,
                    branchPassFlag: item.branchPassFlag,
                  });
                })}
              </VStack>
            </Box>

            {ringSoundProgressDatas.length > 0 && (
              <Box pt={'20px'}>
                <VStack spacing={0}>
                  {testCard({
                    type: TYPE_RING_SOUND,
                    step: ringTest.stepId,
                    passFlag: ringTest.stepPassFlag,
                  })}
                </VStack>
              </Box>
            )}
          </VStack>
        </Box>
        <Box {...commomProps}>
          <VStack spacing={0}>
            <Box w={'100%'}>
              <Text
                fontWeight={700}
                fontSize={'14px'}
                color={'#000'}
                textAlign={'left'}
              >
                모음 듣기
              </Text>
            </Box>
            <Box w={'100%'} pt={'10px'}>
              <HStack spacing={0} alignItems={'flex-start'}>
                <Box>
                  <VStack spacing={0}>
                    {retVowelStep.map((item, index) => {
                      return itemCard({
                        type: TYPE_VOWEL,
                        step: item.branchId,
                        passFlag: item.branchPassFlag,
                        index: index,
                      });
                    })}
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={0}>
                    {retVowelTest.map((item, index) => {
                      return testCard({
                        type: TYPE_VOWEL,
                        step: item.branchId,
                        passFlag: item.branchPassFlag,
                        index: index,
                      });
                    })}
                  </VStack>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Box>
        <Box {...commomProps} w={'auto'} minW={'457px'}>
          <VStack spacing={0}>
            <Box w={'100%'}>
              <Text
                fontWeight={700}
                fontSize={'14px'}
                color={'#000'}
                textAlign={'left'}
              >
                자음 듣기
              </Text>
            </Box>
            <Box w={'100%'} pt={'10px'}>
              <HStack alignItems={'flex-start'} spacing={'24px'}>
                <Box>
                  <HStack spacing={0}>
                    <Box>
                      <VStack spacing={0}>
                        {retConsonants1Step.map((item, index) => {
                          return itemCard({
                            type: TYPE_CONSONANT,
                            step: item.branchId,
                            passFlag: item.branchPassFlag,
                            index: index,
                          });
                        })}
                      </VStack>
                    </Box>
                    <Box>
                      <VStack spacing={0}>
                        {retConsonants1Test.map((item, index) => {
                          return testCard({
                            type: TYPE_CONSONANT,
                            step: item.branchId,
                            passFlag: item.branchPassFlag,
                            index: index,
                          });
                        })}
                      </VStack>
                    </Box>
                  </HStack>
                </Box>

                <Box>
                  <HStack spacing={0}>
                    <Box>
                      <VStack spacing={0}>
                        {retConsonants2Step.map((item, index) => {
                          return itemCard({
                            type: TYPE_CONSONANT,
                            step: item.branchId,
                            passFlag: item.branchPassFlag,
                            index: index,
                          });
                        })}
                      </VStack>
                    </Box>
                    <Box>
                      <VStack spacing={0}>
                        {retConsonants2Test.map((item, index) => {
                          return testCard({
                            type: TYPE_CONSONANT,
                            step: item.branchId,
                            passFlag: item.branchPassFlag,
                            index: index,
                          });
                        })}
                      </VStack>
                    </Box>
                  </HStack>
                </Box>

                <Box>
                  <HStack spacing={0}>
                    <Box>
                      <VStack spacing={0}>
                        {retConsonants3Step.map((item, index) => {
                          return itemCard({
                            type: TYPE_CONSONANT,
                            step: item.branchId,
                            passFlag: item.branchPassFlag,
                            index: index,
                          });
                        })}
                      </VStack>
                    </Box>
                    <Box>
                      <VStack spacing={0}>
                        {retConsonants3Test.map((item, index) => {
                          return testCard({
                            type: TYPE_CONSONANT,
                            step: item.branchId,
                            passFlag: item.branchPassFlag,
                            index: index,
                          });
                        })}
                      </VStack>
                    </Box>
                  </HStack>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Box>
        <Box {...commomProps} border={0}>
          <VStack spacing={0}>
            <Box w={'100%'}>
              <Text
                fontWeight={700}
                fontSize={'14px'}
                color={'#000'}
                textAlign={'left'}
              >
                주제별 듣기
              </Text>
            </Box>
            <Box w={'100%'} pt={'10px'}>
              <VStack spacing={0}>
                {retTopicStep.map((item, index) => {
                  return itemCard({
                    type: TYPE_SUBJECT,
                    step: item.branchId,
                    passFlag: item.branchPassFlag,
                    index: index,
                  });
                })}
              </VStack>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default UserItemCard;
