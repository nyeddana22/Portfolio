import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

class Navbar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/">
          <h1 className="navbar-logo"> NY</h1>
        </Link>

        <ul className="nav-menu">
          <li className="nav-links">
            <Link to="/aboutme">About Me</Link>
          </li>
          <li className="nav-links">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="nav-links">
            <Link to="/projects">Projects</Link>
          </li>
          {/* <li className="nav-links">
            <Link to="/blog">Blog</Link>
          </li> */}
          <li className="resume-button">
            <a
              href="https://drive.google.com/file/d/1GrNvqEaOuWnufwEQy-dnJxO_2r4_nKAr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
