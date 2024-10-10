import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const ProtectedRoute = () => {
  console.log('___test');
  const authContext = useContext(AuthContext);
  return authContext.user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
