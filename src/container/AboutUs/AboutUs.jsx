import React from "react";

import { images } from "../../constants";
import './AboutUs.css'

const AboutUs = () => {
    return(
        <div className="app__aboutus app__bg flex__center section__padding" id="about">
            {/* <div className="app__aboutus-overlay flex__center">
                <img src={images.L} alt="cave"/>
            </div> */}

            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant">About Us</h1>
                    <img src={images.rum} alt="bottle" className="bottle__img" width="5%"/>
                    <p className="p__recit"> The Lituba Nectar <br/> <br />
                  
Welcome to the Lituba Cave! 
Where generations of these valiant warriors have found refuge. 
From far away lands, hundreds of years of history with them. 
From the Egyptian Nile to Sudan, 
the spirit of this nectar is a reward of a long quest for hope, 
a spiritual journey. 

Only this people called the Bantu hold the secret of this recipe. 
In every drop, every bottle,
every barrel you will found the spirit of Lituba, 
more than just a drink it’s a state of mind, a mentality, a vision.. 
Few know how to produce the Lituba nectar, 
between mysticism and alchemy, 
passed down through generations till that day. 

This nectar, it’s the Lituba nectar. 
From the ancestral culture to the up-market bar of New-York. 
Let yourself be swept away and feel transported by the Lituba Spirit   </p>
            <button type="button" className="custom__button">More</button>
                </div>

                <div className="app__aboutus-content_cave flex__center">
                    <img src={images.cave3}/>
                </div>

                <div className="app__aboutus-content_history">
                    {/* <h1 className="headtext__cormorant">Our History</h1> */}
                    {/* <img src={images.rum} alt="bottle" className="bottle__img" width="5%"/> */}
                    <p className="p__opensans"> </p>
            {/* <button type="button" className="custom__button">More</button> */}
                </div>
            </div>
        </div>
    )
}

export default AboutUs