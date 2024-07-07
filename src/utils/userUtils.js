'use client';

import {
  isDev,
  STROAGE_ADMIN_USER_INFO,
  STROAGE_ADMIN_AUTO_LOGIN_KEY,
  STROAGE_ADMIN_TOKEN_ID,
  STROAGE_ADMIN_REF_TOKEN_ID,
  STROAGE_USER_INFO,
  STROAGE_AUTO_LOGIN_KEY,
  STROAGE_TOKEN_ID,
  STROAGE_REF_TOKEN_ID,
  STROAGE_FCM_TOKEN_ID,
} from '@/constants/common';

export const removeUserStorage = () => {
  removeLocalItem(STROAGE_USER_INFO);
  removeLocalItem(STROAGE_AUTO_LOGIN_KEY);
  removeLocalItem(STROAGE_TOKEN_ID);
  removeLocalItem(STROAGE_REF_TOKEN_ID);
  removeSessionItem(STROAGE_USER_INFO);
  removeSessionItem(STROAGE_AUTO_LOGIN_KEY);
  removeSessionItem(STROAGE_TOKEN_ID);
  removeSessionItem(STROAGE_REF_TOKEN_ID);
};

// 유저정보
export const getUserInfo = () => {
  const result = getLocalItem(STROAGE_USER_INFO);
  if (result) {
    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    return result;
  }
};
export const setUserInfo = (id, pw) => {
  setLocalItem(
    STROAGE_USER_INFO,
    JSON.stringify({
      id,
      pw,
    }),
  );
};
export const getAdminUserInfo = () => {
  const result = getLocalItem(STROAGE_ADMIN_USER_INFO);
  if (result) {
    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    return result;
  }
};
export const setAdminUserInfo = (id, pw) => {
  setLocalItem(
    STROAGE_ADMIN_USER_INFO,
    JSON.stringify({
      id,
      pw,
    }),
  );
};

// fmcToken
export const getFcmToken = () => {
  const result = getSessionItem(STROAGE_FCM_TOKEN_ID);
  if (result) {
    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    return result;
  }
};
export const setFcmToken = (value) => {
  setSessionItem(STROAGE_FCM_TOKEN_ID, JSON.stringify(value));
};

// 자동로그인
export const getAutoLogin = () => {
  const result = getLocalItem(STROAGE_AUTO_LOGIN_KEY);
  if (result) {
    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    return result;
  }
};
export const setAutoLogin = (value) => {
  setLocalItem(STROAGE_AUTO_LOGIN_KEY, JSON.stringify(value));
};
export const getAdminAutoLogin = () => {
  const result = getLocalItem(STROAGE_ADMIN_AUTO_LOGIN_KEY);
  if (result) {
    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    return result;
  }
};
export const setAdminAutoLogin = (value) => {
  setLocalItem(STROAGE_ADMIN_AUTO_LOGIN_KEY, JSON.stringify(value));
};

// 토큰
export const setAccessToken = (value) => {
  setLocalItem(STROAGE_TOKEN_ID, value);
};
export const getAccessToken = () => {
  return getLocalItem(STROAGE_TOKEN_ID);
};
export const getRefreshToken = () => {
  return getLocalItem(STROAGE_REF_TOKEN_ID);
};
export const setRefreshToken = (value) => {
  setLocalItem(STROAGE_REF_TOKEN_ID, value);
};
export const removeAccessToken = (value) => {
  removeLocalItem(STROAGE_TOKEN_ID, value);
};
export const removeRefreshToken = (value) => {
  removeLocalItem(STROAGE_REF_TOKEN_ID, value);
};
export const setAdminAccessToken = (value) => {
  setSessionItem(STROAGE_ADMIN_TOKEN_ID, value);
};
export const getAdminAccessToken = () => {
  return getSessionItem(STROAGE_ADMIN_TOKEN_ID);
};
export const getAdminRefreshToken = () => {
  return getSessionItem(STROAGE_ADMIN_REF_TOKEN_ID);
};
export const setAdminRefreshToken = (value) => {
  setSessionItem(STROAGE_ADMIN_REF_TOKEN_ID, value);
};
export const removeAdminAccessToken = (value) => {
  removeLocalItem(STROAGE_ADMIN_TOKEN_ID, value);
};
export const removeAdminRefreshToken = (value) => {
  removeLocalItem(STROAGE_ADMIN_REF_TOKEN_ID, value);
};
