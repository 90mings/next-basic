import api from './api';

const getNormalUserTrainingHistory = async () => {
  const result = await api.get(`/user/trainingHistory`, {
    token: true,
  });
  return result.data;
};

const getNormalUserTrainingHistoryRank = async (data) => {
  const result = await api.get(
    `/user/trainingHistory/rank?startDate=${data.startDate}&endDate=${data.endDate}`,
    {
      token: true,
      // body: data,
    },
  );
  /*
  const result = await api.get(`/user/trainingHistory/rank`, {
    token: true,
    body: data,
  });
  */
  return result.data;
};

const postUserTrainingHistory = async (data) => {
  const result = await api.post(`/user/trainingHistory`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  // TrainingHistory
  getNormalUserTrainingHistory,
  getNormalUserTrainingHistoryRank,
  //
  postUserTrainingHistory,
};
