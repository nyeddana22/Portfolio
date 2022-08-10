import React, { Component } from "react";
import { IoTelescope } from "react-icons/io5";
import { GiGrandPiano, GiMicrophone } from "react-icons/gi";
import { FaGuitar } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import "./Aboutme.css";
import Tooltip from "../components/Tooltip/Tooltip";

class Aboutme extends Component {
  render() {
    return (
      <div className="about-body">
        <div className="about-body-container">
          <div className="about-titles">
            <h1>Background</h1>
          </div>
          <p className="about-text">
            I am from Chennai, India where I did my undergrad in ECE. I have
            over 2 years of experience in the computer networking industry as a
            Consulting Engineer. I am currently pursuing my MS in Computer
            Science at the University of California, Davis. I am passionate
            about all products and technologies that help society. My current
            field of interests lie in Machine Learning, Data Science, and
            Artificial Intelligence.
          </p>
          <div className="about-titles">
            <h1>Hobbies</h1>
          </div>
          <div className="about-icons">
            <Tooltip text="Stargazing">
              <IoTelescope className="about-icon" />
            </Tooltip>
            <Tooltip text="Singing">
              <GiMicrophone className="about-icon" />
            </Tooltip>
            <Tooltip text="Piano">
              <GiGrandPiano className="about-icon" />
            </Tooltip>
            <Tooltip text="Ukulele">
              <FaGuitar className="about-icon" />
            </Tooltip>
            <Tooltip text="Traveling">
              <SiYourtraveldottv className="about-icon" />
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutme;
