import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import api from '../services/api';
import UserController from '../controllers/UserController';

interface IAuthenticationData {
  token: string;
  userId: string;
}

interface IUser {
  id: string;
  username: string;
  email: string;
  description?: string;
}

export interface IAutheticationContext {
  user: IUser | null;
  handleLogin: (
    authenticationData: IAuthenticationData,
    callback?: () => void,
  ) => void;
  handleUpdateUser: (user: IUser) => void;
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
});

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

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

  function handleLogin(
    authenticationData: IAuthenticationData,
    callback?: () => void,
  ) {
    if (authenticationData) {
      const { token, userId } = authenticationData;

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);

      setAuthorizationTokenInHeader(token);
      loadUserData(userId);
      Cookies.set('auth_token', token, {
        secure: true,
        sameSite: 'strict',
        expires: expirationDate,
      });
      Cookies.set('userId', userId, {
        secure: true,
        sameSite: 'strict',
        expires: expirationDate,
      });
      callback && callback();
    }
  }

  useEffect(() => {
    const token = Cookies.get('auth_token');
    const userId = Cookies.get('userId');

    if (token && userId) {
      setAuthorizationTokenInHeader(token);
      loadUserData(userId);
    }
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ user, handleLogin, handleUpdateUser }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
