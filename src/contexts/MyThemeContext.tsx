import React, { createContext } from 'react';

import { useLocalState } from '../hooks/useLocalState';
import { ITheme } from '../interfaces/Theme';

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
  const [theme, setTheme] = useLocalState<ITheme>('@kanban_theme', 'light');

  function handleChangeTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <MyThemeContext.Provider
      value={{ currentTheme: theme, changeTheme: handleChangeTheme }}
    >
      {children}
    </MyThemeContext.Provider>
  );
}
