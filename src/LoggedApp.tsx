import { Fragment } from 'react';
import { Route, Routes } from 'react-router';
import ToolTip from './components/layout/Tooltip';
import Toolbar from './components/Toolbar';
import Classroom from './pages/Classroom';
import InClass from './pages/InClass';
import MaxedScreenShare from './pages/MaxedScreenShare';
import School from './pages/School';
function LoggedApp() {
  return (
    <Fragment>
      <Routes>
        <Route path='/inclass' element={<InClass />}>
          <Route path='classroom' element={<Classroom />} />
          <Route path='maxscreen' element={<MaxedScreenShare />} />
        </Route>
        <Route path='/school' element={<School />} />
        <Route path='/' element={<School />} />
      </Routes>
      <Toolbar />
      <ToolTip />
    </Fragment>
  );
}

export default LoggedApp;
