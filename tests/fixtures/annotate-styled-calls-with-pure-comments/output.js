import styled from 'styled-components'
const Test = /*#__PURE__*/ styled.div.withConfig({
  displayName: 'code__Test',
  componentId: 'sc-1m1hrqc-0',
})(['width:100%;'])
const Test2 = /*#__PURE__*/ styled('div').withConfig({
  displayName: 'code__Test2',
  componentId: 'sc-1m1hrqc-1',
})([''])
const Test3 = true
  ? styled.div.withConfig({
      displayName: 'code__Test3',
      componentId: 'sc-1m1hrqc-2',
    })([''])
  : styled.div.withConfig({
      displayName: 'code__Test3',
      componentId: 'sc-1m1hrqc-3',
    })([''])
const styles = {
  One: styled.div.withConfig({
    displayName: 'code__One',
    componentId: 'sc-1m1hrqc-4',
  })(['']),
}
let Component
Component = styled.div.withConfig({
  displayName: 'code__Component',
  componentId: 'sc-1m1hrqc-5',
})([''])
const WrappedComponent = /*#__PURE__*/ styled(Inner).withConfig({
  displayName: 'code__WrappedComponent',
  componentId: 'sc-1m1hrqc-6',
})([''])
const StyledObjectForm = /*#__PURE__*/ styled.div.withConfig({
  displayName: 'code__StyledObjectForm',
  componentId: 'sc-1m1hrqc-7',
})({
  color: red,
})
const StyledFunctionForm = /*#__PURE__*/ styled.div.withConfig({
  displayName: 'code__StyledFunctionForm',
  componentId: 'sc-1m1hrqc-8',
})(p => ({
  color: p.color || 'red',
}))
const normalFunc = add(5, 3)
