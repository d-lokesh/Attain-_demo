import React, { Component } from 'react'

import "../App.css";
import backgroundImg from '../assets/sds.png';
import brand from "../assets/logo.png"
import tick from "../assets/ti.png";
class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                  
<div  class="navbar  navbar-fixed-top navbar-light "  >
            <div class="navbar-inner">
                 
            <nav class="navbar navbar-expand-lg   navbar-light bg-light fixed-top " >
  <div class="container-fluid">
    <img src={brand} alt="" width="30px" height="30px" />
   <b> <a class="navbar-brand"style={{
          color:"blue",
          marginLeft:"7px  "
        
        }} href="#">AttainU</a> </b>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a style={{color:'blue'}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Course
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">course details</a>
          <a class="dropdown-item" href="#">live batches</a>
          <a class="dropdown-item" href="#">Student projects</a>
          <a class="dropdown-item" href="#">FAQ</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a style={{color:'blue',float:'right '}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Placements
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Placement details</a>
          <a class="dropdown-item" href="#">Placement stories</a>
         
        </div>
      </li>
      <li class="nav-item dropdown" >
        <a  style={{color:'blue'}}class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Hire
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Hire from AttainU</a>
          <a class="dropdown-item" href="#">Verify Student Status</a>
         
        </div>
      </li>

        <button class="float-md-right navbar-right btn btn-outline-warning my-2 my-sm-0" type="submit" style={{marginLeft:"600px"}}>Apply Now</button>

        
      </ul>
    </div>
  </div>
</nav>


            </div>
        </div>

            </div>
         );
    }
}
 
export default Nav;