import React, { Component } from "react";
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
    "Linear Regression",
    "Logistic Regression",
    "Classification",
    "Clustering",
    "Reinforcement Learning",
    "Statistical Modeling",
  ],
  Networks: [
    "Netmiko",
    "Paramiko",
    "Routing Protocols (OSPF, EIGRP, BGP, MPLS)",
    "Switching",
    "Software Defined Wide Area Network (SD-WAN)",
    "Quality of Service (QoS)",
  ],
};

class Skills extends Component {
  render() {
    return (
      <div className="skills-body">
        <div className="skills-container">
          <div className="technical-skills">
            <ul>
              {sklist.languages.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
              {sklist.webdev.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
              {sklist.software_tools.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
              {sklist.MachineLearning.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
              {sklist.Networks.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
