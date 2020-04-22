import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: "Test"
})`width:100%;`;
const Test2 = styled('div').withConfig({
  displayName: "Test2"
})``;
const Test3 = true ? styled.div.withConfig({
  displayName: "Test3"
})`` : styled.div.withConfig({
  displayName: "Test3"
})``;
const styles = {
  One: styled.div.withConfig({
    displayName: "One"
  })``
};
const doubleStyles = {
  One: Discarded = styled.div.withConfig({
    displayName: "Discarded"
  })``
};
let Component;
Component = styled.div.withConfig({
  displayName: "Component"
})``;
const WrappedComponent = styled(Inner).withConfig({
  displayName: "WrappedComponent"
})``;

class ClassComponent {}

ClassComponent.Child = styled.div.withConfig({
  displayName: "Child"
})``;

class DoubleClassComponent {}

DoubleClassComponent.DoubleChild = Discarded = styled.div.withConfig({
  displayName: "Discarded"
})``;
const DoubleAssignment = Discarded = styled.div.withConfig({
  displayName: "Discarded"
})`width:50%;`;
