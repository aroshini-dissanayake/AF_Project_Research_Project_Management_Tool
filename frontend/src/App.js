import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
import Add_panel_member from './components/SS_Components/Add_panel_member'
import StaffLogin from './components/SS_Components/staff-login';
import StaffSignup from './components/SS_Components/staff-registration';
import Staff_Dashboard from './components/SS_Components/Staff_Dashboard';
// import Admin_Home from './components/SS_Components/Admin_Home';
// import Signup from './components/AA_Components/student-registration';
// import StudentLogin from './components/AA_Components/student-login';



function App() {
  return (
   <BrowserRouter>
   <Switch>
     {/* <Route path = "/" component={<StudentLogin/>}exact/> */}
     <Route path = "/stafflogin" component={StaffLogin}exact/>
     {/* <Route path = "/displaystudentgroups" component ={DisplayStudentgroups}exact />   */}
     <div>  
     {/* <Route path = "/signup" component={Signup}/> */}
     <Route path = "/staffsignup" component={StaffSignup}/>
     <Route path = "/staffdashboard" component={Staff_Dashboard}/>
     {/* <Route path = "/adminhome" component={Admin_Home}/>  */}
     <Route path = "/displaystudentgroups" component ={DisplayStudentgroups} />  
     <Route path = "/studentgroups/:id" component={Add_panel_member}/>
     </div>  
 
    </Switch>   
   </BrowserRouter>
  );
}

export default App;
