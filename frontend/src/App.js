import './App.css';
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Std from './components/SS_Components/studentgroups'
function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path = "/" element={<Std />}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
