import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '@/store/modalRecoil';
import utils from '@/utils/index';

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const openModal = useCallback(
    ({ ...props }) => {
      return setModal({
        type: props.type || 'alert',
        isOpen: true,
        isClose: utils.isEmpty(props.isClose) ? modal.isClose : props.isClose,
        title: props.title || '안내',
        text: props.text || '내용',
        textOptions: props.textOptions || [],
        onAgree: utils.isEmpty(props.onAgree)
          ? closeModal
          : () => {
              props.onAgree();
              closeModal();
            },
        onAgreeText: props.onAgreeText || '확인',
        onCancel: utils.isEmpty(props.onCancel)
          ? closeModal
          : () => {
              props.onCancel();
              closeModal();
            },
        onCancelText: props.onCancelText || '취소',
      });
    },
    [setModal],
  );

  const closeModal = useCallback(() => {
    return setModal((prev) => {
      return { ...prev, isOpen: false };
    });
  }, [setModal]);

  return {
    modal,
    openModal,
    closeModal,
  };
};

export default useModal;
