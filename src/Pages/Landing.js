import React, { Component } from "react";
import "./Landing.css";
import memoji from "../components/Images/memoji.png";
import { ImGithub } from "react-icons/im";
import { GrLocationPin } from "react-icons/gr";
import { BsPenFill } from "react-icons/bs"
import { FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="body">
        <div className="body-container">
          <div className="image">
            <img src={memoji} height="280px" width="280px"></img>
            <div className="icons">
              <a className="icon-text">
                <GrLocationPin className="icon no-pointer" />
                <div>Davis, CA, USA</div>
              </a>
              <a
                href="mailto:nyeddana@ucdavis.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-text"
              >
                <MdOutlineEmail className="icon" />
                <div>nyeddana@ucdavis.edu</div>
              </a>
              <a
                href="https://www.linkedin.com/in/niharikayeddanapudi/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-text"
              >
                <FiLinkedin className="icon" />
                <div>niharikayeddanapudi</div>
              </a>
              <a
                href="https://github.com/nyeddana22"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-text"
              >
                <ImGithub className="icon" />
                <div>nyeddana22</div>
              </a>
              <a
                href="https://niharika-yeddanapudi.medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-text"
              >
                <BsPenFill className="icon" />
                <div>niharika-yeddanapudi</div>
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
              <Link to="/aboutme">
                <button className="button_1">About Me</button>
              </Link>
              <a
                href="https://drive.google.com/file/d/1GrNvqEaOuWnufwEQy-dnJxO_2r4_nKAr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button_2">
                  Resume <FiArrowUpRight />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
