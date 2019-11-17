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
                        <div className="work-image-body">
                            <h1 className="work-image-text">Mlgtuition</h1>
                            <p className="work-image-paragraph">A static website designed for fun using<br /> html/css bootstrap<br /><br />
                            <img src="https://img.icons8.com/windows/32/000000/america.png" />
                            <img src="https://img.icons8.com/material-rounded/32/000000/github.png" /></p>
                        </div>
                     
                        <a href="https://mlg29.github.io/First-project/" ><img className="works-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573820503/my%20project/ywce6toarwhs1blcslkr.png" width="550" height="280" /></a>
                    </div>

                    <div className="col-lg-6">
                        <div className="work-image-body">
                            <h1 className="work-image-text">Hopper</h1>
                            <p className="work-image-paragraph">A responsive flight company web app<br /> built with html/css, sass, bootstrap. where you can buy <br />airline ticket and travel across the world<br /><br />
                            <img src="https://img.icons8.com/windows/32/000000/america.png" />
                            <img src="https://img.icons8.com/material-rounded/32/000000/github.png" /></p>
                        </div>
                        <a href="https://teamheist.netlify.com/pages/home.html" ><img className="works-image1" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573820503/my%20project/zqrzfaurgndugfhhvl7q.png" width="550" height="280" /></a>
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="work-image-body">
                            <h1 className="work-image-text">Dae Alright</h1>
                            <p className="work-image-paragraph">A food deliver web app built with React, Redux<br /> For ordering of any kind of food delivered  to your location<br /><br />
                             <img src="https://img.icons8.com/material-rounded/32/000000/github.png" />
                             <img src="https://img.icons8.com/windows/32/000000/america.png" />
                            </p>
                        
                            
                        </div>
                        <a href="https://github.com/devcareer/Dae-Alright-Frontend/tree/develop" ><img className="works-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573820502/my%20project/n0iksby9wvonnkwcehpe.png" width="550" height="280" /></a>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="work-image-body">
                            <h1 className="work-image-text">Fylo</h1>
                            <p className="work-image-paragraph">A static website built for fun while<br /> trying to improve on my html/css skills<br /><br />
                            <img src="https://img.icons8.com/windows/32/000000/america.png" />
                            <img src="https://img.icons8.com/material-rounded/32/000000/github.png" /></p>
                        </div>
                        <a href="https://mlg29.github.io/Fylo/" ><img className="works-image1" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573820502/my%20project/ekngvwsuyq2lecqymtch.png" width="550" height="280" /></a>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Work