import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: "Test",
  componentId: "sc-sj0ras-0"
})`width:100%;`;
const Test2 = true ? styled.div.withConfig({
  displayName: "Test2",
  componentId: "sc-sj0ras-1"
})`` : styled.div.withConfig({
  displayName: "Test2",
  componentId: "sc-sj0ras-2"
})``;
const styles = {
  One: styled.div.withConfig({
    displayName: "One",
    componentId: "sc-sj0ras-3"
  })``
};
let Component;
Component = styled.div.withConfig({
  displayName: "Component",
  componentId: "sc-sj0ras-4"
})``;
const WrappedComponent = styled(Inner).withConfig({
  displayName: "WrappedComponent",
  componentId: "sc-sj0ras-5"
})``;
const WrappedComponent2 = styled.div.withConfig({
  displayName: "WrappedComponent2",
  componentId: "sc-sj0ras-6"
})({});
const WrappedComponent3 = styled(Inner).withConfig({
  displayName: "WrappedComponent3",
  componentId: "sc-sj0ras-7"
})({});
const WrappedComponent4 = styled(Inner).attrs(() => ({
  something: 'else'
})).withConfig({
  displayName: "WrappedComponent4",
  componentId: "sc-sj0ras-8"
})({});
const WrappedComponent5 = styled.div.attrs(() => ({
  something: 'else'
})).withConfig({
  displayName: "WrappedComponent5",
  componentId: "sc-sj0ras-9"
})({});
const WrappedComponent6 = styled.div.attrs(() => ({
  something: 'else'
})).withConfig({
  displayName: "WrappedComponent6",
  componentId: "sc-sj0ras-10"
})``;
