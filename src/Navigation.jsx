import React, { useState, useEffect } from "react"
import "./Navigation.css"
import { Link, useLocation } from "react-router-dom"

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location.pathname])

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/work', label: 'Work' },
        { path: '/contact', label: 'Contact' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span className="logo-text">MLG</span>
                    <span className="logo-dot">.</span>
                </Link>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map(({ path, label }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="mailto:lmukhtar29@gmail.com" className="nav-hire-btn">
                            Hire Me
                        </a>
                    </li>
                </ul>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    )
}

export default Navigation
