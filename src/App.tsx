import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import BaseTemplate from './components/BaseTemplate';
import SideMenu from './components/SideMenu';
import KanbanPage from './pages/KanbanPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <BaseTemplate>
        <SideMenu />
        <KanbanPage />
      </BaseTemplate>
    </>
  );
}

export default App;
