// 환경 상수
const API_TIMEOUT = 60000;

module.exports = {
  API_PRINT_LOG: process.env.REACT_APP_API_PRINT_LOG === 'true',
  API_TIMEOUT,
  API_VERSION: process.env.REACT_APP_API_VERSION,
  API_URL: process.env.REACT_APP_API_URL,
};
