import React from 'react'
import './Project.css'
import project from '../../assets/project.png'
const Project = () => {
  return (
 <section id='projects' className='projectcontainer'>
    <h1 className='projecttitle'>Projects</h1>
    <div className='projectcontent'>
            <div className='card'>
              
                <img src={project} alt="" />
                <a href="https://b-website.vercel.app/"
                target="_blank"
                rel="noreferrer"  className='cardtitle'>BWebsite</a>
                <p>A responsive platform built with React and Tailwind CSS, supporting both dark and light modes. Leveraging modern UI elements with @heroicons, framer-motion for animations.</p>
                <button className='button'>
                  <a href="https://github.com/eblesyn/bWebsite"
                  target="_blank"
                  rel="noreferrer" className='Btn'> Code</a>
                </button>
              
            </div>
            <div className='card'>
                <img src={project} alt="" />
              <a href="https://reacte-ecommerce.vercel.app/"
              target="_blank"
              rel="noreferrer"  className='cardtitle'>Ecommerce Website</a>
                <p>A shopping shopping platform, offering a diverse range of products. Enjoy a seamless and secure shopping experience, with options to add, remove, or reset items as you shop.</p>
                <button className='button'>
                  <a href="https://github.com/eblesyn/ReacteEcommerce"
                  target="_blank"
                  rel="noreferrer" className='Btn'> Code</a>
                </button>
            </div>
            <div className='card'>
                <img src={project} alt="" />
                <a href="https://hairstudio-website.vercel.app/"
                target="_blank"
                rel="noreferrer" className='cardtitle'>Hair-studio Website</a>
                <p>A responsive hair studio website, designed with a sophisticated user interface for an exceptional online experience, showcases the studio's services, stylists, and portfolio.</p>
                <button className='button'>
                  <a href="https://github.com/eblesyn/hairstudio-website"
                  target="_blank"
                  rel="noreferrer" className='Btn'> Code</a>
                </button>
            </div>
            <div className='card'>
                <img src={project} alt="" />
                <a href="https://typescript-gym-website.vercel.app/"
                target="_blank"
                rel="noreferrer" className='cardtitle'>Gym Website</a>
                <p>Built with TypeScript and TailwindCss, gym website ensures responsiveness across devices, delivering a seamless user experience from desktops to mobiles.
</p>
                  <button className='button'>
                  <a href="https://github.com/eblesyn/typescript-gym-website"
                  target="_blank"
                  rel="noreferrer" className='Btn'> Code</a>
                </button>
            </div>
    </div>
    <div className='Btndiv'>
    <a href="https://github.com/eblesyn" 
    target="_blank"
    rel="noreferrer" className='projectBtn'>View More</a>
    </div>
 </section>
  )
}

export default Project