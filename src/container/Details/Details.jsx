import React from "react";

import {images, data} from '../../constants';

import './Details.css';
import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/MenuItem/MenuItem";

const Details = () => {
    return(
        <div className="app__details flex__center section__padding" id="menu">
            <div className="app__details-title">
                <SubHeading title="Special Bottle"/>
                <h1 className="headtext__cormorant"></h1>
            </div>

            <div className="app__details-specification">
                <div className="app__details-specification_rum flex__center">
                    <p className="app__details_specification_heading">Rum Lituba</p>
                    <div className="app__details_specification_items">
                        {data.rums.map((rum, index) => (
                           
                            <MenuItem key={rum.brand + index} brand={rum.brand} price={rum.price} volume_degree={rum.volume_degree}/>
                        ))}
                    </div>
                </div>

                <div className="app__details-specification_img">
                    <img src={images.mockup1} alt="description"/>
                </div>

                {/* <div className="app__details-specification_rum flex__center">
                    <p className="app__details_specification_heading">Rum Lituba</p>
                    <div className="app__details_specification_items">
                        {data.rums.map((rum, index) => (
                            <p>{rum.brand}</p>
                        ))}
                    </div>
                </div> */}
            </div>

            <div style={{marginTop: '15px'}}>
                <button type="button" className="custom__button">View More</button>
            </div>
        </div>
    )
}

export default Details;