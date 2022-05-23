import React,{Component} from 'react' ;
import axios from "axios";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';

export default class Groupss extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentgroups:[]
        };
    }
    onReadirect(id){
        window.location.href = `/display/${id}`
    }
    GroupCreate(){
        window.location.href = `/groupReg`
    }
    componentDidMount(){
       this.retrieveStudentGroups();
   }
    retrieveStudentGroups(){
        axios.get("http://localhost:8070/student/displaygroups").then(res=>{
            if(res.data.success){
                this.setState({
                    studentgroups:res.data.existingGroups
                });
                console.log(this.state.studentgroups)
            }
        })
    }
    render(){
        return(    
            <div>
             <StudentNavBar/><br/>
             <div align="right" style={{marginRight:"75px"}}>
                <button
                 className='btn btn-warning'
                 type='add' 
                 style={{marginTop:'15px'}}
                 onClick={()=>this.GroupCreate()}>
                 <i className='fa fa-plus-circle'></i> &nbsp; Add New Group
                 </button></div>
                 <br/>
              <div align="center">
                <div className="card-header" style={{width:"820px",background:"#B7CEEC"}}><br/><br/>
                 <h3 align="center">
                   <b><u>Student Research Group</u></b></h3>
               <form className='needs-validation'>
           <div className="col-lg-10 mt-2">    
     <div align="left"><br/>
        <div className='container'>  
            <table class="table" style={{background:"#ffff"}}>
                       <thead>
                     <tr bgcolor="#79BAEC">
                 <th scope='col'>No</th>
             <th scope='col'>Group Name</th>
         <th scope='col'>Add Group Member</th>
           </tr>
             </thead>
                <tbody>
                {this.state.studentgroups.map((studentgroups,index) =>(
                    <tr>
                        <th scope='row'>{index + 1}</th>
                        <td>{studentgroups.group_name}</td>
                        <td >
                    <IconButton aria-label='btn btn-success' size="small"
                  style={{background: "#FBB917"}}
                onClick={()=>this.onReadirect(studentgroups._id)} >
                   <AddCircleOutlineIcon  fontSize="small" style={{color: "black"}}/>
                      </IconButton> 
                         &nbsp;&nbsp;&nbsp;&nbsp;                           
                        </td>
                    </tr>
                ))}
                </tbody>    
            </table>
              </div>
                </div>
                   </div>
                       </form>     
                          </div></div>


                {/* <h2 align="center"><b><u>Student  Research Groups</u></b></h2>
               <div align="right" style={{marginRight:"75px"}}>
                <button
                 className='btn btn-warning'
                 type='add' 
                 style={{marginTop:'15px'}}
                 onClick={()=>this.GroupCreate()}>
                 <i className='fa fa-plus-circle'></i> &nbsp; Add New Group
                 </button></div>
                 <br/>
                  <div className='container'>  
                    <table class="table">
                       <thead>
                     <tr bgcolor="#79BAEC">
                 <th scope='col'>No</th>
             <th scope='col'>Group Name</th>
         <th scope='col'>Action</th>
           </tr>
             </thead>
                <tbody>
                {this.state.studentgroups.map((studentgroups,index) =>(
                    <tr>
                        <th scope='row'>{index + 1}</th>
                        <td>{studentgroups.group_name}</td>
                        <td>
                        
                             <IconButton aria-label='btn btn-success' size="small"
                             style={{background: "#FBB917"}}
                                onClick={()=>this.onReadirect(studentgroups._id)} >
                             <AddCircleOutlineIcon  fontSize="small" style={{color: "black"}}/>
                             </IconButton> 
                             &nbsp;&nbsp;&nbsp;&nbsp;
                            
                        </td>
                    </tr>
                ))}
                </tbody>
               
            </table>
        </div> <br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/>             */}
       <br/><br/><br/>
        <Footer/>  
        </div> 
        )}
}