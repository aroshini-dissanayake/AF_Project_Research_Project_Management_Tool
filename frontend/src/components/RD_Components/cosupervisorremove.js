import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
=======

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
import Footer from '../Layout/footer';
import AdminNavBar from '../Layout/AdminNavBar';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

<<<<<<< HEAD
=======
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32

export default class CoSupervisorremove extends Component {
    constructor(props){
        super(props);
        this.state = {
            cosupervisorremove:[]
        };
    }  

    //retrive cosupervisor members 
componentDidMount(){
    this.retrievecosupervisorDetails();
} 
retrievecosupervisorDetails(){
    axios.get("http://localhost:8070/usersremove/getcosupervisor").then(res=>{
        if(res.data.status){
            this.setState({
                cosupervisorremove:res.data.cosupervisor
     });
    }
  })
 }

//delete cosupervisor
onDelete = (cosupervisorID) => {


    if (window.confirm('Are you sure you wish to delete this details?')) {
      axios.delete(`http://localhost:8070/usersremove/cosupervisordelete/${cosupervisorID}`).then((res) => {
<<<<<<< HEAD
       alert('Details Deleted Successfully');
  
=======

       alert('Details Deleted Successfully');

        toast.warning('Details Deleted Successfully', { position: toast.POSITION.TOP_CENTER });

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
        //alert("Delete Successfully")
        this.retrievecosupervisorDetails();
  
      })
    }
  }

  filterData(cosupervisorremove, searchKey) {

    const result = cosupervisorremove.filter((cosupervisorre) =>
      cosupervisorre.name.toLowerCase().includes(searchKey) ||
      cosupervisorre.faculty.toLowerCase().includes(searchKey) ||
      cosupervisorre.feild.toLowerCase().includes(searchKey) ||
      cosupervisorre.staff_id.toLowerCase().includes(searchKey) ||
      cosupervisorre.role.toLowerCase().includes(searchKey) ||
      cosupervisorre.email.toLowerCase().includes(searchKey)
    )
    this.setState({cosupervisorremove: result })
  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8070/usersremove/getcosupervisor").then(res => {
      if (res.data.success) {

        this.filterData(res.data.cosupervisor,searchKey)

      }

    });
  }

 render() {
    return ( 
                            <div>
                          <AdminNavBar/>
                       <br/><br/>
                    <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
                  <b><u>All Co-Supervisor Details </u></b></h3><br/>
                     <div className="col-lg-2 mt-2 mb-2">
                       <input className="form-control" type="search"
                    placeholder="Serach" name="searchQuery" startIcon={< SearchSharpIcon />} onChange={this.handleSearchArea} >
                </input></div><br/>
<<<<<<< HEAD
=======

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
           <div className='container'>  
       <table className = "table table-hover">
          <thead>
             <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
                   <th scope='col'>Staff Member Name</th>
                       <th scope='col'>Faculty</th>
                         <th scope='col'>Feild</th>
                           <th scope='col'>Staff ID</th>
                         <th scope='col'>Role</th>
<<<<<<< HEAD
                     <th scope='col'>Email</th>
=======

                     <th scope='col'>Email</th>

                       <th scope='col'>Email</th>
                    <th scope='col'>Action</th>
>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
                 </tr>
             </thead>
               <tbody>
                   {this.state.cosupervisorremove.map((cosupervisorremove,index)=>(
                      <tr key={index}>    
                         <th scope='row'>{index + 1}</th>
                            <td>{cosupervisorremove.name}</td>
                               <td>{cosupervisorremove.faculty}</td>
                                 <td>{cosupervisorremove.feild}</td>
                            <td>{cosupervisorremove.staff_id}</td>
                        <td>{cosupervisorremove.role}</td>
                   <td>{cosupervisorremove.email}</td>
                   <td>
                     <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(cosupervisorremove._id)}>
              <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>   
                     </td>              
                </tr>
                  )
                    )}
                      </tbody>     
                         </table>
<<<<<<< HEAD
                            </div><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>   
                            <Footer/>
=======

                            </div><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>   
                            <Footer/>

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
                              </div>
    )
  }
}