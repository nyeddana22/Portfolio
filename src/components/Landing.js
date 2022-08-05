import React, { Component } from "react";
import "./Landing.css";
import { ImLocation, ImGithub } from "react-icons/im";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import memoji from "./Images/memoji.png";
class Landing extends Component {
  render() {
    return (
      <div className="body">
        <div className="body-container">
          <div className="image">
            <img src={memoji} height="300px" width="300px" alt=""></img>
            <div className="icons">
              <a className="location-icon">
                <ImLocation className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/niharikayeddanapudi/">
                <FiLinkedin className="icon" />
              </a>
              <a href="https://github.com/nyeddana22">
                <ImGithub className="icon" />
              </a>
              <a className="email-icon">
                <MdOutlineEmail className="icon" />
              </a>
            </div>
          </div>
          <div className="text">
            <div className="intro-text">
              <h1>Hello! I'm Niharika.</h1>
            </div>
            <p>
              A computer science graduate student at the University of
              California, Davis, enthusiastic about Machine Learning and
              passionate about technologies that benefit society.
            </p>

            <div className="buttons">
              <button className="button">About Me</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
