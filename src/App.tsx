import React from 'react';
import { useUserStore } from './hooks/user';
import LoggedApp from './LoggedApp';
import Login from './pages/Login';

const App: React.FC = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  return isLoggedIn ? <LoggedApp /> : <Login />;
};
export default App;
