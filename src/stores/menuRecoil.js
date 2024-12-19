import { atom } from 'recoil';
import { persistAtom } from './recoil-config';

export const currentMenuState = atom({
  key: 'currentMenuState',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const menuSortState = atom({
  key: 'menuSortState',
  default: 1, // 1: most popular, 2: new, 3: price
});

export const headerMenuState = atom({
  key: 'headerMenuState',
  default: 'PROMOTION',
});

export const brandMenuState = atom({
  key: 'brandMenuState',
  default: 'SKIN_CARE',
});
