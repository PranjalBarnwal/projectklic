import React, { useEffect } from "react";
import Nav from "./Nav";
import Box from "./Box";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeContent from "./HomeContent";
import { TbCertificate } from "react-icons/tb";
import { FaLeaf } from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import "./Home.css";


const Home = () => {
 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-parent">
      <div className="home-container">
        {/* <div className='nav-sticky'> */}
        <Nav />
        {/* </div> */}
        <HomeContent />
      </div>
      <div className="section2">
        <div className="box-container" data-aos="fade-up">
          <Box heading="Certified Farm" logo={<TbCertificate />} />
          <Box heading="Organic Farm" logo={<FaLeaf />} />
          <Box heading="High Quality" logo={<BiBadgeCheck />} />
        </div>
        <p className="box-bottom-text">
          Don’t hesitate to contact us to get better Information.
          <a href="#">
            Contact Our Sales <BsArrowRightShort />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
