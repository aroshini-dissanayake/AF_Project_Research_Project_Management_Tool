import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavBar from '../Layout/AdminNavBar';
import Footer from '../Layout/footer';


const AdminProfile = () => {
    const [name, setname] = useState(null)
    const [phone, setphone] = useState(null)
    const [sliitid, setsliitid] = useState(null)
    const [email, setemail] = useState(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const getUserData = async () => {
            try {
                const config = {
                   headers: {
                      Authorization: localStorage.getItem("Authorization")
                   },
                }
                await axios.get("http://localhost:8070/admin/adminprofile", config)
                .then((res) => {
                  setname(res.data.Admin.name)
                  setphone(res.data.Admin.phone)
                  setsliitid(res.data.Admin.sliitid)
                  setemail(res.data.Admin.email)
                  setShow(res.data.Admin.show)

                }).catch((error) => {
                    console.log(error.message)
                  })
             } catch (error) {
                console.log(error.message)
             }
          }
          getUserData()
        }, [])

 //delete the staff member account
 const deleteAdmin = async () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    
    if (window.confirm('Are you sure you wish to delete this Account?')) {
        await axios.delete('http://localhost:8070/admin/admindelete', config)
        .then((res) => {
          toast.success('Your account deleted successfuly',{position:toast.POSITION.TOP_CENTER});
          localStorage.removeItem('Authorization')
          window.location="/adminsignup"
       
         }).catch((err) => {
          console.log(err.message)
        
         })
      }
     }
   //logout the staff menber account
   const adminLogout = () => {
      if (window.confirm('Are you sure you wish to logout from this Account?')) {
        localStorage.removeItem('Authorization')
        toast.success('Log out successfuly',{position:toast.POSITION.TOP_CENTER});
        window.location = "/"
      }
   }

          return (
                          <div class="bod" style={{background:"#FFFFF7"}}>
                       <AdminNavBar/>
                   <br/><br/><br/><br/>
               <h3 align="center"><b><u>Admin Profile Details</u></b></h3>  <br/><br/>     
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
                <h4>{sliitid}</h4>
            </div>
        </div>
     </div>
</div>
    </div>
        <div class="col-md-8">
            <div class="card-body">
                <div class="row">
                   <div class="col-sm-3">
                <h6 class="mb-0 "><b>Full Name </b></h6>
            </div>
        <div class="col-sm-9 text-secondary" >
    <b>{name}</b> 
 </div>
     </div>
         <hr/>
            <div class="row">
               <div class="col-sm-3">
                  <h6 class="mb-0"><b>Phone Number </b></h6>
              </div>
          <div class="col-sm-9 text-secondary">
       <b>{phone}</b>
    </div>
</div>
     <hr/>
          <div class="row">
               <div class="col-sm-3">
                    <h6 class="mb-0"><b>SLIIT ID </b></h6>
                         </div>
                      <div class="col-sm-9 text-secondary">
                   <b> {sliitid}</b>
              </div>
         </div>
      <hr/>
         <div class="row">
             <div class="col-sm-3">
                  <h6 class="mb-0"><b>Email  </b></h6>
                      </div>
                          <div class="col-sm-9 text-secondary">
                       <b>{email}</b>
                  </div>
               </div>
            <hr/> 
       <div class="row">
             <div class="col-sm-12">
                  <div class="row">
                      <div class="col-sm-12"><br/>
                          <center>
                 <button style={{background: "#151B54", color:"#ffff"}} onClick={adminLogout} class="btn btn " target="__blank">Log Out</button>&nbsp;&nbsp;&nbsp;
           <button style={{background: "#9F000F", color:"#ffff"}} onClick={deleteAdmin} class="btn btn " target="__blank">Delete Account</button></center>
       </div>
           </div>     
               </div>  
                    </div>
                        </div>
                      </div>
                 </div>
             </div>
         </div>
     <br/><br/><br/><br/><br/><br/>       
<Footer/>
</div>
)
}

export default AdminProfile;

