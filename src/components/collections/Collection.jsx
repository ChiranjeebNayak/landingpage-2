import React from 'react'
import './collection.css'
import img7 from '../asset/img/img7.jpg'
import img8 from '../asset/img/img8.jpg'
import img9 from '../asset/img/img9.jpg'
import Carousel from "react-elastic-carousel";
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
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
            </div>
        </>
    )
}

export default Collection
