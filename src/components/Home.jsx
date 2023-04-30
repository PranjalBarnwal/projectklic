import React, { useEffect } from "react";
import Nav from "./Nav";
import Box from "./Box";
import AOS from "aos";
import Section3 from "./Section3";
import "aos/dist/aos.css";
import Section4 from "./Section4";
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
        <Nav />
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
      <Section3/>
      <Section4/>
    </div>
  );
};

export default Home;
