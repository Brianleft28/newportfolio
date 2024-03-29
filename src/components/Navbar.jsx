import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useState, useEffect } from 'react'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/social-icon-1.png'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand href='#home' className='logo'>
            {/* <img src={logo} alt='Logo' /> */}
            BRIANDEV
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                href='#home'
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}>
                Home
              </Nav.Link>
              <Nav.Link
                href='#skills'
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}>
                Skills
              </Nav.Link>
              <Nav.Link
                href='#projects'
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}>
                Projects
              </Nav.Link>
            </Nav>

            <span className='navbar-text'>
              <div className='social-icon'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/brian-benegas-44770729b/'>
                  <img src={navIcon1} alt='Linkedin Logo' />
                </a>
                <a
                  target='_blank'
                  className='github'
                  href='https://github.com/Brianleft28'>
                  <img src={navIcon2} alt='Github Logo' />
                </a>
                <a
                  target='_blank'
                  href='https://www.instagram.com/briaan.benegas/'>
                  <img src={navIcon3} alt='Instagram Logo' />
                </a>
              </div>
              <a href='#email'>
                <button className='vvd'>
                  <span>Let's Connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
