import { Fragment } from 'react';
import VirtualSpace from './components/VirtualSpace';
import GlobalStyle from './style/global-styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <VirtualSpace></VirtualSpace>
    </Fragment>
  );
}

export default App;
