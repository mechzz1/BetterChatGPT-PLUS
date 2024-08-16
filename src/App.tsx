import React, { useEffect } from 'react';
import useStore from '@store/store';
import i18n from './i18n';

import Chat from '@components/Chat';
import Menu from '@components/Menu';

import useInitialiseNewChat from '@hooks/useInitialiseNewChat';
import { ChatInterface } from '@type/chat';
import { Theme } from '@type/theme';
import ApiPopup from '@components/ApiPopup';
import Toast from '@components/Toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login';
import Home from './pages/home/home';

function App() {
 

  return (


    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Home />} />

          {/* <Route element={<PrivateRoutes />}>
            <Route path="dashboard/*" element={<SideBar />}>
              <Route index path="main" element={<Home />} />
              <Route path="app" element={<AppManagement />} />
              <Route path="module" element={<ModuleManagement />} />
              <Route path="organizations" element={<Organizations />} />

            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>

      
    </>

  );
}

export default App;
