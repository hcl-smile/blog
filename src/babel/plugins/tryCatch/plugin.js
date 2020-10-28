module.exports = function ({ types: t }) {
  return {
    visitor: {
      NewExpression(path, ref) {
        console.log(path, "module");
      },
    },
  };
};
