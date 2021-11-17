import React, { Fragment } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';
import { sidebarData } from '../data/sidebar-data';
const InClass: React.FC = () => {
  return (
    <Fragment>
      <Sidebar sidebarData={sidebarData} />
      <Outlet />
    </Fragment>
  );
};
export default InClass;
