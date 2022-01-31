import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '../router/index';
import { START_PAGE_ROUTE } from '../utils/const';
const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} exact />
      ))}
      <Route path="*" element={<Navigate to={START_PAGE_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
