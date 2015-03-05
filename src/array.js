"use strict";

/// # at
/// return the item at the index
/// ## Interface
/// `sc.at(array: any[], index: number): any`
export let at = (array, index) => {
  return array[index|0];
};

/// # clipAt
/// same as `at`, but values for index greater than the size of the Array will be clipped to the last index
/// ## Interface
/// `sc.clipAt(array: any[], index: number): any`
export let clipAt = (array, index) => {
  return array[Math.max(0, Math.min(index|0, array.length - 1))];
};

/// # flop
/// invert rows and colums in a two dimensional Array (turn inside out)
/// ## Interface
/// `sc.flop(array: any[]): any[][]`
export let flop = (array) => {
  if (array.length === 0) {
    return [ [] ];
  }

  let maxSize = array.reduce((len, sublist) => {
    return Math.max(len, Array.isArray(sublist) ? sublist.length : 1);
  }, 0);
  let result = new Array(maxSize);
  let len = array.length;

  for (let i = 0; i < maxSize; i++) {
    let sublist = result[i] = new Array(len);
    for (let j = 0; j < len; j++) {
      let value = array[j];
      sublist[j] = Array.isArray(value) ? value[i % value.length] : value;
    }
  }

  return result;
};

/// # foldAt
/// same as `at`, but values for *index* greater than the size of the Array will be folded back
/// ## Interface
/// `sc.foldAt(array: any[], index: number): any`
export let foldAt = (array, index) => {
  index = index|0;

  let len1 = array.length;
  let len2 = len1 * 2 - 2;

  while (!(0 <= index && index < len1)) {
    if (index < 0) {
      index += len2;
    }
    if (len1 <= index) {
      index = len2 - index;
    }
  }

  return array[index];
};

/// # clipAt
/// same as `at`, but values for index greater than the size of the Array will be wrapped around to 0
/// ## Interface
/// `sc.wrapAt(array: any[], index: number): any`
export let wrapAt = (array, index) => {
  index = (index|0) % array.length;
  if (index < 0) {
    index += array.length;
  }
  return array[index];
};

/// # blendAt
/// return a linearly interpolated value between the two closest indices
/// ## Interface
/// `sc.blendAt(array: any[], index: number, method="clipAt"): any`
export let blendAt = (array, index, method="clipAt") => {
  let at = { clipAt, wrapAt, foldAt }[method] || clipAt;
  let x0 = at(array, (index|0));
  let x1 = at(array, (index|0) + 1);
  return x0 + Math.abs(index - (index|0)) * (x1 - x0);
};
