import React from 'react'
import './Contact.scss'
import { 
  FiMap,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiSend 
} from "react-icons/fi";

const Contact = () => {
  return (
    <div className='contact'>
      <div className="top">
        <span style={{color: '#f40840', textTransform: 'uppercase', fontWeight: 500}}>contact</span>
        <h2>contact with me</h2>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="left-item">
            <FiMap className='icon'/>
            <span>11C Pangani, Nairobi</span>
          </div>
          <div className="left-item">
            <FiPhone className='icon'/>
            <span>254-759-272-383</span>
          </div>
          <div className="left-item">
            <FiMail className='icon'/>
            <span>thadeusnyariki94@gmail.com</span>
          </div>
          <div className="left-item">
            <FiCheckCircle className='icon'/>
            <span>Freelance Available</span>
          </div>
        </div>
        <div className="right">
          <form className="form">
            <div className="input">
              <div className="input-left">
                <input type="text" placeholder='Enter Your Name' />
                <input type="text" placeholder='Enter Your Email' />
              </div>
              <div className="input-right">             
                <input type="text" placeholder='Enter Your Phone' />              
                <input type="text" placeholder='Enter Your Subject' />
              </div> 
            </div>
            <div className="message">
              <textarea name="" id="" cols="30" rows="20" placeholder='Type Your Message' />
            </div>
            <div className="send">
              <button>
                Send Message
                <FiSend className='send-icon'/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact