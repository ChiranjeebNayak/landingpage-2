import { faDribbbleSquare, faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './footer.css'
function Footer() {
    return (
        <>
            <div className="container mt-5">
                <div class="row my-5 justify-content-center py-5 footer">
                    <div class="col-11">
                        <div class="row ">
                            <div class="col-lg-6 col-md-6 col-sm-6 my-auto mx-auto a">
                                <h3><b>About</b></h3>
                                <p>Far far away, behind the word mountains, far from the<br></br> countries Vokalia and Consonantia, there live the blind <br></br> texts. Separated they live.</p>
                                <h4>Connect with us</h4>
                                <ul class="social list-unstyled">
                                    <li><a href="#"><span class="icon-facebook"><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon></span></a></li>
                                    <li><a href="#"><span class="icon-twitter"><FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon></span></a></li>
                                    <li><a href="#"><span class="icon-instagram"><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon></span></a></li>
                                    <li><a href="#"><span class="icon-dribble"><FontAwesomeIcon icon={faDribbbleSquare}></FontAwesomeIcon></span></a></li>
                                    <li><a href="#"><span class="icon-linkedin"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></span></a></li>
                                </ul>
                            </div>

                            <div class="col-lg-2 col-md-6 col-sm-6">
                            <h5 class="mb-3 mb-lg-4 bold-text "><b>Navigation</b></h5>
                                <ul class=" menu list-unstyled">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-6">
                            <ul class=" menu list-unstyled mt-5">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                </ul>
                            </div><div class="col-lg-2 col-md-6 col-sm-6">
                            <ul class=" menu list-unstyled mt-5">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ul"></div>
                        <div className="row">
                            <p className="copyright">Copyright ©2021. All Rights Reserved. — Designed with love by Untree.co • License</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
