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
  step: `${BASE.subject}/step`,
  test: `${BASE.subject}/test`,
};

export const CONSONANT = {
  root: `${BASE.consonant}`,
  listen: `${BASE.consonant}/listen`,
  step: `${BASE.consonant}/step`,
  test: `${BASE.consonant}/test`,
};

export const VOWEL = {
  root: `${BASE.vowel}`,
  listen: `${BASE.vowel}/listen`,
  step: `${BASE.vowel}/step`,
  test: `${BASE.vowel}/test`,
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
  user: `${BASE.admin}/user`,
};
