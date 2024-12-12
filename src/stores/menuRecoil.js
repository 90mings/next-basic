import { atom } from 'recoil';
import { persistAtom } from './recoil-config';

export const headerMenuState = atom({
  key: 'headerMenuState',
  default: 'PROMOTION',
});

export const brandMenuState = atom({
  key: 'brandMenuState',
  default: 'SKIN_CARE',
});
