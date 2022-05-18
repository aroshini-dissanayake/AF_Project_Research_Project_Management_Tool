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

            axios.post("http://localhost:8070/createmarking/addmarking",data)
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
            
               <h1 className="m-0 font-weight-bold text-dark" id="randy">Create New Marking</h1><br/>
               </div>
               <div className="card-body">
               <div className = "col-md-8 mt-4 mx-auto">
    
               <form className="needs-validation" onSubmit={sendData}>
    
               <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}> Deliverables </label>
                    <input type="text"
                      className="form-control"
                      // pattern="[a-z,A-Z,][0,9]"
                      title="Please Enter Valid Order ID"
                      name="orderid"
                       id="orderid"
                       placeholder="Enter Order ID"
                       onChange={(e) => {
                        setdeliverables(e.target.value)
                       }}
                      required />
                  </div>
    
                  <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}> Number Of Items </label>
                     <input type="number"
                      className="form-control"
                      pattern="[0-9]"
                      title="Please Enter Only Numbers"
                       name="numberofitems"
                       id="numberofitems"
                        placeholder="Enter Number Of Items"
                    onChange={(e)=>{
                        setduedate(e.target.value)}}
                     required/>
                  </div>
    
    
    
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Due Date</label>
                     <input 
                      type="date" 
                      className="form-control"
                      name="deliverdate" 
                      id="deliverdate" 
                      title="Please Enter Valid Date"
                      placeholder="Enter Deliver Date"
                      onChange={(e)=>{
                        setcontribution(e.target.value)}}
                    />
                  </div>
    
                  
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Contribution</label>
                     <input 
                      type="text"
                      className="form-control" 
                      name="delivercost"
                      id="delivercost" 
                      title="Please Enter Valid Cost"
                      placeholder="Enter Deliver Cost" 
                      onChange={(e)=>{
                        setmethodofsubmission(e.target.value)}}
                    required/>
                  </div>
    
                 
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Method Of Submission</label>
                     <input 
                      type="text" 
                      className="form-control"
                      name="phonenumber"
                      id="phonenumber"
                      maxLength="10"
                      pattern ="\d{10}"
                      title="Please Enter Valid Phone Number"
                      placeholder="Enter Phone Number"
                      onChange={(e)=>{
                      setmarksallocation(e.target.value)}}
                    required/>
                  </div>
    
                
                  {/* <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Marks Allocation</label>
                     <input 
                      type="email"
                       className="form-control"
                       name="useremail" 
                       id="useremail" 
                       placeholder="Enter User Email"
                       pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                       title="Please Enter Valid Email" 
                       onChange={(e)=>{
                       setuseremail(e.target.value)}}
                    required/>
                  </div> */}
    
                 
                  {/* <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Courier Service</label>
                     <input 
                      type="text"
                      className="form-control"
                      name="courierservice"
                      id="courierservice"
                      pattern="[A-Za-z]{3-20}"
                      title="Please Enter Valid Courier Service"
                      placeholder="Enter Courier Service" 
                      onChange={(e)=>{
                      setcourierservice(e.target.value)}}
                    required/>
                  </div>
    
                  
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Receiver Details</label>
                     <input 
                     type="text" 
                     className="form-control" 
                     name="receiverdetails"
                     id="receiverdetails"
                     pattern="[A-Za-z]{3-20}"
                       title="Please Enter Valid Receiver Details" 
                     placeholder="Enter Receiver Details" 
                    
                    onChange={(e)=>{
                      setreceiverdetails(e.target.value)}}
                    required/>
                  </div>
    
                  
                  <div className ="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Destination</label>
                     <input 
                     type="text"
                      className="form-control" 
                      name="destination" 
                      id="destination" 
                      pattern="[A-Za-z]{3-20}"
                       title="Please Enter Valid Destination"
                      placeholder="Enter Destination" 
                   
                    onChange={(e)=>{
                      setdestination(e.target.value)}}
                    required/>
                  </div> */}
             
    
                  <div className="form-group">
                    <Button className="form-group" type="submit" style={{ marginTop: '5px', background: "#F75D59", width: 100 + "%" }} startIcon={<LocalShippingIcon />}>
    
                      &nbsp; Add Delivery
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