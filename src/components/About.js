import React from 'react';
import '../assets/css/Subscribe.css'
import Button from './common/Button';

import '../assets/css/About.css';


const About = (props) => {
    return(
        <div className="about-section">
            <div className="image-container">
                <img src={props.sideImage} alt={props.title} />
            </div>
            <div className="descriptions">
                <h3>
                    {props.title}
                </h3>
                <h4>
                    {props.address}
                </h4>
                <Button title="get in touch" link="#" />
            </div>
        </div>
    )
}
export default About;