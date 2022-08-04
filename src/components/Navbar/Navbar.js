import React, {Component} from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked:false }



    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>NY <i className='fab fa-react'></i> </h1>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.label}
                                </a>
                            </li>     
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar