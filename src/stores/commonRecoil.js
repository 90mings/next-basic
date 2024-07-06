import { atom } from 'recoil';
import { persistAtom } from './recoil-config';
// import {  } from '@/constants/common';

// 로그인 및 회원가입
export const tempUserInfoState = atom({
  key: 'tempUserInfoState',
  default: {
    id: '',
    pw: '',
  },
});
export const tempAutoLoginState = atom({
  key: 'tempAutoLoginState',
  default: false,
});

// 로딩
export const loadingState = atom({
  key: 'loadingState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const customLoadingState = atom({
  key: 'customLoadingState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 리스트 체크 관련
export const allCheckedState = atom({
  key: 'allCheckedState',
  default: false,
});
export const checkedIdsState = atom({
  key: 'checkedIdsState',
  default: [],
});
export const checkedItemsState = atom({
  key: 'checkedItemsState',
  default: [],
});

export const deviceInfoState = atom({
  key: 'deviceInfoState',
  default: {
    h: 0,
    w: 0,
    isWide: false,
    isMobile: false,
    osType: 1,
  },
  effects_UNSTABLE: [persistAtom],
});

export const loadingNoShadeState = atom({
  key: 'loadingNoShadeState',
  default: true,
});

// service common
export const listenInfoState = atom({
  key: 'listenInfoState',
  default: {
    voice: 0, // 0: 여성음성, 1: 남성음성
    speed: 2, // 1 느림, 2 보통, 3 빠름
  },
});
