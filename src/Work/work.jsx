import React from "react"
import "./work.css"
import Navigation from "../Navigation"

function Work() {
    return (
        <div className="work">
            <Navigation />
            <div className="container" id="work">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="work-header">Works</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                     
                        <a href="https://mlg29.github.io/First-project/" ><img className="works-image"  src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573820503/my%20project/ywce6toarwhs1blcslkr.png" alt="" width="550" height="280" /></a>
                    </div>

                    <div className="col-lg-6">
                        <a href="https://teamheist.netlify.com/pages/home.html" ><img className="works-image1" alt="" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573820503/my%20project/zqrzfaurgndugfhhvl7q.png" width="550" height="280" /></a>
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <a href="https://github.com/devcareer/Dae-Alright-Frontend/tree/develop" ><img className="works-image" alt="" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573820502/my%20project/n0iksby9wvonnkwcehpe.png" width="550" height="280" /></a>
                        
                    </div>
                    <div className="col-lg-6">
                        <a href="https://mlg29.github.io/Fylo/" ><img className="works-image1" alt="" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573820502/my%20project/ekngvwsuyq2lecqymtch.png" width="550" height="280" /></a>
                    </div>
                </div>
            </div>

            <div className="about-button">
                <a href="https://github.com/Mlg29"><button className="button" type="button">View More Projects</button></a>
            </div>                        
            
        </div>
    )
}

export default Work