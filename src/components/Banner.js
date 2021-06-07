import React from 'react';
import '../assets/css/banner.css';
import SocialMedia from './SocialMedia';

const Banner = (props) => {
    return(
        <div className="banner">
            <div className="descriptions">
                <h2 className="stylish-title">
                    <small>{props.small}</small>
                    {props.title}
                </h2>
                <p>
                    {props.content}
                </p>
            </div>
            <div className="image-container">
                <img src={props.img} alt={props.alt} />
            </div>
            
            <SocialMedia
                facebook={true}
                twitter={true}
                linkedin={true}
                direction="vertical"
            />
        </div>
    )
}

export default Banner;