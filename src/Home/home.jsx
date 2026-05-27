import React from "react"
import "./home.css"
import Navigation from "../Navigation"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="home-page">
            <Navigation />

            <section className="hero">
                {/* Animated background */}
                <div className="hero-bg">
                    <div className="blob blob-1" />
                    <div className="blob blob-2" />
                    <div className="blob blob-3" />
                    <div className="grid-overlay" />
                </div>

                <div className="hero-content">
                    {/* Text side */}
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="badge-dot" />
                            Available for new projects
                        </div>

                        <h1 className="hero-title">
                            Hi, I'm <br />
                            <span className="gradient-text">Lawal Mukhtar</span>
                        </h1>

                        <h2 className="hero-subtitle">Mobile Engineer</h2>

                        <p className="hero-description">
                            Building seamless mobile experiences for iOS &amp; Android. From crypto fintech
                            to healthcare, waste management to education — I craft apps that solve real problems.
                        </p>

                        <div className="hero-tags">
                            <span className="tag">React</span>
                            <span className="tag">React Native</span>
                        </div>

                        <div className="hero-actions">
                            <Link to="/work" className="btn-primary">View My Apps</Link>
                            <Link to="/contact" className="btn-secondary">Get In Touch</Link>
                        </div>

                        <div className="hero-socials">
                            <a
                                href="https://github.com/Mlg29"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title="GitHub"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/lawal-mukhtar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title="LinkedIn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/Mlggg29"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title="Twitter / X"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Visual side */}
                    <div className="hero-visual">
                        <div className="profile-wrapper">
                            <div className="profile-ring" />
                            <div className="profile-glow" />
                            <img
                                className="profile-img"
                                src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573758368/my%20project/ixmubnzjmucznkn52cgj.jpg"
                                alt="Lawal Mukhtar"
                            />
                        </div>

                        <div className="floating-card card-apps">
                            <span className="card-emoji">📱</span>
                            <div>
                                <p className="card-label">Apps Shipped</p>
                                <p className="card-value">5+ Live Apps</p>
                            </div>
                        </div>

                        <div className="floating-card card-stores">
                            <span className="card-emoji">🚀</span>
                            <div>
                                <p className="card-label">Platforms</p>
                                <p className="card-value">iOS &amp; Android</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-line" />
                    <span>Scroll</span>
                </div>
            </section>
        </div>
    )
}

export default Home
