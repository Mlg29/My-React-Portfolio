import React from "react"
import "./About.css"
import Navigation from "../Navigation"

function About() {
    return (
        <div className="container-fluid" id="about">
            <div className="row">
                <div className="col-lg-12">
                      <Navigation />
                      <div className="about">
                          <h1 className="about-header">About Me</h1>
                          <p className="about-paragraph">A Frontend Developer with a demostrated history of bringing wireframe designs to life. Taking into consideration the responsiveness<br /> as well as ensuring a user friendly web app  </p>

                          <div className="container">
                              <div className="row">
                                  <div className="col-6">
                                      <p className="about-paragraph1"><img src="https://img.icons8.com/offices/25/000000/user.png" /> <b>Name:</b> Lawal Mukhtar</p>
                                      <p className="about-paragraph1"><img src="https://img.icons8.com/offices/25/000000/user.png" /> <b>Nickname:</b> MLG</p>
                                      <p className="about-paragraph1"><img src="https://img.icons8.com/color/25/000000/address.png" /> <b>Address:</b> Lagos, Nigeria</p>
                                  </div>

                                  <div className="col-6">
                                      <p className="about-paragraph1"><img src="https://img.icons8.com/offices/25/000000/send-mass-email.png" /> <b>Email:</b> lmukhtar29@gmail.com</p>
                                      <p className="about-paragraph1"><img src="https://img.icons8.com/office/25/000000/cell-phone.png" /> <b>Phone:</b> +234-813-8384-015</p>
                                      <p className="about-paragraph1"><img src="https://img.icons8.com/nolan/25/000000/broken-computer.png" /> <b>Freelance:</b> Availabe</p>
                                  </div>
                              </div>

                              <hr />

                            <h1 className="skills">SKILLS</h1>
                              <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <p className="about-paragraph"><img src="https://img.icons8.com/color/25/000000/html-5.png" /> <b>HTML</b></p>
                                        <p className="about-paragraph"><img src="https://img.icons8.com/color/25/000000/css3.png" /> <b>CSS</b></p>
                                        <p className="about-paragraph"><img src="https://img.icons8.com/color/25/000000/react-native.png" /> <b>REACT</b></p>
                                    </div>

                                    <div className="col-6">
                                        <p className="about-paragraph"><img src="https://img.icons8.com/color/25/000000/bootstrap.png" /> <b>BOOTSTRAP</b></p>
                                        <p className="about-paragraph"><img src="https://img.icons8.com/windows/25/000000/sass.png" /> <b>SASS</b></p>
                                        <p className="about-paragraph"><img src="https://img.icons8.com/color/25/000000/python.png" /> <b>DJANGO</b></p>
                                    </div>
                                </div>
                             </div>

                             <hr />
                          </div>
                      </div>
                </div>
            </div>
          
        </div>
    )
}

export default About