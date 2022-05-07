import React,{Component} from 'react' ;
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import StaffNavbar from "../Staff-Layout/StaffNavbar";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

export default class ResearchTopic extends Component{
    constructor(props){
        super(props);
        this.state = {
            researchtopic:[]
        };
    }
    componentDidMount(){
        this.retrieveResearchtopic();
    }

    //search group id
        filterData(researchtopic,searchKey){
            const result = researchtopic.filter((products)=>
            products.groupId.toLowerCase().includes(searchKey) 
            )
          
             this.setState({researchtopic:result})
          }
          
          handleSearchArea = (e)=>{
            const searchKey = e.currentTarget.value;
              axios.get("http://localhost:8070/topic/displayresearchtopic").then(res=>{
                if(res.data.success){
                this.filterData(res.data.existingResearchtopic,searchKey)
              }
            });
          }

    retrieveResearchtopic(){
        axios.get("http://localhost:8070/topic/displayresearchtopic").then(res=>{
            if(res.data.success){
                this.setState({
                    researchtopic:res.data.existingResearchtopic
                });
                console.log(this.state.researchtopic)
            }
        })
    }

    render(){
        return(
            <div>
            <StaffNavbar/> 
            <br/><br/>    
             <div className='container' > 
            <table class="table" style={{width:"1100px"}} align="center">
                <thead class="table-primary">
                    <tr>
                        <th scope='col'></th>
                        <th scope='col'>Research Topic</th>
                        <th scope='col'>Group Name</th>
                        <th scope='col'>Group ID</th>
                        <th scope='col'>Accept</th>
                        <th scope='col'>Reject</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.researchtopic.map((researchtopic,index) =>(
                    <tr>
                        <th scope='row'>{index + 1}</th>
                        <td>{researchtopic.researchTopic}</td>
                        <td>{researchtopic.groupName}</td>
                        <td>{researchtopic.groupId}</td>
                      
                        <td> 
                             &nbsp;&nbsp;
                             <IconButton aria-label='btn btn-success' size="small"
                             style={{background: "#008000"}} >
                             <CheckIcon  fontSize="small" style={{color: "white"}}/>
                             </IconButton> 
                         </td>
                        
                         <td>
                             &nbsp;&nbsp;
                             <IconButton aria-label="delete" size="small"
                              style={{background: "#800000"}} >
                             <ClearIcon fontSize="small"  style={{color: "white"}}/>
                             </IconButton>
                         </td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>  
     </div>   
        )}
}