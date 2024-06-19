import React from 'react'
import './Project.css'
import project from '../../assets/project.png'
const Project = () => {
  return (
 <section id='projects' className='projectcontainer'>
    <h1 className='projecttitle'>Projects</h1>
    <div className='projectcontent'>
            <div className='card'>
                <div className='card1'>
                <img src={project} alt="" />
                <a href="https://b-website.vercel.app/"
                target="_blank"
                rel="noreferrer"  className='cardtitle'>BWebsite</a>
                <p>A responsive platform built with React and Tailwind CSS, supporting both dark and light modes. Leveraging modern UI elements with @heroicons, framer-motion for animations, and react-hook-form for seamless form handling. the site offers a professional and dynamic user experience.</p>
                </div>
              
            </div>
            <div className='card'>
                <img src={project} alt="" />
              <a href="https://reacte-ecommerce.vercel.app/"
              target="_blank"
              rel="noreferrer"  className='cardtitle'>Ecommerce Website</a>
                <p>A shopping shopping platform, offering a diverse range of products with an intuitive cart for easy item management. Enjoy a seamless and secure shopping experience, with options to add, remove, or reset items as you shop.</p>
            </div>
            <div className='card'>
                <img src={project} alt="" />
                <a href="https://hairstudio-website.vercel.app/"
                target="_blank"
                rel="noreferrer" className='cardtitle'>Hair-studio Website</a>
                <p> A responsive hair studio website, designed with a sophisticated user interface for an exceptional online experience. Seamlessly browse our services, book appointments, and explore stylist profiles, all from any device.
</p>
          
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