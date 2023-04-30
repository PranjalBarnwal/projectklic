import React from "react";
import "./Section4.css";
import {AiFillPlayCircle} from "react-icons/ai"

const Section4 = () => {
  return (
    <div className="section4">
      <div className="grid-container">
        <div className="ar1"></div>
        <div className="ar2">

            <p>About Us</p>
            <p>WE PRODUCE THE BEST QUALITY OF SEA PRODUCTS</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia nemo laboriosam magni dolores laborum ipsam esse a officia eius, vel voluptates cupiditate expedita ullam recusandae totam ratione dolore repellendus!</p>
            <button>About Us</button>
        </div>
        <div className="ar3"></div>
        <div className="ar4">
            <AiFillPlayCircle/> 
        </div>
      </div>
    </div>
  );
};

export default Section4;
