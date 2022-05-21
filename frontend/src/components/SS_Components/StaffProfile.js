import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import UpdateProfile from '../SS_Components/UpdateStaff';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StaffNavbar from "../Staff-Layout/StaffNavbar";
import Footer from '../Layout/footer';


const StaffProfile = () => {
    const [name, setname] = useState(null)
    const [phone, setphone] = useState(null)
    const [faculty, setfaculty] = useState(null)
    const [feild, setfeild] = useState(null)
    const [staff_id, setstaff_id] = useState(null)
    const [role, setrole] = useState(null)
    const [email , setemail] = useState(null)
    const [pwd , setpwd] = useState(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const getUserData = async () => {
            try {
               const config = {
                  headers: {
                     Authorization: localStorage.getItem("Authorization")
                  },
               }
               await axios.get("http://localhost:8070/staff/staffprofile", config)
                  .then((res) => {
                    setname(res.data.Staff.name)
                    setphone(res.data.Staff.phone)
                    setfaculty(res.data.Staff.faculty)
                    setfeild(res.data.Staff.feild)
                    setstaff_id(res.data.Staff.staff_id)
                    setrole(res.data.Staff.role)
                    setemail(res.data.Staff.email)
                    setpwd(res.data.Staff.pwd)
    
            }).catch((error) => {
                console.log(error.message)
              })
         } catch (error) {
            console.log(error.message)
         }
      }
      getUserData()
    }, [])
   
    //update staff member account details
    const updateStaffProfile = () => {
        setShow(true)
      }

      //delete the staff member account
      const deleteStaff = async () => {
        const config = {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        };
        
        if (window.confirm('Are you sure you wish to delete this Account?')) {
            await axios.delete('http://localhost:8070/staff/staffdelete', config)
            .then((res) => {
              toast.success('Your account deleted successfuly',{position:toast.POSITION.TOP_CENTER});
              localStorage.removeItem('Authorization')
              window.location="/staffsignup"
            })
            .catch((err) => {
              console.log(err.message)
            })
          }
         }

         //logout the staff menber account
         const staffLogout = () => {
            if (window.confirm('Are you sure you wish to logout from this Account?')) {
            localStorage.removeItem('Authorization')
            toast.success('Log out successfuly',{position:toast.POSITION.TOP_CENTER});
            window.location = "/"
            }
          }

      return (
          <div class="bod" style={{background:"#F8F8FF"}}  >
             <StaffNavbar/>
                 <br/><br/><br/>
                     <h3 align="center"><b><u>Staff Profile Details</u></b></h3>  <br/><br/>   
                 <div class="container">
              <div class="main-body">
            <div class="row gutters-sm">
        <div class="col-md-4 mb-4">
            <div class="d-flex flex-column align-items-center text-center">
                <div class="mt-3">
                    <div class="d-flex flex-column align-items-center text-center" >
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/avatar.png"  class="rounded-circle" width="180" height="180"/>
                            <div class="mt-3">
                        <h4>{name}</h4>
                    <h4>{staff_id}</h4>
               </div>
           </div>
      </div>
           </div>
               </div>
                   <div class="col-md-8">
                       <div class="card-body">
                           <div class="row">
                              <div class="col-sm-3">
                           <h6 class="mb-0 "><b>Full Name</b></h6>
                       </div>
                   <div class="col-sm-9 text-secondary" >
                {name}
            </div>
                </div>
                    <hr/>
                       <div class="row">
                          <div class="col-sm-3">
                             <h6 class="mb-0"><b>Phone Number</b></h6>
                         </div>
                     <div class="col-sm-9 text-secondary">
                  {phone}
               </div>
           </div>
               <hr/>
                    <div class="row">
                       <div class="col-sm-3">
                           <h6 class="mb-0"><b>Faculty</b></h6>
                              </div>
                         <div class="col-sm-9 text-secondary">
                     {faculty}
                 </div>
              </div>
                    <hr/>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0"><b>Feild</b></h6>
                                   </div>
                               <div class="col-sm-9 text-secondary">
                            {feild}
                         </div>
                    </div>
                 <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0"><b>Staff ID</b></h6>
                           </div>
                              <div class="col-sm-9 text-secondary">
                                {staff_id}
                              </div>
                           </div>
                        <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0"><b>Role</b></h6>
                           </div>
                              <div class="col-sm-9 text-secondary">
                              {role}
                          </div>
                      </div>
                  <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                           <h6 class="mb-0"><b>Email</b></h6>
                              </div>
                                 <div class="col-sm-9 text-secondary">
                                    {email}
                                </div>
                             </div>
                          <hr/> 
                    <div class="row">
                        <div class="col-sm-12">
                           <div class="row">
                              <div class="col-sm-12"><br/>
                                  <center>
                <button style={{background: "#151B54", color:"#ffff"}} onClick={staffLogout} class="btn btn " target="__blank">Log Out</button>&nbsp;&nbsp;&nbsp;
           <button style={{background: "#9F000F", color:"#ffff"}} onClick={deleteStaff} class="btn btn " target="__blank">Delete Account</button></center>
              </div>
                  </div>     
                      </div>  
                          </div>
                           </div>
                      </div>
                   </div>
                </div>
           </div>
               
         {/* <UpdateProfile
          show={show}
          onHide={() => setShow(false)}
          upname ={name}
          upphone ={phone}
          upfaculty ={faculty}
          upfeild ={feild}
          upstaff_id ={staff_id}
          uprole ={role}
          upemail ={email} /> */}
           <br/><br/>       
          <Footer/>
      </div>
   )
}
 
export default StaffProfile;

