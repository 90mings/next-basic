'use client';

import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '@/stores/modalRecoil';
import utils from '@/utils';
import useLocale from './useLocale';
import LANGUAGES from '@/constants/lang';

const useModal = () => {
  const { localeText } = useLocale();
  const [modal, setModal] = useRecoilState(modalState);
  const openModal = useCallback(
    ({ ...props }) => {
      return setModal({
        type: props.type || 'alert',
        isOpen: true,
        isClose: utils.isEmpty(props.isClose) ? modal.isClose : props.isClose,
        title: props.title || localeText('info'),
        text: props.text || localeText('content'),
        textOptions: props.textOptions || [],
        onAgree: utils.isEmpty(props.onAgree)
          ? closeModal
          : () => {
              props.onAgree();
              closeModal();
            },
        onAgreeText: props.onAgreeText || localeText('agree'),
        onCancel: utils.isEmpty(props.onCancel)
          ? closeModal
          : () => {
              props.onCancel();
              closeModal();
            },
        onCancelText: props.onCancelText || localeText('cancel'),
        // custom options
        status: props.status || 0,
        step: props.step || 1,
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
