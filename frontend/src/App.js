import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
// import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
// import Add_panel_member from './components/SS_Components/Add_panel_member'
// import Edit_panem_member from './components/SS_Components/Edit_panem_member';
import Signup from './components/AA_Components/student-registration';
import StudentLogin from './components/AA_Components/student-login';
import Profile from './components/AA_Components/student-profile';
import MainHome from './components/AA_Components/mainhome';
import Faculties from './components/AA_Components/faculties';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path = "/" element={<StudentLogin/>}/>
   <Route path = "/signup" element={<Signup/>}/>
   <Route path = "/profile" element={<Profile/>}/>
   <Route path = "/mainhome" element={<MainHome/>}/>
   <Route path = "/faculties" element={<Faculties/>}/>

     {/* <Route path = "/addpanelmember" element={<Add_panel_member/>}/>
     <Route path = "/edit_panelmembers" element= {Edit_panem_member}/> */}
   </Routes>
   </BrowserRouter>
  );
}

export default App;
