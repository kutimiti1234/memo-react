import { useLogIn } from '../hooks/useLogIn';

export function LogInButton() {
  const { isLoggedIn, onLogIn } = useLogIn();

  return (
    <button onClick={() => onLogIn()}>
      {isLoggedIn ? 'ログアウト' : 'ログイン'}
    </button>
  );
}
