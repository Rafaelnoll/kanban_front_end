import React, { createContext, useState } from 'react';

type Theme = 'dark' | 'light';

export interface IMyThemeProvider {
  currentTheme: Theme;
  changeTheme: () => void;
}

interface IChildren {
  children: React.ReactNode;
}

export const MyThemeContext = createContext<IMyThemeProvider>({
  currentTheme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeTheme: () => {},
});

export function MyThemeProvider({ children }: IChildren) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  function handleChangeTheme() {
    setCurrentTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <MyThemeContext.Provider
      value={{ currentTheme, changeTheme: handleChangeTheme }}
    >
      {children}
    </MyThemeContext.Provider>
  );
}
