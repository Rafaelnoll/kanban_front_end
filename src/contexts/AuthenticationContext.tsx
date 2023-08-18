import React, { createContext, useState } from 'react';

import { IUser } from '../interfaces/User';
import userMock from '../mocks/user';

export interface IAutheticationContext {
  user: IUser | null;
  profilePhoto: string | ArrayBuffer | null | undefined;
  handleUpdateUser: (user: IUser) => void;
  handleUpdateProfilePhoto: (
    image: string | ArrayBuffer | null | undefined,
  ) => void;
}

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export const AuthenticationContext = createContext<IAutheticationContext>({
  user: null,
  profilePhoto: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleUpdateUser: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleUpdateProfilePhoto: () => {},
});

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [user, setUser] = useState<IUser | null>(userMock);
  const [profilePhoto, setProfilePhoto] = useState<
    string | ArrayBuffer | null | undefined
  >(null);

  function handleUpdateUser(user: IUser) {
    setUser(user);
  }

  function handleUpdateUserPtofilePhoto(
    image: string | ArrayBuffer | null | undefined,
  ) {
    setProfilePhoto(image);
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        profilePhoto,
        handleUpdateUser,
        handleUpdateProfilePhoto: handleUpdateUserPtofilePhoto,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
