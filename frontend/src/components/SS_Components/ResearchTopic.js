import React,{Component} from 'react' ;
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import StaffNavbar from "../Staff-Layout/StaffNavbar";


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

//Search 
filterData(researchtopic,searchKey){
    const result = researchtopic.filter((researchtopic)=>
    researchtopic.researchTopic.toLowerCase().includes(searchKey) ||
    researchtopic.groupId.toLowerCase().includes(searchKey) 
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
            <div  align="right" >
            <div className="col-lg-3 mt-2 ">
            <input className="form-control" type="search" placeholder="Serach Area" style={{background:"#E5E4E2	"}}
            name="searchQuery" onChange={this.handleSearchArea}/>
            </div>
            </div> <i class="fa fa-search fa-lg" aria-hidden="true" type="submit" style={{color: "#ffff"}} ></i>

            <u><b><h1 style={{fontFamily:"Palatino Linotype"}} align="center">Research Topics </h1></b></u><br/>
            
            <div className='container'>        
             <table class="table" style={{width:"1100px"}} align="center" >
                <thead style={{background:"#98AFC7"}}>
                    <tr >
                        <th scope='col'></th>
                        <th scope='col'>Research Topic</th>
                        <th scope='col'>Group Name</th>
                        <th scope='col'>Group ID</th>
                        <th scope='col'>Accept</th>
                        <th scope='col'>Reject</th>
                    </tr>
                </thead>
                <tbody  style={{background:"#F5F5F5"}}>
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
                              style={{background: "#9F000F"}} >
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