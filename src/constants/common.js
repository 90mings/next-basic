export const PUB_TRANS_API_URL =
  'https://api.odsay.com/v1/api/searchAsapPubTransPath';
export const BIKE_API_URL = 'https://api.odsay.com/v1/api/searchAsapBikePath';
export const NAVER_CLIENT_ID = 'F3NxihAOmJViCwNhL027';
export const ODSAY_API_KEY = 'BdYr/ZmIEax1ZeIrrgdqzQ'; // real
// export const ODSAY_API_KEY = 'nDjf+SvzzuSg3uDjwG6tNPvKaCA9WplUDdancgvI4aA'; // dev local
export const KAKAO_REST_API_KEY = '0e356aaa28089b189be477fd4d80521f';

export const KAKAOTALK_INQUIRY_LINK = 'https://pf.kakao.com/_xgypVb/chat';

export const HELP_PHONE_NUM = '01086034022';

// 공통 상수
export const TYPE_RING_SOUND = 1; // 링사운드
export const TYPE_SUBJECT = 2; // 주제
export const TYPE_CONSONANT = 3; // 자음
export const TYPE_VOWEL = 4; // 모음

export const FORM_MIN_WIDTH_PX = '1048px';

// 중요 모달(입력 내용 있는) 오버레이 클릭시 종료 값
// null 또는 false: 닫기 버튼으로만 닫힘, true: 오버레이 클릭으로 닫기 가능
export const MODAL_CLOSE_ON_OVERLAY_CLICK = false;

// Storage Key
export const PROJECT_NAME = 'eeum';
export const TOKEN_ID = `${PROJECT_NAME}-token`;
export const REF_TOKEN_ID = `${PROJECT_NAME}-refresh-token`;
export const STROAGE_USER_INFO = `${PROJECT_NAME}-user`;
export const AUTO_LOGIN_KEY = `${PROJECT_NAME}-auto-login`;
export const STROAGE_KEY = `${PROJECT_NAME}-persist`;
export const STROAGE_LOADING = `${PROJECT_NAME}-loading`;

// 보여지는 페이지 수
export const DEFAULT_PAGE_BLOCK = 5;

// 몇개씩 조회할 것인지
export const DEFAULT_CONTENT_NUM = 10;

// 몇개씩 조회할 것인지
export const LONG_CONTENT_NUM = 16;

// 1: 도착지, 2: 출발지
export const DEFAULT_TERMINAL_TYPE = 1;

// 0 전체, 1 버스, 2 기차, 3 공항
export const DEFAULT_TERMINAL_KIND = 0;
export const TERMINAL_KIND_VALUE_LIST = ['', '버스', '기차', '공항'];

// Notification default flag 1: 발송, 2: 미발송

export const NOTIFICATION_FLAG = 2;

export const BIZ_USER_TYPE = ['기업', '고객'];

export const DELIVERY_PACKAGE_TYPE_LIST = ['박스', '서류', '가방', '직접입력'];

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

export const CS_USER_ID = 'csUserId';
export const TERMINAL_ID = 'terminalId';
export const TERMINAL_LINE_ID = 'terminalLineId';
export const PARTNER_USER_ID = 'partnerUserId';
export const BIZ_ID = 'bizId';
export const BIZ_USER_ID = 'bizUserId';
export const BIZ_USER_MONEY_REQUEST_ID = 'bizUserMoneyRequestId';
export const PARTNER_USER_FEE_ID = 'partnerUserFeeId';
export const DELIVERY_ID = 'deliveryId';

// 기업
export const DOWNLOAD_EXCEL_BIZ =
  'https://prod-gossok-contents.s3.ap-northeast-2.amazonaws.com/excel/%EA%B3%A0%EC%8F%99_%EA%B8%B0%EC%97%85%EA%B3%A0%EA%B0%9D_%EB%8B%A4%EB%9F%89_%EC%A0%91%EC%88%98_%EC%97%85%EB%A1%9C%EB%93%9C%EC%96%91%EC%8B%9D.xlsx';

// 현장
export const DOWNLOAD_EXCEL_PARTNER =
  'https://prod-gossok-contents.s3.ap-northeast-2.amazonaws.com/excel/%EA%B3%A0%EC%8F%99_%ED%98%84%EC%9E%A5%EA%B3%A0%EA%B0%9D_%EB%8B%A4%EB%9F%89_%EC%A0%91%EC%88%98_%EC%97%85%EB%A1%9C%EB%93%9C%EC%96%91%EC%8B%9D.xlsx';
// 일반
export const DOWNLOAD_EXCEL_CUSTOMER =
  'https://prod-gossok-contents.s3.ap-northeast-2.amazonaws.com/excel/%EA%B3%A0%EC%8F%99_%EC%9D%BC%EB%B0%98%EA%B3%A0%EA%B0%9D_%EB%8B%A4%EB%9F%89_%EC%A0%91%EC%88%98_%EC%97%85%EB%A1%9C%EB%93%9C%EC%96%91%EC%8B%9D.xlsx';
