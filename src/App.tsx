import { Fragment } from 'react';
import { Route, Routes } from 'react-router';
import ToolTip from './components/layout/Tooltip';
import Sidebar from './components/sidebar/Sidebar';
import Toolbar from './components/Toolbar';
import Classroom from './pages/Classroom';
import School from './pages/School';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/classroom' element={<Classroom />} />
        <Route path='/school' element={<School />} />
        <Route path='*' element={<Classroom />} />
      </Routes>
      <Sidebar />
      <Toolbar />
      <ToolTip />
    </Fragment>
  );
}

export default App;
