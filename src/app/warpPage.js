'use client';

import useModal from '@/hooks/useModal';
import { deviceInfoState } from '@/stores/environmentRecoil';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { Interceptor } from './Interceptor';
import utils from '@/utils';
import { ModalAgent } from '@/components';

const WarpPage = ({ children }) => {
  const { closeModal } = useModal();
  const resetDeviceInfo = useResetRecoilState(deviceInfoState);
  const [deviceInfo, setDeviceInfo] = useRecoilState(deviceInfoState);

  const [initPage, setInitPage] = useState(false);

  useEffect(() => {
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
        isMobile: isMobile,
        osType: osType,
      };
      setDeviceInfo(temp);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    setInitPage(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <Interceptor />
      <ModalAgent />
      {/* {loading && <Loading />} */}
      {/* {customLoading && <CustomLoading />} */}
      {initPage && children}
    </Box>
  );
};

export default WarpPage;
