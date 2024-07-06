import api from './api';

const getListPushHistory = async (data) => {
  const result = await api.get(`/user/pushHistory/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const patchPushHistoryConfirmFlag = async (data) => {
  const result = await api.patch(`/user/pushHistory/confirmFlag`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  getListPushHistory,
  patchPushHistoryConfirmFlag,
};
