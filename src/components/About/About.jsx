import React from 'react'
import './About.css'
import about from '../../assets/aboutImage.png'
import cursor from '../../assets/cursorIcon.png'
import server from '../../assets/serverIcon.png'

const About = () => {
  return (
    <section  className='aboutcontainer' id='about'>
          <div className='about'>
          <img src={about} alt="my about pics" className='aboutImage' />
          </div>
        <div className='aboutcontent'>
      
        <ul className='aboutItems'>
          <li className='aboutItem'>
            <div className='mobileabout'>
<img src={cursor} alt="Cursor icon" />
            <div className='aboutItemText'>
              <h3>Frontend Developer</h3>
              <p>
               I'm a passionate web developer with a keen eye for design and a strong foundation in front-end. I have developed a diverse portfolio that showcases my ability to create beautiful, functional, and user-friendly websites.
              </p>
            </div>
            </div>
          </li>
          <li className='aboutItem'>
            <div className='mobileabout'>
            <img src={server} alt="Server icon" />
            <div className='aboutItemText'>
              <h3>Collaboration</h3>
              <p>
              Collaboration is at the heart of my work ethic. I enjoy working closely with clients, designers, and other developers to bring ideas to life. Whether it's a simple landing page or a complex web application, I strive to deliver solutions that meet the needs and exceed the expectations of my clients.
              </p>
            </div>
            </div>
            
          </li>
          <li className='aboutItem'>
             <div className='mobileabout'>
            <img src={cursor} alt="UI icon" />
            <div className="aboutItemText">
              <h3>Open to Opportunities</h3>
              <p>
              I'm always open to new opportunities and challenges, so feel free to reach out if you'd like to collaborate or just chat about the latest in web development!
  </p>
            </div>
            </div>
            
          </li>
        </ul>
        </div>
       
    </section>
  )
}

export default About