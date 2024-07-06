import api from './api';

const getListTopicStep = async (data) => {
  const result = await api.get(`/user/topicStep/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getListTopicBranch = async (data) => {
  const result = await api.get(`/user/topicBranch/list`, {
    token: true,
  });
  return result.data;
};

const getListTopicData = async (data) => {
  const result = await api.get(`/user/topicData/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getListTopicDataTotal = async (data) => {
  const result = await api.get(`/user/topicData/total/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

const patchUserTopicProgress = async (data) => {
  const result = await api.patch(`/user/topicProgress`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  getListTopicStep,
  getListTopicBranch,
  getListTopicData,
  getListTopicDataTotal,
  patchUserTopicProgress,
};
