'use client';

import useModal from '@/hooks/useModal';
import {
  customLoadingState,
  deviceInfoState,
  loadingState,
} from '@/stores/commonRecoil';
import utils from '@/utils';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';

const WarpPage = ({ children }) => {
  const { closeModal } = useModal();
  // const setLoading = useSetRecoilState(loadingState);
  // const setCustomLoading = useSetRecoilState(customLoadingState);
  const resetDeviceInfo = useResetRecoilState(deviceInfoState);
  const [deviceInfo, setDeviceInfo] = useRecoilState(deviceInfoState);

  const [initPage, setInitPage] = useState(false);

  useEffect(() => {
    /*
    resetDeviceInfo();
    if (!initPage) {
      setInitPage(true);
    }
    */
    setInitPage(true);
  }, []);

  useEffect(() => {
    if (deviceInfo.w === 0 && deviceInfo.h === 0) {
      console.log(`### ${process.env.NEXT_PUBLIC_NODE_ENV} ###`);
      closeModal();
      utils.initBridge();
      const handleResize = () => {
        const osType = utils.OSInfo();
        const isMobile = utils.isMobile();
        const temp = {
          ...deviceInfo,
          h: window.innerHeight,
          w: window.innerWidth,
          isWide: window.innerWidth + 400 > window.innerHeight,
          isMobile: isMobile,
          osType: osType,
        };
        setDeviceInfo(temp);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      setInitPage(true);
      return () => window.removeEventListener('resize', handleResize);
    }
    console.log(1);
  }, [deviceInfo]);

  return (
    <Box position={'relative'} h={'100%'} maxH={'100vh'}>
      {/*
      <Script
        src={'bridgeReturn.js'}
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Script
        src={'minterface.js'}
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      */}
      {/* <Interceptor /> */}
      {/* <ModalAgent /> */}
      {/* {loading && <Loading />} */}
      {/* {customLoading && <CustomLoading />} */}
      {initPage && children}
    </Box>
  );
};

export default WarpPage;
