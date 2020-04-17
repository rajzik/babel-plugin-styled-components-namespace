import s from 'styled-components';
const Test = s.div.withConfig({
  displayName: "Test",
  componentId: "sc-ujtxk1-0"
})`width:100%;`;
const Test2 = true ? s.div.withConfig({
  displayName: "Test2",
  componentId: "sc-ujtxk1-1"
})`` : s.div.withConfig({
  displayName: "Test2",
  componentId: "sc-ujtxk1-2"
})``;
const styles = {
  One: s.div.withConfig({
    displayName: "One",
    componentId: "sc-ujtxk1-3"
  })``
};
let Component;
Component = s.div.withConfig({
  displayName: "Component",
  componentId: "sc-ujtxk1-4"
})``;
const WrappedComponent = s(Inner).withConfig({
  displayName: "WrappedComponent",
  componentId: "sc-ujtxk1-5"
})``;
