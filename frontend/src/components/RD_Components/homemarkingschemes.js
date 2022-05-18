import React, { Component } from 'react'
import axios from 'axios';

export default class Homemarkingschemes extends Component {
    constructor(props){
    super(props);

    this.state={
      createmarking:[]
    };
 }

componentDidMount(){
    this.retrievecreatemarking();
}


 retrievecreatemarking(){
        axios.get("http://localhost:8070/createmarking/createmarking").then(res=>{
            if(res.data.success){
               this.setState({
                createmarking:res.data.existingcreatemarking
               });

               console.log(this.state.createmarking)
            }
        
    });
}



  render() {
    return (
      <div className="container">
        <p>Marking Schemes</p>
        <table class="table">
        <thead>
            <tr>
               <th scope ="col"> Criteria </th>
               <th scope ="col"> Good (10-8) </th>
               <th scope ="col"> Avarage (4-7) </th>
               <th scope ="col"> Poor (0-3) </th>
               <th scope ="col"> Comment </th>
            </tr>
        </thead>
        <tbody>
          {this.state.createmarking.map((createmarking,index) => (
             <tr>
          <th scope="row">{index+1}</th>
          <td>{createmarking.deliverables}</td>
          <td>{createmarking.duedate}</td>
          <td>{createmarking.contribution}</td>
          <td>{createmarking.methodofsubmission}</td>
          <td>{createmarking.marksallocation}</td>
          <td> 
            <a className="btn btn-warning" href="#">
              <i classname="fas fa-edit"></i>&nbsp;Edit
            </a>
            &nbsp;
            <a className="btn btn-danger" href="#">
              <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
              </td>
                 </tr>

          ))}
        </tbody>
        </table>
        <button className="btn btn-success"><a href="/addmarking" style={{textDecoration:'none',color:'white'}}> Create New Point</a></button>
      </div>
    )
  }
}
