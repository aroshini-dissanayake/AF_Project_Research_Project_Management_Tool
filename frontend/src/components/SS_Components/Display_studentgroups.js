import React,{Component} from 'react' ;
import axios from "axios";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default class Display_studentgroups extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentgroups:[]
        };
    }
    onReadirect(id){
        window.location.href = `/studentgroups/${id}`
    }
    componentDidMount(){
       this.retrieveStudentGroups();
   }
    retrieveStudentGroups(){
        axios.get("http://localhost:8070/group/displaystudentgroups").then(res=>{
            if(res.data.success){
                this.setState({
                    studentgroups:res.data.existingStudentgroups
                });
                console.log(this.state.studentgroups)
            }
        })
    }
    render(){
        return(      
        <div className='container'>  
            <table class="table">
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Student Name</th>
                        <th scope='col'>Group Name</th>
                        <th scope='col'>Panel Member</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.studentgroups.map((studentgroups,index) =>(
                    <tr>
                        <th scope='row'>{index + 1}</th>
                        <td>{studentgroups.studentName}</td>
                        <td>{studentgroups.groupName}</td>
                        <td>{studentgroups.panelMember}</td>
                        <td>
                        
                             <IconButton aria-label='btn btn-success' size="small"
                             style={{background: "#FBB917"}}
                                onClick={()=>this.onReadirect(studentgroups._id)} >
                             <AddCircleOutlineIcon  fontSize="small" style={{color: "black"}}/>
                             </IconButton> 
                             &nbsp;&nbsp;&nbsp;&nbsp;
                            
                             <IconButton aria-label="delete" size="small"
                              style={{background: "#800000"}} >
                             <DeleteForeverIcon fontSize="small"  style={{color: "white"}}/>
                             </IconButton>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>     
        )}
}