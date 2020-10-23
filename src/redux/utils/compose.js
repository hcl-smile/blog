function compose(...fns) {
  if (fns.length === 1) {
    return (next) => fns[0](next);
  }

  return function (fn) {
    return fns.reduce((a, b) => a(b(fn)));
  };
}

module.exports = compose;
