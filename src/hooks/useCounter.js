// customHooks/useRecoilCounter.js

import { atom, useRecoilState } from 'recoil';

// Recoil atom 정의
const counterState = atom({
  key: 'counterState',
  default: 0,
});

export const useCounter = () => {
  // Recoil 상태를 사용하고 상태를 변경하는 함수를 반환
  const [counter, setCounter] = useRecoilState(counterState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    decrement,
  };
};
