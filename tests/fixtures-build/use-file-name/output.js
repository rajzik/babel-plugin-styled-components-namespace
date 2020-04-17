import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: "code__Test",
  componentId: "sc-aii69q-0"
})`color:red;`;
const before = styled.div.withConfig({
  displayName: "code__before",
  componentId: "sc-aii69q-1"
})`color:blue;`;
styled.div.withConfig({
  displayName: "code",
  componentId: "sc-aii69q-2"
})``;
export default styled.button.withConfig({
  displayName: "code",
  componentId: "sc-aii69q-3"
})``;
