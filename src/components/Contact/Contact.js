import { contact } from '../../portfolio'
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

import { MdEmail } from "react-icons/md";


// Created By Naquee

const Contact = () => {
  if (!contact.email) return null

  return (

   
    <section className='section contact center' id='contact'>
    
      <h2 className='section__title'>Contact me</h2>
      <a href={`mailto:${contact.email}`}  target="_blank">
      
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      
      <p style={{marginTop:"1rem"}}><span > <BsTelephoneFill/> Phone no. :  </span>{contact.cont}</p>
      <p style={{marginTop:"1rem"}}><span > <MdEmail/>  Email :  </span>{contact.email}</p>
     
      <p style={{marginTop:"1rem"}}>Linkedln :  <a href="https://www.linkedin.com/in/naquee-alam-431b53208/" target="_blank"><FaLinkedin/></a>  </p>

     
    </section>
  )
}

export default Contact
