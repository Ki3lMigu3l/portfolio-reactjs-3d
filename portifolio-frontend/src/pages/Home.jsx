import React from 'react'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import '../styles/Home.css'
import Project from '../components/projects/Project'
import About from '../components/about/About'


function Home() {
  return (
    <><><Navbar/><Hero/></><Project/><About/></>
  )
}

export default Home