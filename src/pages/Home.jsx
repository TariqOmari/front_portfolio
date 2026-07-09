import React from 'react'
import Navbar from '../components/Navbar'
import Landing from './Landing'
import About from './About'
import Companies from './Companies'
import Projects from './Projects'
import Services from './Services'
import Techs from './Techs'
import Contact from './Contact'
import Blog from './Blog'

export default function Home() {
  return (
    <div>
      <Navbar/>
      
      <section id="landing">
        <Landing/>
      </section>
      
      <section id="about">
        <About/>
      </section>
      
      <section id="companies">
        <Companies/>
      </section>
      
      <section id="projects">
        <Projects/>
      </section>

      <section id="services">
        <Services/>
      </section>

      <section id="techs">
        <Techs/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
      
      <section id="blog">
        <Blog/>
      </section>
    </div>
  )
}