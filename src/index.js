import syntax from 'babel-plugin-syntax-jsx';
import pureAnnotation from './visitors/pure';
import minify from './visitors/minify';
import displayNameAndId from './visitors/displayNameAndId';
import templateLiterals from './visitors/templateLiterals';
import assignStyledRequired from './visitors/assignStyledRequired';
import transpileCssProp from './visitors/transpileCssProp';

export default function({ types: t }) {
  return {
    inherits: syntax,
    visitor: {
      Program(path, state) {
        path.traverse(
          {
            JSXAttribute(nestedPath, nestedState) {
              transpileCssProp(t)(nestedPath, nestedState);
            },
            VariableDeclarator(nestedPath, nestedState) {
              assignStyledRequired(t)(nestedPath, nestedState);
            },
          },
          state,
        );
      },
      CallExpression(path, state) {
        displayNameAndId(t)(path, state);
        pureAnnotation(t)(path, state);
      },
      TaggedTemplateExpression(path, state) {
        minify(t)(path, state);
        displayNameAndId(t)(path, state);
        templateLiterals(t)(path, state);
        pureAnnotation(t)(path, state);
      },
    },
  };
}
