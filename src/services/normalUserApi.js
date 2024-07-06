import api from './api';

const deleteNormalUser = async (data) => {
  const result = await api.delete(`/user/normalUser`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getNormalUserLogin = async (data) => {
  const result = await api.get(`/user/normalUser/logIn`, {
    token: true,
    body: data,
  });
  return result.data;
};
const getNormalUsercheckNickName = async (data) => {
  const result = await api.get(`/user/normalUser/checkNickName`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getNormalUserMyInfo = async (data) => {
  const result = await api.get(`/user/normalUser/myInfo`, {
    token: true,
    body: data,
  });
  return result.data;
};

const patchNormalUser = async (data) => {
  const result = await api.patch(`/user/normalUser`, {
    token: true,
    body: data,
  });
  return result.data;
};

const patchNormalUserLogout = async (data) => {
  const result = await api.patch(`/user/normalUser/logOut`, {
    token: true,
    body: data,
  });
  return result.data;
};

const postNormalUserSignUp = async (data) => {
  const result = await api.post(`/user/normalUser/signUp`, {
    token: true,
    body: data,
    noShade: false,
  });
  return result.data;
};

const getNormalUserMain = async () => {
  const result = await api.get(`/user/main`, {
    token: true,
  });
  return result.data;
};

export default {
  deleteNormalUser,
  getNormalUserLogin,
  getNormalUsercheckNickName,
  getNormalUserMyInfo,
  patchNormalUser,
  patchNormalUserLogout,
  postNormalUserSignUp,

  // main
  getNormalUserMain,
};
