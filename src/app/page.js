'use client';

import { deviceInfoState } from '@/stores/environmentRecoil';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { useRouter } from 'next/navigation';
import { MAIN } from '@/constants/pageURL';
import { Center, Text } from '@chakra-ui/react';

const App = () => {
  const router = useRouter();
  const deviceInfo = useRecoilValue(deviceInfoState);

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

  return (
    <main>
      <Center h={'100%'}>
        <Text>Loading..</Text>
      </Center>
    </main>
  );
};

export default App;
