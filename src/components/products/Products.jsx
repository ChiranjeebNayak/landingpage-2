import React from 'react'
import './products.css'
import img3 from '../asset/img/img3.jpg'
import img4 from '../asset/img/img4.jpg'
import img5 from '../asset/img/img5.jpg'

function Products() {
    return (
        <>
            <div className="container mt-5">
                <div className="row product">
                    <div className="col-lg-4 col-md-6 col-sm-12 " >
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <img src={img3} class="img-fluid"alt="img3" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="title"><h4>Sneakers</h4></div>
                                <div className="subtitl">Far far away, behind the word mountains, far from the countries.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 " >
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                                <img src={img4} class="img-fluid"alt="img3" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="title"><h4>Sneakers</h4></div>
                                <div className="subtitl">Far far away, behind the word mountains, far from the countries.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 " >
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                                <img src={img5} class="img-fluid"alt="img3" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="title"><h4>Sneakers</h4></div>
                                <div className="subtitl">Far far away, behind the word mountains, far from the countries.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
