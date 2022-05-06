import React, { Component } from "react";


export default class StaffNavbar extends Component {
    render(){
        return(
    <div>   
     <nav class="navbar navbar-expand-lg " style={{background: "#060b26",  height: "95px"}}>
     <br/>  <br/>
     <button class="navbar-brand" style={{background: "#FFA500",height: "90px",width:"220px"}}><b>SLIIT ResearchWeb</b></button>  
      <div class="container">   
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" style={{color: "#ffff"}}>Research Topics</a>
        </li>  &nbsp; &nbsp;&nbsp;

        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" style={{color: "#ffff"}}>Supervisors</a>
        </li> &nbsp; &nbsp; 

        <li class="nav-item">
          <a class="nav-link" href="#" style={{color: "#ffff"}}>Co-Supervisors</a>
        </li> &nbsp; &nbsp; 
       
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color: "#ffff"}}>Panel Members</a>
        </li>  &nbsp; &nbsp; &nbsp;
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#ffff"}}>
            Subjects</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"  style={{background: "#FBF6D9	"}}>
            <li><a class="dropdown-item" href="#">A</a></li>
            <li><a class="dropdown-item" href="#">B</a></li>
            <li><a class="dropdown-item" href="#">C</a></li>
            <li><a class="dropdown-item" href="#">D</a></li>
          </ul>
        </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#ffff"}}>
            Faculties</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: "#FBF6D9	"}}>
            <li><a class="dropdown-item" href="#">Faculty of Computing</a></li>
            <li><a class="dropdown-item" href="#">Faculty of Business</a></li>
            <li><a class="dropdown-item" href="#">Faculty of Engineering</a></li>
            <li><a class="dropdown-item" href="#">Faculty of Humanities & Sciences</a></li>
            <li><a class="dropdown-item" href="#">School of Architechture</a></li>
            <li><a class="dropdown-item" href="#">Faculty of Graduate Studies and Research</a></li>
            <li><a class="dropdown-item" href="#">SLIIT Academy</a></li>
            <li><a class="dropdown-item" href="#">SLIIT International</a></li>

          </ul>      
        </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
      </ul>
            <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> </form>  &nbsp;&nbsp;
            <i class="fa fa-search fa-lg" aria-hidden="true" type="submit" style={{color: "#ffff"}} ></i> &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-bell fa-lg" aria-hidden="true" type="submit" style={{color: "#ffff"}} ></i> &nbsp;&nbsp; &nbsp;&nbsp;
            <i class="fa fa-envelope fa-lg" aria-hidden="true" type="submit" style={{color: "#ffff"}} ></i> &nbsp;&nbsp; &nbsp;&nbsp; 
            <i class="fa fa-user-circle fa-4x" aria-hidden="true" style={{color: "#ffff"}}></i>        
      </div>
    </div>
  </nav>
 </div>
        )
    }
}