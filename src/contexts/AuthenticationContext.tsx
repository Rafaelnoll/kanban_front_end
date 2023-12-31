import React, { createContext, useEffect, useState } from 'react';

import api from '../services/api';
import UserController from '../controllers/UserController';
import { IUser } from '../interfaces/User';
import { useSessionState } from '../hooks/useSessionState';
interface IAuthenticationData {
  token: string;
  userId: string;
}

export interface IAutheticationContext {
  user: IUser | null;
  handleLogin: (authenticationData: IAuthenticationData) => void;
  handleUpdateUser: (user: IUser) => void;
  handleLogout: () => void;
}

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export const AuthenticationContext = createContext<IAutheticationContext>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogin: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleUpdateUser: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogout: () => {},
});

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [userAuthToken, setUserAuthToken] = useSessionState<string | null>(
    '@auth_token',
    null,
  );
  const [userId, setUserId] = useSessionState<string | null>('@user_id', null);

  function setAuthorizationTokenInHeader(token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  function handleUpdateUser(user: IUser) {
    setUser(user);
  }

  async function loadUserData(id: string) {
    const userData = await UserController.getUserInfosById(id);
    setUser({
      id,
      ...userData,
    });
  }

  function handleLogin(authenticationData: IAuthenticationData) {
    if (authenticationData) {
      const { token, userId } = authenticationData;

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);

      setAuthorizationTokenInHeader(token);
      loadUserData(userId);
      setUserAuthToken(token);
      setUserId(userId);
    }
  }

  function handleLogout() {
    setUserAuthToken(null);
    setUserId(null);
    setUser(null);
  }

  useEffect(() => {
    if (userAuthToken && userId) {
      setAuthorizationTokenInHeader(userAuthToken);
      loadUserData(userId);
    }
  }, [userAuthToken, userId]);

  return (
    <AuthenticationContext.Provider
      value={{ user, handleLogin, handleUpdateUser, handleLogout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
