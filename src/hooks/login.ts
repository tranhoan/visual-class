export const useLogin = (): [
  setLogin: (isLoggedIn: boolean) => void,
  getLogin: () => boolean
] => {
  const setLoginLocalStorage = (isLoggedIn: boolean) => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  };
  const getLoginLocalStorage = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };

  return [setLoginLocalStorage, getLoginLocalStorage];
};
