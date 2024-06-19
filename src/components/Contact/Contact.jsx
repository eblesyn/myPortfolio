import React from 'react'
import './Contact.css'
import email from '../../assets/emailIcon.png'
import linkledin from '../../assets/linkedinIcon.png'
import github from '../../assets/githubIcon.png'

const Contact = () => {
  return (
    <footer>
<section id='contact' className='contactcontainer'>
<div className='text'>
    <h2>Contact Me</h2>
    <p>Feel free to reach out!</p>
</div>
<ul className='links'>
    <li className='link'>
        <img src={email} alt="" />
        <a href="mailto:eblesyno@gmail.com" target="_blank"
rel="noreferrer">eblesyno@gmail.com</a>
    </li>
    <li className='link'>
        <img src={linkledin} alt="" />
        <a href="https://www.linkedin.com/in/emmanuel-ojochenemi-blessing-098496220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noreferrer">Emmanuel Ojochenemi Blessing</a>
    </li>
    <li className='link'>
        <img src={github} alt="" />
        <a href="https://github.com/eblesyn"
        target="_blank"
        rel="noreferrer">github.com/eblesyn</a>
    </li>
</ul>
</section>
    </footer>
    
  )
}

export default Contact