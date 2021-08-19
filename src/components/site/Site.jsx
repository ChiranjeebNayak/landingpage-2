import React from 'react'
import './site.css'
import img1 from '../asset/img/img1.jpg'
import img2 from '../asset/img/img2.jpg'
function Site() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className=" col-lg-6  col-sm-12">

                        <div className="design" data-jarallax-element="-100">
                            <div className="heading">
                                <span className="title">Minimal Design</span>
                                <span className="subtitle">Innovative Design</span>
                                <div className="ul"></div>

                            </div>
                            <div className="image">
                                <img src={img1} classname="img-fluid" alt="img1" width="300px" />
                            </div>
                            <span className="subtitle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
                        </div>
                    </div>
                    <div className="col-lg-6  col-sm-12">
                        <div className="watch">
                            <div className="heading">
                                <span className="title">Minimal Watch</span>

                                <span className="subtitle">Innovative Design</span>
                                <div className="ul"></div>
                                <span className="subtitle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
                            </div>
                            <div className="image">
                                <img src={img2} classname="img-fluid" alt="img1" width="390px" />
                            </div>
                            <span className="subtitle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Site
