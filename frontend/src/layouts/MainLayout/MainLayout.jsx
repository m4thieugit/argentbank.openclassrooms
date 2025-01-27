import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import './MainLayout.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MainLayout = () => {
    const location = useLocation();
    const bgDarkPages = ['/sign-in', '/user'];

    const layoutBgClass = bgDarkPages.includes(location.pathname) ? 'bg-dark' : '';

    return (
        <>
            <Navbar />
            <main className={`main ${layoutBgClass}`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout;