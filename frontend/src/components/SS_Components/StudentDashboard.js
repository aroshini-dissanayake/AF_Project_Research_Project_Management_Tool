import React, { Component } from 'react'
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';

const studentgroups = () => {

    window.location = `/groups`
    
    }
const regresearchtopic = () => {
    window.location = `/regtopic/displayresearchtopic`   
}

const reqsupervisor = () => {
    window.location = `/regtopic/displaysupervisors`   
 }

const reqcosupervisor = () => {
    window.location = `/regtopic/displaycosupervisors`     
        }

const submitdoc = () => {
    window.location = `/document/submitdoc`           
        }  

const group = () => {
    window.location = `/groupReg`            
    }   
 
const groupreg = () => {
        window.location = `/groupss`            
        }       

const downloadtemplate = () => {
        window.location = `/pdfdisplay`            
    }       
const chatgroups = () => {
        window.location = `#`            
    }       
        
        
    
export default class StudentDashboard extends Component {
  render() {
    return (
      <div>
      <StudentNavBar/>    
       <div className="container" ><br/><br/><br/>
       <div class="row row-cols-1 row-cols-md-3 g-5" >
       <div class="col" style={{width: "19rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5" align="center" ><b>Register Groups Name</b></h5>
               </div>
               <img
                   src="https://cdn3.f-cdn.com/contestentries/199675/14352715/553629ea1974e_thumb900.jpg"
                   class="card-img-top"
                   height="240px"
                   alt="..." onClick={group}/>
               </div>
           </div>

           <div class="col" style={{width: "20rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5" align="center"><b>Register Student Groups</b></h5>
               </div>
               <img
                   src="https://thumbs.dreamstime.com/b/people-group-participation-logo-concept-happy-together-86419162.jpg"
                   class="card-img-top"
                   height="240px"
                   alt="..." onClick={groupreg}/>
               </div>
              </div>
           
              <div class="col" style={{width: "20rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5"  align="center"><b>Register Research Topic</b></h5>
               </div>
               <img
                   src="https://deadline.com/wp-content/uploads/2019/05/topic2018-final.png"
                   class="card-img-top"
                   height="240px"
                   alt="..." onClick={regresearchtopic}/>
               </div>
           </div>     


           <div class="col" style={{width: "19rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5"  align="center"><b> Request Supervisor</b></h5>
               </div>
               <img
                   src="https://thumbs.dreamstime.com/b/user-icon-male-avatar-business-suit-vector-flat-design-businessman-man-internet-rounded-shape-web-mobile-element-profile-99280834.jpg"
                   class="card-img-top"
                   height="240px"
                   alt="..." onClick={reqsupervisor}/>
               </div>
           </div>

           <div class="col" style={{width: "19rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5"  align="center"><b>Request Co-Supervisor</b></h5>
               </div>
               <img
                   src="https://c.neh.tw/thumb/f/720/comvecteezy379094.jpg"
                   class="card-img-top"
                   height="240px"
                   alt="..."onClick={reqcosupervisor}/>
               </div>
           </div>


           <div class="col" style={{width: "20rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5"  align="center"><b>Submit Documents</b></h5>
               </div>
               <img
                   src="https://t3.ftcdn.net/jpg/04/27/12/82/360_F_427128203_pMzi4Wg7PQ5Bwl52lrhZb8vxXwCYX8eC.jpg"
                   class="card-img-top"
                   height="240px"
                   alt="..."onClick={submitdoc}/>
               </div>
           </div>



              <div class="col" style={{width: "20rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5" align="center"><b>Chat App</b></h5>
               </div>
               <img
                   src="https://img.myloview.com/canvas-prints/chat-icon-chat-icon-vector-chat-icon-image-chat-icon-eps-chat-icon-jpg-chat-icon-chat-icon-flat-chat-icon-web-chat-icon-app-chat-icon-art-chat-icon-ai-chat-icon-line-700-230638916.jpg"
                   class="card-img-top"
                   height="240px"
                   alt="..." onClick={chatgroups}/>
               </div>
              </div>

              <div class="col" style={{width: "19rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5" align="center"><b>Download Template</b></h5>
               </div>
               <img
                   src="https://i.dlpng.com/static/png/6325147_preview.png"
                   class="card-img-top"
                   height="240px"
                   alt="..." onClick={downloadtemplate}/>
               </div>
              </div>

            </div>
         </div><br/><br/>
       <Footer/>
    </div>
    )
  }
}
