import React, { Component } from "react";
import StaffNavbar from "../Staff-Layout/StaffNavbar";

export default class Staff_Dashboard extends Component {
    render(){
        return(
            <div>
                <StaffNavbar/>
                <div className="container"><br/><br/>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col"> 
                        <div class="shadow h-60" id="cardcol1">
                        <img
                            src="https://blog.identityautomation.com/hubfs/Stock%20images/businessman%20hand%20pointing%20to%20padlock%20on%20touch%20screen%20computer%20as%20Internet%20security%20online%20business%20concept.jpeg"
                            class="card-img-top"
                            width="25px"
                            height="190px"
                            alt="..."
                        />
                        <div class="card-body">
                        <h5 class="card-title" id="dashh5">ADMIN</h5>
                        </div>
                        </div>
                    </div><br/>

                     <div class="col"> 
                        <div class="shadow h-60" id="cardcol1">
                        <img
                            src="https://blog.identityautomation.com/hubfs/Stock%20images/businessman%20hand%20pointing%20to%20padlock%20on%20touch%20screen%20computer%20as%20Internet%20security%20online%20business%20concept.jpeg"
                            class="card-img-top"
                            width="25px"
                            height="190px"
                            alt="..."
                        />
                        <div class="card-body">
                        <h5 class="card-title" id="dashh5">ADMIN</h5>
                        </div>
                        </div>
                    </div>
               
                    <div class="col">
                        <div class="shadow h-60" id="cardcol1">
                        <a href="/request"><img
                            src="https://media.istockphoto.com/photos/computer-education-training-class-picture-id1210738055?b=1&k=20&m=1210738055&s=170667a&w=0&h=obsRXiCdlYUURz0l783K7VrSgK535j2vUkFfvQ1SIjE="
                            class="card-img-top"
                            alt="..."
                            width="25px"
                            height="190px"
                        /></a>
                        <div class="card-body" >
                        <h5 id="dashh5">REQUEST ITEM</h5>
                        </div>
                        </div>
                    </div>
                   
                    {/* <div class="col">
                        <div class="shadow h-60" id="cardcol1">
                        <a href="/feedback"><img
                            src="https://www.getabstract.com/channel-img/1621-feedback-1548252815000.jpg"
                            class="card-img-top"
                            alt="..."
                            width="25px"
                            height="190px"
                        /></a>
                        <div class="card-body">
                        <h5 class="card-title" id="dashh5">FEEDBACK</h5>
                        </div>
                        </div>
                    </div> */}
                
                   </div>
                 </div>
                </div>
        )
    }
}