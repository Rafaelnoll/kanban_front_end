import React from 'react';
import { BrowserRouter, Routes as RDRoutes, Route } from 'react-router-dom';

import ManegeCategories from './pages/ManageCategories';
import Page404 from './pages/Page404';
import UserProfilePage from './pages/UserProfilePage';
import KanbanPage from './pages/KanbanPage';
import UserSettingsPage from './pages/UserSettingsPage';

function Routes() {
  return (
    <BrowserRouter>
      <RDRoutes>
        <Route path="/" element={<KanbanPage />} />
        <Route path="/dashboard" element={<KanbanPage />} />
        <Route path="/categories" element={<ManegeCategories />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/settings" element={<UserSettingsPage />} />
        <Route path="*" element={<Page404 />} />
      </RDRoutes>
    </BrowserRouter>
  );
}

export default Routes;
