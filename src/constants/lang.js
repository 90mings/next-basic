import { ERROR_NOT_FOUND_EMAIL, ERROR_NOT_MATCH_EMAIL } from './error';

// localeText({...})

const LANGUAGES = {
  A: {
    KR: '에이',
    EN: 'A',
  },
  LOGIN: {
    KR: '로그인',
    EN: 'Login',
  },
  EMAIL: {
    KR: '이메일',
    EN: 'Email',
  },
  PASSWORD: {
    KR: '비밀번호',
    EN: 'Password',
  },
  KEEP_ME_LOGGED_IN: {
    KR: '로그인 유지',
    EN: 'Keep me logged in',
  },
  FORGOT_ACCOUNT: {
    KR: '이메일 · 비밀번호 찾기',
    EN: 'Forgot account?',
  },
  DONTS_HAVE_AN_ACCOUNT: {
    KR: '회원이 아니신가요?',
    EN: 'Dont’s have an account?',
  },
  CREATE_AN_ACCOUNT: {
    KR: '회원가입',
    EN: 'Create an account',
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
  PAGE_NOT_FOUND: {
    KR: '페이지를 찾을수 없습니다.',
    EN: 'Page Not Found',
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

export { LANGUAGES, BANNERS };
