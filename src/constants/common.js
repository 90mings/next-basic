// SNS 관련
export const SNS_TYPE_KAKAO = 1;
export const SNS_TYPE_NAVER = 2;
export const SNS_TYPE_GOOGLE = 3;
export const SNS_TYPE_APPLE = 4;

// 상태관련
export const PASS_BASIC_FLAG = 1;
export const PASS_FAIL_FLAG = 2;
export const PASS_SUCCESS_FLAG = 3;

export const LIMIT_SECONDS = 300;

// 공통 상수
export const TYPE_RING_SOUND = 1; // 링사운드
export const TYPE_VOWEL = 2; // 모음
export const TYPE_CONSONANT = 3; // 자음
export const TYPE_SUBJECT = 4; // 주제

export const FORM_MIN_WIDTH_PX = '1048px';

// 중요 모달(입력 내용 있는) 오버레이 클릭시 종료 값
// null 또는 false: 닫기 버튼으로만 닫힘, true: 오버레이 클릭으로 닫기 가능
export const MODAL_CLOSE_ON_OVERLAY_CLICK = false;

// Storage Key
export const PROJECT_NAME = 'eeum';
export const STROAGE_KEY = `${PROJECT_NAME}-persist`;
export const STROAGE_LOADING = `${PROJECT_NAME}-loading`;
export const STROAGE_FCM_TOKEN_ID = `${PROJECT_NAME}-fcm-token`;
export const STROAGE_TOKEN_ID = `${PROJECT_NAME}-token`;
export const STROAGE_REF_TOKEN_ID = `${PROJECT_NAME}-refresh-token`;
export const STROAGE_SNS_INFO = `${PROJECT_NAME}-sns-info`;
export const STROAGE_USER_INFO = `${PROJECT_NAME}-user`;
export const STROAGE_AUTO_LOGIN_KEY = `${PROJECT_NAME}-auto-login`;
export const STROAGE_INIT_POP_FLAG = `${PROJECT_NAME}-init-pop-flag`;
export const STROAGE_ADMIN_TOKEN_ID = `${PROJECT_NAME}-token`;
export const STROAGE_ADMIN_REF_TOKEN_ID = `${PROJECT_NAME}-admin-refresh-token`;
export const STROAGE_ADMIN_USER_INFO = `${PROJECT_NAME}-admin-user`;
export const STROAGE_ADMIN_AUTO_LOGIN_KEY = `${PROJECT_NAME}-admin-auto-login`;

// 보여지는 페이지 수
export const DEFAULT_PAGE_BLOCK = 5;

export const DEFAULT_CONTENT_NUM = 10;

export const LONG_CONTENT_NUM = 16;

export const NOTIFICATION_FLAG = 2;

// 은행 목록
export const BANK_LIST = [
  '기업은행',
  '국민은행',
  '우리은행',
  '신한은행',
  'KEB하나은행',
  '농협은행',
  '지역농축협',
  'SC은행',
  '한국씨티은행',
  '우체국',
  '경남은행',
  '광주은행',
  '대구은행',
  '도이치',
  '부산은행',
  '산림조합',
  '산업은행',
  '상호저축은행',
  '새마을금고',
  '수협',
  '신협',
  '전북은행',
  '제주은행',
  'BOA',
  'HSBC',
  'JP모간',
  '중국공상은행',
  '비엔피파리바은행',
  '중국선설은행',
  '카카오뱅크',
  '케이뱅크',
];

export const STEP_FORM_PERCENT = '52.2388%';
export const RING_TEST_FORM_PERCENT = '41.0448%';
export const TEST_FORM_PERCENT = '39.40%';
export const TEST_LARGE_FORM_PERCENT = '30%';

export const TEST_FORM_BORDER = {
  xl: '4px dashed',
  lg: '3px dashed',
  md: '3px dashed',
  sm: '2px dashed',
  xs: '2px dashed',
};

// lg: 700, md: 500, sm: 400, xs: 300
export const FONT_SIZE_200 = {
  xl: '200px',
  lg: '190px',
  md: '180px',
  sm: '170px',
  xs: '160px',
};
export const FONT_SIZE_90 = {
  xl: '90px',
  lg: '90px',
  md: '90px',
  sm: '60px',
  xs: '50px',
};
export const FONT_SIZE_80 = {
  xl: '80px',
  lg: '70px',
  md: '65px',
  sm: '48px',
  xs: '42px',
};
export const FONT_SIZE_70 = {
  xl: '70px',
  lg: '70px',
  md: '60px',
  sm: '50px',
  xs: '40px',
};
export const FONT_SIZE_50 = {
  xl: '50px',
  lg: '50px',
  md: '50px',
  sm: '38px',
  xs: '30px',
};
export const FONT_SIZE_48 = {
  xl: '48px',
  lg: '40px',
  md: '35px',
  sm: '25px',
  xs: '23px',
};
export const FONT_SIZE_40 = {
  xl: '40px',
  lg: '37px',
  md: '34px',
  sm: '32px',
  xs: '23px',
};
export const FONT_SIZE_38 = {
  xl: '38px',
  lg: '34px',
  md: '29px',
  sm: '23px',
  xs: '21px',
};
export const FONT_SIZE_37 = {
  xl: '38px',
  lg: '38px',
  md: '26px',
  sm: '23px',
  xs: '21px',
};
export const FONT_SIZE_LISTEN = {
  xl: '36px',
  lg: '30px',
  md: '27px',
  sm: '19px',
  xs: '16px',
};
export const FONT_SIZE_35 = {
  xl: '35px',
  lg: '35px',
  md: '26px',
  sm: '20px',
  xs: '15px',
};
export const FONT_SIZE_34 = {
  xl: '34px',
  lg: '34px',
  md: '34px',
  sm: '28px',
  xs: '18px',
};
export const FONT_SIZE_32 = {
  xl: '32px',
  lg: '30px',
  md: '28px',
  sm: '22px',
  xs: '18px',
};
export const FONT_SIZE_30 = {
  xl: '30px',
  lg: '30px',
  md: '25px',
  sm: '23px',
  xs: '18px',
};
export const FONT_SIZE_28 = {
  xl: '28px',
  lg: '28px',
  md: '24px',
  sm: '20px',
  xs: '16px',
};
export const FONT_SIZE_26 = {
  xl: '26px',
  lg: '24px',
  md: '20px',
  sm: '15px',
  xs: '12px',
};
export const FONT_SIZE_24 = {
  xl: '24px',
  lg: '24px',
  md: '20px',
  sm: '18px',
  xs: '15px',
};

// fontSize + 2
export const LINE_H_90 = { md: '90px', sm: '70px', xs: '50px' };
export const LINE_H_50 = { md: '50px', sm: '32px', xs: '24px' };
export const LINE_H_38 = { md: '40px', sm: '32px', xs: '24px' };
export const LINE_H_48 = { md: '50px', sm: '40px', xs: '27px' };
export const LINE_H_30 = { md: '32px', sm: '35px', xs: '32px' };
export const LINE_H_28 = { md: '30px', sm: '27px', xs: '19px' };
export const LINE_H_24 = { md: '26px', sm: '22px', xs: '17px' };

export const PADDING_50 = { lg: '50px', md: '40px', sm: '30px', xs: '20px' };
export const PADDING_40 = { lg: '40px', md: '30px', sm: '25px', xs: '15px' };
export const PADDING_30 = { lg: '30px', md: '25px', sm: '20px', xs: '10px' };

export const BOX_S_180 = {
  xl: '180px',
  lg: '170px',
  md: '160px',
  sm: '140px',
  xs: '120px',
};
export const BOX_S_64 = {
  xl: '64px',
  lg: '54px',
  md: '45px',
  sm: '35px',
  xs: '28px',
};

export const BOX_S_60 = {
  xl: '60px',
  lg: '50px',
  md: '45px',
  sm: '28px',
  xs: '24px',
};

export const BOX_H_180 = {
  xl: '180px',
  lg: '160px',
  md: '140px',
  sm: '105px',
  xs: '95px',
};

export const BOX_H_160 = {
  xl: '160px',
  lg: '140px',
  md: '120px',
  sm: '90px',
  xs: '90px',
};

export const BOX_S_160 = {
  xl: '160px',
  lg: '140px',
  md: '120px',
  sm: '90px',
  xs: '90px',
};

export const BOX_S_120 = {
  xl: '120px',
  lg: '100px',
  md: '95px',
  sm: '55px',
  xs: '45px',
};

export const RADIUS_S_40 = {
  xl: '40px',
  lg: '35px',
  md: '30px',
  sm: '25px',
  xs: '20px',
};
export const RADIUS_S_30 = {
  xl: '30px',
  lg: '25px',
  md: '20px',
  sm: '15px',
  xs: '10px',
};
export const RADIUS_S_20 = {
  xl: '20px',
  lg: '18px',
  md: '15px',
  sm: '13px',
  xs: '10px',
};
export const RADIUS_S_10 = {
  xl: '10px',
  lg: '10px',
  md: '9px',
  sm: '8px',
  xs: '7px',
};

export const NAV_MAIN_S = {
  xl: '160px',
  lg: '140px',
  md: '120px',
  sm: '100px',
  xs: '80px',
};

// 고정
export const BOX_S_LOGIN = {
  xl: '40px',
  lg: '32px',
  md: '27px',
  sm: '23px',
  xs: '20px',
};

export const BOX_S_PROG = {
  xl: '60px',
  lg: '50px',
  md: '38px',
  sm: '28px',
  xs: '24px',
};

export const BOX_S_TEST_PROG = {
  xl: '60px',
  lg: '50px',
  md: '38px',
  sm: '28px',
  xs: '30px',
};

export const CHOSEONG = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];
export const JUNGSEONG = [
  'ㅏ',
  'ㅐ',
  'ㅑ',
  'ㅒ',
  'ㅓ',
  'ㅔ',
  'ㅕ',
  'ㅖ',
  'ㅗ',
  'ㅘ',
  'ㅙ',
  'ㅚ',
  'ㅛ',
  'ㅜ',
  'ㅝ',
  'ㅞ',
  'ㅟ',
  'ㅠ',
  'ㅡ',
  'ㅢ',
  'ㅣ',
];
export const JONGSEONG = [
  '',
  'ㄱ',
  'ㄲ',
  'ㄳ',
  'ㄴ',
  'ㄵ',
  'ㄶ',
  'ㄷ',
  'ㄹ',
  'ㄺ',
  'ㄻ',
  'ㄼ',
  'ㄽ',
  'ㄾ',
  'ㄿ',
  'ㅀ',
  'ㅁ',
  'ㅂ',
  'ㅄ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];
