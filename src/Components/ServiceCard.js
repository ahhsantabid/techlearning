import React from 'react'
import '../Css/ServicesStyle.css'

const ServiceCard = ({title,image,para}) => {
  return (
    <div>

<div className="card">
  
          <h2 className='heading'>{title}</h2>
          <img src={image} alt="" className='serviceImg' />
          <p className='para'>{para}</p><hr />
          <div className="btnBox">
            <div className="btn">
              <button className='btn btn-success'>Enroll now</button>
            </div>
          </div>
        </div>
        </div>
      
      
        

          

       
   
  )
}

export default ServiceCard