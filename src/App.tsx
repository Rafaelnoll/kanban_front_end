import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer position="bottom-center" />
      </BaseTemplate>
    </>
  );
}

export default App;
