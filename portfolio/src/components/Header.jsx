import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'
import signature from '/src/assets/Signature_Transparent.png'

function Header({ theme, toggleTheme }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <header className="site-header">
            <div className="header-content">
                <Link to="/" className="logo-link" onClick={closeMobileMenu}>
                    <img src={signature} alt="Shivam Desai Signature" className="signature-logo" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="main-nav desktop-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                    <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
                    <NavLink to="/bts" className={({ isActive }) => isActive ? 'active' : ''}>BTS</NavLink>

                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Dark Mode">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </nav>

                {/* Hamburger Menu Button */}
                <button
                    className="hamburger-button"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Mobile Menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
                        <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={closeMobileMenu} aria-label="Close Menu">
                                ✕
                            </button>

                            <div className="mobile-nav-links">
                                <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                    Home
                                </NavLink>
                                <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                    About
                                </NavLink>
                                <NavLink to="/experience" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                    Experience
                                </NavLink>
                                <NavLink to="/projects" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                    Projects
                                </NavLink>
                                <NavLink to="/bts" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                    BTS
                                </NavLink>

                                <button onClick={() => { toggleTheme(); closeMobileMenu(); }} className="theme-toggle mobile-theme-toggle">
                                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
