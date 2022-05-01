import './App.css';
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
import Add_panel_member from './components/SS_Components/Add_panel_member'
import Edit_panel_member from './components/SS_Components/Edit_panel_member';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route path = "/" component ={DisplayStudentgroups} exact/>
     <div>
     <Route path = "/addpanelmember/:id" component={Add_panel_member}/>
     <Route path = "/edit_panelmembers" component= {Edit_panel_member}/>
     </div>
   
   </Switch>
   </BrowserRouter>
  );
}

export default App;
