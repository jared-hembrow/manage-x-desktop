import React, { FC, ReactNode } from 'react';
import './Layout.css';
import { Icon } from 'semantic-ui-react';
import { Sidebar } from './Sidebar';
import { useLocation, useParams } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const location = useLocation();
  const pp = useParams();
  console.log('Location: ', location, pp);
  return (
    <div className="layout-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
