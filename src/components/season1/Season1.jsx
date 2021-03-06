import React from 'react'
import './season1.css'
import img4 from '../asset/img/img4.jpg'
import img8 from '../asset/img/img8.jpg'
function Season1() {
    return (
        <>
            <div className="container mt-5 season1">

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 box1">
                        <div className="heading">
                            <h2>Don't miss the new <br></br>season 2021 lookbook
                                <br></br><div className="ul"></div></h2>
                        </div>
                        <span><h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h5></span>
                        <span><h5>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h5></span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 box2">
                        <div className="image">
                        <img src={img8} alt="img6" className="img-fluid smallimg" />
                            <img src={img4} alt="img7" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Season1
