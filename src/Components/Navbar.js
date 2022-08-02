import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/NavbarStyle.css'
import '../Css/FooterStyle.css'



import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";





const Navbar = () => {
  return (
    <>
   
    <header>

    <div className='container container-flex'>
      
    <div className="logoContainer">
  <NavLink to="/"><img src="https://media.istockphoto.com/photos/teamwork-coalition-of-people-graphic-design-3d-rendering-illustration-picture-id650613944?k=20&m=650613944&s=612x612&w=0&h=RGOVd-1qDB0VZnHcWbdp7SUxDg5XjWtIt9nvN18pImI=" alt="" className='logo' /></NavLink>
  </div> 


  <nav>
      <div className="list">
      <NavLink to="/" exact activeClassName=
        'activeItem' className="listItem"> Home</NavLink>
        <NavLink to="/about" exact activeClassName=
        'activeItem' className="listItem"> About</NavLink>
        <NavLink to="/contact" exact activeClassName=
        'activeItem' className="listItem"> Contact</NavLink>
        <NavLink to="/services" exact activeClassName=
        'activeItem' className="listItem"> Service</NavLink>
        <NavLink to="/policy" exact activeClassName=
        'activeItem' className="listItem"> Policy</NavLink>

      </div>
  </nav>

  <div className="icons">
  <BsSearch className='icon'/>
      <BsFillPersonFill className='icon'/>
      <BsFillTelephoneFill className='icon'/>

  </div>
      
      </div> 

      
   
</header>

    
    
    </>
  )
}

export default Navbar