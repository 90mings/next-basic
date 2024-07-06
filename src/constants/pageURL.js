const BASE = {
  mobile: '/mobile',
  //
  admin: '/admin',
  ringsound: '/ringsound',
  subject: '/subject',
  consonant: '/consonant',
  vowel: '/vowel',
  alarm: '/alarm',
  rank: '/rank',
  myPage: '/mypage',
  test: '/test',
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

export const RING_SOUND = {
  root: `${BASE.ringsound}`,
  listen: `${BASE.ringsound}/listen`,
  step: `${BASE.ringsound}/step`,
  test: `${BASE.ringsound}/test`,
};

export const SUBJECT = {
  root: `${BASE.subject}`,
  listen: `${BASE.subject}/listen`,
  list: `${BASE.subject}/list`,
  step: `${BASE.subject}/step`,
  test: `${BASE.subject}/test`,
  test8: `${BASE.subject}/test/step8`,
  test9: `${BASE.subject}/test/step9`,
  test10: `${BASE.subject}/test/step10`,
};

export const CONSONANT = {
  root: `${BASE.consonant}`,
  listen: `${BASE.consonant}/listen`,
  list: `${BASE.consonant}/list`,
  step: `${BASE.consonant}/step`,
  test: `${BASE.consonant}/test`,
};

export const VOWEL = {
  root: `${BASE.vowel}`,
  listen: `${BASE.vowel}/listen`,
  list: `${BASE.vowel}/list`,
  step: `${BASE.vowel}/step`,
  test: `${BASE.vowel}/test`,
};

export const TEST = {
  root: `${BASE.test}`,
  type1: `${BASE.test}/type/1`,
  type2: `${BASE.test}/tyep/2`,
  type3: `${BASE.test}/tyep/3`,
  type4: `${BASE.test}/tyep/4`,
  type5: `${BASE.test}/tyep/5`,
  complete: `${BASE.test}/complete`,
};

export const ALARM = {
  root: `${BASE.alarm}`,
};

export const RANK = {
  root: `${BASE.rank}`,
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
  root: `${BASE.admin}`,
  login: `${BASE.admin}/login`,
  user: `${BASE.admin}/service/user`,
  test: `${BASE.admin}/service/test`,
};
