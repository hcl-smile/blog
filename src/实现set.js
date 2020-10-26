const { checkArray, unique } = require("./utils");

class Set {
  constructor(values) {
    this.size = 0;
    this.values = unique(values);

    if (!checkArray(values)) {
      return new Error(`${typeof values} values is not iterable`);
    }
  }

  /**
   * 判断是否有该属性
   * @param {any} value
   * @return boolean
   */
  has(value) {
    let index = -1;
    index = this.values.indexOf(value);

    return index !== -1;
  }

  /**
   * 添加属性
   * @param {any} value
   * @return any
   */
  add(value) {
    const index = this.values.indexOf(value);

    if (index === -1) {
      this.values.push(value);
      this.size++;
    }

    return this.values;
  }

  /**
   * 返回属性集合
   * @return any
   */
  values() {
    return this.values;
  }

  size() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.values.length = 0;

    return this.values;
  }

  delete(value) {
    if (!value) {
      return false;
    }

    const index = this.values.indexOf(value);

    if (index === -1) {
      return false;
    }

    this.size--;
    return true;
  }

  forEach(callback) {
    const self = this;

    for (let i = 0; i < this.values.length; i++) {
      const value = this.values[i];

      callback && callback(value, i, self.values);
    }
  }
}

module.exports = Set;
