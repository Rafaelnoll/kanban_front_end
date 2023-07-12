import React, { createContext, useState } from 'react';

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

  function handleLogin(token: string, callback?: () => void) {
    setAuthenticated(true);
    callback && callback();
  }

  return (
    <AuthenticationContext.Provider value={{ authenticated, handleLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
