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
      <div>homemarkingschemes</div>
    )
  }
}
