import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";



const Footer = () => {
  return (
    <>
    
   <footer>

    <div className="container container-flex">

     <div className="icons">
      <BsTwitter className='icon'/>
      <BsFacebook className='icon'/>
      <HiOutlineMail className='icon'/>
      <AiFillLinkedin className='icon'/>

     </div>

     <div className="line">
      <hr />
      <hr />

     </div>

     <div className="copyright">
      <p>All right reserved &copy; copyright</p>
      <p>PoweredBy @ahhsanTabid</p>
     </div>

     


    </div>
    </footer>
    
    </>
  )
}

export default Footer