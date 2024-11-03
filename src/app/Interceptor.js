'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  SUCCESS,
  REQUIRE_SIGNUP_ERROR,
  TOKEN_NOT_FOUND_ERROR,
  TOKEN_INVALIDE_ERROR,
  DUPLICATE_ERROR,
  ARGUMENT_NOT_VALID_ERROR,
  REQ_MESSAGE_NOT_READABLE_ERROR,
  REQ_METHOD_NOT_SUPPORTED_ERROR,
  JPA_INTERNAL_ERROR,
  TIME_OUT_ERROR,
  FILE_MAX_SIZE_ERROR,
  ETC_ERROR,
} from '@/constants/errorCode';
import utils from '@/utils';
import useModal from '@/hooks/useModal';
import { loadingState } from '@/stores/commonRecoil';
import { customLoadingState } from '@/stores/commonRecoil';
import issueApi from '@/services/issueApi';
import useSession from '@/hooks/useSession';
import { ADMIN, MAIN } from '@/constants/pageURL';
import { loadingNoShadeState } from '@/stores/commonRecoil';

const API_PRINT_LOG = process.env.CUSTOM_API_PRINT_LOG;

const apiInstance = axios.create({
  baseURL: process.env.CUSTOM_API_URL,
  timeout: process.env.CUSTOM_API_TIMEOUT,
});

let refreshing = false;
let requestsQueue = [];

const Interceptor = ({ children }) => {
  const includeCode = [
    // SUCCESS,
    // NO_DATA_ERROR,
    // REQUIRE_SIGNUP_ERROR,
    TOKEN_NOT_FOUND_ERROR,
    TOKEN_INVALIDE_ERROR,
    // DUPLICATE_ERROR,
    ARGUMENT_NOT_VALID_ERROR,
    REQ_MESSAGE_NOT_READABLE_ERROR,
    REQ_METHOD_NOT_SUPPORTED_ERROR,
    JPA_INTERNAL_ERROR,
    TIME_OUT_ERROR,
    FILE_MAX_SIZE_ERROR,
    ETC_ERROR,
  ];

  const [globalLoading, setGlobalLoading] = useRecoilState(loadingState);
  const setGlobalLoadingNoShade = useSetRecoilState(loadingNoShadeState);
  const [globalCustomLoading, setGlobalCustomLoading] =
    useRecoilState(customLoadingState);

  const { removeUserInfo, removeAdminUserInfo } = useSession();

  const { openModal } = useModal();

  useEffect(() => {
    apiInstance.interceptors.request.use(
      (config) => {
        return requestHandler(config);
      },
      (error) => {
        return errorHandler(error);
      },
    );
    apiInstance.interceptors.response.use(
      (response) => {
        return responseHandler(response);
      },
      (error) => {
        return errorHandler(error);
      },
    );
  }, []);

  const getIssueToken = async (response) => {
    let result = null;
    if (response.config.url.indexOf('/admin') > -1) {
      const param = { refreshToken: utils.getAdminRefreshToken() };
      result = await issueApi.patchAdminUserIssueAccessToken(param);
    } else {
      const param = { refreshToken: utils.getRefreshToken() };
      result = await issueApi.patchNormalUserIssueAccessToken(param);
    }
    return result;
  };

  const requestHandler = (config) => {
    const tempConfig = config;
    if (tempConfig?.customLoading) {
      setGlobalCustomLoading(true);
    } else if (tempConfig.loadding && globalLoading === false) {
      setGlobalLoading(true);
      if (tempConfig.noShade) {
        setGlobalLoadingNoShade(true);
      }
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
      if (tempConfig.url.indexOf('/admin') > -1) {
        headerOptions.Authorization = `Bearer ${utils.getAdminAccessToken()}`;
      } else {
        headerOptions.Authorization = `Bearer ${utils.getAccessToken()}`;
      }
    }
    return headerOptions;
  };

  const responseHandler = async (response) => {
    if (response.status === 200) {
      const errorCode = response.data.errorCode;
      try {
        if (API_PRINT_LOG) {
          console.log(
            `[ << API-RES  ] api: ${response.config.url}, response: `,
            response.status === 200 ? response.data : response,
          );
        }
        // 재발급
        if (
          errorCode === TOKEN_INVALIDE_ERROR &&
          response?.config?.isCommonError === true
        ) {
          try {
            const result = await getIssueToken(response);
            if (result.data.errorCode === SUCCESS) {
              const accessToken = result.data.data.accessToken;
              if (result.config.url.indexOf('/admin') > -1) {
                utils.setAdminAccessToken(accessToken);
              } else {
                utils.setAccessToken(accessToken);
              }
              const errorRequest = response.config;
              errorRequest.headers.Authorization = `Bearer ${accessToken}`;
              return apiInstance(errorRequest);
            }
            return errorHandler(response);
          } catch (catchError) {
            return errorHandler(response);
          } finally {
            setGlobalLoading(false);
            setGlobalCustomLoading(false);
            setGlobalLoadingNoShade(false);
          }
        }
        // 상단 에러코드가 포함되면 에러 처리
        if (includeCode.includes(errorCode)) {
          return errorHandler(response);
        }
        return response;
      } catch (catchError) {
        return errorHandler(response);
      } finally {
        setGlobalLoading(false);
        setGlobalCustomLoading(false);
        setGlobalLoadingNoShade(false);
      }
    }
  };

  const errorHandler = (error) => {
    setGlobalLoading(false);
    setGlobalCustomLoading(false);
    setGlobalLoadingNoShade(false);
    if (utils.isNotEmpty(error?.data)) {
      return apiErrorHandle(error);
    }
    // 임의로 에러 만들기
    const tempError = { ...error, errorCdoe: 500, errorMsg: error };

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
        org: 'orgText',
        change: 'change\ntext',
      },
    ];
    changeMsg.forEach((info) => {
      if (message === info.org) {
        message = info.change;
      }
    });
    if (
      (errorCode === TOKEN_INVALIDE_ERROR ||
        errorCode === TOKEN_NOT_FOUND_ERROR) &&
      error.config.isCommonError === true
    ) {
      openModal({
        text: '사용자 계정 세션이 만료 되었습니다.\n로그인 화면으로 이동합니다.',
        onAgree: () => {
          if (error.config.url.indexOf('/admin') > -1) {
            removeAdminUserInfo(false);
            window.location.href = ADMIN.login;
          } else {
            removeUserInfo();
            window.location.href = MAIN.login;
          }
        },
      });
      return error;
    }

    // 그 외
    if (error.config.isCommonError) {
      setTimeout(() => {
        openModal({
          text: message || '작업 요청이 실패 하였습니다.',
        });
      });
    }
    return error;
  };

  return children;
};

export default apiInstance;
export { Interceptor };
