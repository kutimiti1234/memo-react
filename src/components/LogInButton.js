import { useContext } from 'react';
import { LogInContext } from '../context/LogInContext';

export function LogInButton() {
  const logInContext = useContext(LogInContext);

  return (
    <button onClick={() => logInContext.onLogIn()}>
      {logInContext.isLoggedIn === true ? 'ログアウト' : 'ログイン'}
    </button>
  );
}
