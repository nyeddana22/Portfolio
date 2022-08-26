import React, { Component, useState } from "react";
import "./Skills.css";

const sklist = {
  languages: ["Python", "C++", "JavaScript"],
  webdev: ["HTML5", "CSS3", "React", "Node.js", "Flask", "SQL"],
  software_tools: ["Git", "GCP", "MATLAB", "Postman", "Figma"],

  MachineLearning: [
    "Pandas",
    "Numpy",
    "Matplotlib",
    "scikit-learn",
    "sciPy",
    "PyTorch",
    "Tensorflow",
    // Linear and Logistic
    "Regression",
    "Classification",
    "Clustering",
    "Reinforcement Learning",
    "Statistical Modeling",
  ],
  Networks: [
    "Netmiko",
    // Protocols (OSPF, EIGRP, BGP, MPLS)
    "Routing",
    "Switching",
    // Software Defined Wide Area Network
    "SD-WAN",
    // Quality of Service
    "QoS",
  ],
};

class Skills extends Component {
  
  render() {
    return (
      
      <div className="skills-body">
        <div className="skills-container">
          <div className="technical-skills">
            <ul>
              <div className="top-three">
                <div className="section-box">
                  {sklist.languages.map((item, i) => {
                    return (
                      <li key={i} className="skill">
                        {item}
                      </li>
                    );
                  })}
                </div>
                <div className="section-box">
                  {sklist.webdev.map((item, i) => {
                    return (
                      <li key={i} className="skill">
                        {item}
                      </li>
                    );
                  })}
                </div>
                <div className="section-box">
                  {sklist.software_tools.map((item, i) => {
                    return (
                      <li key={i} className="skill">
                        {item}
                      </li>
                    );
                  })}
                </div>
              </div>
              <br />
              <div className="bottom-two">
                <div className="section-box">
                  {sklist.MachineLearning.map((item, i) => {
                    return (
                      <li key={i} className="skill">
                        {item}
                      </li>
                    );
                  })}
                </div>
                <div className="section-box">
                  {sklist.Networks.map((item, i) => {
                    return (
                      <li key={i} className="skill">
                        {item}
                      </li>
                    );
                  })}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
