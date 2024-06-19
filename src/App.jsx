import './App.css'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Hero from './components/Hero/Hero'
import Navbar from "./components/Navbar/Navbar"
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'

function App() {
  

  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
