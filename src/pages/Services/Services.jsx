import React from 'react'
import './Services.scss'
import { 
  FaDesktop,
  FaLaptop,
  FaRegLightbulb 
} from "react-icons/fa"

const Services = () => {
  return (
    <div className="services">
      <span
        style={{
          color: '#f40840',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}
      >
        my services
      </span>
      <h2>what i do</h2>
      <div className="items">
        <div className="item">
          <FaDesktop className="icon" />
          <h3>Quality Websites</h3>
          <p>
            Quality is the first thing I think about when working on a
            project&#46; Almost 80&#37; of visitors are on mobile	&#44; so
            responsiveness and mobile-first are my goals while developing a
            website&#46;
          </p>
        </div>
        <div className="item">
          <FaLaptop className="icon" />
          <h3>Design aimed at users</h3>
          <p>
            Designing engaging and meaningful user experiences is a competitive
            advantage to differentiate yourself from competitors	&#44; satisfy your
            customers and	&#44; consequently	&#44; achieve your business goals&#46;
          </p>
        </div>
        <div className="item">
          <FaRegLightbulb className="icon" />
          <h3>A Creative Mind</h3>
          <p>
            I&#39;ve always thought that work is an expression of one&#39;s personality:
            a piece of code is no less creative than a well-made layout	&#44; and a
            layout is only successful when it transforms technical limitations
            into strengths&#46;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services