import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path='login' element={
          <PublicRoute>
            <LoginPage />

            {/* otra forma */}
            {/* <Route path='/*' element={<LoginPage/>} /> */}
          </PublicRoute>  
        } />

        {/* privatizando las rutas paa usuarios logeados */}
        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
            
            {/* otra forma */}
            {/* <Route path='/*' element={<LoginPage/>} /> */}
          </PrivateRoute>
        } />

      </Routes>
    </>
  )
}
