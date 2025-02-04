import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import authStore from './authStore';
import './index.css';

import AuthMiddleware from './authMiddleware';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={authStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/user" element={<AuthMiddleware><User /></AuthMiddleware>}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
