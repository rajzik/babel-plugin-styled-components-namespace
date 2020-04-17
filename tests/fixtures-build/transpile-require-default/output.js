const styled_default = require('styled-components');

const TestNormal = styled.div.withConfig({
  displayName: 'code__TestNormal',
  componentId: 'sc-17m1ty6-0',
})(['width:100%;']);
const Test = styled_default.default.div.withConfig({
  displayName: 'code__Test',
  componentId: 'sc-17m1ty6-1',
})(['width:100%;']);
const TestCallExpression = styled_default.default(Test).withConfig({
  displayName: 'code__TestCallExpression',
  componentId: 'sc-17m1ty6-2',
})(['height:20px;']);
