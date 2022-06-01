import React, { Component } from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import { saveAs } from 'file-saver';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StaffNavbar from "../Staff-Layout/StaffNavbar";
toast.configure()

export default class evaluate extends Component {
    constructor(props) {
      super(props);

      this.state={
        createmarking:[]
      };
   }
  
  componentDidMount(){
      this.retrievecreatemarking();
  }
  
  //data retrive
   retrievecreatemarking(){
          axios.get("http://localhost:8070/createmarking/displaycreatemarking").then(res=>{
              if(res.data.success){
                 this.setState({
                  createmarking:res.data.existingCreatemarking
                 });
  
                 console.log(this.state.createmarking)
              }
          
      });
  }

render() {
    return (
<div><StaffNavbar/>
      <div  className="pt-3" align="center" background color="red" >
        <div className=" shadow mb-8 w-100" id="cardcol">
          <div className="card-header py-3" >
            <h1 align="center" id="randy"><b>&nbsp;&nbsp;&nbsp;Marking Scheme</b></h1><br />

            <div className="card-body" >
              <div className="col-md-8 mt-4 mx-auto"></div>

              
              
              <table className="table table-hover" style={{ marginTop: '40px', background: "#FFFFFF" }} >
                <thead>
                  <tr>
                    <th scope="col">Criteria</th>
                    <th scope="col">Good (10-8)</th>
                    <th scope="col">Avarage (4-7)</th>
                    <th scope="col">Poor (0-3)</th>
                    <th scope="col">Comment</th>
                    <th scope="col"> Marks </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.createmarking.map((createmarking) => (
                    <tr>
                      {/* <th scope="row">{index + 1}</th> */}
                      
                      <td>{createmarking.criteria}</td>
                      <td>{createmarking.good}</td>
                      <td>{createmarking.avarage}</td>
                      <td>{createmarking.poor}</td>
                      <td>{createmarking.comment}</td>
                      <td>{createmarking.marks}</td>
                     <td>
                     <Button className="form-group" type="submit" style={{ background: "#C3FDB8", width: 10 + "%", align: "center" }} startIcon={<EditSharpIcon />} href={`/evaluateedit/${createmarking._id}`}>
                        </Button>
                     </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>

             
              </div> </div> </div> </div></div>

    )
  }
}
