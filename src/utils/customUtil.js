import axios from 'axios';
import { KAKAO_REST_API_KEY } from '@constants/common';

import { isEmpty } from './commonUtils';

/**
 * 카카오 address Search api
 * @param {*} addr
 * @returns
 */
export const getLALOInfo = async (addr) => {
  if (isEmpty(addr)) {
    return null;
  }
  const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURI(
    addr,
  )}`;
  const result = await axios({
    url,
    method: 'get',
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`, // KakaoAK 뒤에 위에서 얻은 REST API KEY를 입력
    },
  });
  if (result.status === 200) {
    return result.data.documents[0];
  }
  return false;
};
