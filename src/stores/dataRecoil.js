import { atom } from 'recoil';
import { persistAtom } from './recoil-config';

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

// 자동로그인
export const tempAutoLoginState = atom({
  key: 'tempAutoLoginState',
  default: false,
});
