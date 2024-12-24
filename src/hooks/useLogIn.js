import PropTypes from 'prop-types';
import { useContext, useState, createContext } from 'react';

const LogInContext = createContext(null);

export const LogInProvider = ({ children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  function onLogIn() {
    setIsloggedIn(!isLoggedIn);
  }

  return (
    <LogInContext.Provider value={{ isLoggedIn, onLogIn }}>
      {children}
    </LogInContext.Provider>
  );
};

export const useLogIn = () => useContext(LogInContext);

LogInProvider.propTypes = {
  children: PropTypes.object,
};
