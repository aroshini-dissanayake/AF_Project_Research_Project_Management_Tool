import axios from 'axios';
import React, { Component, useState } from 'react'
import Button from "@material-ui/core/Button";
<<<<<<< HEAD
import 'react-toastify/dist/ReactToastify.css';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import AdminNavBar from '../Layout/AdminNavBar';
import Footer from '../Layout/footer';

=======
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';

    toast.configure() 
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b

    export default function Createmarkingschemes() {

        const [criteria, setcriteria] = useState("");;
        const [good, setgood] = useState("");
        const [avarage, setavarage] = useState("");
        const [poor, setpoor] = useState("");
        const [comment, setcomment] = useState("");
        const [marks, setmarks] = useState("");
        
        const sendData = async (e)=>{
            e.preventDefault();

            let data = {
                criteria:criteria,
                good:good,
                avarage:avarage,
                poor:poor,
                comment:comment,
                marks:marks,
<<<<<<< HEAD
=======


>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
            };

            axios.post("http://localhost:8070/createmarking/createmarkingadd",data)
            .then(()=>{
<<<<<<< HEAD
             alert('Marking Added Successfully')
=======
              toast.success('Marking Added Successfully',{position:toast.POSITION.TOP_CENTER})
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
              window.setTimeout(function() {
                window.location.href = '/homemarkingschemes';
            }, 2000);
            }).catch((err)=>{
              console.log(data)
<<<<<<< HEAD
             alert('Create Marking Error Recheck All Data');
=======
              toast.warning('Create Marking Error Recheck All Data',{position:toast.POSITION.TOP_CENTER});
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
            })

            setcriteria("");
            setgood("");
            setavarage("");
            setpoor("");
            setcomment("");
            setmarks("");

        }

    // render() {
        return (
            <div>
<<<<<<< HEAD
          <AdminNavBar/> 
          <br/><br/>
=======
          
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
             <div className="pt-3" align="center" >
             <div className="card shadow mb-8 w-50">
               <div className="card-header py-3">
            
               <h1 className="m-0 font-weight-bold text-dark" id="randy">Create New Marking Point</h1><br/>
               </div>
               <div className="card-body">
               <div className = "col-md-8 mt-4 mx-auto">
               
               <form className="needs-validation" onSubmit={sendData}>
    
               <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}> Criteria </label>
                    <input type="text"
                      className="form-control"
                      // pattern="[a-z,A-Z,][0,9]"
                      title="Please Enter Valid Inputs"
                      name="criteria"
                       id="criteria"
                       placeholder="Enter Criteria"
                       onChange={(e) => {
                        setcriteria(e.target.value)
                       }}
                      required />
                  </div>
    
                  <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}> Good (10-8)</label>
                     <input type="text"
                      className="form-control"
                      //pattern="[0-9]"
                      title="Please Enter valid Details"
                       name="good"
                       id="good"
                        placeholder="Enter Inputs"
                    onChange={(e)=>{
                      setgood(e.target.value)}}
                     required/>
                  </div>
    
    
    
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}> Avarage (4-7) </label>
                     <input 
                      type="text" 
                      className="form-control"
                      name="avarage" 
                      id="avarage" 
                      title="Please Enter Valid Inputs"
                      placeholder="Enter Inputs"
                      onChange={(e)=>{
                        setavarage(e.target.value)}}
<<<<<<< HEAD
                        required/>
=======
                    />
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
                  </div>


                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}> Poor (0-3) </label>
                     <input 
                      type="text" 
                      className="form-control"
                      name="poor" 
                      id="poor" 
                      title="Please Enter Valid Inputs"
                      placeholder="Enter Inputs"
                      onChange={(e)=>{
<<<<<<< HEAD
                        setpoor(e.target.value)}}
                        required/>
=======
                        setpoor(e.target.value)}}/>
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
                  </div>
    
                  
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Comment</label>
                     <input 
                      type="text"
                      className="form-control" 
                      name="comment"
                      id="comment" 
                      title="Please Enter Valid Inputs"
<<<<<<< HEAD
                      // placeholder="Enter Inputs" 
                      onChange={(e)=>{
                        setcomment(e.target.value)}} 
                       readOnly/>
=======
                      placeholder="Enter Inputs" 
                      onChange={(e)=>{
                        setcomment(e.target.value)}} />
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
                  </div>
    
                 
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Marks</label>
                     <input 
                      type="text" 
                      className="form-control"
                      name="marks"
                      id="marks"
                      // maxLength="10"
                      // pattern ="\d{10}"
                      title="Please Enter Valid Inputs"
<<<<<<< HEAD
                      // placeholder="Enter Marks"
                      onChange={(e)=>{
                        setmarks(e.target.value)}}
                        readOnly/>
=======
                      placeholder="Enter Marks"
                      onChange={(e)=>{
                        setmarks(e.target.value)}}
                    />
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
                  </div>
                  <div className="form-group">
                    <Button className="form-group" type="submit" style={{ marginTop: '5px', background: "#F75D59", width: 100 + "%" }} startIcon={<AddCommentRoundedIcon/>}>
    
                      &nbsp; Add New Point
                    </Button>
                   
                   
                  </div>
                </form>
              </div> 
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <br/><br/>
        <Footer/>
=======
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
     </div>
      )
}