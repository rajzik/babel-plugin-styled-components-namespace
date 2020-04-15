import s from 'styled-components';
const Test = s.div.withConfig({
  displayName: "Test",
  componentId: "sc-xwwp7o-0"
})`width:100%;`;
const Test2 = true ? s.div.withConfig({
  displayName: "Test2",
  componentId: "sc-xwwp7o-1"
})`` : s.div.withConfig({
  displayName: "Test2",
  componentId: "sc-xwwp7o-2"
})``;
const styles = {
  One: s.div.withConfig({
    displayName: "One",
    componentId: "sc-xwwp7o-3"
  })``
};
let Component;
Component = s.div.withConfig({
  displayName: "Component",
  componentId: "sc-xwwp7o-4"
})``;
const WrappedComponent = s(Inner).withConfig({
  displayName: "WrappedComponent",
  componentId: "sc-xwwp7o-5"
})``;
