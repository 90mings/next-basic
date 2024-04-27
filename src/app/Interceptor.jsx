import { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import {
  API_PRINT_LOG,
  API_TIMEOUT,
  API_TOKEN_URL,
  API_URL,
  API_VERSION,
} from '@/constants/enviroment';
import {
  SUCCESS,
  TOKEN_INVALIDE_ERROR,
  TOKEN_NOT_FOUND_ERROR,
} from '@/constants/errorCode';
import utils from '@/utils/index';
import useModal from '@/hooks/useModal';
import { loadingState } from '@/stores/common';

const apiInstance = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
});

const Interceptor = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useRecoilState(loadingState);
  const [globalCustomLoading, setGlobalCustomLoading] =
    useRecoilState(customLoadingState);

  const { openModal } = useModal();

  useEffect(() => {
    apiInstance.interceptors.request.use(
      (config) => {
        return requestHandler(config);
      },
      (error) => {
        // return Promise.reject(error);
        return errorHandler(error);
      },
    );
    apiInstance.interceptors.response.use(
      (response) => {
        return responseHandler(response);
      },
      (error) => {
        // return Promise.reject(error);
        return errorHandler(error);
      },
    );
  }, []);

  const getIssueToken = async (response) => {
    const param = { refreshToken: utils.getRefreshToken() };
    const result = await apiInstance.get(`${API_VERSION}${API_TOKEN_URL}`, {
      headers: getheaders(response.config),
      params: param,
    });
    return result;
  };

  const requestHandler = (config) => {
    const tempConfig = config;
    if (tempConfig?.customLoading) {
      setGlobalCustomLoading(true);
    } else if (tempConfig.loadding && globalLoading === false) {
      setGlobalLoading(true);
    }
    tempConfig.headers = getheaders(tempConfig);
    if (API_PRINT_LOG) {
      if (tempConfig.method.toUpperCase() === 'GET') {
        console.log(
          `[ >> API-REQ ] URL '${tempConfig.url}' PARAMS`,
          tempConfig.params,
        );
      } else {
        console.log(
          `[ >> API-REQ ] URL '${tempConfig.url}' DATA`,
          tempConfig.data,
        );
      }
    }
    return tempConfig;
  };

  const getheaders = (tempConfig) => {
    let headerOptions = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    if (tempConfig?.customHeaders) {
      headerOptions = Object.assign(headerOptions, tempConfig.customHeaders);
    }
    if (tempConfig?.token) {
      headerOptions.Authorization = `Bearer ${utils.getAccessToken()}`;
    }
    return headerOptions;
  };

  const responseHandler = async (response) => {
    if (response.status === 200) {
      try {
        if (API_PRINT_LOG) {
          console.log(
            `[ << API-RES  ] api: ${response.config.url}, response: `,
            response.status === 200 ? response.data : response,
          );
        }
        // 재발급
        if (response.data.errorCode === TOKEN_INVALIDE_ERROR) {
          try {
            const result = await getIssueToken(response);
            if (result.data.errorCode === SUCCESS) {
              utils.setAccessToken(result.data.data.accessToken);
              const errorRequest = response.config;
              errorRequest.headers.Authorization = `Bearer ${utils.getAccessToken()}`;
              return apiInstance(errorRequest);
            }
            return errorHandler(response);
          } catch (catchError) {
            return errorHandler(response);
          } finally {
            setGlobalLoading(false);
            setGlobalCustomLoading(false);
          }
        }
        return response;
      } catch (catchError) {
        return errorHandler(response);
      } finally {
        setGlobalLoading(false);
        setGlobalCustomLoading(false);
      }
    }
  };

  const errorHandler = (error) => {
    setGlobalLoading(false);
    setGlobalCustomLoading(false);
    if (utils.isNotEmpty(error?.data)) {
      return apiErrorHandle(error);
    }
    // 임의로 에러 만들기
    const tempError = { ...error };
    tempError.data = {
      errorCdoe: 500,
    };
    console.log(`[## SERVER-ERROR ##] error:`, tempError);
    setTimeout(() => {
      openModal({
        text: '요청이 실패 하였습니다.\n관리자에게 문의하시기 바랍니다.',
      });
    });
    return tempError;
  };

  const apiErrorHandle = (error) => {
    console.log(`[## API-ERROR ##] error:`, error);
    const { errorCode } = error.data;
    let { message } = error.data;
    const changeMsg = [
      {
        org: '기존 배송건 상태가 접수 신청 또는 접수 완료 인 경우만 접수 취소가 가능 합니다',
        change:
          '기존 배송건 상태가 접수 신청 또는\n접수 완료 인 경우만 접수 취소가 가능 합니다',
      },
      {
        org: '예치금이 부족합니다. 예치금 충전 후 배송 접수를 진행해주세요.',
        change:
          '예치금이 부족합니다.\n예치금 충전 후 배송 접수를 진행해주세요.',
      },
    ];
    changeMsg.forEach((info) => {
      if (message === info.org) {
        message = info.change;
      }
    });
    if (
      errorCode === TOKEN_INVALIDE_ERROR ||
      errorCode === TOKEN_NOT_FOUND_ERROR
    ) {
      openModal({
        text: '사용자 계정 세션이 만료 되었습니다.\n로그인 화면으로 이동합니다.',
        onAgree: () => {
          // removeUserInfo();
          // navigate(MAIN.login);
        },
      });
      return error;
    }

    // 그 외
    setTimeout(() => {
      openModal({
        text: message || '작업 요청이 실패 하였습니다.',
      });
    });
    return error;
  };

  return children;
};

export default apiInstance;
export { Interceptor };
