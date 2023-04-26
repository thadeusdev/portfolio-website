import React from 'react'
import './Services.scss'
import { 
  FaDesktop,
  FaLaptop,
  FaRegLightbulb 
} from "react-icons/fa"

const Services = () => {
  return (
    <div className='services'>
      <span style={{color: '#f40840', textTransform: 'uppercase', fontWeight: 500}}>my services</span>
      <h2>what i do</h2>
      <div className="items">
        <div className="item">
          <FaDesktop className='icon'/>
          <h3>Quality Websites</h3>
          <span>
            Quality is the first thing I think about when working on a project. Almost 80% of visitors are on mobile, so responsiveness and mobile-first are my goals while developing a website.
          </span>
        </div>
        <div className="item">
          <FaLaptop className='icon'/>
          <h3>Design aimed at users</h3>
          <span>
            Designing engaging and meaningful user experiences is a competitive advantage to differentiate yourself from competitors, satisfy your customers and, consequently, achieve your business goals.
          </span>
        </div>
        <div className="item">
          <FaRegLightbulb className='icon'/>
          <h3>A Creative Mind</h3>
          <span>
            I've always thought that work is an expression of one's personality: a piece of code is no less creative than a well-made layout, and a layout is only successful when it transforms technical limitations into strengths.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Services