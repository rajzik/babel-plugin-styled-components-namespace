import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: "code__Test",
  componentId: "test-namespace__sc-1ewbgri-0"
})(["color:red;"]);
const before = styled.div.withConfig({
  displayName: "code__before",
  componentId: "test-namespace__sc-1ewbgri-1"
})(["color:blue;"]);
styled.div.withConfig({
  displayName: "code",
  componentId: "test-namespace__sc-1ewbgri-2"
})([""]);
export default styled.button.withConfig({
  displayName: "code",
  componentId: "test-namespace__sc-1ewbgri-3"
})([""]);
