import React from 'react'
import './Navbar.scss'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="logo">
          <span>T</span>
          <div className="dot"></div>
        </div>
        <span style={{color: '#f6e8f8'}}>Nyariki</span>
      </div>
      <div className='links'>
        <Link 
          to='home' 
          className='link'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}                         
        >
          <span>home</span>
        </Link>
        <Link 
          to='services' 
          className='link'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}                  
        >
          <span>services</span>
        </Link>
        <Link 
          to='portfolio' 
          className='link'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}                  
        >
          <span>portfolio</span>
        </Link>
        <Link 
          to='resume' 
          className='link'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}                  
        >
          <span>resume</span>
        </Link>
        <Link 
          to='contact' 
          className='link'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}                  
        >
          <span>contact</span>
        </Link>
      </div>
      <a href="Thadeus Nyariki Resume.pdf" download="Thadeus Nyariki Resume.pdf" style={{textDecoration: "none"}}>     
        <div className="button">
          download cv      
        </div>  
      </a>    
    </div>
  )
}

export default Navbar