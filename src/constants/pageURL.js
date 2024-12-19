const BASE = {
  mobile: '/mobile',
  //
  admin: '/admin',
  category: '/category',
  brand: '/brand',
  product: '/product',
  myPage: '/mypage',
};

export const MOBILE = {
  mobileHome: `${BASE.mobile}/home`,
  mobileLogin: `${BASE.mobile}/login`,
  mobileMain: `${BASE.mobile}/main`,
  mobileMainDetail: `${BASE.mobile}/main/detail`,
};

export const MAIN = {
  root: '/',
  login: '/login',
  info: '/info',
  join: '/join',
  main: '/main',
};

export const CATEGORY = {
  root: `${BASE.category}`,
  base: `${BASE.category}/01`,
  detail: `${BASE.category}/detail`,
};

export const BRAND = {
  root: `${BASE.brand}`,
  detail: `${BASE.brand}/detail`,
};

export const PRODUCT = {
  root: `${BASE.product}`,
  detail: `${BASE.product}/detail`,
};

export const MY_PAGE = {
  root: `${BASE.myPage}`,
  terms: `${BASE.myPage}/terms`,
  personal: `${BASE.myPage}/personal`,
  profile: `${BASE.myPage}/profile`,
  progress: `${BASE.myPage}/progress`,
  setting: `${BASE.myPage}/setting`,
};

export const ADMIN = {
  root: '/',
  login: '/login',
  info: '/info',
  join: '/join',
  main: '/main',
};
