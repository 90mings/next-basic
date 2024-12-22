'use client';

import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { langState } from '@/stores/environmentRecoil';
import utils from '@/utils';
import { STROAGE_LANG } from '@/constants/common';
import axios from 'axios';

const useLocale = () => {
  const [lang, setLang] = useRecoilState(langState);

  useEffect(() => {
    if (!lang) {
      const localLang = utils.getLocalItemJson(STROAGE_LANG);
      if (localLang) {
        setLang(localLang);
      } else {
        const fetchLocation = async () => {
          const ret = await axios.get('/api/location');
          setLang(ret.data.location);
        };
        fetchLocation();
      }
    } else {
      utils.setLocalItemJson(STROAGE_LANG, lang);
    }
  }, []);

  const localeText = useCallback(
    (target) => {
      if (target) {
        if (target[lang]) {
          return target[lang];
        } else {
          console.log(
            `# useLocale > undefined lang: ${lang} , target: ${JSON.stringify(target)}`,
          );
        }
      } else {
        console.log('# useLocale > Key is required');
      }
    },
    [lang],
  );

  const localeBannerText = useCallback(
    (targetBanner) => {
      if (targetBanner) {
        return targetBanner[lang];
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
    localeBannerText,
  };
};

export default useLocale;
