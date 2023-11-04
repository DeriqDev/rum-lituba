import React from "react";

import './MenuItem.css';

const MenuItem = ({brand, degree, volume_degree, price}) =>(
    <div className="app__menuitem">
       <div className="app__menuitem-head">
            <div className="app__menuitem-name">
                <p className="p__cormorant" style={{ color:'#DCCA87'}}>{brand}</p>
            </div>

            <div className="app__menuitem-dash"/>

            <div className="app__menuitem-price">
                <p className="p__cormorant">{price}</p>
            </div>

       </div>
       {/* <div className="app__menuitem-sub">
            <p className="p__opensans" style={{color: '#AAA'}}>{volume} </p>
       </div> */}

       <div className="app__menuitem-sub">
            <p className="p__opensans" style={{color: '#AAA'}}>{volume_degree} </p>
       </div>
    </div>
) 

export default MenuItem;