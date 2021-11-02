import { Fragment } from 'react';
import Canvas from './components/Canvas';
import GlobalStyle from './style/global-styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Canvas />
    </Fragment>
  );
}

export default App;
