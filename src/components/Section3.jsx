import React, { useState } from "react";
import "./Section3.css";
import {FaFish} from "react-icons/fa"
import {BsShop} from "react-icons/bs"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Section3 = () => {

  
    const[counter1,setCounter1]=useState(false)
   
  

  return (
    <ScrollTrigger onEnter={()=>setCounter1(true)} onExit={()=>setCounter1(false)}> 
    <div className="section3">
      <div className="section3_grid">
        <div className="section3_grid_items">
          <p>Welcome To Fiqua</p>
          <button>Learn More</button>
        </div>
        <div className="section3_grid_items">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed incidunt quis alias quo facere, quae modi itaque quos recusandae nam obcaecati cum. Quod mollitia suscipit delectus doloremque esse eaque fuga porro! Laudantium, dignissimos omnis? Natus voluptate neque, impedit et omnis nesciunt vel rerum.</div>
        <div className="section3_grid_items"></div>
        <div className="section3_grid_items">
          <div><FaFish/></div>
          <p>{counter1 && <CountUp start={0} end={1200} duration={2} delay={0.2}/>}+</p>
          <p style={{fontSize:"1rem"}}>Fish Per Month</p>
        </div>
        <div className="section3_grid_items">
        <div><BsShop/></div>
          <p>{counter1 && <CountUp start={0} end={120} duration={2} delay={0.2}/>}+</p>
          <p style={{fontSize:"1rem"}}>Outlet Store</p>
        </div>
      </div>
    </div>
    </ScrollTrigger>
  );
};

export default Section3;
