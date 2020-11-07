# Babel types

## Api

### anyTypeAnnotation

#### 任意类型

```javascript
function ({ types: t }) {
  return {
    visitor: {
      // 插件调用
      AnyTypeAnnotation(path, options) {
        // babel调用
        t.anyTypeAnnotation(path, options);
        console.log(path, "anyTypeAnnotation");
      },
    },
  };
};
```

### arrayExpression

#### 数组表达式

**t.arrayExpression(elements)**

> elements: Array<null | Expression | SpreadElement> (default: [])

```javascript
function ({ types: t }) {
  return {
    visitor: {
      // 插件调用
      ArrayExpression(path, options) {
        /*
         * 测试用例
         * 改变原数组的每一项，每一项在原来的基础上乘于3
         */
        const elements = path.node.elements.map(element => {
            element.value *=3
            return element
        })

        // 替换原来的数组节点
        t.ArrayExpression(elements);
      },
    },
  };
};
```

### argumentPlaceholder

### arrayPattern

### arrayTypeAnnotation

### arrowFunctionExpression

### assignmentExpression

### assignmentPattern

### awaitExpression

### bigIntLiteral

### binaryExpression

### bindExpression

### blockStatement

### booleanLiteral

### booleanLiteralTypeAnnotation

### booleanTypeAnnotation

### breakStatement

### callExpression

### catchClause

### classBody

### classDeclaration

### classExpression

### classImplements

### classMethod

### classPrivateProperty

### classProperty

### conditionalExpression

### continueStatement

### debuggerStatement

### declareClass

### declareExportAllDeclaration

### declareExportDeclaration

### declareFunction

### declareInterface

### declareModule

### declareModuleExports

### declareOpaqueType

### declareTypeAlias

### declareVariable

### declaredPredicate

### decorator

### directive

### directiveLiteral

### doExpression

### doWhileStatement

### emptyStatement

### emptyTypeAnnotation

### existsTypeAnnotation

### exportAllDeclaration

### exportDefaultDeclaration

### exportDefaultSpecifier

### exportNamedDeclaration

### exportNamespaceSpecifier

### exportSpecifier

### expressionStatement

### file

### forInStatement

### forOfStatement

### forStatement

### functionDeclaration

### functionExpression

### functionTypeAnnotation

### functionTypeParam

### genericTypeAnnotation

### identifier

### ifStatement

### import

### importDeclaration

### importDefaultSpecifier

### importNamespaceSpecifier

### importSpecifier

### inferredPredicate

### interfaceDeclaration

### interfaceExtends

### interfaceTypeAnnotation

### interpreterDirective

### intersectionTypeAnnotation

### jsxAttribute

### jsxClosingElement

### jsxClosingFragment

### jsxElement

### jsxEmptyExpression

### jsxExpressionContainer

### jsxFragment

### jsxIdentifier

### jsxMemberExpression

### jsxNamespacedName

### jsxOpeningElement

### jsxOpeningFragment

### jsxSpreadAttribute

### jsxSpreadChild

### jsxText

### labeledStatement

### logicalExpression

### memberExpression

### metaProperty

### mixedTypeAnnotation

### newExpression

### noop

### nullLiteral

### nullLiteralTypeAnnotation

### nullableTypeAnnotation

### numberLiteralTypeAnnotation

### numberTypeAnnotation

### numericLiteral

### objectExpression

### objectMethod

### objectPattern

### objectProperty

### objectTypeAnnotation

### objectTypeCallProperty

### objectTypeIndexer

### objectTypeInternalSlot

### objectTypeProperty

### objectTypeSpreadProperty

### opaqueType

### optionalCallExpression

### parenthesizedExpression

### privateName

### program

### qualifiedTypeIdentifier

### regExpLiteral

### restElement

### returnStatement

### sequenceExpression

### spreadElement

### stringLiteral

### stringLiteralTypeAnnotation

### stringTypeAnnotation

### super

### switchCase

### switchStatement

### tsAnyKeyword

### tsArrayType

### tsAsExpression

### tsBooleanKeyword

### tsCallSignatureDeclaration

### tsConditionalType

### tsConstructSignatureDeclaration

### tsConstructorType

### tsDeclareFunction

### tsDeclareMethod

### tsEnumDeclaration

### tsEnumMember

### tsExportAssignment

### tsExpressionWithTypeArguments

### tsExternalModuleReference

### tsFunctionType

### tsImportEqualsDeclaration

### tsIndexSignature

### tsIndexedAccessType

### tsInferType

### tsInterfaceBody

### tsInterfaceDeclaration

### tsIntersectionType

### tsLiteralType

### tsMappedType

### tsMethodSignature

### tsModuleBlock

### tsModuleDeclaration

### tsNamespaceExportDeclaration

### tsNeverKeyword

### tsNonNullExpression

### tsNullKeyword

### tsNumberKeyword

### tsObjectKeyword

### tsParameterProperty

### tsParenthesizedType

### tsPropertySignature

### tsQualifiedName

### tsStringKeyword

### tsSymbolKeyword

### tsThisType

### tsTupleType

### tsTypeAliasDeclaration

### tsTypeAnnotation

### tsTypeAssertion

### tsTypeLiteral

### tsTypeOperator

### tsTypeParameter

### tsTypeParameterDeclaration

### tsTypeParameterInstantiation

### tsTypePredicate

### tsTypeQuery

### tsTypeReference

### tsUndefinedKeyword

### tsUnionType

### tsUnknownType

### tsVoidKeyword

### taggedTemplateExpression

### templateElement

### templateLiteral

### thisExpression

### thisTypeAnnotation

### throwStatement

### tryStatement

### tupleTypeAnnotation

### typeAlias

### typeAnnotation

### typeCastExpression

### typeParameter

### typeParameterDeclaration

### typeParameterInstantiation

### typeofTypeAnnotation

### unaryExpression

### unionTypeAnnotation

### updateExpression

### variableDeclaration

### variableDeclarator

### variance

### voidTypeAnnotation

### whileStatement

### withStatement

### yieldExpression

###
