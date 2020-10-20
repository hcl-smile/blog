/**
 * 第一种
 * 终止条件：不传入参数
 */
function curry() {
  let arr = [];

  function clourse(...args) {
    if (args.length) {
      arr = arr.concat(args);
      return clourse;
    }

    return arr.length ? arr.reduce((prev, cur) => prev + cur) : 0;
  }

  return clourse;
}

/**
 * 第二种
 * 终止条件：自定义函数参数数量
 */
function curry(fn) {
  let arr = [];

  function clourse(...args) {
    arr = arr.concat(args);

    if (arr.length < fn.length) {
      return clourse;
    }

    return fn(...arr);
  }

  return clourse;
}
