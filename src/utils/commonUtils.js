import {
  AUTO_LOGIN_KEY,
  REF_TOKEN_ID,
  STROAGE_KEY,
  STROAGE_LOADING,
  STROAGE_USER_INFO,
  TOKEN_ID,
} from '@/constants/common';

import clipboardCopy from 'clipboard-copy';

export const isClient = () => {
  if (typeof window !== 'undefined') {
    return true;
  } else {
    return false;
  }
};

export const removeAppStorage = () => {
  removeLocalItem('recoil-persist');
  removeSessionItem('recoil-persist');
  removeLocalItem(STROAGE_USER_INFO);
  removeLocalItem(AUTO_LOGIN_KEY);
  removeLocalItem(STROAGE_KEY);
  removeLocalItem(STROAGE_LOADING);
  removeLocalItem(TOKEN_ID);
  removeLocalItem(REF_TOKEN_ID);
  removeSessionItem(STROAGE_USER_INFO);
  removeSessionItem(AUTO_LOGIN_KEY);
  removeSessionItem(STROAGE_KEY);
  removeSessionItem(STROAGE_LOADING);
  removeSessionItem(TOKEN_ID);
  removeSessionItem(REF_TOKEN_ID);
};

// 유저정보
export const getUserInfo = () => {
  const result = getLocalItem(STROAGE_USER_INFO);
  if (result) {
    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    return result;
  }
};
export const setUserInfo = (id, pw) => {
  setLocalItem(
    STROAGE_USER_INFO,
    JSON.stringify({
      id,
      pw,
    }),
  );
};

// 자동로그인
export const getAutoLogin = () => {
  const result = getLocalItem(AUTO_LOGIN_KEY);
  if (result) {
    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    return result;
  }
  return false;
};
export const setAutoLogin = (value) => {
  setLocalItem(AUTO_LOGIN_KEY, JSON.stringify(value));
};

// 로딩
export const getActiveLoading = () => {
  return getSessionItemJson('gossok-cs-loading');
};
export const activeLoading = () => {
  setSessionItem('gossok-cs-loading', true);
};
export const inActiveLoading = () => {
  setSessionItem('gossok-cs-loading', false);
};

// 토큰
export const setAccessToken = (value) => {
  setLocalItem(TOKEN_ID, value);
};
export const getAccessToken = () => {
  return getLocalItem(TOKEN_ID);
};
export const getRefreshToken = () => {
  return getLocalItem(REF_TOKEN_ID);
};
export const setRefreshToken = (value) => {
  setLocalItem(REF_TOKEN_ID, value);
};
export const removeAccessToken = (value) => {
  removeLocalItem(TOKEN_ID, value);
};

export const removeRefreshToken = (value) => {
  removeLocalItem(REF_TOKEN_ID, value);
};

// 저장소
export const setSessionItem = (key, value) => {
  sessionStorage.setItem(key, value);
};
export const getSessionItem = (key) => {
  return sessionStorage.getItem(key);
};
export const getSessionItemJson = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};
export const removeSessionItem = (key) => {
  sessionStorage.removeItem(key);
};

export const setLocalItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalItem = (key) => {
  return localStorage.getItem(key);
};

export const removeLocalItem = (key) => {
  localStorage.removeItem(key);
};

/**
 * ## 체크된 항목 확인 (전체 체크 여부)
 * @param {Array} targetDatas: 대상 Array
 * @param {String} targetKey: 대상의 key 값
 * @param {Array} checkedIds: 체크된 Ids Array
 * @param {Function} setCheckedAll: callBack
 */
export const checkedProcess = (
  targetDatas,
  targetKey,
  checkedIds,
  setCheckedAll,
) => {
  let tempCount = 0;
  if (targetDatas.length !== 0) {
    targetDatas.map((targetData) => {
      checkedIds.map((checkedId) => {
        if (targetData[targetKey] === checkedId) {
          ++tempCount;
        }
      });
    });
  }
  if (targetDatas.length !== 0 && targetDatas.length === tempCount) {
    setCheckedAll(true);
  } else {
    setCheckedAll(false);
  }
};

export const checkedItemsProcess = (
  targetDatas,
  targetKey,
  checkItems,
  setCheckedAll,
) => {
  let tempCount = 0;
  if (targetDatas.length !== 0) {
    targetDatas.map((targetData) => {
      checkItems.map((item) => {
        if (targetData[targetKey] === item[targetKey]) {
          ++tempCount;
        }
      });
    });
  }
  if (targetDatas.length !== 0 && targetDatas.length === tempCount) {
    setCheckedAll(true);
  } else {
    setCheckedAll(false);
  }
};

/**
 * 오브젝트 배열 내 중복 오브젝트 변경
 * @param {Array} targetArr: 변경 하는 Array
 * @param {Array} setTargetArr: 변경 하는 Array Set
 * @param {Object} changeTarget: 변경 Object
 * @param {String} key: 변경 key 값
 */
export const changeObjectArray = (
  targetArr,
  setTargetArr,
  changeTarget,
  key,
) => {
  const match = targetArr.filter((data) => {
    return data[key] === changeTarget[key];
  });
  if (isEmpty(match) && isNotEmpty(changeTarget)) {
    setTargetArr([...targetArr, changeTarget]);
  } else if (isNotEmpty(changeTarget)) {
    const unMatch = targetArr.filter((data) => {
      return data[key] !== changeTarget[key];
    });
    setTargetArr([...unMatch, changeTarget]);
  }
};

/**
 * ## 전체 체크 클릭 처리 (target id 값만 저장)
 * @param {Array} targetDatas: 대상 Array
 * @param {String} targetKey: 대상의 key 값
 * @param {Array} checkedIds: 체크된 Ids Array
 * @param {Function} setCheckedIds: callBack
 */
export const handleOnClickAllCheck = (
  targetDatas,
  targetKey,
  checkedIds,
  setCheckedIds,
) => {
  const targetIds = targetDatas.map((data) => {
    return data[targetKey];
  });

  const matchIds = targetIds.filter((targetId) => {
    return checkedIds.some((checkedId) => {
      return checkedId === targetId;
    });
  });

  if (targetIds.length !== matchIds.length) {
    Array.from(checkedIds).concat(targetIds);
    const tempCheckedIds = checkedIds.concat(
      targetIds.filter((targetId) => {
        return !checkedIds.includes(targetId);
      }),
    );
    setCheckedIds(tempCheckedIds);
  } else {
    const unMatchIds = checkedIds.filter((checkedId) => {
      return matchIds.every((matchId) => {
        return matchId !== checkedId;
      });
    });
    setCheckedIds(unMatchIds);
  }
};

export const handleOnClickAllCheckItem = (
  targetDatas,
  targetKey,
  checkedItems,
  setCheckedItems,
) => {
  const targetItems = targetDatas.map((data) => {
    return data;
  });

  const matchItems = targetItems.filter((item) => {
    return checkedItems.some((checkedItem) => {
      return checkedItem[targetKey] === item[targetKey];
    });
  });

  if (targetItems.length !== matchItems.length) {
    Array.from(checkedItems).concat(targetItems);
    const tempCheckedIds = checkedItems.concat(
      targetItems.filter((item) => {
        return !checkedItems.includes(item);
      }),
    );
    setCheckedItems(tempCheckedIds);
  } else {
    const unMatchItems = checkedItems.filter((checkedItem) => {
      return matchItems.every((matchItem) => {
        return matchItem !== checkedItem;
      });
    });
    setCheckedItems(unMatchItems);
  }
};

/**
 * ## 오브젝트 비교 및 추출
 * @param {Object} org: 비교 전 오브젝트
 * @param {Object} target: 비교 할 오브젝트
 * @returns: 비교 전 값 대상으로 비교 후 변경된 값만 추출
 */
export const diffObjects = (org, target) => {
  if (target === org) return {};
  if (
    typeof target !== 'object' ||
    target === null ||
    typeof org !== 'object' ||
    org === null
  )
    return target;
  const keys1 = Object.keys(target);
  const keys2 = Object.keys(org);
  const allKeys = Array.from(new Set([...keys1, ...keys2]));
  const diff = {};
  allKeys.forEach((key) => {
    if (!deepEqual(target[key], org[key])) {
      if (typeof target[key] === 'object' && typeof org[key] === 'object') {
        const nestedDiff = diffObjects(org[key], target[key]);
        if (Object.keys(nestedDiff).length > 0) {
          diff[key] = nestedDiff;
        }
      } else {
        diff[key] = target[key];
      }
    }
  });
  return diff;
};
const deepEqual = (obj1, obj2) => {
  const stringifiedObj1 = JSON.stringify(obj1);
  const stringifiedObj2 = JSON.stringify(obj2);
  return stringifiedObj1 === stringifiedObj2;
};

/**
 *
 * @param {Number} index
 * @param {Number} currentPage
 * @param {Number} totalCount
 * @param {Number} contentNum
 * @returns
 */
export const getPageContentNum = (
  index,
  currentPage,
  totalCount,
  contentNum,
) => {
  return totalCount - index - (currentPage - 1) * contentNum;
};

export const getNumberStr = (value) => {
  if (!isClient()) {
    return;
  }
  if (isEmpty(value)) return value;
  const tempValue = value.match(/\d+/g).map(Number);
  return tempValue.join().replace(/,/g, '');
};

export const checkEmail = (value) => {
  if (!isClient()) {
    return;
  }
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(value);
};

export const checkPhoneNum = (value) => {
  if (!isClient()) {
    return;
  }
  if (isEmpty(value)) return;
  const cleaned = `${value}`.replace(/\D/g, '');
  const regex1 = /^(\d{3,4})(\d{3,4})(\d{4})$/;
  const regex2 = /^(\d{2,3})(\d{3,4})(\d{4})$/;
  const regex3 = /^(\d{4})(\d{4})$/;
  if (regex1.test(cleaned)) {
    return true;
  }
  if (regex2.test(cleaned)) {
    return true;
  }
  if (regex3.test(cleaned)) {
    return true;
  }
  return false;
};

export const checkPassword = (pw) => {
  // 영문, 숫자, 특수문자 포함하여 6자~20자
  const reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;
  return reg.test(pw);
};

export const handleClickEvent = (event, target, data) => {
  if (!isClient()) {
    return;
  }
  // e.stopPropagation();
  if (target === 'check') {
    console.log('check');
    return 1;
  }

  if (target === 'onClickIcon') {
    return onClickIcon(data);
  }
  if (target === 'onClickCalc') {
    return onClickCalc(data);
  }
  if (target === 'onClickSearch') {
    return onClickSearch(data);
  }
  if (target === 'onClickRow' && onClickRow !== undefined) {
    return onClickRow(data);
  }
};

/**
 * Object의 빈 값 제거
 * @param {*} obj: 빈값 제거 대상 OBJ
 * @returns
 */
export const removeNullValues = (obj) => {
  if (!isClient()) {
    return;
  }
  const tempObj = { ...obj };
  Object.keys(tempObj).forEach((key) => {
    if (isEmpty(tempObj[key]) || tempObj[key] === 0) {
      delete tempObj[key];
    } else if (typeof tempObj[key] === 'object') {
      removeNullValues(tempObj[key]);
      if (Object.keys(tempObj[key]).length === 0) {
        delete tempObj[key];
      }
    }
  });
  if (Object.keys(tempObj).length === 0) {
    return null;
  }
  return tempObj;
};

export const isNotEmpty = (value) => {
  if (!isClient()) {
    return;
  }
  if (value === null) return false;
  if (value === undefined) return false;
  if (typeof value === 'undefined') return false;
  if (typeof value === 'string' && value.replace(/\s+/g, '').length < 1)
    return false;
  if (Array.isArray(value) && value.length < 1) return false;
  // if (typeof value === 'object' && value.constructor.name === 'Object' && Object.keys(value).length < 1 && Object.getOwnPropertyNames(value) < 1) return false
  if (typeof value === 'object' && Object.keys(value).length < 1) {
    return false;
  }
  if (
    typeof value === 'object' &&
    value.constructor.name === 'String' &&
    Object.keys(value).length < 1
  )
    return false;
  return true;
};

export const isEmpty = (value) => {
  if (!isClient()) {
    return;
  }
  return !isNotEmpty(value);
};

export const copyObject = (obj) => {
  if (!isClient()) {
    return;
  }
  const copiedObj = {};
  Object.keys(obj).forEach((key) => {
    copiedObj[key] = typeof obj[key] === 'string' ? '' : 0;
  });
  return copiedObj;
};

export const copyToClipboard = async (text) => {
  if (!isClient()) {
    return;
  }
  const result = await clipboardCopy(text)
    .then(() => {
      return true;
    })
    .catch((error) => {
      // console.error('클립보드 복사 실패:', error);
      return false;
    });
  return result;
};

export const makeDaysOptionComp = () => {
  if (!isClient()) {
    return;
  }
  const numbers = Array.from({ length: 31 }, (_, index) => {
    return index + 1;
  });
  return (
    <>
      {numbers.map((number) => {
        return (
          <option key={number} value={String(number)}>
            {number}일
          </option>
        );
      })}
    </>
  );
};

export const downloadUrlFile = async (url, filename) => {
  if (!isClient()) {
    return;
  }
  const result = await fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = isEmpty(filename) ? 'temp' : filename;
      a.click();
      URL.revokeObjectURL(blobUrl);
      return true;
    })
    .catch((error) => {
      console.error('Error fetching the URL:', error);
      return false;
    });
  return result;
};

export const uploadExcelToExportData = () => {};

export const isMobile = () => {
  if (!isClient()) {
    return;
  }
  if (OSInfo().osType === 1) {
    return false;
  }
  return true;
  /*
  const { userAgent } = navigator;
  if (
    userAgent.match(
      /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i,
    ) != null ||
    userAgent.match(/LG|SAMSUNG|Samsung/) != null
  ) {
    return true;
  }
  return false;
  */
};

export const OSInfo = () => {
  if (!isClient()) {
    return;
  }
  const osInfo = {
    osType: null, // 사용자 운영체제(1:web, 2:mobile, 3:web&mobile)
    mobileOsType: null, // 사용자 모바일 운영체제(1:iOS, 2:AOS) - 모바일 사용자만 필수
  };
  const devName = OSInfoDev().toLowerCase();
  const agent = navigator.userAgent.toLowerCase();
  // let agent = 'mozilla/5.0 (Macintosh; intel mac os x 10_14_6) Applewebkit/605.1.15 (KHTML, like gecko) Version/12.1.2 Safari/605.1.15'.toLowerCase()
  if (
    devName.indexOf('macos') > -1 ||
    devName.indexOf('iphone') > -1 ||
    devName.indexOf('ipad') > -1
  ) {
    if (
      agent.indexOf('safari') > -1 ||
      agent.indexOf('naver') > -1 ||
      agent.indexOf('kakaotalk') > -1
    ) {
      osInfo.osType = 3;
    } else {
      osInfo.osType = 2;
    }
    osInfo.mobileOsType = 1;
  } else if (devName.indexOf('android') > -1) {
    if (agent.indexOf('wv') > -1) {
      if (agent.indexOf('naver') > -1 || agent.indexOf('kakaotalk') > -1) {
        osInfo.osType = 3;
      } else {
        osInfo.osType = 2;
      }
    } else {
      osInfo.osType = 3;
    }
    osInfo.mobileOsType = 2;
  } else if (devName.indexOf('macintosh') > -1) {
    const touchTime = `${navigator.maxTouchPoints}`;
    if (touchTime === 5) {
      if (
        agent.indexOf('safari') > -1 ||
        agent.indexOf('naver') > -1 ||
        agent.indexOf('kakaotalk') > -1
      ) {
        osInfo.osType = 3;
      } else {
        osInfo.osType = 2;
      }
      osInfo.mobileOsType = 1;
    } else {
      osInfo.osType = 1;
    }
  } else {
    osInfo.osType = 1;
  }
  return osInfo;
};

const OSInfoDev = () => {
  if (!isClient()) {
    return;
  }
  const agent = navigator.userAgent;
  const AgentUserOs = agent.replace(/ /g, '');
  const OsNo = agent.toLowerCase();
  const os = {
    Linux: /linux/.test(OsNo),
    Unix: /x11/.test(OsNo),
    Mac: /mac/.test(OsNo),
    Windows: /win/.test(OsNo),
  };
  let OSName = null;
  let OSVers = null;
  if (os.Windows) {
    if (AgentUserOs.indexOf('WindowsCE') !== -1) OSName = 'Windows CE';
    else if (AgentUserOs.indexOf('Windows95') !== -1) OSName = 'Windows 95';
    else if (AgentUserOs.indexOf('Windows98') !== -1) {
      if (AgentUserOs.indexOf('Win9x4.90') !== -1)
        OSName = 'Windows Millennium Edition (Windows Me)';
      else OSName = 'Windows 98';
    } else if (AgentUserOs.indexOf('WindowsNT4.0') !== -1)
      OSName = 'Microsoft Windows NT 4.0';
    else if (AgentUserOs.indexOf('WindowsNT5.0') !== -1)
      OSName = 'Windows 2000';
    else if (AgentUserOs.indexOf('WindowsNT5.01') !== -1)
      OSName = 'Windows 2000, Service Pack 1 (SP1)';
    else if (AgentUserOs.indexOf('WindowsNT5.1') !== -1) OSName = 'Windows XP';
    else if (AgentUserOs.indexOf('WindowsNT5.2') !== -1)
      OSName = 'Windows 2003';
    else if (AgentUserOs.indexOf('WindowsNT6.0') !== -1)
      OSName = 'Windows Vista/Server 2008';
    else if (AgentUserOs.indexOf('WindowsNT6.1') !== -1) OSName = 'Windows 7';
    else if (AgentUserOs.indexOf('WindowsNT6.2') !== -1) OSName = 'Windows 8';
    else if (AgentUserOs.indexOf('WindowsNT6.3') !== -1) OSName = 'Windows 8.1';
    else if (AgentUserOs.indexOf('WindowsPhone8.0') !== -1)
      OSName = 'Windows Phone 8.0';
    else if (AgentUserOs.indexOf('WindowsPhoneOS7.5') !== -1)
      OSName = 'Windows Phone OS 7.5';
    else if (AgentUserOs.indexOf('Xbox') !== -1) OSName = 'Xbox 360';
    else if (AgentUserOs.indexOf('XboxOne') !== -1) OSName = 'Xbox One';
    else if (AgentUserOs.indexOf('Win16') !== -1) OSName = 'Windows 3.x';
    else if (AgentUserOs.indexOf('ARM') !== -1) OSName = 'Windows RT';
    else OSName = 'Windows (Unknown)';
    if (AgentUserOs.indexOf('WOW64') !== -1) OSVers = ' 64-bit(s/w 32-bit)';
    else if (AgentUserOs.indexOf('Win64;x64;') !== -1)
      OSVers = ' 64-bit(s/w 64-bit)';
    else if (AgentUserOs.indexOf('Win16') !== -1) OSVers = ' 16-bit';
    else OSVers = ' 32-bit';
  } else if (os.Linux) {
    if (AgentUserOs.indexOf('Android') !== -1) {
      const regex = /Android (.*);.*;\s*(.*)\sBuild/;
      const match = regex.exec(agent);
      if (match) {
        const ver = match[1];
        const devName = match[2];
        return `Android ${ver} ${devName}`;
      }
      return 'Android OS';
    }
    if (AgentUserOs.indexOf('BlackBerry9000') !== -1) OSName = 'BlackBerry9000';
    else if (AgentUserOs.indexOf('BlackBerry9300') !== -1)
      OSName = 'BlackBerry9300';
    else if (AgentUserOs.indexOf('BlackBerry9700') !== -1)
      OSName = 'BlackBerry9700';
    else if (AgentUserOs.indexOf('BlackBerry9780') !== -1)
      OSName = 'BlackBerry9780';
    else if (AgentUserOs.indexOf('BlackBerry9900') !== -1)
      OSName = 'BlackBerry9900';
    else if (AgentUserOs.indexOf('BlackBerry;Opera Mini') !== -1)
      OSName = 'Opera/9.80';
    else if (AgentUserOs.indexOf('Symbian/3') !== -1) OSName = 'Symbian OS3';
    else if (AgentUserOs.indexOf('SymbianOS/6') !== -1) OSName = 'Symbian OS6';
    else if (AgentUserOs.indexOf('SymbianOS/9') !== -1) OSName = 'Symbian OS9';
    else if (AgentUserOs.indexOf('Ubuntu') !== -1) OSName = 'Ubuntu';
    else if (AgentUserOs.indexOf('PDA') !== -1) OSName = 'PDA';
    else if (AgentUserOs.indexOf('NintendoWii') !== -1) OSName = 'Nintendo Wii';
    else if (AgentUserOs.indexOf('PSP') !== -1) OSName = 'PlayStation Portable';
    else if (AgentUserOs.indexOf('PS2;') !== -1) OSName = 'PlayStation 2';
    else if (AgentUserOs.indexOf('PLAYSTATION3') !== -1)
      OSName = 'PlayStation 3';
    else OSName = 'Linux (Unknown)';

    if (AgentUserOs.indexOf('x86_64') !== -1) OSVers = ' 64-bit';
    else if (AgentUserOs.indexOf('i386') !== -1) OSVers = ' 32-bit';
    else if (AgentUserOs.indexOf('IA-32') !== -1) OSVers = ' 32-bit';
    else OSVers = '';
  } else if (os.Unix) {
    OSName = 'UNIX';
  } else if (os.Mac) {
    if (AgentUserOs.indexOf('iPhone') !== -1) {
      if (AgentUserOs.indexOf('iPhoneOS3') !== -1) OSName = 'iPhone OS 3';
      else if (AgentUserOs.indexOf('iPhoneOS4') !== -1) OSName = 'iPhone OS 4';
      else if (AgentUserOs.indexOf('iPhoneOS5') !== -1) OSName = 'iPhone OS 5';
      else if (AgentUserOs.indexOf('iPhoneOS6') !== -1) OSName = 'iPhone OS 6';
      else OSName = 'iPhone';
    } else if (AgentUserOs.indexOf('iPad') !== -1) {
      OSName = 'iPad';
    } else if (AgentUserOs.indexOf('MacOS') !== -1) {
      if (AgentUserOs.indexOf('Macintosh') !== -1) OSName = 'Macintosh';
      else if (
        (AgentUserOs.indexOf('MacOSX10_9') ||
          AgentUserOs.indexOf('MacOSX10.1')) !== -1
      )
        OSName = 'Mac OS X Puma';
      else if (
        (AgentUserOs.indexOf('MacOSX10_9') ||
          AgentUserOs.indexOf('MacOSX10.2')) !== -1
      )
        OSName = 'Mac OS X Jaguar';
      else if (
        (AgentUserOs.indexOf('MacOSX10_9') ||
          AgentUserOs.indexOf('MacOSX10.3')) !== -1
      )
        OSName = 'Mac OS X Panther';
      else if (
        (AgentUserOs.indexOf('MacOSX10_9') ||
          AgentUserOs.indexOf('MacOSX10.4')) !== -1
      )
        OSName = 'Mac OS X Tiger';
      else if (
        (AgentUserOs.indexOf('MacOSX10_9') ||
          AgentUserOs.indexOf('MacOSX10.5')) !== -1
      )
        OSName = 'Mac OS X Leopard';
      else if (
        (AgentUserOs.indexOf('MacOSX10_9') ||
          AgentUserOs.indexOf('MacOSX10.6')) !== -1
      )
        OSName = 'Mac OS X Snow Leopard';
      else if (
        (AgentUserOs.indexOf('MacOSX10_9') ||
          AgentUserOs.indexOf('MacOSX10.7')) !== -1
      )
        OSName = 'Mac OS X Lion';
      else if (
        (AgentUserOs.indexOf('MacOSX10_9') ||
          AgentUserOs.indexOf('MacOSX10.8')) !== -1
      )
        OSName = 'Mac OS X Mountain Lion';
      else if (
        (AgentUserOs.indexOf('MacOSX10_9') ||
          AgentUserOs.indexOf('MacOSX10.9')) !== -1
      )
        OSName = 'Mac OS X Mavericks';
    } else {
      OSName = 'MacOS (Unknown)';
    }
  } else {
    OSName = 'Unknown OS';
  }
  const OSDev = OSName + OSVers;
  return OSDev;
};

export const getBreakpoint = () => {
  if (!isClient()) {
    return;
  }
  const breakpoints = ['base', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const width = window.innerWidth;
  /*
    base: '0em',
    xs: '300px',
    sm: '480px', // 30em
    md: '768px', // 48em
    lg: '992px', // 62em
    xl: '1280px', // 80em
    '2xl': '1536px', // 96em
    */
  if (width < 30 * 16) return breakpoints[1]; // sm
  if (width < 48 * 16) return breakpoints[2]; // md
  if (width < 62 * 16) return breakpoints[3]; // lg
  if (width < 80 * 16) return breakpoints[4]; // xl
  if (width < 96 * 16) return breakpoints[5]; // 2xl
  return breakpoints[3]; // md
};
