import { useContext } from 'react';
import { LogInContext } from '../context/LogInContext';

export const useLogIn = () => useContext(LogInContext);
