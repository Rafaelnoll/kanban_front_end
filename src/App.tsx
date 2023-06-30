import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/GlobalStyles';
import BaseTemplate from './components/BaseTemplate';
import SideMenu from './components/SideMenu';
import KanbanPage from './pages/KanbanPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManegeCategories from './pages/ManageCategories';

function App() {
  return (
    <>
      <GlobalStyles />
      <BaseTemplate>
        <BrowserRouter>
          <SideMenu />
          <Routes>
            <Route path="/" element={<KanbanPage />} />
            <Route path="/categories" element={<ManegeCategories />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer position="bottom-center" />
      </BaseTemplate>
    </>
  );
}

export default App;
