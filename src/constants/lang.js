import { ERROR_NOT_FOUND_EMAIL, ERROR_NOT_MATCH_EMAIL } from './error';

const LANG_KEY = {
  LANGUAGE: 'LANGUAGE',
  HEADER_SIGN_MSG: 'HEADER_SIGN_MSG',
  HEADER_SIGN_UP: 'HEADER_SIGN_UP',
  HEADER_INPUT_PLACEHOLDER: 'HEADER_INPUT_PLACEHOLDER',
  MY_PAGE: 'MY_PAGE',
  SIGN_UP_TO_SELLER: 'SIGN_UP_TO_SELLER',
  NOT_FOUND_EMAIL: 'NOT_FOUND_EMAIL',
  NOT_MATCH_EMAIL: 'NOT_MATCH_EMAIL',

  PROMOTION: 'PROMOTION',
  SKIN_CARE: 'SKIN_CARE',
  MAKE_UP: 'MAKE_UP',
  HAIR_CARE: 'HAIR_CARE',
  BODY_CARE: 'BODY_CARE',
  FRAGRANCE: 'FRAGRANCE',
  MENS_GROOMING: 'MENS_GROOMING',

  VIEW_ALL: 'VIEW_ALL',
  GO_TO_BRAND_HOME: 'GO_TO_BRAND_HOME',
};

const LANGUAGES = {
  A: {
    KR: '에이',
    EN: 'A',
  },
  HEADER_SIGN_MSG: {
    KR: '10만 개 이상의 브랜드에서 온라인으로 도매 쇼핑하기',
    EN: 'Shop wholesale online from over 100,000 brands.',
  },
  HEADER_SIGN_UP: {
    KR: '회원가입',
    EN: 'Sign up',
  },
  HEADER_INPUT_PLACEHOLDER: {
    KR: '제품명 또는 브랜드 검색',
    EN: 'Search for a product name or brand',
  },
  MY_PAGE: {
    KR: '내 정보',
    EN: 'My page',
  },
  SIGN_UP_TO_SELLER: {
    KR: '판매자 가입',
    EN: 'Sign up to Seller',
  },
  NOT_FOUND_EMAIL: {
    KR: ERROR_NOT_FOUND_EMAIL.KR,
    EN: ERROR_NOT_FOUND_EMAIL.EN,
  },
  NOT_MATCH_EMAIL: {
    KR: ERROR_NOT_MATCH_EMAIL.KR,
    EN: ERROR_NOT_MATCH_EMAIL.EN,
  },
  PROMOTION: {
    KR: '프로모션',
    EN: 'Promotion',
  },
  SKIN_CARE: {
    KR: '스킨케어',
    EN: 'Skincare',
  },
  MAKE_UP: {
    KR: '메이크업',
    EN: 'Makeup',
  },
  HAIR_CARE: {
    KR: '헤어케어',
    EN: 'Haircare',
  },
  BODY_CARE: {
    KR: '바디케어',
    EN: 'Bodycare',
  },
  FRAGRANCE: {
    KR: '향수',
    EN: 'Fragrance',
  },
  MENS_GROOMING: {
    KR: '남성관리',
    EN: 'Men’s grooming',
  },
  // 배너 버튼
  VIEW_ALL: {
    KR: '전체보기',
    EN: 'View All',
  },
  GO_TO_BRAND_HOME: {
    KR: '브랜드 보기',
    EN: 'Go to Brand Home',
  },
  //
  INFO: {
    KR: '안내',
    EN: 'Info',
  },
  AGREE: {
    KR: '확인',
    EN: 'Agree',
  },
  CANCEL: {
    KR: '취소',
    EN: 'Cancel',
  },
};

const BANNERS = {
  BRAND_BANNER: {
    BANNER1: {
      title: {
        KR: '배너1',
        EN: 'The Ordinary',
      },
      content: {
        KR: '배너 내용1',
        EN: 'Theodynary is a brand that combines common and effective skincare clinical techniques. The ingredients for healthy skin are in the name, and the products are affordable.',
      },
    },
    BANNER2: {
      title: {
        KR: '배너2',
        EN: 'PROEIGHT',
      },
      content: {
        KR: '배너 내용2',
        EN: "Just like the 'professional' artists who have joined us, and just like the people who are drawn to our values. People who have something of their own, people who are constantly exploring for their own satisfaction. We're all already pros.",
      },
    },
  },
};

export { LANG_KEY, LANGUAGES, BANNERS };
