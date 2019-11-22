import React from "react"
import "./home.css"
import Navigation from "../Navigation"

function Home() {
    return (
        <div>
            <Navigation />
            <div className="container-fluid" id="home">
                <div className="row">
                    <div className="col-lg-12 homepage">
                        
                        <div className="home-section">
                            <div className="home">
                                <img className="home-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573758368/my%20project/ixmubnzjmucznkn52cgj.jpg" alt="" width="440" />
                                <h2 className="home-text"><marquee>Hello, <br />I am Lawal Mukhtar (MLG).<br />A Frontend Engineer with a demonstrated history of <br />building software solutions.</marquee><br /><br />
                                <img src="https://img.icons8.com/color/48/000000/twitter-circled.png" />
                                <img src="https://img.icons8.com/color/48/000000/linkedin-circled.png"></img>
                                <img src="https://img.icons8.com/color/48/000000/github.png"></img>    
                        
                                </h2>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home