// import GitHubIcon from '@material-ui/icons/GitHub'
// import LinkedInIcon from '@material-ui/icons/LinkedIn'
// import { FaGithub } from "react-icons/fa";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { about } from '../../portfolio'
import './About.css'


// John Smith.

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
          <a href="https://drive.google.com/file/d/1Ly0vJ4XistRY3dgWkBS3sW4tnivqMG3R/view?usp=sharing">
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
              >
                <FaGithub/>
              </a>
            )}

            {social.linkedin && (
              <a style={{fontSize:"35px",color:"black",padding:".5rem"}}
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
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
