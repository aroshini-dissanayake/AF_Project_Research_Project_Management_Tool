import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
import Add_panel_member from './components/SS_Components/Add_panel_member'
import Edit_panel_member from './components/SS_Components/Edit_panel_member';
// import Signup from './components/AA_Components/student-registration';
// import StudentLogin from './components/AA_Components/student-login';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     {/* <Route path = "/" component={<StudentLogin/>}exact/> */}
     <Route path = "/" component ={DisplayStudentgroups} exact />
    
     <div>
     {/* <Route path = "/signup" component={Signup}/> */}
     <Route path = "/studentgroups/:id" component={Add_panel_member}/>
     <Route path = "/edit_panelmembers/:id" component= {Edit_panel_member}/>

     </div>  
 
    </Switch>   
   </BrowserRouter>
  );
}

export default App;
