import api from './api';

// vowelStep
const getListConsonantsStep = async (data) => {
  const result = await api.get(`/user/consonantsStep/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getListConsonantsData = async (data) => {
  const result = await api.get(`/user/consonantsData/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getListConsonantsDataTotal = async (data) => {
  const result = await api.get(`/user/consonantsData/total/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getListConsonantsBranch = async () => {
  const result = await api.get(`/user/consonantsBranch/list`, {
    token: true,
  });
  return result.data;
};

const patchUserConsonantsProgress = async (data) => {
  const result = await api.patch(`/user/consonantsProgress`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  getListConsonantsStep,
  getListConsonantsData,
  getListConsonantsDataTotal,
  getListConsonantsBranch,
  patchUserConsonantsProgress,
};
