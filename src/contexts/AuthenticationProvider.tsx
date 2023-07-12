import React, { createContext, useState } from 'react';

type Token = string | null;

interface IAutheticationContext {
  token: Token;
  handleLogin: (token: string) => void;
}

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export const AuthenticationContext = createContext<IAutheticationContext>({
  token: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogin: () => {},
});

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [token, setToken] = useState<Token>(null);

  function handleLogin(token: string) {
    setToken(token);
  }

  return (
    <AuthenticationContext.Provider value={{ token, handleLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
