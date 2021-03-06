import pathModule from 'path';
import fs from 'fs';
import { useFileName, useDisplayName, useSSR, useNamespace } from '../utils/options';
import getName from '../utils/getName';
import getNamespace from '../utils/getNamespace';
import hash from '../utils/hash';
import { isStyled } from '../utils/detectors';

const addConfig = t => (path, displayName, componentId) => {
  if (!displayName && !componentId) {
    return;
  }

  const withConfigProps = [];
  if (displayName) {
    withConfigProps.push(
      t.objectProperty(t.identifier('displayName'), t.stringLiteral(displayName)),
    );
  }
  if (componentId) {
    withConfigProps.push(
      t.objectProperty(t.identifier('componentId'), t.stringLiteral(componentId)),
    );
  }

  if (path.node.tag) {
    // Replace x`...` with x.withConfig({ })`...`
    // eslint-disable-next-line no-param-reassign
    path.node.tag = t.callExpression(
      t.memberExpression(path.node.tag, t.identifier('withConfig')),
      [t.objectExpression(withConfigProps)],
    );
  } else {
    path.replaceWith(
      t.callExpression(
        t.callExpression(t.memberExpression(path.node.callee, t.identifier('withConfig')), [
          t.objectExpression(withConfigProps),
        ]),
        path.node.arguments,
      ),
    );
  }
};

const getBlockName = file => {
  const name = pathModule.basename(file.opts.filename, pathModule.extname(file.opts.filename));
  return name === 'index' ? pathModule.basename(pathModule.dirname(file.opts.filename)) : name;
};

const getDisplayName = t => (path, state) => {
  const { file } = state;
  const componentName = getName(t)(path);
  if (file) {
    const blockName = getBlockName(file);
    if (blockName === componentName) {
      return componentName;
    }
    return componentName ? `${blockName}__${componentName}` : blockName;
  }
  return componentName;
};

const findModuleRoot = filename => {
  if (!filename) {
    return null;
  }
  const dir = pathModule.dirname(filename);
  if (fs.existsSync(pathModule.join(dir, 'package.json'))) {
    return dir;
  }
  if (dir !== filename) {
    return findModuleRoot(dir);
  }
  return null;
};

const FILE_HASH = 'styled-components-file-hash';
const COMPONENT_POSITION = 'styled-components-component-position';
const separatorRegExp = new RegExp(`\\${pathModule.sep}`, 'g');

const getFileHash = state => {
  const { file } = state;
  // hash calculation is costly due to fs operations, so we'll cache it per file.
  if (file.get(FILE_HASH)) {
    return file.get(FILE_HASH);
  }
  const { filename } = file.opts;
  // find module root directory
  const moduleRoot = findModuleRoot(filename);
  const filePath =
    moduleRoot && pathModule.relative(moduleRoot, filename).replace(separatorRegExp, '/');
  const moduleName =
    moduleRoot && JSON.parse(fs.readFileSync(pathModule.join(moduleRoot, 'package.json'))).name;
  const { code } = file;

  const stuffToHash = [moduleName];

  if (filePath) {
    stuffToHash.push(filePath);
  } else {
    stuffToHash.push(code);
  }

  const fileHash = hash(stuffToHash.join(''));
  file.set(FILE_HASH, fileHash);
  return fileHash;
};

const getNextId = state => {
  const id = state.file.get(COMPONENT_POSITION) || 0;
  state.file.set(COMPONENT_POSITION, id + 1);
  return id;
};

const getComponentId = state => {
  // Prefix the identifier with a character because CSS classes cannot start with a number
  return `${getNamespace(useNamespace(state))}sc-${getFileHash(state)}-${getNextId(state)}`;
};

export default t => (path, state) => {
  if (
    path.node.tag
      ? isStyled(t)(path.node.tag, state)
      : /* styled()`` */ (isStyled(t)(path.node.callee, state) &&
          path.node.callee.property &&
          path.node.callee.property.name !== 'withConfig') ||
        // styled(x)({})
        (isStyled(t)(path.node.callee, state) && !t.isMemberExpression(path.node.callee.callee)) ||
        // styled(x).attrs()({})
        (isStyled(t)(path.node.callee, state) &&
          t.isMemberExpression(path.node.callee.callee) &&
          path.node.callee.callee.property &&
          path.node.callee.callee.property.name &&
          path.node.callee.callee.property.name !== 'withConfig')
  ) {
    const displayName =
      useDisplayName(state) && getDisplayName(t)(path, useFileName(state) && state);

    addConfig(t)(
      path,
      displayName && displayName.replace(/[^_a-zA-Z0-9-]/g, ''),
      useSSR(state) && getComponentId(state),
    );
  }
};
