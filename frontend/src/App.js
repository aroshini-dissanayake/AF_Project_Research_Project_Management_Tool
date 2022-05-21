import React from 'react';
import './App.css';

import Profile from './components/AA_Components/student-profile';
import MainHome from './components/AA_Components/mainhome';
import Faculties from './components/AA_Components/faculties';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
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
import AdminViewStaff from './components/SS_Components/AdminViewStaff';
import PanelMembers from './components/SS_Components/PanelMembers';
import UploadGroupAssignment from './components/SS_Components/UploadGroupAssignment';
import StudentDashboard from './components/SS_Components/StudentDashboard';
import StudentHomePage from './components/SS_Components/StudentHomePage';

function App() {
  return (
   <BrowserRouter>
     <Switch>
     <Route path = "/" component={StudentHomePage} exact/>
   
    
     <div>  
     <Route path = "/staff" component={BackendHomePage}/>
     <Route path = "/stafflogin" component={StaffLogin}/>
     <Route path = "/staffsignup" component={StaffSignup}/>
     <Route path = "/staffdashboard" component={Staff_Dashboard}/>
     <Route path = "/group/displaystudentgroups" component ={DisplayStudentgroups} />  
     <Route path = "/studentgroups/:id" component={Add_panel_member}/>
     <Route path = "/topic/displayresearchtopic" component={ResearchTopic}/>
     <Route path = "/staffprofile" component={StaffProfile}/>
     <Route path = "/displayStaffRole" component={AdminViewStaff}/>
     <Route path = "/panelmember" component={PanelMembers}/>
     <Route path = "/assignmentgroups/save" component={UploadGroupAssignment}/>
     <Route path = "/studentdashboard" component={StudentDashboard}/>

     
     <Route path = "/signin" component={StudentLogin}/>
     <Route path = "/signup" component={Signup}/>
     <Route path = "/profile" component={Profile}/>
     <Route path = "/mainhome" component={MainHome}/>
     <Route path = "/faculties" component={Faculties}/>

     <Route path = "/adminsignup" component={Adminregistration}/> 
     <Route path = "/adminsignin" component={AdminLogin}/>  
     <Route path = "/admindashboard" component={Admindashboard}/>  
     <Route path = "/adminprofile" component={AdminProfile}/>  

   </div>  
   </Switch>   
   </BrowserRouter>
  );
}

export default App;
