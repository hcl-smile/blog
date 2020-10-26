/**
 * 检查数组
 */

function checkArray(array) {
  return Object.prototype.toString.call(array) === "[object Array]";
}

/**
 * 去重
 */
function unique(array) {
  if (!checkArray(array)) {
    return new Error(`${array} is must be array`);
  }

  if (!array.length) {
    return [];
  }

  const res = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (array.indexOf(item) === -1) {
      res.push(item);
    }
  }

  return res;
}

module.exports = {
  unique,
  checkArray,
};
