import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#prices', label: 'Prices' },
  { href: '#contact', label: 'Contact' },
]

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className={isOpen ? 'is-open' : ''}>
      <div className="nav-bar">
        <a className="nav-logo" href="#">
          <span className="nav-logo-mark" aria-hidden="true">
            🎪
          </span>{' '}
          Funhouse Pup Cuts
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn-book-nav" href="#book">
          Book Now
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-mobile-panel"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="nav-toggle-lines" aria-hidden="true" />
        </button>
      </div>
      <div className="nav-mobile-panel" id="nav-mobile-panel">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
        <a className="btn-book-nav btn-book-nav--mobile" href="#book" onClick={handleLinkClick}>
          Book Now
        </a>
      </div>
    </nav>
  )
}

export default NavBar
