import React, { Component } from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import AdminNavBar from '../Layout/AdminNavBar';
import Footer from '../Layout/footer';

export default class UploadGroupAssignment extends Component {
  constructor(props){
    super(props);
    this.state = {
      groupAssignment_name:"",
      uploadAssignment:""
    }
  }
  handleInputChange = (e)=>{
    const{name,value} = e.target;
    this.setState({
      ...this.state,
      [name]:value
    });
  }
  onSubmit = (e)=>{
    e.preventDefault();
    const{groupAssignment_name,uploadAssignment} = this.state;
    const data = {
      groupAssignment_name:groupAssignment_name,
      uploadAssignment:uploadAssignment
    }

    console.log(data);
    axios.post("http://localhost:8070/assignment/assignmentgroups/save",data).then((res)=>{
      if(res.data.success){
        alert("Assignment Upload Successfully!!!")
        window.location.href = '/movie/display';
      }
      this.setState({
        groupAssignment_name:"",
        uploadAssignment:""
      })
    });
  }

  render() {
    return ( 
                                  <div>
                              <AdminNavBar/><br/><br/><br/><br/>
                          <h3 align="center"><b>ADD SUBMISSON</b></h3><br/>
                      <div align="center">
                  <div className="card-header" style={{width:"700px"}}>
              <form className='container'>
                <div className="col-lg-10 mt-2">    
                  <div align="left"><br/>
                    <label id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}>Assignment Name </label>
                      <input type="text" className="form-control" name="groupAssignment_name" placeholder="Enter Assignment Name" Required = "required"
                        value={this.state.groupAssignment_name} onChange={this.handleInputChange} />
                          </div>
                            <div align="left"><br/>
                        <FileBase64 type="file" name="banner" multiple={ false } onDone={({ base64 }) => this.setState({  uploadAssignment: base64 })}/>
                    </div>
                <br/>
            <button className="btn btn-primary" type="submit" style={{marginBottom:'5px'}} onClick={this.onSubmit}>
        &nbsp; Add Assignment
    </button>
      </div><br/>
         </form>
            </div>
               <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                 <Footer/>
                    </div>
                       </div>
    )
  }
}
