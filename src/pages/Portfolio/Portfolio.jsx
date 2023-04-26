import React from 'react'
import './Portfolio.scss'

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
          <a href="http://" target="_blank" rel="noreferrer">
            <img src={require('../../assets/carguruz.png')} alt="" />
          </a>
        </div>
        <div className="item">
          <div className="item-browser">
            <div className="item-circle"></div>
            <div className="item-circle"></div>
            <div className="item-circle"></div>
          </div>
          <a href="http://" target="_blank" rel="noreferrer">
            <img src={require('../../assets/fiverr.png')} alt="" />
          </a>
        </div>
        <div className="item">
          <div className="item-browser">
            <div className="item-circle"></div>
            <div className="item-circle"></div>
            <div className="item-circle"></div>
          </div>
          <a href="http://" target="_blank" rel="noreferrer">
            <img src={require('../../assets/ecommerce.png')} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio