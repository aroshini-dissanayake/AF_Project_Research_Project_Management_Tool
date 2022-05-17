import React from 'react';
import './App.css';
// import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
// import Add_panel_member from './components/SS_Components/Add_panel_member'
// import Edit_panem_member from './components/SS_Components/Edit_panem_member';
import Signup from './components/AA_Components/student-registration';
import StudentLogin from './components/AA_Components/student-login';
import Profile from './components/AA_Components/student-profile';
import MainHome from './components/AA_Components/mainhome';
import Faculties from './components/AA_Components/faculties';

import {BrowserRouter,Route,Routes,Switch} from 'react-router-dom';
import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
import Add_panel_member from './components/SS_Components/Add_panel_member'
import StaffLogin from './components/SS_Components/staff-login';
import StaffSignup from './components/SS_Components/staff-registration';
import Staff_Dashboard from './components/SS_Components/Staff_Dashboard';
import ResearchTopic from './components/SS_Components/ResearchTopic';
import Signup from './components/AA_Components/student-registration';
import StudentLogin from './components/AA_Components/student-login';
import BackendHomePage from './components/Layout/BackendHomePage'
import StaffProfile from './components/SS_Components/StaffProfile';
import Adminregistration from './components/RD_Components/adminregistration';
import AdminLogin from './components/RD_Components/adminlogin';
import Admindashboard from './components/RD_Components/admindashboard';
import AdminProfile from './components/RD_Components/adminProfile';
import Createmarkingschemes from './components/RD_Components/createmarkingschemes';


function App() {
  return (
   <BrowserRouter>


   {/* <Switch>
     <Route path = "/" component={<StudentLogin/>}exact/>
     <Route path = "/stafflogin" component={StaffLogin}exact/>
     <Route path = "/displaystudentgroups" component ={DisplayStudentgroups}exact />  
     <div>  
     <Route path = "/signup" component={Signup}/>
=======
     <Switch>
   
     <Route path = "/" component={BackendHomePage}exact/>
    
     <div>  
 {/* <Route path = "/" component={<StudentLogin/>}exact/> */}
 {/* <Route path = "/signup" element={<Signup/>}/>  */}
 {/* <Route path = "/signup" component={Signup}/> */}
     <Route path = "/stafflogin" component={StaffLogin}/>

     <Route path = "/staffsignup" component={StaffSignup}/>
     <Route path = "/staffdashboard" component={Staff_Dashboard}/>
     <Route path = "/group/displaystudentgroups" component ={DisplayStudentgroups} />  
     <Route path = "/studentgroups/:id" component={Add_panel_member}/>
     <Route path = "/topic/displayresearchtopic" component={ResearchTopic}/>
     <Route path = "/staff/staffprofile" component={StaffProfile}/>
 

    </Switch>    */}

   <Routes>
   <Route path = "/" element={<StudentLogin/>}/>
   <Route path = "/signup" element={<Signup/>}/>
   <Route path = "/profile" element={<Profile/>}/>
   <Route path = "/mainhome" element={<MainHome/>}/>
   <Route path = "/faculties" element={<Faculties/>}/>

     {/* <Route path = "/addpanelmember" element={<Add_panel_member/>}/>
     <Route path = "/edit_panelmembers" element= {Edit_panem_member}/> */}

    {/* <Route path = "/" element={<StudentLogin/>}/>
    <Route path = "/signup" element={<Signup/>}/> 
    <Route path = "/addpanelmember" element={<Add_panel_member/>}/>
    <Route path = "/edit_panelmembers" element= {Edit_panem_member}/>
    <Route path = "/" element= {<DisplayStudentgroups/>}/> */}
    <Route path = "/add" element={<Adminregistration/>}/> 
    <Route path = "/login" element={<AdminLogin/>}/>  
    <Route path = "/adminpage" element={<Adminpage/>}/>  

    <Route path = "/adminsignup" component={Adminregistration}/> 
    <Route path = "/adminsignin" component={AdminLogin}/>  
    <Route path = "/admindashboard" component={Admindashboard}/>  
    <Route path = "/adminprofile" component={AdminProfile}/>  

    <Route path = "/createmarkingschemes" element={<Createmarkingschemes/>}/> 
   
   </div>  
   </Switch>   
   </BrowserRouter>
  );
}

export default App;
