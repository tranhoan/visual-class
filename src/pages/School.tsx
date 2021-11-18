import React, { Fragment } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import VirtualSpace from '../components/VirtualSpace';
import { sidebarSchoolData } from '../data/sidebar-school-data';

const School: React.FC = () => {
  return (
    <Fragment>
      <VirtualSpace></VirtualSpace>;
      <Sidebar sidebarData={sidebarSchoolData} />
    </Fragment>
  );
};
export default School;
