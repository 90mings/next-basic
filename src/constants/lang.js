import { ERROR_NOT_FOUND_EMAIL, ERROR_NOT_MATCH_EMAIL } from './error';

// localeText({...})

const LANGUAGES = {
  A: {
    KR: '에이',
    EN: 'A',
  },
  // 로그인 페이지
  NOT_FOUND_EMAIL: {
    KR: ERROR_NOT_FOUND_EMAIL.KR,
    EN: ERROR_NOT_FOUND_EMAIL.EN,
  },
  NOT_MATCH_EMAIL: {
    KR: ERROR_NOT_MATCH_EMAIL.KR,
    EN: ERROR_NOT_MATCH_EMAIL.EN,
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
  // 헤더
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
  // 주문 페이지
  PRODUCT_INFORMATION: {
    KR: '상품 정보',
    EN: 'Product information',
  },
  ORDERER_INFORMATION: {
    KR: '주문자 정보',
    EN: 'Orderer information',
  },
  ORDERER_NAME: {
    KR: '주문자명',
    EN: 'Orderer name',
  },
  PHONE_NUMBER: {
    KR: '전화번호',
    EN: 'Phone number',
  },
  SHIPPING_INFORMATION: {
    KR: '배송정보',
    EN: 'Shipping information',
  },
  SAME_AS_ORDERER_INFORMATION: {
    KR: '주문자 정보와 동일',
    EN: 'Same as orderer information',
  },
  ORDER_SUMMARY: {
    KR: '주문요약',
    EN: 'Order summary',
  },
  ORDER_TOTAL: {
    KR: '총 결제비',
    EN: 'Total',
  },
  ORDER_PRODUCT: {
    KR: '상품명',
    EN: 'Product',
  },
  ORDER_QUANTITY: {
    KR: '수량',
    EN: 'Quantity',
  },
  ORDER_TOTAL_PRICE: {
    KR: '총 주문금액',
    EN: 'Total order price',
  },
  ORDER_SHIPPING_COST: {
    KR: '배송비',
    EN: 'Shipping cost',
  },
  ORDER_TOTAL_PRODUCT: {
    KR: '총 상품가격',
    EN: 'Total product price',
  },
  ORDER_TOTAL_SHIPPING: {
    KR: '총 배송비',
    EN: 'Total shipping cost',
  },
  ORDER_COUPON_DISCOUNT: {
    KR: '쿠폰 할인',
    EN: 'Coupon Discount Amount',
  },
  ORDER_REDEEMING_MILES: {
    KR: '적립금 사용',
    EN: 'Redeeming Miles',
  },
  ORDER_CHECK_OUT: {
    KR: '결제하기',
    EN: 'Check Out',
  },
  CARD: {
    KR: '카드',
    EN: 'Card',
  },
  INSTALLMENT_PERIOD: {
    KR: '할부기간',
    EN: 'Installment period',
  },
  PAYPAL: {
    KR: 'Paypal',
    EN: 'Paypal',
  },
  PAYMENT_METHOD: {
    KR: '결제방법',
    EN: 'Payment method',
  },
  COUPON_DISCOUNTS: {
    KR: '쿠폰할인',
    EN: 'Coupon discounts',
  },
  REWARD_COINS: {
    KR: '적립금 사용',
    EN: 'Reward coins',
  },
  COIN: {
    KR: '코인',
    EN: 'coin',
  },
  FULL_USE: {
    KR: '전체사용',
    EN: 'Full use',
  },
  PAYPAL: {
    KR: 'Paypal',
    EN: 'Paypal',
  },
  AUTHORIZE_DOT_NET: {
    KR: 'authorize.net',
    EN: 'authorize.net',
  },
  FIRST_NAME: {
    KR: '성',
    EN: 'First name',
  },
  LAST_NAME: {
    KR: '이름',
    EN: 'Last name',
  },
  LAST_NAME: {
    KR: '이름',
    EN: 'Last name',
  },
  ORDER_ADDR_1: {
    KR: '주소 1',
    EN: 'Address 1',
  },
  ORDER_ADDR_2: {
    KR: '주소 2',
    EN: 'Address 2',
  },
  ORDER_STREET_ADDRESS: {
    KR: '도로명 주소',
    EN: 'Street address',
  },
  ORDER_ETC_ADDRESS: {
    KR: '상세주소',
    EN: 'Apartment, suite, etc.',
  },
  ORDER_ZIP_CODE: {
    KR: '우편번호',
    EN: 'Zip code',
  },
  // 기본
  ORDER: {
    KR: '주문',
    EN: 'Order',
  },
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
