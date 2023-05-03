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
            <span style={{color: '#f40840', textTransform: 'capitalize', fontWeight: 500}}>Jun 2022 - Present</span>
          </div>
          <div className="left-bottom">
            <div className="left-container">
              <div className="line-up"></div>
              <div className="left-item">
                <div className="knot"></div>
                <div className="line-across"></div>
                <div className="item-wrapper">
                  <div className="header">
                    <h3>Software Developer</h3>
                    <span style={{marginBottom: "20px"}}>
                      Pan African IX Datacenter (Jan 2023-present)
                    </span>
                  </div>
                  <>
                  <p>
                    Optimized application functionality and performance by 30% through the seamless
                    integration of custom UI components with third-party libraries.
                  </p>
                  <p>
                    Streamlined web application development using React, reducing page load time by
                    50% and increasing user engagement by 25%.
                  </p>
                  <p>
                    Innovated application performance and maintainability by implementing Redux,
                    resulting in a 25% reduction in load times and a 20% increase in code
                    maintainability.
                  </p>
                  <p>
                    Upgraded the development process by successfully implementing continuous
                    integration and deployment processes, reducing build times by 40%, and decreasing
                    the number of bugs introduced during releases.
                  </p>
                  <p>
                    Collaborated with team members to provide valuable code reviews, resulting in a
                    25% increase in code quality.
                  </p>
                  </>
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
                    <h3>Software Developer</h3>
                    <span style={{marginBottom: "20px"}}>
                      Moringa School (Jun 2022-Feb 2023)
                    </span>
                  </div>
                  <>
                  <p>
                    Developed web applications using React and Ruby on Rails, resulting in a 20%
                    increase in user engagement and a 30% optimization in overall application
                    performance.
                  </p>
                  <p>
                    Collaborated with UX designers to deliver intuitive user interfaces, increasing user
                    satisfaction by 15%.
                  </p>
                  <p>
                    Created reusable UI components, improving application maintainability by 20% and
                    reducing development time by 25%.
                  </p>
                  <p>
                    Effectively utilized Git for version control and worked with other developers to resolve
                    code conflicts, reducing code review feedback time by 30%.
                  </p>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="left-top">
            <h3>Education Quality</h3>
            <span style={{color: '#f40840', textTransform: 'capitalize', fontWeight: 500}}>2015 - 2023</span>
          </div>
          <div className="left-bottom">
            <div className="left-container">
              <div className="line-up"></div>
              <div className="left-item">
                <div className="knot"></div>
                <div className="line-across"></div>
                <div className="item-wrapper">
                  <div className="header">
                    <h3>Softwate Development</h3>
                    <span style={{marginBottom: "20px"}}>
                      Moringa School (2022-2023)
                    </span>
                  </div>
                  <>
                  <p>
                    In this intensive bootcamp, I learned how to build full-stack web applications using HTML, CSS, JavaScript, React, Ruby, and Ruby on Rails. The curriculum covered topics such as front-end development, back-end development, databases, APIs, and deployment. I gained hands-on experience by completing various projects, including a group project where I worked as Scrum master and collaborated with other developers to build a real-world web application.In this intensive bootcamp, I learned how to build full-stack web applications using HTML, CSS, JavaScript, React, Ruby, and Ruby on Rails. The curriculum covered topics such as front-end development, back-end development, databases, APIs, and deployment. I gained hands-on experience by completing various projects, including a group project where I worked as Scrum master and collaborated with other developers to build a real-world web application.
                  </p>
                  <p>
                    Skills: React Native · Apollo GraphQL · Node.js · Git · Ruby on Rails · Ruby · React.js · JavaScript
                  </p>
                  </>
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
                  <>
                  <p>
                    In this program, I studied the fundamental principles of physics, including mechanics, thermodynamics, electromagnetism, and quantum mechanics. I also specialized in electronics and gained advanced knowledge in areas such as circuit design, microelectronics, semiconductor devices, and signal processing. This program equipped me with the technical expertise and research skills necessary to excel in the field of electronics.
                  </p>
                  <p>
                    Skills: C (Programming Language) · C++ · Robotics · Critical Thinking · Problem Solving · Analytical Skills
                  </p>
                  </>
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