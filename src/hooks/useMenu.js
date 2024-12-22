'use client';

import { useRecoilState } from 'recoil';
import {
  brandMenuState,
  headerMenuState,
  currentMenuState,
} from '@/stores/menuRecoil';
import useLocale from './useLocale';
import { LANGUAGES } from '@/constants/lang';
import { CATEGORY, MAIN } from '@/constants/pageURL';

const useMenu = () => {
  const { localeText } = useLocale();
  const [currentMenu, setCurrentMenu] = useRecoilState(currentMenuState);
  const [headerMenu, setHeaderMenu] = useRecoilState(headerMenuState);
  const [brandMenu, setBrandMenu] = useRecoilState(brandMenuState);

  const listMenu = [
    {
      index: 0,
      title: localeText(LANGUAGES.PROMOTION),
      key: 'PROMOTION',
      href: MAIN.main,
    },
    {
      index: 1,
      title: localeText(LANGUAGES.SKIN_CARE),
      key: 'SKIN_CARE',
      name: 'Skincare',
      href: `${CATEGORY.root}/01`,
    },
    {
      index: 2,
      title: localeText(LANGUAGES.MAKE_UP),
      key: 'MAKE_UP',
      name: 'Makeup',
      href: `${CATEGORY.root}/02`,
    },
    {
      index: 3,
      title: localeText(LANGUAGES.HAIR_CARE),
      key: 'HAIR_CARE',
      name: 'Haircare',
      href: `${CATEGORY.root}/03`,
    },
    {
      index: 4,
      title: localeText(LANGUAGES.BODY_CARE),
      key: 'BODY_CARE',
      name: 'Bodycare',
      href: `${CATEGORY.root}/04`,
    },
    {
      index: 5,
      title: localeText(LANGUAGES.MENS_GROOMING),
      key: 'MENS_GROOMING',
      name: "Men's grooming",
      href: `${CATEGORY.root}/05`,
    },
  ];

  const getCurrentMenu = (code) => {
    const codeNum = Number(code);
    let targetMenu = null;
    targetMenu = listMenu[codeNum];
    if (targetMenu) {
      setCurrentMenu(targetMenu);
      return targetMenu;
    } else {
      return null;
    }
  };

  return {
    listMenu,
    currentMenu,
    setCurrentMenu,
    headerMenu,
    setHeaderMenu,
    brandMenu,
    setBrandMenu,
    getCurrentMenu,
  };
};

export default useMenu;
