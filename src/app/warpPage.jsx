'use client';

import { CustomLoading, Loading, ModalAgent } from '@components/g';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { customLoadingState, loadingState } from '@store/common';
import useModal from '@hooks/useModal';

const WarpPage = ({ children }) => {
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
    <div className="warp-page">
      <ModalAgent />
      {loading && <Loading />}
      {customLoading && <CustomLoading />}
      {children}
    </div>
  );
};

export default WarpPage;
