import api from './api';

const getListRingSoundStep = async (data) => {
  const result = await api.get(`/user/ringSoundStep/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getListRingSoundStepDetail = async (data) => {
  const result = await api.get(`/user/ringSoundStepDetail/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const patchUserRingSoundProgress = async (data) => {
  const result = await api.patch(`/user/ringSoundProgress`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  getListRingSoundStep,
  getListRingSoundStepDetail,
  //
  patchUserRingSoundProgress,
};
