import { Fragment } from 'react';
import GridCanvas from './components/GridCanvas';
import GlobalStyle from './style/global-styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GridCanvas></GridCanvas>
    </Fragment>
  );
}

export default App;
