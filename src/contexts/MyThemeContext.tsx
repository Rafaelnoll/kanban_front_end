import React, { createContext, useEffect, useState } from 'react';

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

  function setThemeInLocalStorage(theme: Theme) {
    localStorage.setItem('@kanban_theme', theme);
  }

  function getThemeInLocalStorage() {
    return localStorage.getItem('@kanban_theme') as Theme | null;
  }

  function handleChangeTheme() {
    setCurrentTheme((prevState) => {
      const newTheme = prevState === 'dark' ? 'light' : 'dark';
      setThemeInLocalStorage(newTheme);
      return newTheme;
    });
  }

  useEffect(() => {
    const themeInLocalStorage = getThemeInLocalStorage();

    if (themeInLocalStorage) {
      setCurrentTheme(themeInLocalStorage);
      return;
    }
  }, []);

  return (
    <MyThemeContext.Provider
      value={{ currentTheme, changeTheme: handleChangeTheme }}
    >
      {children}
    </MyThemeContext.Provider>
  );
}
