import './StyleSheets/Navbar.css'
import { useState } from 'react'

export function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <span className='navbar__brand'>
          <h1>Portfolio | Brian Benegas</h1>
        </span>

        <section className='navbar__lista'>
          <ul>
            <li className='navbar__item-list'>
              <a href='#'>About Me</a>
            </li>
            <li className='navbar__item-list'>
              <a href='#'>Projects</a>
            </li>
            <li className='navbar__item-list'>
              <a href='#'>Skills</a>
            </li>
            <li className='navbar__item-list'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  )
}
