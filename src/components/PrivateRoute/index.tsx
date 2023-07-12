import React from 'react';
import { Route, redirect } from 'react-router-dom';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
  isAuthenticated: boolean;
}

function PrivateRoute({
  element: Component,
  isAuthenticated,
  path,
}: PrivateRouteProps) {
  if (!isAuthenticated) {
    return redirect('/login');
  }

  return <Route path={path} element={Component} />;
}

export default PrivateRoute;
