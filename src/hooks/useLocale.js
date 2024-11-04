'use client';

import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { langState } from '@/stores/environmentRecoil';
import LANGUAGES from '@/constants/lang';

const useLocale = () => {
  const [lang, setLang] = useRecoilState(langState);

  const localeText = useCallback(
    (key) => {
      if (key) {
        const tempKey = key.toUpperCase();
        if (LANGUAGES[tempKey]) {
          if (LANGUAGES[tempKey][lang]) {
            return LANGUAGES[tempKey][lang];
          } else {
            console.log(`# useLocale > undefined lang: ${lang} , key: ${key}`);
          }
        } else {
          console.log('# useLocale > undefined key:', key);
        }
      } else {
        console.log('# useLocale > Key is required');
      }
    },
    [lang],
  );

  return {
    lang,
    setLang,
    localeText,
  };
};

export default useLocale;
