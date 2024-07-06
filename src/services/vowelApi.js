import api from './api';

// vowelStep
const getListVowelStep = async (data) => {
  const result = await api.get(`/user/vowelStep/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

// vowelBranch
const getListVowelBranch = async (data) => {
  const result = await api.get(`/user/vowelBranch/list`, {
    token: true,
  });
  return result.data;
};

const getListVowelData = async (data) => {
  const result = await api.get(`/user/vowelData/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getListVowelDataTotal = async (data) => {
  const result = await api.get(`/user/vowelData/total/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const patchUserVowelProgress = async (data) => {
  const result = await api.patch(`/user/vowelProgress`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  getListVowelStep,
  getListVowelBranch,
  getListVowelData,
  getListVowelDataTotal,
  patchUserVowelProgress,
};
