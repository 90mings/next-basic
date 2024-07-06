import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { LIMIT_SECONDS, TYPE_SUBJECT } from 'src/constants/common';
import trainingHistoryApi from 'src/services/trainingHistoryApi';
import {
  chapterBranchIdState,
  chapterBranchInfoState,
  chapterCheckArrState,
  chapterDataState,
  chapterDetailIdState,
  chapterIndexState,
  chapterTimerState,
  chapterQuestionState,
  chapterSecondsState,
  chapterStartState,
  chapterStepIdState,
  chapterStepState,
  chapterTextState,
  chapterTopicQuestionState,
  chapterTotalSecondsState,
} from 'src/stores/chapterRecoil';
import { listenInfoState } from 'src/stores/commonRecoil';
import useTTS from './useTTS';

export const useChapter = () => {
  const isDev = process.env.NEXT_PUBLIC_NODE_ENV === 'development';
  const { postTTS } = useTTS();
  const listenInfo = useRecoilValue(listenInfoState);

  const resetDetailId = useResetRecoilState(chapterDetailIdState);
  const [detailId, setDetailId] = useRecoilState(chapterDetailIdState);

  const resetChapterIndex = useResetRecoilState(chapterIndexState);
  const [chapterIndex, setChapterIndex] = useRecoilState(chapterIndexState);

  const resetBranchInfo = useResetRecoilState(chapterBranchInfoState);
  const [branchInfo, setBranchInfo] = useRecoilState(chapterBranchInfoState);

  const resetStepId = useResetRecoilState(chapterStepIdState);
  const [stepId, setStepId] = useRecoilState(chapterStepIdState);

  const resetIsStart = useResetRecoilState(chapterStartState);
  const [isStart, setIsStart] = useRecoilState(chapterStartState);

  const resetStep = useResetRecoilState(chapterStepState);
  const [step, setStep] = useRecoilState(chapterStepState);

  const resetCheckArr = useResetRecoilState(chapterCheckArrState);
  const [checkArr, setCheckArr] = useRecoilState(chapterCheckArrState);

  const resetQuestion = useResetRecoilState(chapterQuestionState);
  const [question, setQuestion] = useRecoilState(chapterQuestionState);

  const resetTargetText = useResetRecoilState(chapterTextState);
  const [targetText, setTargetText] = useRecoilState(chapterTextState);

  const resetListData = useResetRecoilState(chapterDataState);
  const [listData, setListData] = useRecoilState(chapterDataState);

  const resetTopicListData = useResetRecoilState(chapterTopicQuestionState);
  const [topicListData, setTopicListData] = useRecoilState(
    chapterTopicQuestionState,
  );

  const resetIsTimer = useResetRecoilState(chapterTimerState);
  const [isTimer, setIsTimer] = useRecoilState(chapterTimerState);

  const resetTotalStepSeconds = useResetRecoilState(chapterTotalSecondsState);
  const [totalStepSeconds, setTotalStepSeconds] = useRecoilState(
    chapterTotalSecondsState,
  );

  const resetStepSeconds = useResetRecoilState(chapterSecondsState);
  const [stepSeconds, setStepSeconds] = useRecoilState(chapterSecondsState);

  const initChapter = (isInitBranchInfo = true) => {
    resetChapterIndex();
    if (isInitBranchInfo) {
      resetBranchInfo();
    }
    resetTotalStepSeconds();
    resetIsTimer();
    resetStepSeconds();
    resetDetailId();
    resetStepId();
    resetIsStart();
    resetStep();
    resetCheckArr();
    resetQuestion();
    resetTargetText();
  };

  const nextChapter = () => {
    resetIsTimer();
    resetStepSeconds();
    resetTargetText();
    resetQuestion();
  };

  const stepIndex = () => {
    if (step === 0) {
      return 0;
    }
    return step - 1;
  };

  useEffect(() => {
    let interval;
    if (isTimer) {
      interval = setInterval(() => {
        setStepSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isTimer && stepSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimer, stepSeconds]);

  const timerStart = () => {
    if (isDev) {
      console.log('timerStart');
    }
    if (!isTimer) {
      setIsTimer(true);
    }
  };

  const timerStop = (type, branchId, step, isFinish = false) => {
    setIsTimer(false);
    if (stepSeconds < LIMIT_SECONDS) {
      if (isDev) {
        console.log('totalStepSeconds', totalStepSeconds);
        console.log('stepSeconds', stepSeconds);
      }
      if (isFinish) {
        const param = {
          trainingSeconds: stepSeconds + totalStepSeconds,
          trainingCategory: type,
          trainingBranch: branchId,
          trainingStep: step,
        };
        trainingHistoryApi.postUserTrainingHistory(param);
      } else {
        setTotalStepSeconds((prev) => prev + stepSeconds);
      }
    }
  };

  const getTTSParam = async (text, {} = {}) => {
    if (isDev) {
      console.log('chapterIndex', chapterIndex);
      console.log('branchInfo', branchInfo);
    }
    const param = {};
    param.pitch = 0;
    if (listenInfo.voice === 0) {
      // param.gender = 'FEMALE';
      param.name = 'ko-KR-Neural2-A';
      // param.name = 'ko-KR-Neural2-B';
    } else {
      // param.gender = 'MALE';
      // param.name = 'ko-KR-Standard-D';
      param.name = 'ko-KR-Neural2-C';
    }
    if (listenInfo.speed === 1) {
      param.speed = 0.68;
    } else if (listenInfo.speed === 2) {
      param.speed = 0.8;
    } else {
      param.speed = 1;
    }
    const result = await postTTS(text, param);
    return result;
  };

  const dobuleCheckAnswer = (
    type,
    branchId,
    chapterIndex,
    targetText,
    answer,
    question,
  ) => {
    const isTopic = type === TYPE_SUBJECT;
    /*
    console.log('branchId', branchId);
    console.log('chapterIndex', chapterIndex);
    console.log('targetText', targetText);
    console.log('isTopic', isTopic);
    */
    if (branchId === 1) {
      if (isTopic && chapterIndex === 9) {
      }

      if (isTopic && chapterIndex === 10) {
        if (targetText === '중3') {
          if (answer === '중3' || answer === '중학교3학년' || answer === '중삼')
            return true;
          else false;
        }
        if (targetText === '8살') {
          if (answer === '8살' || answer === '여덟살') return true;
          else false;
        }
        if (targetText === '제과제빵') {
          if (answer === '제과제빵' || answer === '제빵') return true;
          else false;
        }
        if (targetText === '여자') {
          if (
            answer === '여자' ||
            answer === '여아' ||
            answer === '딸' ||
            answer === '손녀'
          )
            return true;
          else false;
        }
        if (targetText === '12시간') {
          if (answer === '12시간' || answer === '열두시간') return true;
          else false;
        }
        if (targetText === '없다') {
          if (answer === '없다' || answer === '아무도없다') return true;
          else false;
        }
        if (targetText === '남편') {
          if (
            answer === '남편' ||
            answer === '친구남편' ||
            answer === '내친구남편'
          )
            return true;
          else false;
        }
        if (targetText === '편함') {
          if (answer === '편함' || answer === '편하다') return true;
          else false;
        }
        if (targetText === '비') {
          if (answer === '비' || answer === '비옴' || answer === '비가온다')
            return true;
          else false;
        }
        if (targetText === '즐거움') {
          if (answer === '즐거움' || answer === '즐겁다') return true;
          else false;
        }
        if (targetText === '네명') {
          if (answer === '네명' || answer === '네명') return true;
          else false;
        }
        if (targetText === '2시간') {
          if (
            answer === '2시간' ||
            answer === '두시간' ||
            answer === '2시간씩' ||
            answer === '두시간씩'
          )
            return true;
          else false;
        }
        if (targetText === '직장 근처') {
          if (answer === '직장 근처' || answer === '직장근처') return true;
          else false;
        }
        if (targetText === '맞벌이') {
          if (answer === '맞벌이' || answer === '맞벌이부부') return true;
          else false;
        }
        if (targetText === '39도') {
          if (answer === '39도' || answer === '삼십구도') return true;
          else false;
        }
      }
    } else if (branchId === 2) {
      if (isTopic && chapterIndex === 9) {
        if (targetText === '참치김밥한줄그냥김밥한줄주세요') {
          if (
            answer === '참치김밥한줄그냥김밥한줄주세요' ||
            answer === '참치김밥1줄그냥김밥1줄주세요'
          )
            return true;
          else false;
        }
        if (targetText === '바빠서김밥한줄먹었더니배가고프다') {
          if (
            answer === '바빠서김밥한줄먹었더니배가고프다' ||
            answer === '바빠서김밥1줄먹었더니배가고프다'
          )
            return true;
          else false;
        }
        if (targetText === '영수증으로무료주차2시간가능해요') {
          if (
            answer === '영수증으로무료주차2시간가능해요' ||
            answer === '영수증으로무료주차두시간가능해요'
          )
            return true;
          else false;
        }
        if (targetText === '나는자장면보다는짬뽕을좋아한다') {
          if (
            answer === '나는자장면보다는짬뽕을좋아한다' ||
            answer === '나는짜장면보다는짬뽕을좋아한다'
          )
            return true;
          else false;
        }
      }

      if (isTopic && chapterIndex === 10) {
        if (targetText === '3남매') {
          if (
            answer === '3남매' ||
            answer === '삼남매' ||
            answer === '3명' ||
            answer === '세명'
          )
            return true;
          else false;
        }
        if (targetText === '생일') {
          if (answer === '생일' || answer === '생일날' || answer === '생일파티')
            return true;
          else false;
        }
        if (targetText === '검색') {
          if (
            answer === '검색' ||
            answer === '인터넷' ||
            answer === '인터넷검색'
          )
            return true;
          else false;
        }
        if (targetText === '짜증') {
          if (answer === '짜증' || answer === '짜증남' || answer === '짜증난다')
            return true;
          else false;
        }
        if (targetText === '1000원') {
          if (answer === '1000원' || answer === '천원' || answer === '1천원')
            return true;
          else false;
        }
        if (targetText === '10%') {
          if (
            answer === '10%' ||
            answer === '10프로' ||
            answer === '10퍼센트' ||
            answer === '십프로' ||
            answer === '십퍼센트'
          )
            return true;
          else false;
        }
        if (targetText === '전자렌지') {
          if (
            answer === '전자레인지' ||
            answer === '전자렌지'
            // 전자렌지 는 오답처리
          )
            return true;
          else false;
        }
        if (targetText === '만원') {
          if (
            answer === '만원' ||
            answer === '만원이상' ||
            answer === '10000원' ||
            answer === '10000원이상'
          )
            return true;
          else false;
        }
        if (targetText === '2시간') {
          if (answer === '2시간' || answer === '두시간') return true;
          else false;
        }
      }
    } else if (branchId === 3) {
      if (isTopic && chapterIndex === 9) {
        if (targetText === '특별히하나더넣어드렸어요') {
          if (
            answer === '특별히하나더넣어드렸어요' ||
            answer === '특별히1더넣어드렸어요'
          )
            return true;
          else false;
        }
        if (targetText === '인터넷으로사면보통3일안에도착한다') {
          if (
            answer === '인터넷으로사면보통3일안에도착한다' ||
            answer === '인터넷으로사면보통삼일안에도착한다'
          )
            return true;
          else false;
        }
        if (targetText === '5만원이상이면무이자할부가능해요') {
          if (
            answer === '5만원이상이면무이자할부가능해요' ||
            answer === '오만원이상이면무이자할부가능해요'
          )
            return true;
          else false;
        }
        if (targetText === '일회용비닐사용이금지되었어요') {
          if (
            answer === '일회용비닐사용이금지되었어요' ||
            answer === '1회용비닐사용이금지되었어요'
          )
            return true;
          else false;
        }
      }

      if (isTopic && chapterIndex === 10) {
        if (targetText === '1700원') {
          if (answer === '1700원' || answer === '천칠백원') return true;
          else false;
        }
        if (targetText === '4권') {
          if (answer === '4권' || answer === '네권') return true;
          else false;
        }
        if (targetText === '48000원') {
          if (answer === '48000원' || answer === '사만팔천원') return true;
          else false;
        }
        if (targetText === '5박스') {
          if (answer === '5박스' || answer === '다섯박스') return true;
          else false;
        }
        if (targetText === '배터리') {
          if (
            answer === '배터리' ||
            answer === '밧데리' ||
            answer === '보조배터리'
            // 충전기
          )
            return true;
          else false;
        }
        if (targetText === '최근') {
          if (answer === '최근' || answer === '최근에') return true;
          else false;
        }
        if (targetText === '반품') {
          if (answer === '반품' || answer === '반품상품') return true;
          else false;
        }
        if (targetText === '환불') {
          if (answer === '환불' || answer === '환불처리') return true;
          else false;
        }
        if (targetText === '외국') {
          if (answer === '외국' || answer === '외국에') return true;
          else false;
        }
        if (targetText === '반려동물') {
          if (answer === '반려동물' || answer === '반려동물용품점') return true;
          else false;
        }
        if (targetText === '보험') {
          if (answer === '보험' || answer === '반려동물보험') return true;
          else false;
        }
        if (targetText === '5월') {
          if (answer === '5월' || answer === '오월') return true;
          else false;
        }
        if (targetText === '부모님') {
          if (answer === '부모님' || answer === '부모') return true;
          else false;
        }
        if (targetText === '4개') {
          if (
            answer === '4개' ||
            answer === '네개' ||
            answer === '4캔' ||
            answer === '네캔'
          )
            return true;
          else false;
        }
        if (targetText === '대용량') {
          if (answer === '대용량' || answer === '대용량이라서') return true;
          else false;
        }
        if (targetText === '400만원') {
          if (answer === '400만원' || answer === '사백만원') return true;
          else false;
        }
        if (targetText === '할부') {
          if (
            answer === '할부' ||
            answer === '12개월할부' ||
            answer === '십이개월할부'
          )
            return true;
          else false;
        }
      }
    } else if (branchId === 4) {
      if (isTopic && chapterIndex === 9) {
        if (targetText === '11시부터3시까지런치가격입니다') {
          if (
            answer === '11시부터3시까지런치가격입니다' ||
            answer === '11시부터세시까지런치가격입니다' ||
            answer === '열한시부터3시까지런치가격입니다' ||
            answer === '열한시부터세시까지런치가격입니다'
          )
            return true;
          else false;
        }
        if (targetText === '1년은1월부터12월까지모두열두달이다') {
          if (
            answer === '1년은1월부터12월까지모두열두달이다' ||
            answer === '일년은1월부터12월까지모두열두달이다' ||
            answer === '일년은일월부터12월까지모두열두달이다' ||
            answer === '일년은일월부터십이월까지모두열두달이다'
          )
            return true;
          else false;
        }
        if (targetText === '어린이날3일후는어버이날이에요') {
          if (
            answer === '어린이날3일후는어버이날이에요' ||
            answer === '어린이날삼일후는어버이날이에요'
          )
            return true;
          else false;
        }
        if (targetText === '1시부터2시까지는점심시간입니다') {
          if (
            answer === '1시부터2시까지는점심시간입니다' ||
            answer === '한시부터두시까지는점심시간입니다'
          )
            return true;
          else false;
        }
        if (targetText === '비가와서경기가한주미뤄졌어') {
          if (
            answer === '비가와서경기가한주미뤄졌어' ||
            answer === '비가와서경기가1주미뤄졌어'
          )
            return true;
          else false;
        }
        if (targetText === '올해추석은연달아5일이나쉬어요') {
          if (
            answer === '올해추석은연달아5일이나쉬어요' ||
            answer === '올해추석은연달아오일이나쉬어요'
          )
            return true;
          else false;
        }
      }

      if (isTopic && chapterIndex === 10) {
        if (targetText === '2월') {
          if (answer === '2월' || answer === '이월') return true;
          else false;
        }
        if (targetText === '가격') {
          if (answer === '가격' || answer === '비싼것') return true;
          else false;
        }
        if (targetText === '중간고사') {
          if (answer === '중간고사' || answer === '시험') return true;
          else false;
        }
        if (targetText === '수요일') {
          if (answer === '수요일' || answer === '수요일부터') return true;
          else false;
        }
        if (targetText === '새벽') {
          if (answer === '새벽' || answer === '새벽에') return true;
          else false;
        }
        if (targetText === '어린이날') {
          if (answer === '어린이날' || answer === '5월5일') return true;
          else false;
        }
        if (targetText === '놀이동산') {
          if (answer === '놀이동산' || answer === '놀이공원') return true;
          else false;
        }
        if (targetText === '시험') {
          if (answer === '시험' || answer === '시험날') return true;
          else false;
        }
        if (targetText === '운동') {
          if (answer === '운동' || answer === '운동습관') return true;
          else false;
        }
        if (targetText === '3시') {
          if (answer === '3시' || answer === '세시') return true;
          else false;
        }
        if (targetText === '5시') {
          if (answer === '5시' || answer === '다섯시') return true;
          else false;
        }
        if (targetText === '연말') {
          if (answer === '연말' || answer === '연말에') return true;
          else false;
        }
        if (targetText === '옛날') {
          if (answer === '옛날' || answer === '옛날에') return true;
          else false;
        }
        if (targetText === '여행') {
          if (
            answer === '여행' ||
            answer === '여행계획' ||
            answer === '여행갈때'
          )
            return true;
          else false;
        }
        if (targetText === '퇴직') {
          if (answer === '퇴직' || answer === '퇴직후' || answer === '퇴직후에')
            return true;
          else false;
        }
        if (targetText === '수명') {
          if (answer === '수명' || answer === '평균수명') return true;
          else false;
        }
        if (targetText === '퇴근') {
          if (
            answer === '퇴근' ||
            answer === '퇴근후' ||
            answer === '퇴근후에' ||
            answer === '퇴근이후' ||
            answer === '퇴근이후에'
          )
            return true;
          else false;
        }
        if (targetText === '주말') {
          if (answer === '주말' || answer === '주말에') return true;
          else false;
        }
        if (targetText === '10시') {
          if (answer === '10시' || answer === '열시') return true;
          else false;
        }
        if (targetText === '자기 전') {
          if (
            answer === '자기 전' ||
            answer === '자기전' ||
            answer === '자기전에'
          )
            return true;
          else false;
        }
        if (targetText === '카페인') {
          if (answer === '카페인' || answer === '카페인음료') return true;
          else false;
        }
        if (targetText === '7시') {
          if (
            answer === '7시' ||
            answer === '일곱시' ||
            answer === '7시까지' ||
            answer === '일곱시까지'
          )
            return true;
          else false;
        }
        if (targetText === '8시') {
          if (
            answer === '8시' ||
            answer === '여덟시' ||
            answer === '8시까지' ||
            answer === '여덟시까지'
          )
            return true;
          else false;
        }
        /*
        if (targetText === '7시') {
          if (answer === '7시' || answer === '일곱시') return true;
          else false;
        }
        */
        if (targetText === '목요일') {
          if (answer === '목요일' || answer === '매주목요일') return true;
          else false;
        }
      }
    } else if (branchId === 5) {
      if (isTopic && chapterIndex === 9) {
        if (targetText === '후기를남기면10%할인쿠폰을드려요') {
          if (
            answer === '후기를남기면10%할인쿠폰을드려요' ||
            answer === '후기를남기면10퍼센트할인쿠폰을드려요' ||
            answer === '후기를남기면10프로할인쿠폰을드려요' ||
            answer === '후기를남기면십%할인쿠폰을드려요' ||
            answer === '후기를남기면십퍼센트할인쿠폰을드려요' ||
            answer === '후기를남기면십프로할인쿠폰을드려요'
          )
            return true;
          else false;
        }
        if (targetText === '만4세부터초등학생까지소인적용됩니다') {
          if (
            answer === '만4세부터초등학생까지소인적용됩니다' ||
            answer === '만사세부터초등학생까지소인적용됩니다'
          )
            return true;
          else false;
        }
        if (targetText === '출발2일전에취소하면반만환불됩니다') {
          if (
            answer === '출발2일전에취소하면반만환불됩니다' ||
            answer === '출발이일전에취소하면반만환불됩니다'
          )
            return true;
          else false;
        }
        if (targetText === 'KTX로서울에서부산까지3시간걸린다') {
          if (
            answer === 'KTX로서울에서부산까지3시간걸린다' ||
            answer === 'KTX로서울에서부산까지세시간걸린다'
          )
            return true;
          else false;
        }
        if (targetText === '체크인이3시부터라서기다려야한다') {
          if (
            answer === '체크인이3시부터라서기다려야한다' ||
            answer === '체크인이세시부터라서기다려야한다'
          )
            return true;
          else false;
        }
      }

      if (isTopic && chapterIndex === 10) {
        if (targetText === '방학') {
          if (answer === '방학' || answer === '겨울방학') return true;
          else false;
        }
        if (targetText === '2배') {
          if (answer === '2배' || answer === '두배') return true;
          else false;
        }
        if (targetText === '10') {
          if (answer === '10' || answer === '십') return true;
          else false;
        }
        if (targetText === '산') {
          if (answer === '산' || answer === '단풍놀이') return true;
          else false;
        }
        if (targetText === '여름') {
          if (answer === '여름' || answer === '여름에') return true;
          else false;
        }
        if (targetText === '태풍') {
          if (answer === '태풍' || answer === '태풍때문에') return true;
          else false;
        }
        if (targetText === '내일') {
          if (answer === '내일' || answer === '내일아침') return true;
          else false;
        }
        if (targetText === '1개') {
          if (answer === '1개' || answer === '하나' || answer === '한개')
            return true;
          else false;
        }
        if (targetText === '전액') {
          if (
            answer === '전액' ||
            answer === '100%' ||
            answer === '백프로' ||
            answer === '백퍼센트' ||
            answer === '100프로' ||
            answer === '100퍼센트'
          )
            return true;
          else false;
        }
        if (targetText === '50%') {
          if (
            answer === '50%' ||
            answer === '50프로' ||
            answer === '오십프로' ||
            answer === '50퍼센트' ||
            answer === '오십퍼센트'
          )
            return true;
          else false;
        }
        if (targetText === '여행책') {
          if (answer === '여행책' || answer === '책') return true;
          else false;
        }
        if (targetText === '식사') {
          if (answer === '식사' || answer === '전일정식사') return true;
          else false;
        }
        if (targetText === '4세') {
          if (answer === '4세' || answer === '사세') return true;
          else false;
        }
        if (targetText === '13세') {
          if (answer === '13세' || answer === '십삼세') return true;
          else false;
        }
        if (targetText === '기차') {
          if (
            answer === '기차' ||
            answer === 'ktx' ||
            answer === 'KTX' ||
            answer === 'ktx비' ||
            answer === 'KTX비'
          )
            return true;
          else false;
        }
        if (targetText === '시간') {
          if (answer === '시간' || answer === '시간선택') return true;
          else false;
        }
        if (targetText === '6시') {
          if (answer === '6시' || answer === '여섯시') return true;
          else false;
        }
        if (targetText === '로밍') {
          if (answer === '로밍' || answer === '해외로밍') return true;
          else false;
        }
        if (targetText === '200만명') {
          if (answer === '200만명' || answer === '이백만명') return true;
          else false;
        }
      }
    } else if (branchId === 6) {
      if (isTopic && chapterIndex === 9) {
        if (targetText === '2년마다건강검진을받아요') {
          if (
            answer === '2년마다건강검진을받아요' ||
            answer === '이년마다건강검진을받아요'
          )
            return true;
          else false;
        }
        if (targetText === '다음매핑은세달후에오시면됩니다') {
          if (
            answer === '다음매핑은세달후에오시면됩니다' ||
            answer === '다음매핑은3달후에오시면됩니다'
          )
            return true;
          else false;
        }
      }

      if (isTopic && chapterIndex === 10) {
        if (targetText === '정밀 검사') {
          if (answer === '정밀 검사' || answer === '정밀검사') return true;
          else false;
        }
        if (targetText === '2년') {
          if (
            answer === '2년' ||
            answer === '이년' ||
            answer === '2년마다' ||
            answer === '이년마다'
          )
            return true;
          else false;
        }
        if (targetText === '아빠') {
          if (answer === '아빠' || answer === '아빠약') return true;
          else false;
        }
        if (targetText === '접종') {
          if (
            answer === '접종' ||
            answer === '독감접종' ||
            answer === '독감예방접종'
          )
            return true;
          else false;
        }
        if (targetText === '내일') {
          if (answer === '내일' || answer === '내일오전') return true;
          else false;
        }
        if (targetText === '발목') {
          if (answer === '발목' || answer === '발목골절') return true;
          else false;
        }
        if (targetText === '일주일') {
          if (answer === '일주일' || answer === '일주일뒤') return true;
          else false;
        }
        if (targetText === '2주') {
          if (
            answer === '2주' ||
            answer === '이주' ||
            answer === '2주뒤' ||
            answer === '이주뒤'
          )
            return true;
          else false;
        }
        if (targetText === '알러지') {
          if (answer === '알러지' || answer === '알레르기') return true;
          else false;
        }
        if (targetText === '내과') {
          if (answer === '내과' || answer === '알레르기내과') return true;
          else false;
        }
        if (targetText === '2시간') {
          if (answer === '2시간' || answer === '두시간') return true;
          else false;
        }
        if (targetText === '감기') {
          if (answer === '감기' || answer === '감기걸려서') return true;
          else false;
        }
        if (targetText === '65세') {
          if (answer === '65세' || answer === '육십오세') return true;
          else false;
        }
        if (targetText === '콧물') {
          if (answer === '콧물' || answer === '기침' || answer === '콧물과기침')
            return true;
          else false;
        }
        if (targetText === '한달') {
          if (answer === '한달' || answer === '1달') return true;
          else false;
        }
        if (targetText === '진료') {
          if (answer === '진료' || answer === '정기진료') return true;
          else false;
        }
        if (targetText === '관절염') {
          if (answer === '관절염' || answer === '퇴행성관절염') return true;
          else false;
        }
        if (targetText === '무서워서') {
          if (answer === '무서워서' || answer === '무섭다고') return true;
          else false;
        }
      }
    } else if (branchId === 7) {
      if (isTopic && chapterIndex === 9) {
      }

      if (isTopic && chapterIndex === 10) {
        if (targetText === '선물') {
          if (
            answer === '선물' ||
            answer === '엄마선물' ||
            answer === '엄마생신선물'
          )
            return true;
          else false;
        }
        if (targetText === '정지') {
          if (
            answer === '정지' ||
            answer === '카드정지' ||
            answer === '카드이용정지'
          )
            return true;
          else false;
        }
        if (targetText === '변경') {
          if (
            answer === '변경' ||
            answer === '예약변경' ||
            answer === '예약일자변경'
          )
            return true;
          else false;
        }
        if (targetText === '출장') {
          if (answer === '출장' || answer === '출장일정') return true;
          else false;
        }
        if (targetText === '아침') {
          if (answer === '아침' || answer === '오늘아침') return true;
          else false;
        }
        if (targetText === '시간') {
          if (answer === '시간' || answer === '예약시간') return true;
          else false;
        }
        if (targetText === '10753') {
          if (answer === '10753' || answer === '일공칠오삼') return true;
          else false;
        }
        if (targetText === '회의') {
          if (answer === '회의' || answer === '회의중') return true;
          else false;
        }
        if (targetText === '생신') {
          if (answer === '생신' || answer === '어머니생신') return true;
          else false;
        }
        if (targetText === '중식집') {
          if (answer === '중식집' || answer === '중국집') return true;
          else false;
        }
        if (targetText === '101동1005호') {
          if (answer === '101동1005호' || answer === '백일동천오호')
            return true;
          else false;
        }
        if (targetText === '10시') {
          if (
            answer === '10시' ||
            answer === '열시' ||
            answer === '오전열시' ||
            answer === '오전10시'
          )
            return true;
          else false;
        }
        if (targetText === '6시30분') {
          if (answer === '6시30분' || answer === '여섯시삼십분') return true;
          else false;
        }
        if (targetText === '기사') {
          if (answer === '기사' || answer === '서비스센터기사') return true;
          else false;
        }
        if (targetText === '30분') {
          if (answer === '30분' || answer === '삼십분') return true;
          else false;
        }
        if (
          question === '미성년자는 몇 시부터 PC방에 출입하지 못하나요?' &&
          targetText === '10시'
        ) {
          if (
            answer === '10시' ||
            answer === '열시' ||
            answer === '오후10시' ||
            answer === '오후열시' ||
            answer === '밤10시' ||
            answer === '밤열시'
          )
            return true;
          else false;
        }
      }
    } else if (branchId === 8) {
      if (isTopic && (chapterIndex === 5 || chapterIndex === 6)) {
        if (targetText === 'USB') {
          if (answer === 'usb' || answer === 'USB' || answer === '유에스비')
            return true;
          else false;
        }
        if (targetText === 'SNS') {
          if (
            answer === 'sns' ||
            answer === 'SNS' ||
            answer === '에스앤에스' ||
            answer === '에스엔에스'
          )
            return true;
          else false;
        }
        if (targetText === '디엠') {
          if (answer === '디엠' || answer === '디앰' || answer === 'DM')
            return true;
          else false;
        }
      }

      if (isTopic && chapterIndex === 9) {
      }

      if (isTopic && chapterIndex === 10) {
        if (targetText === '아메리카노') {
          if (answer === '아메리카노' || answer === '아이스아메리카노')
            return true;
          else false;
        }
        if (targetText === '비번') {
          if (answer === '비번' || answer === '비밀번호') return true;
          else false;
        }
        if (targetText === '빅맥') {
          if (answer === '빅맥' || answer === '빅맥세트') return true;
          else false;
        }
        if (targetText === '시험') {
          if (answer === '시험' || answer === '시험기간') return true;
          else false;
        }
        if (targetText === '집') {
          if (answer === '집' || answer === '우리집') return true;
          else false;
        }
        if (targetText === '2년') {
          if (answer === '2년' || answer === '이년') return true;
          else false;
        }
        if (targetText === '저장공간') {
          if (answer === '저장공간' || answer === '용량') return true;
          else false;
        }
        if (targetText === '5만') {
          if (answer === '5만' || answer === '오만') return true;
          else false;
        }
        if (targetText === '음악') {
          if (
            answer === '음악' ||
            answer === '음악앱' ||
            answer === '음악스트리밍앱'
          )
            return true;
          else false;
        }
        if (targetText === '당근') {
          if (answer === '당근' || answer === '당근마켓') return true;
          else false;
        }
      }
    } else if (branchId === 9) {
      if (isTopic && chapterIndex === 9) {
      }

      if (isTopic && chapterIndex === 10) {
        if (targetText === '10년') {
          if (answer === '10년' || answer === '십년') return true;
          else false;
        }
        if (targetText === '20살') {
          if (answer === '20살' || answer === '스무살') return true;
          else false;
        }
        if (targetText === '도로명') {
          if (answer === '도로명' || answer === '도로명주소') return true;
          else false;
        }
        if (targetText === '5년') {
          if (answer === '5년' || answer === '오년') return true;
          else false;
        }
        if (targetText === '1000원') {
          if (answer === '1000원' || answer === '천원' || answer === '1천원')
            return true;
          else false;
        }
        if (targetText === '16개월') {
          if (answer === '16개월' || answer === '십육개월') return true;
          else false;
        }
        /*
        if (targetText === '20살') {
          if (answer === '20살' || answer === '스무살') return true;
          else false;
        }
        */
        if (targetText === '10년') {
          if (answer === '10년' || answer === '십년') return true;
          else false;
        }
        if (targetText === '100만원') {
          if (answer === '100만원' || answer === '백만원') return true;
          else false;
        }
        if (targetText === '3년') {
          if (answer === '3년' || answer === '삼년') return true;
          else false;
        }
        if (targetText === '100통') {
          if (answer === '100통' || answer === '백통') return true;
          else false;
        }
        if (targetText === '개명') {
          if (answer === '개명' || answer === '개명신청') return true;
          else false;
        }
        if (targetText === '허리') {
          if (answer === '허리' || answer === '허리디스크') return true;
          else false;
        }
        if (targetText === '집앞') {
          if (answer === '집앞' || answer === '교육지원청') return true;
          else false;
        }
      }
    } else if (branchId === 10) {
      if (isTopic && chapterIndex === 9) {
      }

      if (isTopic && chapterIndex === 10) {
        if (targetText === '3년') {
          if (answer === '3년' || answer === '삼년') return true;
          else false;
        }
        if (targetText === '토') {
          if (answer === '토' || answer === '토요일' || answer === '매주토요일')
            return true;
          else false;
        }
        if (targetText === '3월') {
          if (answer === '3월' || answer === '삼월') return true;
          else false;
        }
        if (targetText === '10살') {
          if (answer === '10살' || answer === '열살') return true;
          else false;
        }
        if (targetText === '3000원') {
          if (answer === '3000원' || answer === '삼천원' || answer === '3천원')
            return true;
          else false;
        }
        if (targetText === '오천원') {
          if (answer === '오천원' || answer === '5000원' || answer === '5천원')
            return true;
          else false;
        }
        if (targetText === '십퍼센트') {
          if (
            answer === '십퍼센트' ||
            answer === '10퍼센트' ||
            answer === '십%' ||
            answer === '10%'
          )
            return true;
          else false;
        }
        if (targetText === '법륜') {
          if (answer === '법륜' || answer === '법륜스님') return true;
          else false;
        }
        if (targetText === '가족') {
          if (answer === '가족' || answer === '가족들') return true;
          else false;
        }
        if (targetText === '대학') {
          if (answer === '대학' || answer === '대학때') return true;
          else false;
        }
        if (targetText === '반주') {
          if (answer === '반주' || answer === '반주봉사') return true;
          else false;
        }
        if (targetText === '학원') {
          if (answer === '학원' || answer === '피아노학원') return true;
          else false;
        }
        if (targetText === '교회') {
          if (answer === '교회' || answer === '기독교') return true;
          else false;
        }
        if (targetText === '형') {
          if (
            answer === '형' ||
            answer === '형의취업' ||
            answer === '형의취업문제'
          )
            return true;
          else false;
        }
        if (targetText === '100일전') {
          if (
            answer === '100일전' ||
            answer === '100일' ||
            answer === '백일전' ||
            answer === '백일' ||
            answer === '수능백일전' ||
            answer === '수능100일전'
          )
            return true;
          else false;
        }
        if (question === '누가 엄마를 전도했나요?' && targetText === '친구') {
          if (answer === '친구' || answer === '엄마친구') return true;
          else false;
        }
        if (
          question === '나는 오늘 누구와 싸웠나요?' &&
          targetText === '친구'
        ) {
          if (answer === '친구' || answer === '민수') return true;
          else false;
        }
      }
    }

    return targetText === answer;
  };

  return {
    initChapter,
    nextChapter,
    chapterIndex,
    setChapterIndex,
    branchInfo,
    setBranchInfo,
    detailId,
    setDetailId,
    stepId,
    setStepId,
    stepIndex,
    step,
    setStep,
    checkArr,
    setCheckArr,
    isStart,
    setIsStart,
    question,
    setQuestion,
    targetText,
    setTargetText,
    //
    resetTopicListData,
    topicListData,
    setTopicListData,
    //
    getTTSParam,
    // timer
    timerStart,
    timerStop,
    isTimer,
    setIsTimer,
    resetStepSeconds,
    stepSeconds,
    setStepSeconds,
    //
    dobuleCheckAnswer,
  };
};
