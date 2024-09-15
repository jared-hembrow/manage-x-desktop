import React, { FC, ReactNode, useContext } from 'react';
import './Layout.css';
import { Icon } from 'semantic-ui-react';
import { Sidebar } from './Sidebar';
import { useLocation, useParams } from 'react-router-dom';
import { StateManager } from 'components/Context';
import { MainModal } from 'components/Modal';
import { ToastContainer } from 'react-toastify';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const location = useLocation();
  const pp = useParams();
  const { state } = useContext(StateManager);

  console.log('State: ', state);
  return (
    <>
      <ToastContainer />
      <MainModal />
      <div className="layout-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">{children}</div>
      </div>
    </>
  );
};

export default Layout;
