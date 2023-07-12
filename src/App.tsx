import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './Routes';
import { AuthenticationProvider } from './contexts/AuthenticationProvider';

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthenticationProvider>
        <Routes />
      </AuthenticationProvider>
      <ToastContainer position="bottom-center" limit={3} />
    </>
  );
}

export default App;
