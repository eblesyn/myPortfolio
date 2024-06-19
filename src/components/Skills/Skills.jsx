import React from 'react'
import './Skills.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import java from '../../assets/java.png'
import react from '../../assets/react.png'
import figma from '../../assets/figma.png'

const Skills= () => {
  return (
    <section id='skills' className='skillscontainer'>
            <h2 className='skillstitle'>Skills</h2>
            <div className='skillscontent'>
            <div className='skillImageContainer'>
<img src={html} alt="" />
<p>HTML</p>
            </div>
            <div className='skillImageContainer'>
<img src={css} alt="" />
<p>CSS</p>
            </div>
            <div className='skillImageContainer'>
<img src={java} alt="" />
<p>JAVA SCRIPT</p>
            </div>
            <div className='skillImageContainer'>
<img src={react} alt="" />
<p>REACT</p>
            </div>
            <div className='skillImageContainer'>
<img src={figma} alt="" />
<p>FIGMA</p>
  
            </div>
            </div>
    </section>
  )
}

export default Skills