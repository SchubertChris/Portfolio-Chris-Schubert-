// src/components/layout/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="app">
            <Navbar />
            <main className="main-content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;