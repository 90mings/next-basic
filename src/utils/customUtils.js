'use client';

export const handleConsonantsTitle = (text) => {
  if (text === 'ㄱ') return 'ㄱ(기역)';
  if (text === 'ㄲ') return 'ㄲ(쌍기역)';
  if (text === 'ㄴ') return 'ㄴ(니은)';
  if (text === 'ㄷ') return 'ㄷ(디귿)';
  if (text === 'ㄸ') return 'ㄸ(쌍디귿)';
  if (text === 'ㅌ') return 'ㅌ(티읕)';
  if (text === 'ㄹ') return 'ㄹ(리을)';
  if (text === 'ㅁ') return 'ㅁ(미음)';
  if (text === 'ㅂ') return 'ㅂ(비읍)';
  if (text === 'ㅃ') return 'ㅃ(쌍비읍)';
  if (text === 'ㅅ') return 'ㅅ(시옷)';
  if (text === 'ㅆ') return 'ㅆ(쌍시옷)';
  if (text === 'ㅈ') return 'ㅈ(지읒)';
  if (text === 'ㅉ') return 'ㅉ(쌍찌읒)';
  if (text === 'ㅊ') return 'ㅊ(치읓)';
  if (text === 'ㅋ') return 'ㅋ(키읔)';
  if (text === 'ㅍ') return 'ㅍ(피흪)';
  if (text === 'ㅎ') return 'ㅎ(히읗)';
  return text;
};
