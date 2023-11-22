import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';


import './Footer.css';
import FooterOverlay from '../../container/FootOverlay/FootOverlay';
import Newsletter from '../../container/NewsLetter/NewsLetter';
import { images } from '../../constants';

const Footer = () =>{
    return (
        <div className='app__footer section__padding'>
            <FooterOverlay />
            <Newsletter />

            <div className='app__footer-links'>
                <div className='app__footer-links_contact'>
                    <h1 className='app__footer-headtext'>Contact Us</h1>
                    <p className='p__opensans'>8 av Ngog Lituba</p>
                    <p className='p__opensans'></p>
                    <p className='p__opensans'></p>
                </div>
                <div className='app__footer-links_logo'>
                    <img src={images.litu} alt='footer_logo'/>
                    <p className='p__opensans'>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                    <div className='app__footer-links_icons'>
                        <FiFacebook />
                        <FiTwitter />
                        <FiInstagram />
                    </div>
                </div>

                
            </div>
            <div className='footer__copyright'>
                <p className='p__opensans'>2023 Lituba. All Right Reserverd</p>
            </div>
        </div>
    )
}

export default Footer;