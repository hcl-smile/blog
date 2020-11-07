module.exports = function ({ types: t }) {
  return {
    visitor: {
      FunctionDeclaration(path, options) {
        const { node } = path;

        console.log(node, "node path");
        node.params.forEach((param) => param.name);

        // t.functionDeclaration(node.id, node.params, node.body);
      },
    },
  };
};
