// 按需加载
module.exports = function ({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path, ref) {
        const specifiers = path.node.specifiers;
        const source = path.node.source;

        if (
          ref.opts.library === source.value &&
          !t.isImportDefaultSpecifier(specifiers[0])
        ) {
          const declarations = specifiers.map((specifier) => {
            return t.ImportDeclaration(
              [t.importDefaultSpecifier(specifier.local)],
              t.StringLiteral(`${source.value}/${specifier.local.name}`)
            );
          });

          path.replaceWithMultiple(declarations);
        }
      },
    },
  };
};
