import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: {
    type: 'alert',
    isOpen: false,
    isClose: true,
    title: '',
    text: '',
    textOptions: [],
    onAgree: () => {},
    onAgreeText: '확인',
    onCancel: () => {},
    onCancelText: '취소',
    response: {},
  },
});
