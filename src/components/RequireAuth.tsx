import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../app/store';

const RequireAuth: React.FC = () => {
  const auth = useTypedSelector((state) => state.auth);
  const location = useLocation();
  console.log(auth.user);
  
  return auth?.user !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace/>
  );
};

export { RequireAuth };
