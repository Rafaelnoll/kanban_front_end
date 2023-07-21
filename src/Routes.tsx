import React from 'react';

import { BrowserRouter, Routes as RDRoutes, Route } from 'react-router-dom';
import ManegeCategories from './pages/ManageCategories';
import LoginPage from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Page404 from './pages/Page404';
import UserProfilePage from './pages/UserProfilePage';
import KanbanPage from './pages/KanbanPage';
import useAuthentication from './hooks/useAuthentication';
import UserSettingsPage from './pages/UserSettingsPage';

function Routes() {
  const { user } = useAuthentication();

  return (
    <BrowserRouter>
      <RDRoutes>
        {user && (
          <>
            <Route path="/dashboard" element={<KanbanPage />} />
            <Route path="/categories" element={<ManegeCategories />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/settings" element={<UserSettingsPage />} />
          </>
        )}

        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="*" element={<Page404 />} />
      </RDRoutes>
    </BrowserRouter>
  );
}

export default Routes;
