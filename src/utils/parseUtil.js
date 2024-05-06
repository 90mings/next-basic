import { Tooltip } from '@chakra-ui/react';
import {
  copyToClipboard,
  isEmpty,
  isNotEmpty,
  removeNullValues,
} from './commonUtils';

/**
 * ## date 타입 > string 포멧
 * @param {date} date: 대상 Array
 * @param {String} split: 구분으로 표현 될 값 (, -)
 * @param {Boolean} isTime: 시간까지 나올지 여부
 * @param {String} timeSplit: 시간 구분으로 표현될 값 (:, .)
 */
export const parseDateToStr = (
  date,
  split = '-',
  isTime = false,
  timeSplit = ':',
  isShowSecond = false,
) => {
  let tempDate = date;
  if (tempDate === null || tempDate === undefined) return '날짜입력';
  if (typeof tempDate === 'string') {
    tempDate = new Date(tempDate);
  }
  const year = tempDate.getFullYear();
  const month = leftPad(tempDate.getMonth() + 1);
  const day = leftPad(tempDate.getDate());

  const hour = leftPad(tempDate.getHours());
  const minute = leftPad(tempDate.getMinutes());
  const second = leftPad(tempDate.getSeconds());

  const firstArr = [year, month, day];
  const secondArr = [hour, minute];
  if (isShowSecond) {
    secondArr.push(second);
  }
  if (isTime) {
    return `${firstArr.join(split)} ${secondArr.join(timeSplit)}`;
  }
  return [year, month, day].join(split);
};

export const parseDateToYMD = (date) => {
  let tempDate = date;
  if (tempDate === null || tempDate === undefined) return '날짜입력';
  if (typeof tempDate === 'string') {
    tempDate = new Date(tempDate);
  }
  const year = tempDate.getFullYear();
  const month = leftPad(tempDate.getMonth() + 1);
  const day = leftPad(tempDate.getDate());

  return [year, month, day].join('');
};

export const parseWeightValue = (weight) => {
  if (isEmpty(weight)) return '';
  return DELIVERY_WEIGHT_LIST[Number(weight) - 1];
};

export const parseDateToArr = (date, isTime = false, isShowSecond = false) => {
  let tempDate = date;
  if (isEmpty(tempDate)) return [[], []];
  if (typeof tempDate === 'string') {
    tempDate = new Date(tempDate);
  }
  const year = tempDate.getFullYear();
  const month = leftPad(tempDate.getMonth() + 1);
  const day = leftPad(tempDate.getDate());

  const hour = leftPad(tempDate.getHours());
  const minute = leftPad(tempDate.getMinutes());
  const second = leftPad(tempDate.getSeconds());

  const firstArr = [year, month, day];
  const secondArr = [hour, minute];
  if (isShowSecond) {
    secondArr.push(second);
  }
  if (isTime) {
    return [firstArr, secondArr.concat(second)];
  }
  return firstArr;
};

export const parseTimeToTM = (time) => {
  if (time === null) {
    return;
  }
  const year = time.slice(0, 4);
  const month = time.slice(4, 6);
  const day = time.slice(6, 8);
  const hour = time.slice(8, 10);
  const minute = time.slice(10, 12);

  return `${year}${month}${day} ${hour}:${minute}`;
};

const leftPad = (value) => {
  if (value >= 10) {
    return value;
  }
  return `0${value}`;
};

export const parseTextLine = (value) => {
  let tempValue = value;
  if (isEmpty(tempValue)) return tempValue;
  if (tempValue.indexOf('<br />') > -1) {
    tempValue = tempValue.replaceAll('<br />', '\n');
  }
  if (tempValue.indexOf('<br>') > -1) {
    tempValue = tempValue.replaceAll('<br>', '\n');
  }
  return tempValue.split('\n');
};

export const parseLongText = (value, length) => {
  if (isEmpty(value)) {
    return value;
  }
  let tempValue = value;
  let tempLength = length;
  if (isEmpty(tempLength)) {
    tempLength = 10;
  }
  if (tempValue.length > tempLength) {
    tempValue = `${tempValue.substr(0, tempLength)}...`;
    return <Tooltip label={value}>{tempValue}</Tooltip>;
  }
  return tempValue;
};

export const parsePhoneNum = (value) => {
  if (isEmpty(value)) return;
  const cleaned = `${value}`.replace(/\D/g, '');
  if (value.length === 10) {
    const match = cleaned.match(/^(\d{2})(\d{3,4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return value;
  }
  if (value.length === 11) {
    const match = cleaned.match(/^(\d{3})(\d{3,4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return value;
  }
  return value;
};

export const parseRemoveHyphen = (value) => {
  if (isEmpty(value)) {
    return value;
  }
  let strV = String(value).trim();
  if (strV) {
    strV = strV.replace(/-/g, '');
  }
  return strV;
};

/**
 * ## 일반적인 체크 get
 * @param {String} checkValue: 1: true, 2: false
 * @param {Boolean} isReverse: 반환 값 반대로
 * @returns
 */
export const parseGetFlag = (checkValue, isReverse) => {
  if (isReverse) {
    if (Number(checkValue) === 1) return false;
    return true;
  }
  return basicGetFlag(checkValue);
};
const basicGetFlag = (checkValue) => {
  if (Number(checkValue) === 1) return true;
  return false;
};

/**
 * ## 일반적인 체크 set
 * @param {String} checkValue: 1: true, 2: false
 * @param {Function} targetSetFunc: 셋팅 할 callback
 * @returns
 */
export const parseSetFlag = (checkValue, targetSetFunc) => {
  if (targetSetFunc) {
    if (Number(checkValue) === 2) return targetSetFunc(1);
    return targetSetFunc(2);
  }
  return basicSetFlag(checkValue);
};
const basicSetFlag = (checkValue) => {
  if (Number(checkValue) === 2) return 1;
  return 2;
};

export const parseAmount = (amount) => {
  if (isEmpty(amount)) {
    // console.log('## parseAmount amount', amount);
    return 0;
  }
  return Math.round(Number(amount))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const parseCeil = (amount) => {
  if (isEmpty(amount)) {
    return 0;
  }
  return Math.ceil(Number(amount) / 100) * 100;
};

export const parseClipBoardForExcel = async (userType, datas) => {
  try {
    const text = datas
      .map((targetData) => {
        const data = removeNullValues(targetData);
        Object.keys(data).forEach((key) => {
          if (typeof data[key] === 'string') {
            data[key] = data[key].replace(/\r?\n/g, '');
          }
        });
        const row = [];
        row.push('data');
        return row.join('\t');
      })
      .join('\n');

    const result = await copyToClipboard(text);
    return result;
  } catch (error) {
    console.log(error);
  }
};
