'use client';

import useModal from '@hooks/useModal';
import { AlertModal, ConfirmModal } from '@components/g';

const ModalAgent = () => {
  const { modal } = useModal();
  return modal.type === 'alert' ? <AlertModal /> : <ConfirmModal />;
};

export default ModalAgent;
