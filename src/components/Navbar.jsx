import './StyleSheets/Navbar.css'

export function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <span className='navbar__brand'>
          <h1>Brian Benegas</h1>
        </span>
        <section className='navbar__lista'>
          <ul>
            <li className='navbar__item-list'>
              <a href='#'></a>
            </li>
            <li className='navbar__item-list'>
              <a href='#'></a>
            </li>
            <li className='navbar__item-list'>
              <a href='#'></a>
            </li>
            <li className='navbar__item-list'>
              <a href='#'></a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  )
}
