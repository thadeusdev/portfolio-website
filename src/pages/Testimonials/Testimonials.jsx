import React from 'react'
import './Testimonials.scss'
import { 
  AiOutlineArrowLeft,
  AiOutlineArrowRight 
} from "react-icons/ai";
import { MdOutlineFormatQuote, MdStarBorderPurple500 } from "react-icons/md";
import Slider from 'infinite-react-carousel';

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className="top">
        <div className="left">
          <span style={{color: '#f40840', textTransform: 'uppercase', fontWeight: 500}}>testimonials</span>
          <h2>what clients say</h2>
        </div>
        <div className="right">
          <button>
            <AiOutlineArrowLeft className='icon'/>
          </button>
          <button>
            <AiOutlineArrowRight  className='icon'/>
          </button>
        </div>
      </div>
      <div className="bottom">
        <Slider dots slidesToShow={3} arrows={false} autoplay={true} autoplaySpeed={3000} duration={700}>
          <div className="testimonial-item">
            <div className="top-item">
              <div className="quote">
                <MdOutlineFormatQuote/>
              </div>
              <div className="star">
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
              </div> 
            </div>
            <div className="center-item">
              <span>
                I'm thrilled with your software and would highly recommend it to anyone in need of a powerful business management tool.
              </span>
            </div>
            <div className="bottom-item">
              <img src={require('../../assets/hero.jpg')} alt="" />
              <div className="details">
                <h4>Thadeus Nyariki</h4>
                <span>Business manager and CEO</span>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="top-item">
              <div className="quote">
                <MdOutlineFormatQuote/>
              </div>
              <div className="star">
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
              </div> 
            </div>
            <div className="center-item">
              <span>
                I just wanted to take a moment to express my gratitude for the incredible software you've created.
              </span>
            </div>
            <div className="bottom-item">
              <img src={require('../../assets/hero.jpg')} alt="" />
              <div className="details">
                <h4>Thadeus Nyariki</h4>
                <span>Business manager and CEO</span>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="top-item">
              <div className="quote">
                <MdOutlineFormatQuote/>
              </div>
              <div className="star">
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
              </div> 
            </div>
            <div className="center-item">
              <span>
              As a small business owner, I was struggling to keep track of all my finances and client data. But since implementing your software, my life has become so much easier.
              </span>
            </div>
            <div className="bottom-item">
              <img src={require('../../assets/hero.jpg')} alt="" />
              <div className="details">
                <h4>Thadeus Nyariki</h4>
                <span>Business manager and CEO</span>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="top-item">
              <div className="quote">
                <MdOutlineFormatQuote/>
              </div>
              <div className="star">
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
              </div> 
            </div>
            <div className="center-item">
              <span>
                The interface is intuitive and user-friendly, and I've been able to streamline my entire workflow.
              </span>
            </div>
            <div className="bottom-item">
              <img src={require('../../assets/hero.jpg')} alt="" />
              <div className="details">
                <h4>Thadeus Nyariki</h4>
                <span>Business manager and CEO</span>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="top-item">
              <div className="quote">
                <MdOutlineFormatQuote/>
              </div>
              <div className="star">
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
                <div className="star-icon">
                  <MdStarBorderPurple500/>
                </div>
              </div> 
            </div>
            <div className="center-item">
              <span>
                I particularly love the customizable reports feature, which has allowed me to gain a deeper insight into my business's performance
              </span>
            </div>
            <div className="bottom-item">
              <img src={require('../../assets/hero.jpg')} alt="" />
              <div className="details">
                <h4>Thadeus Nyariki</h4>
                <span>Business manager and CEO</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials
