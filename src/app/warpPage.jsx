'use client';

import { CustomLoading, Loading, ModalAgent, GText } from '@/components';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { customLoadingState, loadingState } from '@/stores/common';
import useModal from '@/hooks/useModal';
import { Box, useTheme, useBreakpointValue, Text } from '@chakra-ui/react';
import utils from '@/utils/index';

const WarpPage = ({ children }) => {
  const theme = useTheme();
  const themeBreakpoints = useBreakpointValue(theme.breakpoints);
  const themeFontSize = useBreakpointValue(theme.fontSizes);
  //
  const [loading, setLoading] = useRecoilState(loadingState);
  const [customLoading, setCustomLoading] = useRecoilState(customLoadingState);
  const { closeModal } = useModal();

  const [initPage, setInitPage] = useState(false);
  useEffect(() => {
    console.log(`### ${process.env.REACT_APP_NODE_ENV} ###`);
    closeModal();
    setLoading(false);
    setCustomLoading(false);
    setInitPage(true);
  }, []);

  return (
    <Box className="warp-page" position={'relative'}>
      {/*
      <Box
        position={'absolute'}
        top={'5px'}
        left={'5px'}
        w="200px"
        h="50px"
        zIndex={999}
        borderRadius={'10px'}
        bg={{
          base: 'red',
          xs: 'orange',
          sm: 'yellow',
          md: 'green.200',
          lg: 'blue.200',
          xl: 'black',
        }}
      >
        <GText textAlign={'center'} fontSize={themeFontSize}>
          {`${themeBreakpoints}, ${themeFontSize}, ${utils.getBreakpoint()}`}
        </GText>
      </Box>
      */}

      <ModalAgent />
      {loading && <Loading />}
      {customLoading && <CustomLoading />}
      {children}
    </Box>
  );
};

export default WarpPage;
