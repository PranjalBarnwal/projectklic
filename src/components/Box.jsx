import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
// import {TbCertificate} from "react-icons/tb"

import "./Box.css";
const Box = (props) => {
  return (
    <div className="box">
      <div className="box-logo">{props.logo}</div>

      <p className="box-heading">{props.heading}</p>
      <p className="box-subheading">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad harum
        mollitia accusantium maiores rerum voluptas quibusdam inventore!
      </p>
      <a href="#">
        ReadMore
        <BsArrowRightShort />
      </a>
    </div>
  );
};

export default Box;
