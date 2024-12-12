'use client';

import { useRecoilState } from 'recoil';
import { brandMenuState, headerMenuState } from '@/stores/menuRecoil';

const useMenu = () => {
  const [headerMenu, setHeaderMenu] = useRecoilState(headerMenuState);
  const [brandMenu, setBrandMenu] = useRecoilState(brandMenuState);

  return {
    headerMenu,
    setHeaderMenu,
    brandMenu,
    setBrandMenu,
  };
};

export default useMenu;
