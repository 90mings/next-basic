import api from './api';

const getListTestResult = async (data) => {
  const result = await api.get(`/admin/testResult/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const postTestResult = async (data) => {
  const result = await api.post(`/user/testResult`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  getListTestResult,
  postTestResult,
};
