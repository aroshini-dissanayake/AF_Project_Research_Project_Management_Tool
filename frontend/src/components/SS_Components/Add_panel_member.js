import React,{Component} from 'react' ;
import axios from "axios";

export default class Add_panel_member extends Component{

    
    constructor(props){
       
        super(props);
        this.state={
            ID:"",
            panelMember:"",
        }
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
        const{panelMember} = this.state;
        const data = {
            panelMember:panelMember,
        }
    
        console.log(id);

        axios.post(`http://localhost:3000/addpanelmember/${id}`,data).then((res)=>{
            if(res.data.success){
            this.setState({
                 panelMember:"" ,
           })
    }
    })
  }

  render(){
        return( 
        <div className='col-md-8 mt-4 mx-auto'>
            <h1 className='h3 mb-3 font-weight-normal'>ADD PANEL MEMBER</h1>
            <form className='needs-validation' noValidate>
                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Panel Member Name</label>
                    <input
                     type="text" 
                     className='form-control'
                     name='panelMember'
                     placeholder='Enter Panel Member Name'
                     value={this.state.panelMember}
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
           
        </div>)
    }
}