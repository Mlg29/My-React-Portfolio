import React from "react"
import "./Portfolio.css"
import {Switch, Route} from "react-router-dom"
import Home from "../Home/home"
import About from "../About/About"
import Work from "../Work/work"
import Contact from "../contact/contact"
import NotFound from "../not-found"


function Portfolio() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Portfolio