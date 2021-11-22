import React, { useEffect } from 'react';
import { useLogin } from './hooks/login';
import { useUserStore } from './hooks/user';
import LoggedApp from './LoggedApp';
import Login from './pages/Login';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useUserStore((state) => [
    state.isLoggedIn,
    state.setIsLoggedIn,
  ]);
  const [, getLocalStorageLogin] = useLogin();
  useEffect(() => {
    setIsLoggedIn(getLocalStorageLogin());
  }, [getLocalStorageLogin, setIsLoggedIn]);
  return isLoggedIn ? <LoggedApp /> : <Login />;
};
export default App;
