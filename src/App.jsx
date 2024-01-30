import { useState } from 'react'
import './App.css'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Navbar } from './components/Navbar'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Footer />
      </div>
    </>
  )
}

export default App
