import React, { useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images';
import './NavBar.css';

const NavBar = () =>{
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.litu} alt="logo" />
        </div>
        <ul className="app__navbar-links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#product">Products</a></li>
            <li className="p__opensans"><a href="#aboutus">About us</a></li>
            <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>
        <div className="app__navbar-smallscreen">
            <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

            {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(true) } />
            
            <ul className="app__navbar-smallscreen-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#product">Products</a></li>
                <li className="p__opensans"><a href="#aboutus">About us</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
        </div>
        )}
        </div>
    </nav>
    )
}
export default NavBar;