import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/HomeAboutStyle.css';

const About = () => {
  return (
    <>
     <div className="mainContainer">
      <div className="textContainer">
        <h1 className='text-center'>Know More About Us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officia quidem placeat fugiat, similique praesentium aut aliquam architecto ratione eum corporis quos. Tenetur, totam nulla!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit nobis ipsam? Esse, minus dicta!</p>

     
      </div>

      <div className="imgHome">
        <div className="image">
        <img src="https://images.pexels.com/photos/1184580/pexels-photo-1184580.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      </div>
    </div>
    </>
  )
}

export default About