import React from "react"
import "./About.css"
import Navigation from "../Navigation"
import { Link } from "react-router-dom"

const skills = [
    { name: "React", icon: "⚛️" },
    { name: "React Native", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Firebase", icon: "🔥" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Redux / Redux toolkit", icon: "🗃️" },
    { name: "Git & CI/CD", icon: "🔧" },
]

const stats = [
    { value: "5+", label: "Apps Shipped" },
    { value: "4", label: "App Stores" },
    { value: "4+", label: "Years Experience" },
    { value: "10k+", label: "Users Reached" },
]

function About() {
    return (
        <div className="about-page">
            <Navigation />
            <section className="about-section">
                <div className="about-container">

                    <div className="section-header">
                        <span className="section-tag">About Me</span>
                        <h2 className="section-title">
                            Mobile Engineer &amp; <br />
                            <span className="gradient-text">App Builder</span>
                        </h2>
                    </div>

                    <div className="about-grid">
                        {/* Info column */}
                        <div className="about-info">
                            <p className="about-bio">
                                Hi, I'm <strong>Lawal Mukhtar</strong> (MLG) — a passionate Mobile Engineer
                                based in Lagos, Nigeria. I build high-quality apps for iOS and Android,
                                delivering polished user experiences from concept to the app stores.
                            </p>
                            <p className="about-bio">
                                I've shipped apps across diverse domains: crypto trading &amp; wallets,
                                healthcare, waste management, and education. I care deeply about
                                performance, accessibility, and clean code architecture.
                            </p>

                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-label">Name</span>
                                    <span className="info-value">Lawal Mukhtar</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Nickname</span>
                                    <span className="info-value">MLG</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Location</span>
                                    <span className="info-value">Lagos, Nigeria</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Email</span>
                                    <span className="info-value">lmukhtar29@gmail.com</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Platforms</span>
                                    <span className="info-value">iOS &amp; Android</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Availability</span>
                                    <span className="info-value available">✦ Open to Work</span>
                                </div>
                            </div>

                            <Link to="/contact" className="btn-cta">Let's Work Together →</Link>
                        </div>

                        {/* Skills column */}
                        <div className="skills-side">
                            <h3 className="skills-title">Technical Skills</h3>
                            <div className="skills-grid">
                                {skills.map(skill => (
                                    <div className="skill-card" key={skill.name}>
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="stats-row">
                        {stats.map(stat => (
                            <div className="stat-card" key={stat.label}>
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About
