import React from 'react'
import './Portfolio.scss'
import { 
  AiOutlineArrowRight 
} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="top">
        <span style={{color: '#f40840', textTransform: 'uppercase', fontWeight: 500}}>award winning work</span>
        <h2>recent works</h2>
      </div>
      <div className="works">
        <div className="item">
          <div className="item-browser">
            <div className="item-circle"></div>
            <div className="item-circle"></div>
            <div className="item-circle"></div>
          </div>
          <a href="https://carguruz.netlify.app/" target="_blank" rel="noreferrer">
            <img src={require('../../assets/carguruz.png')} alt="" />
          </a>
        </div>
        <div className="item">
          <div className="item-browser">
            <div className="item-circle"></div>
            <div className="item-circle"></div>
            <div className="item-circle"></div>
          </div>
          <a href="https://fiverr-thadeus.netlify.app/" target="_blank" rel="noreferrer">
            <img src={require('../../assets/fiverr.png')} alt="" />
          </a>
        </div>
        <div className="item">
          <div className="item-browser">
            <div className="item-circle"></div>
            <div className="item-circle"></div>
            <div className="item-circle"></div>
          </div>
          <a href="https://ecommerce-thadeus.netlify.app/" target="_blank" rel="noreferrer">
            <img src={require('../../assets/ecommerce.png')} alt="" />
          </a>
        </div>
      </div>
      <div className="more">
        <Link to="https://thadeus-projects.netlify.app/" style={{textDecoration: "none"}}>
          <button>
            View All Works 
            <AiOutlineArrowRight className='more-icon'/>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio