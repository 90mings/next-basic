import api from './api';

const deleteTestUser = async (data) => {
  const result = await api.delete(`/admin/testUser`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getTestUserSendTestLink = async (data) => {
  const result = await api.get(`/admin/testUser/sendTestLink`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getListTestUser = async (data) => {
  const result = await api.get(`/admin/testUser/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const patchTestUser = async (data) => {
  const result = await api.patch(`/admin/testUser`, {
    token: true,
    body: data,
  });
  return result.data;
};

const postTestUser = async (data) => {
  const result = await api.post(`/admin/testUser`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  deleteTestUser,
  getTestUserSendTestLink,
  getListTestUser,
  patchTestUser,
  postTestUser,
};
