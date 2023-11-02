import React from "react";
import './Header.css'
import {images} from '../../constants'
import SubHeading from "../../components/SubHeading/SubHeading";


const Header = () => {
    return(
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
              <SubHeading title="The Lituba Spirit"/>
              <h1 className="app__header-h1">A reward of a spiritual journey. </h1>
                <p className="p__opensans" style={{margin: '2rem 0'}}>This nectar, it’s the Lituba nectar. 
From the ancestral culture to the up-market bar of New-York. 
Let yourself be swept away and feel transported by the Lituba Spirit </p>
            <button type="button" className="custom__button">More</button>
            </div>

            <div className="app__wrapper_img">
                <img src={images.bar} />
            </div>
        </div>
    )
}

export default Header;