import React from 'react'
import './collection.css'
import img7 from '../asset/img/img7.jpg'
import img8 from '../asset/img/img8.jpg'
import img9 from '../asset/img/img9.jpg'
import img10 from '../asset/img/img10.jpg'
import img11 from '../asset/img/img11.jpg'
import Carousel from "react-elastic-carousel";
import Item from "./item";
function Collection() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <>
            <div className="container mt-5 collection ">
                <div className="heading"><h2>Featured Collections</h2></div>
                <div className="App">
                    <Carousel breakPoints={breakPoints}>
                        <Item>
                            <div class="card">
                                <img class="card-img-top" src={img7} alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-head">Woman Floral Dress</p>
                                    <p class="card-text">Far far away, behind the word mountains, far from the countries.</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                        <div class="card">
                                <img class="card-img-top" src={img8} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-head">Woman Floral Dress</p>
                                    <p class="card-text">Far far away, behind the word mountains, far from the countries.</p>
                                </div>
                            </div>
                        </Item><Item>
                        <div class="card">
                                <img class="card-img-top" src={img9} alt="Card image cap" style={ {height: "43vh"}}/>
                                <div class="card-body">
                                    <p class="card-head">Woman Floral Dress</p>
                                    <p class="card-text">Far far away, behind the word mountains, far from the countries.</p>
                                </div>
                            </div>
                        </Item><Item>
                        <div class="card">
                                <img class="card-img-top" src={img10} alt="Card image cap" style={ {height: "43vh"}}/>
                                <div class="card-body">
                                    <p class="card-head">Woman Floral Dress</p>
                                    <p class="card-text">Far far away, behind the word mountains, far from the countries.</p>
                                </div>
                            </div>
                        </Item><Item>
                        <div class="card">
                                <img class="card-img-top" src={img11} alt="Card image cap" style={ {height: "43vh"}}/>
                                <div class="card-body">
                                    <p class="card-head">Woman Floral Dress</p>
                                    <p class="card-text">Far far away, behind the word mountains, far from the countries.</p>
                                </div>
                            </div>
                        </Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Collection
