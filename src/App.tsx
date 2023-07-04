import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/GlobalStyles';
import KanbanPage from './pages/KanbanPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManegeCategories from './pages/ManageCategories';
import LoginPage from './pages/Login';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KanbanPage />} />
          <Route path="/categories" element={<ManegeCategories />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
