import React from 'react'
import ServiceCard from './ServiceCard'
import '../Css/ServicesStyle.css'
import Data from './ApiDataServices'

const Services = () => {
  return (
    <div>
      <h1 className="text-center my-3">Our Packages</h1>

      <div className="services">
      
       {Data.map((values)=>{
        return(
          <>
          <ServiceCard  title={values.title} 
          image={values.image}
           para={values.para}/>
           <hr />
          
          </>
        )
       })}
</div>
              
      </div>
      
    

   
  )
}

export default Services