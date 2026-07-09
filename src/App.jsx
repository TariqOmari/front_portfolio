import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import About from './pages/About'
import Companies from './pages/Companies'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Techs from './pages/Techs'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/companies' element={<Companies/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/techs' element={<Techs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  )
}