import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';
import { 
  FiTwitter, 
  FiGithub, 
  FiLinkedin,
  FiFacebook,
  FiYoutube,
  FiInstagram
} from "react-icons/fi";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <div className="intro">
          <h3>
            Hello&#44; <span>I&#39;m</span>
          </h3>
          <h2>Thadeus Nyariki</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Data Center Engineer</div>
              <div className="i-title-item">Physicist</div>
            </div>
          </div>
        </div>
        <p>
          Welcome to my Professional Portfolio and Expertise Hub!
          <br />
          <br />
          As an accomplished Data Center Facility Engineer&#44; Software
          Developer&#44; and Physicist&#44; I am excited to share my journey and
          expertise with you. With a passion for technology and a deep
          understanding of the principles that drive it&#44; I have honed my
          skills in optimizing and maintaining state-of-the-art data center
          infrastructures while also crafting innovative software solutions.
          <br />
          <br />
          Explore my profile to learn more about how I bridge the worlds of
          engineering&#44; development&#44; and physics to deliver reliable&#44;
          high-performance solutions for today&#39;s technological challenges.
        </p>
        <div className="social">
          <h3>find me on</h3>
          <div className="social-items">
            <Link to="https://github.com/thadeusdev" className="social-item">
              <FiGithub className="icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/thadeus-nyariki/"
              className="social-item"
            >
              <FiLinkedin className="icon" />
            </Link>
            <Link to="https://twitter.com/thadeus617" className="social-item">
              <FiTwitter className="icon" />
            </Link>
            <Link to="/" className="social-item">
              <FiFacebook className="icon" />
            </Link>
            <Link to="/" className="social-item">
              <FiYoutube className="icon" />
            </Link>
            <Link to="/" className="social-item">
              <FiInstagram className="icon" />
            </Link>
          </div>
        </div>
        <div className="featured">
          <div className="featured-item">
            <h3>2+</h3>
            <span>year of experience</span>
          </div>
          <div className="featured-item">
            <h3>700+</h3>
            <span>global working client</span>
          </div>
          <div className="featured-item">
            <h3>30+</h3>
            <span>awards win</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="frame"></div>
        <img src={require('../../assets/hero.png')} alt="" />
      </div>
    </div>
  );
}

export default Home