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
import Createmarkingschemes from './components/RD_Components/createmarkingschemes';
import GroupRegistration from './components/AA_Components/student-group-name-registration';
import Add_Group_Members from './components/AA_Components/group-members-reg';
import Groups from './components/AA_Components/student.groups';
import Homemarkingschemes from './components/RD_Components/homemarkingschemes';
import Editmarkingschemes from './components/RD_Components/editmarkingschemes';
import Markingschemesdetails from './components/RD_Components/markingschemesdetails';
import HomePage from './components/AA_Components/homepage';

function App() {
  return (
   <BrowserRouter>
    <Switch>
     <Route path = "/" component={BackendHomePage}exact/>
    
     <div>  
     <Route path = "/stafflogin" component={StaffLogin}/>
     <Route path = "/staffsignup" component={StaffSignup}/>
     <Route path = "/staffdashboard" component={Staff_Dashboard}/>
     <Route path = "/group/displaystudentgroups" component ={DisplayStudentgroups} />  
     <Route path = "/studentgroups/:id" component={Add_panel_member}/>
     <Route path = "/topic/displayresearchtopic" component={ResearchTopic}/>
     <Route path = "/staff/staffprofile" component={StaffProfile}/>
 



   <Route path = "/signin" component={StudentLogin}/>
   <Route path = "/signup" component={Signup}/>
   <Route path = "/profile" component={Profile}/>
   <Route path = "/mainhome" component={MainHome}/>
   <Route path = "/faculties" component={Faculties}/>
   <Route path= "/groupReg" component={GroupRegistration}/>
   <Route path= "/display/:id" component={Add_Group_Members}/>
   <Route path= "/groups" component={Groups}/>
   <Route path = "/homepage" component={HomePage}/>



    <Route path = "/adminsignup" component={Adminregistration}/> 
    <Route path = "/adminsignin" component={AdminLogin}/>  
    <Route path = "/admindashboard" component={Admindashboard}/>  
    <Route path = "/adminprofile" component={AdminProfile}/>  

    
    <Route path = "/homemarkingschemes" component={Homemarkingschemes}/> 
    <Route path = "/createmarkingadd" component={Createmarkingschemes}/>
    <Route path = "/createmarkingedit/:createmarkingID" component={Editmarkingschemes}/>
    <Route path = "/createmarking/:createmarkingID" component={Markingschemesdetails}/>
   
   </div>  
   </Switch> 
   </BrowserRouter>
  );
}

export default App;
