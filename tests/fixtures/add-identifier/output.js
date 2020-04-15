import styled from 'styled-components';
const Test = styled.div.withConfig({
  componentId: "sc-fvjju4-0"
})`width:100%;`;
const Test2 = true ? styled.div.withConfig({
  componentId: "sc-fvjju4-1"
})`` : styled.div.withConfig({
  componentId: "sc-fvjju4-2"
})``;
const styles = {
  One: styled.div.withConfig({
    componentId: "sc-fvjju4-3"
  })``
};
let Component;
Component = styled.div.withConfig({
  componentId: "sc-fvjju4-4"
})``;
const WrappedComponent = styled(Inner).withConfig({
  componentId: "sc-fvjju4-5"
})``;
