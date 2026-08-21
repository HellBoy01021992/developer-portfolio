import { useState, useEffect } from 'react'
import { Button } from './ui/Button'

const resumeUrl = '/documents/Subhradip_Roy_Resume.pdf'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [mobileMenuOpen])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-bg-secondary border-b border-border-color sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container-max py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-text-primary hover:text-accent transition-colors">
          SR
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="link-primary text-sm uppercase tracking-wide">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side - Resume button (desktop) and hamburger (mobile) */}
        <div className="flex items-center gap-4">
          {/* Resume button - desktop only */}
          <Button href={resumeUrl} download="Subhradip_Roy_Resume.pdf" size="sm" className="hidden md:inline-flex">
            Resume
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-secondary rounded"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-bg-primary border-t border-border-color py-4 px-4"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="link-primary text-sm uppercase tracking-wide block py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-border-color">
              <Button href={resumeUrl} download="Subhradip_Roy_Resume.pdf" size="sm" className="w-full">
                Download Resume
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
