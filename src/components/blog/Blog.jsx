import React from 'react'
import './blog.css'
import img9 from '../asset/img/img9.jpg'
import img10 from '../asset/img/img10.jpg'
import img11 from '../asset/img/img11.jpg'
function Blog() {
    return (
        <>
            <div className="container mt-5">
                <div className="blogheading">
                    <h3>Blog Posts</h3>
                    <div className="ul"></div>
                </div>
                    <div className="row blog">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img class="card-img-top" src={img9} alt="Card image cap" />
                                <div class="card-body">
                                    <p className="card-title">Far far away, behind the word mountains</p>
                                    <p className="card-date">April 25, 2019</p>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#"> Read More ...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img class="card-img-top" src={img10} alt="Card image cap" />
                                <div class="card-body">
                                    <p className="card-title">Far far away, behind the word mountains</p>
                                    <p className="card-date">April 25, 2019</p>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#"> Read More ...</a>
                                </div>
                            </div>

                        </div><div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img class="card-img-top" src={img11} alt="Card image cap" />
                                <div class="card-body">
                                    <p className="card-title">Far far away, behind the word mountains</p>
                                    <p className="card-date">April 25, 2019</p>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#"> Read More ...</a>
                                </div>
                            </div>

                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default Blog
