import './App.css';
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
import Add_panel_member from './components/SS_Components/Add_panel_member'
import Edit_panel_member from './components/SS_Components/Edit_panel_member';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path = "/" element={<DisplayStudentgroups/>}/>
     <Route path = "/addpanelmember/:id" element={<Add_panel_member/>}/>
     <Route path = "/edit_panelmembers" element= {<Edit_panel_member/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
