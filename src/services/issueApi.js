import axios from 'axios';
const API_VERSION = process.env.CUSTOM_API_VERSION;

const issueApiInstance = axios.create({
  baseURL: process.env.CUSTOM_API_URL,
  timeout: process.env.CUSTOM_API_TIMEOUT,
});

const apiFunction = async (url, { body = {} }) => {
  try {
    console.log(`[ >> ISSUE-API-REQ ] URL '${url}' PARAMS`, body);
    const result = await issueApiInstance.patch(
      url,
      {},
      {
        params: body,
      },
    );
    console.log(
      `[ << ISSUE-API-RES  ] api: ${url}, response: `,
      result.status === 200 ? result.data : result,
    );
    return result;
  } catch (error) {
    console.log('ISSUE TOKEN API ERROR', error);
    return error;
  }
};

const patchAdminUserIssueAccessToken = async (param) => {
  const result = await apiFunction(
    API_VERSION + `/admin/adminUser/issueAccessToken`,
    { body: param },
  );
  return result;
};

const patchNormalUserIssueAccessToken = async (param) => {
  const result = await apiFunction(
    API_VERSION + `/user/normalUser/issueAccessToken`,
    { body: param },
  );
  return result;
};

const issueApi = {
  patchAdminUserIssueAccessToken,
  patchNormalUserIssueAccessToken,
};

export default issueApi;
