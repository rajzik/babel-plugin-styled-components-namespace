export default function getNamespace(namespace, str) {
  if (namespace) {
    return `${namespace}__`
  }
  return ''
}
