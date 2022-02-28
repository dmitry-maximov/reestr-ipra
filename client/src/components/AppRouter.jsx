import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/index';
import { START_PAGE_ROUTE } from '../utils/const';
import { AuthContext } from '../context';
import Layout from './Layout';
import LayoutAdmin from './Admin/LayoutAdmin/LayoutAdmin';

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<Layout>{element}</Layout>}
          exact
        />
      ))}

      {isAuth &&
        privateRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<LayoutAdmin>{element}</LayoutAdmin>}
            exact
          />
        ))}

      <Route path="*" element={<Navigate to={START_PAGE_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
