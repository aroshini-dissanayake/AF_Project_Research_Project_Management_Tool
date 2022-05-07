import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateProfile from '../SS_Components/UpdateStaff';
import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const StaffProfile = () => {
    const [name, setname] = useState(null)
    const [faculty, setfaculty] = useState(null)
    const [feild, setfeild] = useState(null)
    const [staff_id, setstaff_id] = useState(null)
    const [role, setrole] = useState(null)
    const [email , setemail] = useState(null)
    const [pwd , setpwd] = useState(null)

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
   
    const updateStaffProfile = () => {
        setShow(true)
      }
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
              window.location="/staffdashboard"
            })
            .catch((err) => {
              console.log(err.message)
            })
          }
         }
         const staffLogout = () => {
            if (window.confirm('Are you sure you wish to logout from this Account?')) {
            localStorage.removeItem('Authorization')
            toast.success('Log out successfuly',{position:toast.POSITION.TOP_CENTER});
            window.location = "/staffdashboard"
            }
          }

   return (
    <div>
     
      <div class="container">
      <div class="main-body">
      <ul class="nav">
          <li><a href="/admin">Staff Profile</a></li>
        </ul>
            <div class="row gutters-sm">
              <div class="col-md-4 mb-4">
                <div class="shadow" id="cardcol">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <div class="mt-3">
                        <h4>{name+" "+staff_id}</h4>
                        <button class="btn btn-primary" onClick={staffLogout}>Log Out</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="shadow mb-3" id="cardcol">
                  <div class="card-body">
                  <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0 ">Full Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary" >
                        {name}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Phone Number</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {phone}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Faculty</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {faculty}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Feild</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {feild}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Staff ID</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {staff_id}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Role</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {role}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {email}
                      </div>
                    </div>
                    <hr/>

                    <div class="row">
                      <div class="col-sm-12">
                      <center><button onClick={updateStaffProfile} class="btn btn-primary">Edit Profile Details</button></center>
                      </div>
                      <br/><br/>
                      <div class="col-sm-12">
                        <center><button onClick={deleteStaff} class="btn btn-primary">Delete Account</button></center>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
               
         <UpdateProfile
          show={show}
          onHide={() => setShow(false)}
          upname ={name}
          upphone ={phone}
          upfaculty ={faculty}
          upfeild ={feild}
          upstaff_id ={staff_id}
          uprole ={role}
          upemail ={email} />
      </div>
   )
}
 
export default StaffProfile;

