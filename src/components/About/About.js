
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { about } from '../../portfolio'
import './About.css'
import Naquee_Resume from "./Naquee_Resume.pdf"


// Created By Naquee

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
    <div style={{display:"flex",margin:"auto"}}>
      <div>
      {name && (
        <h3 style={{fontSize:'45px'}}>
          Hi, I am <span className='about__name'>{name}.</span>
        </h3>
      )}
      </div>
      <div >
       <img style={{width:'50%',borderRadius:"50%"}} src="https://avatars.githubusercontent.com/u/100348982?v=4" alt="naki" />
      </div>
    </div>
    

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={Naquee_Resume} download>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a style={{fontSize:"35px",color:"black" ,padding:".5rem"}}
                href={social.github} 
                aria-label='github'
                className='link link--icon'
                target="_blank"
              >
                <FaGithub/>
              </a>
            )}

            {social.linkedin && (
              <a style={{fontSize:"35px",color:"black",padding:".5rem"}}
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank"
              >
                <FaLinkedin />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
