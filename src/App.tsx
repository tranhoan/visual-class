import { Fragment, useEffect } from 'react';
import VirtualSpace from './components/VirtualSpace';
import { participants } from './data/users-data';
import { useParticipantsStore } from './hooks/user';
import GlobalStyle from './style/global-styles';

function App() {
  const setUsers = useParticipantsStore((state) => state.setUsers);
  useEffect(() => {
    setUsers(Object.values(participants));
  }, [setUsers]);
  return (
    <Fragment>
      <GlobalStyle />
      <VirtualSpace></VirtualSpace>
    </Fragment>
  );
}

export default App;
