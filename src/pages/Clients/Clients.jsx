import React from 'react'
import './Clients.scss'

const Clients = () => {
  return (
    <div className='clients'>
      <div className="top">
        <span style={{color: '#f40840', textTransform: 'uppercase', fontWeight: 500}}>best customers</span>
        <h2>selected clients</h2>
      </div>
      <div className="bottom">
        <div className="bottom-item">
          <img src={require('../../assets/Amazon.png')} alt="" />
        </div>
        <div className="bottom-item">
          <img src={require('../../assets/paix.png')} alt="" />
        </div>
        <div className="bottom-item">
          <img src={require('../../assets/microsoft.png')} alt="" />
        </div>
        <div className="bottom-item">
          <img src={require('../../assets/google.png')} alt="" />
        </div>
        <div className="bottom-item">
          <img src={require('../../assets/SpaceX.png')} alt="" />
        </div>
        <div className="bottom-item">
          <img src={require('../../assets/Diageo.png')} alt="" />
        </div>
        <div className="bottom-item">
          <img src={require('../../assets/facebook.png')} alt="" />
        </div>
        <div className="bottom-item">
          <img src={require('../../assets/MAN.png')} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Clients