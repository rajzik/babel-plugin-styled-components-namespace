import { preferOuterAssignment } from './options';
/**
 * Get the name of variable that contains node
 *
 * @param {Path} path to the node
 * @param {Object} state holds opts which might be of interest
 *
 * @return {String}   The target
 */

export default t => (path, state) => {
  const prefersOuter = preferOuterAssignment(state);
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
    // UNLESS this is an AssignmentExpression and we prefer to use
    // the outermost VariableDeclarator; in that case we keep going
    // because the parent of this path might be another AssignmentExpression
    //
    // example:
    //   A = B = styled.div`color: red;`
    // here we want A, not B (which is the current path) so we continue up
    if (namedNode && (!path.isAssignmentExpression() || !prefersOuter)) {
      return true;
    }
    return false;
  });

  // foo.bar -> bar
  if (t.isMemberExpression(namedNode)) {
    namedNode = namedNode.property;
  }

  // identifiers are the only thing we can reliably get a name from
  return t.isIdentifier(namedNode) ? namedNode.name : undefined;
};
