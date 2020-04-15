export default function getNamespace(namespace) {
  if (namespace) {
    return `${namespace}__`
  }
  return ''
}
