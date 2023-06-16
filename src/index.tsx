import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import App from './App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
