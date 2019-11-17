import React from "react"
import "./Navigation.css"
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav>
            <ul className="navigation">
                <li className="navigation-link"><Link to='/'><img className="nav-image" src="https://img.icons8.com/flat_round/50/000000/home.png" /></Link></li>
                <li className="navigation-link"><Link to='/about'><img className="nav-image" src="https://img.icons8.com/bubbles/50/000000/about-me-male.png" /></Link></li>
                <li className="navigation-link"><Link to='/work'><img className="nav-image" src="https://img.icons8.com/officexs/50/000000/bag-front-view.png" /></Link></li>
                <li className="navigation-link"><Link to='/contact'><img className="nav-image" src="https://img.icons8.com/ios-glyphs/50/000000/new-message.png" /></Link></li>
            </ul>
        </nav>
    )
}

export default Navigation