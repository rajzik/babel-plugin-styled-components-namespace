import styled from 'styled-components';
const Test = styled.div.withConfig({
  componentId: "sc-m5gp8l-0"
})`width:100%;`;
const Test2 = true ? styled.div.withConfig({
  componentId: "sc-m5gp8l-1"
})`` : styled.div.withConfig({
  componentId: "sc-m5gp8l-2"
})``;
const styles = {
  One: styled.div.withConfig({
    componentId: "sc-m5gp8l-3"
  })``
};
let Component;
Component = styled.div.withConfig({
  componentId: "sc-m5gp8l-4"
})``;
const WrappedComponent = styled(Inner).withConfig({
  componentId: "sc-m5gp8l-5"
})``;
