import uniqid from 'uniqid'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import LaunchIcon from '@material-ui/icons/Launch'

import { BsGithub} from "react-icons/bs";
import {BsFillArrowUpRightCircleFill} from "react-icons/bs";
import './ProjectContainer.css'
// import './ProjectContainer.css'


// John Smith

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    <img className='project_url' src={project.url} alt="" />
 

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a 
      style={{fontSize:"30px"}}
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target="_blank"
      >
        <BsGithub />
      </a>
    )}

    {project.livePreview && (
      <a
      style={{fontSize:"30px"}}
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target="_blank"
      >
        <BsFillArrowUpRightCircleFill />
      </a>
    )}
  </div>
)

export default ProjectContainer
