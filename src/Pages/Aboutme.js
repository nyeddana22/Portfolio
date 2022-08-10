import React, { Component } from "react";
import { IoTelescope } from "react-icons/io5";
import { GiGrandPiano, GiMusicalNotes, GiMicrophone } from "react-icons/gi";
import { FaGuitar } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import "./Aboutme.css"

class Aboutme extends Component {
  render() {
    return (
      <div className="about-body">
        <div className="about-body-container">
          <h1>Background</h1>
          <p>
            I am from Chennai, India. Did undergrad in ECE and have over 2 years
            professional experience in the computer networking as a Consulting
            Engineer. I am currently pursuing my MS in Computer Science at the
            University of California, Davis. I am passionate about all products
            and technologies that help society. My current field of interests
            lie in Machine Learning, Data Science, and Artificial Intelligence.
          </p>
          <h1>Hobbies</h1>
          <div className="about-icons">
            <IoTelescope />
            <GiMicrophone /> <GiMusicalNotes />
            <GiGrandPiano />
            <FaGuitar />
            <SiYourtraveldottv />
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutme;
