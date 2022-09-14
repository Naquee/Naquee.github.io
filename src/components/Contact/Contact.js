import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (

   
    <section className='section contact center' id='contact'>
    
      <h2 className='section__title'>Contact me</h2>
      <a href={`mailto:${contact.email}`}>
      
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      
      <p style={{marginTop:"1rem"}}><span style={{color:"blue"}}>Phone no. :  </span>{contact.cont}</p>
    </section>
  )
}

export default Contact
