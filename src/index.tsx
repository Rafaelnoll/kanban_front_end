import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { MyThemeProvider } from './contexts/MyThemeContext';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(
  <MyThemeProvider>
    <App />
  </MyThemeProvider>,
);
