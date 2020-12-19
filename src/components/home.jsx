import React, { Component } from "react";
import "../App.css";
import backgroundImg from '../assets/landing1.jpg';
import brand from "../assets/logo.png"
import tick from "../assets/ti.png";
import Nav1 from "../components/nav";
import Nav2 from "../components/nav2";
import Couter from "./counter"
import final from "../assets/colleges.svg"
import job from "../assets/job_searcher.svg"
import jobseek from "../assets/job_seeker.svg"
import school from "../assets/school.svg"
import offline from "../assets/off.JPG"
import int from "../assets/int.JPG"
import col from "../assets/col.JPG"
import link from "../assets/link.png"
import fb from "../assets/fb.png"
import you from "../assets/you.png"

class Home extends Component {
  state = {flag:1};

  componentDidMount() {

    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 45 ? 1 : 2;
  
      this.setState({ flag: backgroundcolor });

    });
  }
  
  render() {
    return <div  
    style={{ 
      backgroundImage:`url(${backgroundImg})`,
      backgroundRepeat:'no-repeat'
    }}>
     

    {this.state.flag===1 ? (
      <Nav1/>

              ) : (
                <div>
<Nav2/>
                </div>
              )}

<br/>
<div className="container">

<br/>


<h1 style={{color:"#f7c11e"}}>Attain Your Dream Career
</h1>

<br/>
<h3 style={{color:"white"}}>Your College Alternative to a Premium</h3>
<h3 style={{color:"white"}}>Software Engineering Career</h3>
<i class="fad fa-check-circle"></i>

<h6 style={{color:"white"}}>Enroll Today
</h6>
<div className="row">
  <div className="col-sm-1" >
    {/* <img style={{marginLeft:"45px"}} src={tick} width="30%" height="35%" alt=""/> */}
  </div>
  <p style={{color:"white"}}> 􏁘 Full-Stack Web Development Course</p>
</div>
<div className="row">
  <div className="col-sm-1" >
    {/* <img style={{marginLeft:"45px"}} src={tick} width="30%" height="35%" alt=""/> */}

  </div>
  <p style={{color:"white"}}>􏁘 No Coding Background Required
</p>
</div>
<div className="row">
  <div className="col-sm-1" >
    {/* <img style={{marginLeft:"45px"}} src={tick} width="30%" height="35%" alt=""/> */}

  </div>
  <p style={{color:"white"}}>􏁘 Pay only when you get placed*

</p>
</div>
<div className="row">
  <div className="col-sm-1" >
    {/* <img style={{marginLeft:"45px"}} src={tick} width="30%" height="35%" alt=""/> */}

  </div>
  <p style={{color:"white"}}>􏁘 Live-Online Interactive Classes


</p>
</div>
<div className="row">
  <div className="col-sm-1" >
    {/* <img style={{marginLeft:"45px"}} src={tick} width="30%" height="35%" alt=""/> */}

  </div>
  <p style={{color:"white"}}>􏁘 Flexible Evening Classes
</p>
<br/>
</div>
<h6 style={{color:"white"}}>Next Batch Starts: February 8, 2021</h6>
<Couter></Couter>
<br/>
<button type="button" class="btn btn-warning" style={{paddingLeft:"20 px",paddingRight:"20px"}}>Get Started</button>
<br/>
<br/>
<div className="row">
  <div className="col-md-2"></div>
  <div className="col-md-8">
  <div class="card">
  <div class="card-body">
    <div className="row">
      <div className="col-md-6">
        <br/>
        
      <h5 style={{color:"#f7c11e"}}>Part Time - Evening Classes <sup style={{color:"blue"}}>New</sup></h5> 

      </div>
      <div className="col-md-6">
        <h6 >Schedule | Mon - Fri (6 pm - 11 pm)</h6>
        <h6>Live & Online Classes</h6>

        <h6>12 Months Highly Engaging Curriculum</h6>
</div></div> </div></div></div><div className="col-md-2"></div>
</div>
<br/>
<br/>
<h4 style={{border:"1px solid #f7c11e",color:"white",backgroundColor:"#f7c11e",textAlign:"center"}}>Next Batch: 8th February  
</h4>
<br/>
<br/>

<div className="row">
  <div className="col-md-4" style={{alignContent:"center",textAlign:"center"}}>
                <h1 style={{color:"blue"}}>1030+</h1>
                <h4 style={{color:"gray"}}>Enrolled Students</h4>
                <h6>Over 1,00,000 Student Applications</h6>
                <h6>Primary Selection Criteria - Commitment</h6>
  </div>
  <div className="col-md-4" style={{alignContent:"center",textAlign:"center"}}>
                <h1 style={{color:"blue"}}>185+</h1>
                <h4 style={{color:"gray"}}>Placement Partners</h4>
                <h6>Looking for Skills over Degrees
</h6>
                <h6>From Early Stage to Unicorn Startups

</h6>
  </div>
  <div className="col-md-4" style={{alignContent:"center",textAlign:"center"}}>
                <h1 style={{color:"blue"}}>390+</h1>
                <h4 style={{color:"gray"}}>Absolute Beginners
</h4>
                <h6>Beginner to Entry Level Course

</h6>
                <h6>Switch Career to Software Engineering



</h6>
  </div>


</div>
<br/>
<br/>
<br/>
<div className="row">
  <div className="col-md-6">
    

  </div>
  <div className="col-md-6">
    <div className="row">
      <div className="col-md-6">
      <div class="card">
  <div class="card-body">
    
  <h5>College Final Year
</h5>
<div style={{alignContent:"right",textAlign:"right",alignContent:"right"}}>
<img src={final} alt="" style={{alignContent:"right"}}/>

</div>
  </div>
</div>
      </div>
      <div className="col-md-6">
      <div class="card">
  <div class="card-body">
    
  <h5>Job Switcher
</h5>
<div style={{alignContent:"right",textAlign:"right",alignContent:"right"}}>
<img src={job} alt=""/>
</div>
  </div>
</div>
      </div>

    </div>
    
  
 

  </div>


</div>
<div className="row">
  <div className="col-md-6"  style={{textAlign:"center"}}>
  <h2 style={{color:"blue"}}>W<u>ho is it f</u>or?
</h2>
  </div>
 
</div>
<div className="row">
    <div className="col-md-6">
    </div>
    <div className="col-md-6">
    <div className="row">
      <div className="col-md-6">
      <div class="card">
  <div class="card-body">
  <h5>Job Seeker
</h5>
<div style={{alignContent:"right",textAlign:"right",alignContent:"right"}}>
<img src={jobseek } alt=""/></div>
  </div>
</div>
      </div>
      <div className="col-md-6">
      <div class="card">
  <div class="card-body">
    
  <h5>12th Complete

</h5>
<div style={{alignContent:"right",textAlign:"right",alignContent:"right"}}>
<img src={school} alt=""/>
  </div></div>
</div>
      </div>

    </div>
    </div>
  </div>







  <br/><br/>

<h3 style={{alignContent:"center",textAlign:"center",color:"blue"}}>How do<u>es Attain</u>U help?
</h3>
<br/>
<p style={{color:"black",textAlign:"center"}}>With AttainU you can completely re-write your career. No prior coding knowledge needed. Only willingness to put in efforts is required. Learn in-depth Software Development besides interview preparation. We prioritize on teaching excellence above all else.

</p>

<br/>
<br/>
<br/>
<div className="row">
  {/* <div className="col-md-1"></div> */}
  <div className="col-md-4"style={{alignContent:"center",textAlign:"center"}}>
<img src={col} alt="" width='80px' height="80px" /> 

<p style={{marginTop:"15px"}}>Out of 90 lakhs only 15% get direct jobs rest are unemployed</p>
 
  </div>
  <div className="col-md-4"style={{alignContent:"center",textAlign:"center"}}>
<img src={offline} alt="" width='80px' height="80px" /> 

<p style={{marginTop:"15px"}}>Quality and the Industry alignment are the biggest concerns with college & offline course
</p>
 
  </div>
  <div className="col-md-4"style={{alignContent:"center",textAlign:"center"}}>
<img src={int} alt="" width='80px' height="80px" /> 

<p style={{marginTop:"15px"}}>Online self paced courses, have approx. 5% completion rates due to low engagement
</p>
 
  </div>  <div className="col-md-1"></div>

</div>

<br/>
<br/>
<h3 style={{alignContent:"center",textAlign:"center",color:"blue"}}>Placement <u>Offers</u> at AttainU
</h3>

<hr/> 

<div class="card">
  <div class="card-body" style={{backgroundColor:"#f7c11e"}}>
    <div className="row">
<div className="col-md-4">
  <h5 style={{color:"white"}}>Ready to get started?
</h5>
</div>
<div className="col-md-3">    <input type="email" placeholder="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div className="col-md-3">    <input type="email" placeholder="Phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div className="col-md-2">
<button type="button" class="btn " style={{ color:"white",backgroundColor:"#163169"}}>Get Started</button>

</div>

    </div>
  </div>
</div>


<hr/>

<div className="row">
  <div className="col-md-6">
  <div class="navbar-inner">
                 
                
         <img src={brand} alt="" width="30px" height="30px" />
        <b> <a class="navbar-brand"style={{
               color:"blue",
               marginLeft:"5px  "
             
             }} href="#">AttainU</a> </b>
             <br/>  
             <br/>
             <p style={{color:"blue",fontSize:"15px"}}>
             AttainU is a scalable college alternative, focusing on high-quality, industry-aligned learning outcomes, targeted towards highly motivated individuals looking to get into high growth careers
             </p>
             <br/>
             <p style={{color:"blue",fontSize:"15px"}}>
             * Registration fee applicable


             </p>
             <img src={link} alt="" width="30px" height="30px" /> &nbsp;&nbsp;
             <img  src={fb} alt="" width="30px" height="30px"  />&nbsp;&nbsp;
             <img  src={ you}alt="" width="30px" height="30px"  />



             </div>

  </div>
  <div className="col-md-3">
  <b><u style={{color:"blue",fontSize:"18px"}}>
  Important Links

</u></b>
<br/>

<ul>
  <li style={{color:"blue",fontSize:"14px"}}>
  Blog

  </li>
  <li style={{color:"blue",fontSize:"14px"}}>
  Forum
  </li>
  <li style={{color:"blue",fontSize:"14px"}}>
  Privacy Policy
  </li>
  <li style={{color:"blue",fontSize:"14px"}}>
  Terms & Conditions  </li>
  <li style={{color:"blue",fontSize:"14px"}}>
  Sitemap  </li>

</ul>
  </div>

  <div className="col-md-3">
  <b><u style={{color:"blue",fontSize:"18px"}}>
  Contact Us</u></b>
<br/>
<br/>

 <div  style={{color:"blue",fontSize:"14px",whiteSpace:"pre-wrap"}}>

For Admissions:
080-47192019
admissions@attainu.com </div>
  <br/>
<div  style={{color:"blue",fontSize:"14px",whiteSpace:"pre-wrap"}}>

For Hiring Partners:
hiringpartners@attainu.com </div>
<br/>

<div  style={{color:"blue",fontSize:"14px",whiteSpace:"pre-wrap"}}>

Office Address:
BHIVE Workspace, L-148, 5th Main Rd,
Sector 6, HSR Layout, Bengaluru,
Karnataka 560102 </div>

  </div>
  <hr/>

  
  

</div>
<hr/>
<h6 style={{color:"#f7c11e",alignContent:"center",textAlign:"center"}}>Copyright &#169; 2020, LeetU Education Pvt. Ltd.
</h6>

<hr/>
</div>

       

        
        
    </div>;
  }
}

export default Home;
