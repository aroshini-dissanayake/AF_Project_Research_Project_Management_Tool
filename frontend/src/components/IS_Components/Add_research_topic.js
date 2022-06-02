import React,{Component} from 'react' ;
import axios from "axios";
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';
import Button from '@material-ui/core/Button';
<<<<<<< HEAD


=======
 
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
export default class Add_research_topic extends Component{
   constructor(props){  
       super(props);
       
   //implementing binding
    this.onChangeResearchtopic = this.onChangeResearchtopic.bind(this);
    this.onChangeResearchfield = this.onChangeResearchfield .bind(this);
    this.onSubmit = this.onSubmit.bind(this);

<<<<<<< HEAD
       this.state={
           group_name:"",
           researchTopic:"",
           researchField:"",
       }
    }
 
=======
 this.state = {
      group_name:"",
      researchTopic: "",
      researchField: ""
  }
}

>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
  async componentDidMount(){
       const id = this.props.match.params.id;
       await axios.get(`http://localhost:8070/student/display/${id}`).then((res)=>{
 
       if(res.data.success){
               this.setState({
                   groupName:res.data.studentgroups.group_name
              })
         }
       })
    }
    onChangeResearchtopic(e) {
      this.setState({
        researchTopic: e.target.value
      })
    }
  
    onChangeResearchfield(e) {
      this.setState({
        researchField: e.target.value
      })
    }
<<<<<<< HEAD

   onSubmit = (e)=>{
=======
  
  onSubmit(e) {
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
      e.preventDefault();
      const id = this.props.match.params.id;
      const topicinfo = {
        researchTopic: this.state.researchTopic,
        researchField: this.state.researchField,
        
<<<<<<< HEAD
       }
 
       axios.post(`http://localhost:8070/regtopic/research/${id}`,topicinfo).then((res)=>{ 
        console.log(res.data)
        alert("Research Topic and Field registered");
        window.location.href="/regtopic/displayresearchtopic"
      
=======
      }

       axios.post(`http://localhost:8070/regtopic/research/${id}`,topicinfo).then((res)=>{ 
          console.log(res.data)
          alert("Research Topic and Field registered");
          window.location.href="/regtopic/displayresearchtopic"
        
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
   })
   .catch((e)=>{
   });
}

 render(){
return(
<div>
<StudentNavBar/>
  <br/><br/><br/>   
     <div align="center">
       <div className="card-header" style={{width:"820px",background:"#B7CEEC"}}><br/><br/>
         <h3 align="center">
           <b><u>ADD RESEARCH TOPIC AND FIELD TO STUDENT GROUP</u></b></h3>
              <form onSubmit={this.onSubmit} className="text-color">
                <div className="form-group">
<<<<<<< HEAD
                  <div align="left"><br/> <br/>
                 <label style={{marginBottom:'2px'}}><b>Research Topic</b></label>
              <input type="userInput" required className="form-control" placeholder="Enter the Research Topic" value={this.state.researchTopic}
           onChange={this.onChangeResearchtopic}/>
       </div></div>
=======
                  <div align="left"><br/> 
                 <label style={{marginBottom:'2px'}}><b>Research Topic</b></label>
              <input type="userInput" required className="form-control" placeholder="Enter the Research Topic" value={this.state.researchTopic}
           onChange={this.onChangeResearchtopic}/>
       </div></div><br/>
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
   <div className="form-group">
      <div align="left"><br/>  
          <label style={{marginBottom:'2px'}}><b>Research Field</b></label>
              <input  type="text" required className="form-control" placeholder="Enter the Research Field" value={this.state.researchField}
                   onChange={this.onChangeResearchfield} />
                       </div></div><br/><br/>
                     <Button variant="contained" className="w-10" style={{background: "#151B54", width: 20+"%",color:"white"}}
                  disableElevation type="submit">Register</Button>
                </form>  
             <br/><br/>
          </div>
       </div><br/><br/><br/><br/><br/><br/>
    <Footer/>
  </div>          
       )
   }
  }