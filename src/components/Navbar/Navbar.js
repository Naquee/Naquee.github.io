import { useContext, useState } from 'react'
// import Brightness2Icon from '@material-ui/icons/Brightness2'
// import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
// import MenuIcon from '@material-ui/icons/Menu'
// import CloseIcon from '@material-ui/icons/Close'

import { BsFillMoonFill,BsFillBrightnessHighFill,BsFillBackspaceReverseFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

// John Smith.

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center_nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
      style={{fontSize:"25px",paddingBottom:"3rem"}}
     
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <BsFillBrightnessHighFill/> : <BsFillMoonFill />}
      </button>
      
      <button
      style={{fontSize:"22px",zIndex:"-1"}}
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <BsFillBackspaceReverseFill /> : <GiHamburgerMenu />}
      </button>
    </nav>
  )
}

export default Navbar
