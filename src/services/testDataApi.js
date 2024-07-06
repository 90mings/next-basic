import api from './api';

const getListTestData = async (data) => {
  const result = await api.get(`/user/testData/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  getListTestData,
};
