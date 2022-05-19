import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from '../Layout/AdminNavBar'

export default class AdminViewStaff extends Component {
    constructor(props){
        super(props);
        this.state = {
            staff:[]
        };
    }   
    componentDidMount(){
        this.retrieveStaffRole();
    }  

    retrieveStaffRole(){
        axios.get("http://localhost:8070/admin/displayStaffRole").then(res=>{
            if(res.data.success){
                this.setState({
                    staff:res.data.existingDisplayStaffRole
        });
     }
  })
}
    render() {
    return (
      <div>
         <AdminNavBar/> <br/><br/><br/><br/>
         
            <table class = "table" >
              <thead>
                  <tr bgcolor="#BCC6CC">
                      <th scope='col'>No</th>
                      <th scope='col'>Staff Member Name</th>
                      <th scope='col'>Phone Number</th>
                      <th scope='col'>Faculty</th>
                      <th scope='col'>Feild</th>
                      <th scope='col'>Staff ID</th>
                      <th scope='col'>Role</th>
                      <th scope='col'>Email</th>
                  </tr>
              </thead>
              <tbody>
                     {this.state.staff.map((staff,index)=>(
                      <tr>
                          <th scope='row'>{index + 1}</th>
                          <td>{staff.name}</td>
                          <td>{staff.phone}</td>
                          <td>{staff.faculty}</td>
                          <td>{staff.feild}</td>
                          <td>{staff.staff_id}</td>
                          <td>{staff.role}</td>
                          <td>{staff.email}</td>
                          </tr>
        ))}
          </tbody>
        </table>
      </div>
    )
  }
}
