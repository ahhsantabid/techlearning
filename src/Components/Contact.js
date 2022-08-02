import React from 'react'
import '../Css/ContactStyle.css';

import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div>

        
        <div className="contactContainer">
          <div className="locationContainer">
            <h1 className='location '>  Our Location <ImLocation className='locationIcon'/> </h1>
            <p className='para'>Raj Mohol Villa, House#125/A, Section#B, Street#23/M, Plot#23/324, Mirpur Road, BebagNagar, Pallabi,Dhaka-12165, Bangladesh. <hr /><br />Email: techlearning@yahoo.com <br /> Mobile: +8801263512242, +880158632147</p>         
          </div>

          <div className="locationImage">
            <img src="./map.png" alt="" />
          </div>

        </div>



        
     <div className="containerForm my-5">
      <h1 className="text-center my-4">Contact Us</h1>
      <div className="container">
     <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="+8801#########"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Query Box</label>
  <textarea class="form-control" placeholder='Describe your query here...' id="exampleFormControlTextarea1" rows="3">  </textarea>

</div>
</div>


    </div>
    </div>
    
  )
}

export default Contact