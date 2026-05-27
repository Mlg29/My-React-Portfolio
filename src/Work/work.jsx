import React, { useState } from "react"
import "./work.css"
import Navigation from "../Navigation"

const apps = [
    {
        name: "NexTrade",
        category: "Crypto · Fintech",
        categoryColor: "#F7931A",
        description:
            "A feature-rich cryptocurrency trading platform enabling users to buy, sell, and track digital assets in real-time with advanced charting, live price feeds, and portfolio analytics.",
        platforms: ["iOS", "Android"],
        icon: "₿",
        iconBg: "linear-gradient(135deg, #F7931A, #FF6B35)",
    },
    {
        name: "ZendWallet",
        category: "Crypto · Fintech",
        categoryColor: "#F7931A",
        description:
            "A secure multi-currency crypto wallet with seamless P2P transfers, QR code payments, transaction history, and real-time balance tracking across multiple blockchain networks.",
        platforms: ["iOS", "Android"],
        icon: "💎",
        iconBg: "linear-gradient(135deg, #667EEA, #764BA2)",
    },
    {
        name: "Vimedra",
        category: "Healthcare",
        categoryColor: "#00D4AA",
        description:
            "A comprehensive health management app connecting patients with healthcare providers for appointment booking, medical records management, medication reminders, and teleconsultations.",
        platforms: ["iOS", "Android"],
        icon: "🏥",
        iconBg: "linear-gradient(135deg, #00D4AA, #00897B)",
    },
    {
        name: "Pakam",
        category: "Environment",
        categoryColor: "#4CAF50",
        description:
            "A waste management platform connecting households and businesses with certified waste collectors. Promotes recycling, tracks waste impact, and rewards sustainable disposal habits.",
        platforms: ["iOS", "Android"],
        icon: "♻️",
        iconBg: "linear-gradient(135deg, #4CAF50, #2E7D32)",
    },
    {
        name: "PrepMaster",
        category: "Education",
        categoryColor: "#6C63FF",
        description:
            "An intelligent exam preparation app featuring timed practice tests, comprehensive study materials, detailed performance analytics, and smart recommendations for Nigerian students.",
        platforms: ["Android"],
        icon: "📚",
        iconBg: "linear-gradient(135deg, #6C63FF, #5A54D4)",
    },
]

const categories = ["All", "Crypto · Fintech", "Healthcare", "Environment", "Education"]

function Work() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filtered =
        activeCategory === "All"
            ? apps
            : apps.filter(app => app.category === activeCategory)

    return (
        <div className="work-page">
            <Navigation />
            <section className="work-section">
                <div className="work-container">

                    <div className="section-header">
                        <span className="section-tag">Portfolio</span>
                        <h2 className="section-title">
                            Apps I've <span className="gradient-text">Built &amp; Shipped</span>
                        </h2>
                        <p className="section-desc">
                            Mobile applications live on the Apple App Store &amp; Google Play Store
                        </p>
                    </div>

                    {/* Filter tabs */}
                    <div className="filter-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* App cards */}
                    <div className="apps-grid">
                        {filtered.map(app => (
                            <div className="app-card" key={app.name}>
                                <div className="app-card-header">
                                    <div
                                        className="app-icon"
                                        style={{ background: app.iconBg }}
                                    >
                                        <span>{app.icon}</span>
                                    </div>
                                    <div className="app-meta">
                                        <h3 className="app-name">{app.name}</h3>
                                        <span
                                            className="app-category"
                                            style={{
                                                color: app.categoryColor,
                                                borderColor: app.categoryColor + "40",
                                                background: app.categoryColor + "15",
                                            }}
                                        >
                                            {app.category}
                                        </span>
                                    </div>
                                </div>

                                <p className="app-description">{app.description}</p>

                                <div className="app-footer">
                                    <div className="platform-badges">
                                        {app.platforms.map(p => (
                                            <span key={p} className="platform-badge">
                                                {p === "iOS" ? "🍎" : "🤖"} {p}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="live-badge">Live ✦</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="work-cta">
                        <p>Interested in collaborating or seeing more work?</p>
                        <a
                            href="https://github.com/Mlg29"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                        >
                            View GitHub Profile →
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Work
