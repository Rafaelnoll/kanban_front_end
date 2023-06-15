import React from 'react';
import reactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import App from './App';

reactDom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
