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
      <div>
        {this.state.createmarking.map(createmarking=>(
            <div>
                <p>{createmarking.deliverables}</p>
                <p>{createmarking.duedate}</p>
                <p>{createmarking.contribution}</p>
                <p>{createmarking.methodofsubmission}</p>
                <p>{createmarking.marksallocation}</p>
                </div>
        ))}  
      </div>
    )
  }
}
