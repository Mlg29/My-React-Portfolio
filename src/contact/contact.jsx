import React, { useState } from "react"
import "./contact.css"
import Navigation from "../Navigation"


const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdbqjop"

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [status, setStatus] = useState("idle")

    const handleChange = e => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus("loading")

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            })

            if (res.ok) {
                setStatus("success")
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    const handleReset = () => {
        setStatus("idle")
        setForm({ name: "", email: "", message: "" })
    }

    return (
        <div className="contact-page">
            <Navigation />
            <section className="contact-section">
                <div className="contact-container">

                    <div className="section-header">
                        <span className="section-tag">Contact</span>
                        <h2 className="section-title">
                            Let's <span className="gradient-text">Work Together</span>
                        </h2>
                        <p className="section-desc">
                            Have a project in mind? I'd love to hear about it. Let's build something great.
                        </p>
                    </div>

                    <div className="contact-grid">
                        {/* Info side */}
                        <div className="contact-info">
                            <h3 className="info-heading">Get In Touch</h3>
                            <p className="info-text">
                                I'm always open to discussing new mobile projects, freelance work,
                                or just a good conversation about tech and apps. Drop me a message!
                            </p>

                            <div className="contact-links">
                                <a href="mailto:lmukhtar29@gmail.com" className="contact-link-item">
                                    <div className="link-icon">✉️</div>
                                    <div className="link-details">
                                        <p className="link-label">Email</p>
                                        <p className="link-value">lmukhtar29@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/lawal-mukhtar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link-item"
                                >
                                    <div className="link-icon">💼</div>
                                    <div className="link-details">
                                        <p className="link-label">LinkedIn</p>
                                        <p className="link-value">lawal-mukhtar</p>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/Mlg29"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link-item"
                                >
                                    <div className="link-icon">🐙</div>
                                    <div className="link-details">
                                        <p className="link-label">GitHub</p>
                                        <p className="link-value">Mlg29</p>
                                    </div>
                                </a>

                                <div className="contact-link-item no-hover">
                                    <div className="link-icon">📍</div>
                                    <div className="link-details">
                                        <p className="link-label">Location</p>
                                        <p className="link-value">Lagos, Nigeria</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form side */}
                        <div className="contact-form-wrapper">
                            {status === "success" ? (
                                <div className="success-state">
                                    <span className="success-icon">🎉</span>
                                    <h3>Message Sent!</h3>
                                    <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
                                    <button className="btn-reset" onClick={handleReset}>
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-name">
                                            Your Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            className="form-input"
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            disabled={status === "loading"}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-email">
                                            Email Address
                                        </label>
                                        <input
                                            id="contact-email"
                                            className="form-input"
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            disabled={status === "loading"}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-message">
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            className="form-textarea"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project or idea..."
                                            rows={5}
                                            required
                                            disabled={status === "loading"}
                                        />
                                    </div>

                                    {status === "error" && (
                                        <p className="form-error">
                                            Something went wrong. Please try again or email me directly.
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className={`form-submit ${status === "loading" ? "loading" : ""}`}
                                        disabled={status === "loading"}
                                    >
                                        {status === "loading" ? (
                                            <span className="spinner-row">
                                                <span className="spinner" /> Sending…
                                            </span>
                                        ) : (
                                            "Send Message →"
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact
