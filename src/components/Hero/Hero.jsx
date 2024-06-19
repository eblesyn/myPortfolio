import React from 'react'
import "./Hero.css"
import smile from "../../assets/smile.jpg"

const Hero = () => {
  return (
    <section className='container'>
<div className='content'>
    <h1 className='title'>Hi, I'm Blessing</h1>
    <p className='description'>I'm a passionate Front-end Developer </p>
    <a href="https://wa.me/+2349042795981"
target="_blank"
rel="noreferrer" className='contactBtn'>Contact Me</a>
</div>
<img src={smile} alt="hero image of me"  className='heroImg'/>
<div className='topBlur' />
      <div className='bottomBlur' />
    </section>
  )
}

export default Hero
