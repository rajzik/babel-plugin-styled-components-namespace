import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: 'Test',
  componentId: 'sc-i6lzjw-0',
})`
  width: 100%;
`;
const Test2 = true
  ? styled.div.withConfig({
      displayName: 'Test2',
      componentId: 'sc-i6lzjw-1',
    })``
  : styled.div.withConfig({
      displayName: 'Test2',
      componentId: 'sc-i6lzjw-2',
    })``;
const styles = {
  One: styled.div.withConfig({
    displayName: 'One',
    componentId: 'sc-i6lzjw-3',
  })``,
};
let Component;
Component = styled.div.withConfig({
  displayName: 'Component',
  componentId: 'sc-i6lzjw-4',
})``;
const WrappedComponent = styled(Inner).withConfig({
  displayName: 'WrappedComponent',
  componentId: 'sc-i6lzjw-5',
})``;
const WrappedComponent2 = styled.div.withConfig({
  displayName: 'WrappedComponent2',
  componentId: 'sc-i6lzjw-6',
})({});
const WrappedComponent3 = styled(Inner).withConfig({
  displayName: 'WrappedComponent3',
  componentId: 'sc-i6lzjw-7',
})({});
const WrappedComponent4 = styled(Inner)
  .attrs(() => ({
    something: 'else',
  }))
  .withConfig({
    displayName: 'WrappedComponent4',
    componentId: 'sc-i6lzjw-8',
  })({});
const WrappedComponent5 = styled.div
  .attrs(() => ({
    something: 'else',
  }))
  .withConfig({
    displayName: 'WrappedComponent5',
    componentId: 'sc-i6lzjw-9',
  })({});
const WrappedComponent6 = styled.div
  .attrs(() => ({
    something: 'else',
  }))
  .withConfig({
    displayName: 'WrappedComponent6',
    componentId: 'sc-i6lzjw-10',
  })``;
