import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: {
    type: 'alert',
    isOpen: false,
    isClose: false,
    title: '',
    text: '',
    textOptions: [],
    onAgree: () => {},
    onAgreeText: '확인',
    onCancel: () => {},
    onCancelText: '취소',
    response: {},
    // custom
    status: 0,
    step: 0,
  },
});
