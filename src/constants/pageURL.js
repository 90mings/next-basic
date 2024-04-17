const BASE = {
  mobile: '/mobile',
  manage: '/manage',
  reception: '/reception',
  partner: '/partner',
  biz: '/biz',
  bizUndelivered: '/biz-undelivered',
  customer: '/customer',
  bizAccount: '/biz-account',
  charge: '/charge',
  notice: '/notice',
  myPage: '/my-page',
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
};

export const MANAGE = {
  root: BASE.manage,
  payment: `${BASE.manage}/payment`,
  notice: `${BASE.manage}${BASE.notice}`,
  noticeDetail: `${BASE.manage}${BASE.notice}/detail`,
  noticeAdd: `${BASE.manage}${BASE.notice}/add`,
  noticeModify: `${BASE.manage}${BASE.notice}/modify`,
  account: `${BASE.manage}/account`,
};

export const MY_PAGE = {
  root: `${BASE.myPage}`,
};
