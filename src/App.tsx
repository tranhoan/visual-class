import React, { useEffect } from 'react';
import { useLogin } from './hooks/login';
import { useUserStore } from './hooks/user';
import LoggedApp from './LoggedApp';
import Login from './pages/Login';

const App: React.FC = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const [setLocalLoggedIn] = useLogin();
  useEffect(() => {
    setLocalLoggedIn(isLoggedIn);
  }, [isLoggedIn, setLocalLoggedIn]);

  return isLoggedIn ? <LoggedApp /> : <Login />;
};
export default App;
