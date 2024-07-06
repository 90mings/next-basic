'use client';

import { deviceInfoState } from '@/stores/commonRecoil';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

const WarpPage = ({ children }) => {
  const resetDeviceInfo = useResetRecoilState(deviceInfoState);
  const [deviceInfo, setDeviceInfo] = useRecoilState(deviceInfoState);

  const [initPage, setInitPage] = useState(false);

  useEffect(() => {
    if (!initPage) {
      // resetDeviceInfo();
      // setViewport();
    }
  }, []);

  return (
    <Box className="warp-page" position={'relative'}>
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
