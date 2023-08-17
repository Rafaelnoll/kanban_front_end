import React, { createContext, useState } from 'react';

import { IUser } from '../interfaces/User';
import userMock from '../mocks/user';

export interface IAutheticationContext {
  user: IUser | null;
  handleUpdateUser: (user: IUser) => void;
}

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export const AuthenticationContext = createContext<IAutheticationContext>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleUpdateUser: () => {},
});

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [user, setUser] = useState<IUser | null>(userMock);

  function handleUpdateUser(user: IUser) {
    setUser(user);
  }

  return (
    <AuthenticationContext.Provider value={{ user, handleUpdateUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
