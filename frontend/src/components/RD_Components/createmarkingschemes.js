import axios from 'axios';
// import React, { Component } from 'react'
import React, { Component, useState } from 'react'
import Button from "@material-ui/core/Button";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export default class Createmarkingschemes extends Component {

    toast.configure() 

    export default function Createmarkingschemes() {

        const [deliverables, setdeliverables] = useState("");;
        const [duedate, setduedate] = useState("");
        const [contribution, setcontribution] = useState("");
        const [methodofsubmission, setmethodofsubmission] = useState("");
        const [marksallocation, setmarksallocation] = useState("");
        
        const sendData = async (e)=>{
            e.preventDefault();

            let data = {
                deliverables:deliverables,
                duedate: duedate,
                contribution: contribution,
                methodofsubmission: methodofsubmission,
                marksallocation: marksallocation,


            };

            axios.post("http://localhost:8070/createmarking/createmarkingadd",data)
            .then(()=>{
              toast.success('Marking Added Successfully',{position:toast.POSITION.TOP_CENTER})
              window.setTimeout(function() {
                window.location.href = '/homemarkingschemes';
            }, 2000);
            }).catch((err)=>{
              console.log(data)
              toast.warning('Create Marking Error Recheck All Data',{position:toast.POSITION.TOP_CENTER});
            })

            setdeliverables("");
            setduedate("");
            setcontribution("");
            setmethodofsubmission("");
            setmarksallocation("");

        }

    // render() {
        return (
            <div>
          
             <div className="pt-3" align="center" >
             <div className="card shadow mb-8 w-50">
               <div className="card-header py-3">
            
               <h1 className="m-0 font-weight-bold text-dark" id="randy">Create New Marking Scheme</h1><br/>
               </div>
               <div className="card-body">
               <div className = "col-md-8 mt-4 mx-auto">
    
               <form className="needs-validation" onSubmit={sendData}>
    
               <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}> Deliverables </label>
                    <input type="text"
                      className="form-control"
                      // pattern="[a-z,A-Z,][0,9]"
                      title="Please Enter Valid Inputs"
                      name="deliverables"
                       id="deliverables"
                       placeholder="Enter Deliverables"
                       onChange={(e) => {
                        setdeliverables(e.target.value)
                       }}
                      required />
                  </div>
    
                  <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}> Due Date </label>
                     <input type="date"
                      className="form-control"
                      pattern="[0-9]"
                      title="Please Enter valid Date"
                       name="duedate"
                       id="duedate"
                        placeholder="Enter Date"
                    onChange={(e)=>{
                        setduedate(e.target.value)}}
                     required/>
                  </div>
    
    
    
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Contribution</label>
                     <input 
                      type="text" 
                      className="form-control"
                      name="contribution" 
                      id="contribution" 
                      title="Please Enter Valid Inputs"
                      placeholder="Enter Contribution"
                      onChange={(e)=>{
                        setcontribution(e.target.value)}}
                    />
                  </div>
    
                  
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Method Of Submission</label>
                     <input 
                      type="text"
                      className="form-control" 
                      name="methodofsubmission"
                      id="methodofsubmission" 
                      title="Please Enter Valid Inputs"
                      placeholder="Enter Deliver Inputs" 
                      onChange={(e)=>{
                        setmethodofsubmission(e.target.value)}}
                    required/>
                  </div>
    
                 
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Marks Allocation</label>
                     <input 
                      type="text" 
                      className="form-control"
                      name="marksallocation"
                      id="marksallocation"
                    //   maxLength="10"
                    //   pattern ="\d{10}"
                      title="Please Enter Valid Inputs"
                      placeholder="Enter Marks"
                      onChange={(e)=>{
                      setmarksallocation(e.target.value)}}
                    required/>
                  </div>
                  <div className="form-group">
                    <Button className="form-group" type="submit" style={{ marginTop: '5px', background: "#F75D59", width: 100 + "%" }} startIcon={<LocalShippingIcon />}>
    
                      &nbsp; Add New Point
                    </Button>
                  </div>
                </form>
              </div> 
            </div>
          </div>
        </div>
     </div>
      )
}