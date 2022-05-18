import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
//import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
 //import Add_panel_member from './components/SS_Components/Add_panel_member'
 //import Edit_panem_member from './components/SS_Components/Edit_panem_member';
//import Signup from './components/AA_Components/student-registration';
//import StudentLogin from './components/AA_Components/student-login';
// import Adminregistration from './components/RD_Components/adminregistration';
// import AdminLogin from './components/RD_Components/adminlogin';
// import Adminpage from './components/RD_Components/adminpage';
import Createmarkingschemes from './components/RD_Components/createmarkingschemes';
import Homemarkingschemes from './components/RD_Components/homemarkingschemes';
import Editmarkingschemes from './components/RD_Components/editmarkingschemes';
import Markingschemesdetails from './components/RD_Components/markingschemesdetails';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    {/* <Route path = "/" element={<StudentLogin/>}/>
    <Route path = "/signup" element={<Signup/>}/> 
    <Route path = "/addpanelmember" element={<Add_panel_member/>}/>
    <Route path = "/edit_panelmembers" element= {Edit_panem_member}/>
    <Route path = "/" element= {<DisplayStudentgroups/>}/> */}
    {/* <Route path = "/add" element={<Adminregistration/>}/> 
    <Route path = "/login" element={<AdminLogin/>}/>  
    <Route path = "/adminpage" element={<Adminpage/>}/>   */}
    {/* <Route path = "/createmarkingschemes" element={<Createmarkingschemes/>}/>  */}
    <Route path = "/homemarkingschemes" element={<Homemarkingschemes/>}/> 
    <Route path = "/addmarking" element={<Createmarkingschemes/>}/>
    <Route path = "/editmarking/:createmarkingID" element={<Editmarkingschemes/>}/>
    <Route path = "/markingdetails/:createmarkingID" element={<Markingschemesdetails/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
