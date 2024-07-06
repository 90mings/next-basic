import api from './api';

const deleteUserCard = async (data) => {
  const result = await api.delete(`/userCard`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getListUserCard = async (data) => {
  const result = await api.get(`/userCard/listUserCard`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getIsCardForAutoPayFlag = async (data) => {
  const result = await api.get(`/userCard/isCardForAutoPayFlag`, {
    token: true,
    body: data,
    noShade: true,
  });
  return result.data;
};

const patchAutoPayFlag = async (data) => {
  const result = await api.patch(`/userCard/autoPayFlag`, {
    token: true,
    body: data,
    noShade: true,
  });
  return result.data;
};

const postUserCard = async (data) => {
  const result = await api.post(`/userCard`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  deleteUserCard,
  getListUserCard,
  getIsCardForAutoPayFlag,
  patchAutoPayFlag,
  postUserCard,
};
