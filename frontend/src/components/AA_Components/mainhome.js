import React, { Component } from "react";
// import axios from 'axios'
import { Navbar,  Nav } from "react-bootstrap";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';



export default class MainHome extends Component {
//   constructor(props){
//     super(props);
//      this.state ={
//       products:[]
    
//     };
// }

// //Retrieve Product
// componentDidMount(){
//   this.retrieveProducts();
// }
//   retrieveProducts(){
//     axios.get("http://localhost:8070/student/").then(res=>{
//     if(res.data.success){
//         this.setState({
//           products:res.data.existingProducts
//         });
//         console.log(this.state.products);
//     }
//   });
// }

// //Search 
// filterData(products,searchKey){
//   const result = products.filter((products)=>
//   products.productName.toLowerCase().includes(searchKey)||
//   products.brandName.toLowerCase().includes(searchKey)
//   )

//    this.setState({products:result})
// }

// handleSearchArea = (e)=>{
//   const searchKey = e.currentTarget.value;
//     axios.get("http://localhost:8070/products/displayProducts").then(res=>{
//       if(res.data.success){
//       this.filterData(res.data.existingProducts,searchKey)
//     }
//   });
//}
    render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{height:100}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <img
            src={image}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt=""/> */}
 
          <Navbar.Brand href="/mainhome" style={{fontSize:25}}>&nbsp;Research Management Tool</Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
              <Nav className="me-auto" style={{fontSize:20}}>
             
              <Nav.Link href="/faculties">Faculties</Nav.Link>
              <Nav.Link href="/group">Research Group</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              
            </Nav>
           
            <form className="d-10" >
            <input id="searchNav" className="form-control me-5" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}/>
            </form>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
   
            <Nav>
                <IconButton aria-label="profile" href="/profile" style={{color: "#FFFFFF"}} >
                <PersonIcon fontSize="large" />
                </IconButton>  &nbsp;&nbsp;&nbsp;&nbsp;  
             
            </Nav>
          </Navbar.Collapse>
       
      </Navbar>
    );
  }
}
