import { useContext } from 'react';
import { MyThemeContext } from '../contexts/MyThemeContext';

function useMyTheme() {
  const contextMyTheme = useContext(MyThemeContext);

  if (!contextMyTheme) {
    throw new Error('"useMyTheme" must be inside of a MyThemeProvider');
  }

  return contextMyTheme;
}

export default useMyTheme;
