import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import api from '../services/api';

export interface IAutheticationContext {
  authenticated: boolean;
  handleLogin: (token: string, callback?: () => void) => void;
}

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export const AuthenticationContext = createContext<IAutheticationContext>({
  authenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogin: () => {},
});

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);

  function setAuthorizationTokenInHeader(token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  function handleLogin(token: string, callback?: () => void) {
    if (token) {
      setAuthenticated(true);
      Cookies.set('auth_token', token, { secure: true, sameSite: 'strict' });
      setAuthorizationTokenInHeader(token);
      callback && callback();
    }
  }

  useEffect(() => {
    const token = Cookies.get('auth_token');

    if (token) {
      setAuthorizationTokenInHeader(token);
      setAuthenticated(true);
    }
  }, []);

  return (
    <AuthenticationContext.Provider value={{ authenticated, handleLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
