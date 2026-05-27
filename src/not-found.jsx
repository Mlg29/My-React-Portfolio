import React from "react"
import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div style={{
            minHeight: "100vh",
            background: "#080B1A",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
            fontFamily: "'Poppins', sans-serif",
        }}>
            <p style={{ fontSize: "6rem", lineHeight: 1, marginBottom: "1rem" }}>📱</p>
            <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "5rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #6C63FF, #00D4AA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: 0,
            }}>404</h1>
            <p style={{ color: "#A8B2D8", fontSize: "1.1rem", margin: "1rem 0 2rem" }}>
                Oops! This page doesn't exist.
            </p>
            <Link to="/" style={{
                background: "linear-gradient(135deg, #6C63FF, #5A54D4)",
                color: "#ffffff",
                padding: "0.85rem 2rem",
                borderRadius: "30px",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(108,99,255,0.35)",
            }}>
                Back to Home
            </Link>
        </div>
    )
}

export default NotFound
