import React from "react"
import "./contact.css"
import Navigation from "../Navigation"

class Contact extends React.Component {
    constructor() {
        super()
    }


    render() {
        return (
        <div className="contact">
            <Navigation />
            <div className="container" id="contact">
                <div className="row">
                    <div className="col-6">
                        <form className="form">
                            <input className="contact-input" type="name" placeholder="Your name" />
                            <input className="contact-input" type="email" placeholder="Your email" />
                            <textarea className="contact-textarea" placeholder="Your message" rows="5" />
                            <button className="contact-button">Submit</button>
                        </form>
                    </div>

                    <div className="col-6 contact-text">
     
                    </div>
                </div>
            </div>
        </div>
     )
    }
    
}

export default Contact