import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './Routes';
import { AuthenticationProvider } from './contexts/AuthenticationContext';
import useMyTheme from './hooks/useMyTheme';

function App() {
  const { currentTheme } = useMyTheme();

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyles />
      <AuthenticationProvider>
        <Routes />
      </AuthenticationProvider>
      <ToastContainer position="bottom-center" limit={3} />
    </ThemeProvider>
  );
}

export default App;
