import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import authStore from './authStore';
import './index.css';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')).render(
  <Provider store={authStore}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
