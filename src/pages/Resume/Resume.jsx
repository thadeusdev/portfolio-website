import React from 'react'
import './Resume.scss'

const Resume = () => {
  return (
    <div className='resume'>
      <div className="top">
        <span style={{color: '#f40840', textTransform: 'uppercase', fontWeight: 500}}>years of experience</span>
        <h2>my resume</h2>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="left-top">
            <h3>Job Experience</h3>
            <span style={{color: '#f40840', textTransform: 'capitalize', fontWeight: 500}}>Jan 2023 - Present</span>
          </div>
          <div className="left-bottom">
            <div className="left-container">
              <div className="line-up"></div>
              <div className="left-item">
                <div className="knot"></div>
                <div className="line-across"></div>
                <div className="item-wrapper">
                  <div className="header">
                    <h3>Bachelor of Science Physics</h3>
                    <span style={{marginBottom: "20px"}}>
                      Masinde Muliro University of science and technology (2015-2019)
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo fugiat praesentium blanditiis quae ut dolorem quam libero ad perspiciatis? Esse vero quo corporis ipsa numquam.
                  </p>
                </div>
              </div>
            </div>
            <div className="left-container">
              <div className="line-up"></div>
              <div className="left-item">
                <div className="knot"></div>
                <div className="line-across"></div>
                <div className="item-wrapper">
                  <div className="header">
                    <h3>Bachelor of Science Physics</h3>
                    <span style={{marginBottom: "20px"}}>
                      Masinde Muliro University of science and technology (2015-2019)
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo fugiat praesentium blanditiis quae ut dolorem quam libero ad perspiciatis? Esse vero quo corporis ipsa numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="left-top">
            <h3>Education Quality</h3>
            <span style={{color: '#f40840', textTransform: 'capitalize', fontWeight: 500}}>2015 - 2019</span>
          </div>
          <div className="left-bottom">
            <div className="left-container">
              <div className="line-up"></div>
              <div className="left-item">
                <div className="knot"></div>
                <div className="line-across"></div>
                <div className="item-wrapper">
                  <div className="header">
                    <h3>Bachelor of Science Physics</h3>
                    <span style={{marginBottom: "20px"}}>
                      Masinde Muliro University of science and technology (2015-2019)
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo fugiat praesentium blanditiis quae ut dolorem quam libero ad perspiciatis? Esse vero quo corporis ipsa numquam.
                  </p>
                </div>
              </div>
            </div>
            <div className="left-container">
              <div className="line-up"></div>
              <div className="left-item">
                <div className="knot"></div>
                <div className="line-across"></div>
                <div className="item-wrapper">
                  <div className="header">
                    <h3>Bachelor of Science Physics</h3>
                    <span style={{marginBottom: "20px"}}>
                      Masinde Muliro University of science and technology (2015-2019)
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo fugiat praesentium blanditiis quae ut dolorem quam libero ad perspiciatis? Esse vero quo corporis ipsa numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume