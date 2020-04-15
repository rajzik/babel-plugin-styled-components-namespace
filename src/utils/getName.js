/**
 * Get the name of variable that contains node
 *
 * @param  {Path} path to the node
 *
 * @return {String}   The target
 */

export default t => path => {
  let namedNode;

  path.find(nestedPath => {
    // const X = styled
    if (nestedPath.isAssignmentExpression()) {
      namedNode = nestedPath.node.left;
      // const X = { Y: styled }
    } else if (nestedPath.isObjectProperty()) {
      namedNode = nestedPath.node.key;
      // class Y { (static) X = styled }
    } else if (nestedPath.isClassProperty()) {
      namedNode = nestedPath.node.key;
      // let X; X = styled
    } else if (nestedPath.isVariableDeclarator()) {
      namedNode = nestedPath.node.id;
    } else if (nestedPath.isStatement()) {
      // we've hit a statement, we should stop crawling up
      return true;
    }

    // we've got an displayName (if we need it) no need to continue
    if (namedNode) return true;
    return false;
  });

  // foo.bar -> bar
  if (t.isMemberExpression(namedNode)) {
    namedNode = namedNode.property;
  }

  // identifiers are the only thing we can reliably get a name from
  return t.isIdentifier(namedNode) ? namedNode.name : undefined;
};
