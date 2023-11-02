import React from "react";

import {images} from '../../constants';

const SubHeading = ({title}) => {
    return(
        <div style={{ marginBottom : '1rem'}}>
            <p className="p__cormorant">{title}</p>
            <img src={images.rum} alt="bottle" className="bottle__img" width="5%"/>
        </div>
    )
}

export default SubHeading;