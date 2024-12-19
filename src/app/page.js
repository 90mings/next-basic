'use client';

import useLocale from '@/hooks/useLocale';
import { deviceInfoState } from '@/stores/environmentRecoil';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { useRouter } from 'next/navigation';
import { MAIN } from '@/constants/pageURL';

const App = () => {
  const router = useRouter();
  const { lang, setLang } = useLocale();
  const deviceInfo = useRecoilValue(deviceInfoState);

  useEffect(() => {
    // 지역정보 취득
    console.log('fetchLocation lang: ', lang);
    if (!lang) {
      const fetchLocation = async () => {
        const ret = await axios.get('/api/location');
        console.log('response', ret.data);
        setLang(ret.data.location);
      };
      fetchLocation();
    }
  }, []);

  /* 웹 체크 */
  useEffect(() => {
    const setPage = () => {
      console.log(deviceInfo);
      if (deviceInfo.w < 600 || deviceInfo.isMobile) {
        console.log('## mobile');
      } else {
        console.log('## web');
        router.replace(MAIN.main);
      }
    };

    setPage();
  }, [deviceInfo]);

  return <main>Loading..</main>;
};

export default App;
