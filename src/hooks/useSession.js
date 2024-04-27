import { useResetRecoilState } from 'recoil';
import { navigationIndexState, tempAutoLoginState } from '../recoil/common';
import {
  AUTO_LOGIN_KEY,
  REF_TOKEN_ID,
  STROAGE_KEY,
  STROAGE_LOADING,
  STROAGE_USER_INFO,
  TOKEN_ID,
} from '@/constants/common';
import { csUserState } from '../recoil/user';
import utils from '@/utils/index';

const useSession = () => {
  const resetCsUserState = useResetRecoilState(csUserState);
  const resetGlobalTabIndex = useResetRecoilState(navigationIndexState);
  const resetTempAutoLogin = useResetRecoilState(tempAutoLoginState);

  const removeUserInfo = (isLogout = true) => {
    resetCsUserState();
    resetGlobalTabIndex();
    resetTempAutoLogin();

    if (isLogout) {
      utils.removeLocalItem(STROAGE_USER_INFO);
      utils.removeLocalItem(AUTO_LOGIN_KEY);
    }
    utils.removeLocalItem(STROAGE_KEY);
    utils.removeLocalItem(STROAGE_LOADING);
    utils.removeLocalItem(TOKEN_ID);
    utils.removeSessionItem(TOKEN_ID);
    utils.removeLocalItem(REF_TOKEN_ID);
    utils.removeSessionItem(REF_TOKEN_ID);
  };

  return {
    removeUserInfo,
  };
};

export default useSession;
