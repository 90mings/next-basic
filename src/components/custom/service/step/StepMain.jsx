'use client';

import {
  TYPE_RING_SOUND,
  TYPE_CONSONANT,
  TYPE_SUBJECT,
  TYPE_VOWEL,
} from '@/constants/common';

const StepMain = (props) => {
  const { h = '100vh' } = props;
  const { type } = props;
  const { paddingBottom = '0' } = props;
  const { children } = props;

  const setBgColor = (type) => {
    if (type === TYPE_RING_SOUND) {
      return '#E7FBFF';
    }
    if (type === TYPE_SUBJECT) {
      return '#FEEDFF';
    }
    if (type === TYPE_CONSONANT) {
      return '#FAFFE7';
    }
    if (type === TYPE_VOWEL) {
      return '#FFF6E4';
    }
  };
  return (
    <main
      style={{
        height: h,
        background: setBgColor(type),
        paddingBottom: paddingBottom,
        position: 'relative',
      }}
    >
      {children}
    </main>
  );
};

export default StepMain;
