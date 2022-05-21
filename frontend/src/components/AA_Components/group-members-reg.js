import React,{Component} from "react";
import axios from "axios";

export default class Add_Group_Members extends Component{

    constructor(props){   
        super(props);
        this.state={
            group_name:"",
            groupMember: {
            student_id:"",
            name:"",
            email:"",
            phone:"",
        }
        }
     } 

   async componentDidMount(){
        const id = this.props.match.params.id; 
        await axios.get(`http://localhost:8070/student/groupReg/${id}`).then((res)=>{

        if(res.data.success){
                this.setState({
                    group_name:res.data.studentgroups.group_name,
                    student_id : res.data.studentgroups.student_id,
                    name:res.data.studentgroups.name,
                    email : res.data.studentgroups.email,
                    phone : res.data.studentgroups.phone,
               })
          }
        })
     }
    handleInputChange = (e)=>{
        const{name,value} = e.target;
        this.setState({
           ...this.state,
           [name]:value
        })
     }

    onSubmit = (e)=>{
        e.preventDefault();
        const id = this.props.match.params.id; 
        const{group_name,student_id,name,email,phone} = this.state;
        const data = {
            group_name:group_name,
            student_id:student_id,
            name:name,
            email:email,
            phone:phone,
        }

        axios.post(`http://localhost:8070/student/grpReg/${id}`,data).then((res)=>{  
        if(res.data.success){
            this.setState({
                group_name:group_name,
                student_id:"",
                name:"",
                email:"",
                phone:"" ,
           })
           alert("group member added");
        //    window.location.href="/group/displaystudentgroups"
      }    
    })
    .catch((e)=>{
    });
}
  

render(){
    return(
        <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>ADD GROUP MEMBER</h1>
         <form className='needs-validation' noValidate>
         <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}></label>
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Student ID</label>
                <input
                 type="text" 
                 className='form-control'
                 name='Studentid'
                 placeholder='Enter Student ID'
                 value={this.state.student_id}
                 onChange={this.handleInputChange}>

                </input>
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Student Name</label>
                <input
                 type="text" 
                 className='form-control'
                 name='studentname'
                 placeholder='Enter Student Name'
                 value={this.state.name}
                 onChange={this.handleInputChange}>

                </input>
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Student Phone</label>
                <input
                 type="text" 
                 className='form-control'
                 name='studentphone'
                 placeholder='Enter Student Phone Number'
                 value={this.state.phone}
                 onChange={this.handleInputChange}>

                </input>
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Student Email</label>
                <input
                 type="text" 
                 className='form-control'
                 name='studentemail'
                 placeholder='Enter Student Email'
                 value={this.state.email}
                 onChange={this.handleInputChange}>

                </input>
            </div>
            <button
             className='btn btn-warning'
             type='add' 
             style={{marginTop:'15px'}}
             onClick={this.onSubmit}>
            <i className='fa fa-plus-circle'></i> &nbsp; ADD
             </button>
        </form>    
    </div>
    )

    }
}
