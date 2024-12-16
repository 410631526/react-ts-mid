import React, { ReactNode } from 'react';
import SideBar from '../componets/SideBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
