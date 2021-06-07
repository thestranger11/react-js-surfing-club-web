import React from 'react';
import '../assets/css/SocialMedia.css'

const Banner = (props) => {

    return(
        <div className="social-icons">
            {props.twitter && (
                <div>
                    <a href="https://twitter.com" className="fab fa-twitter">
                        <span className="screen-reader-text">Twitter</span>
                    </a>
                </div>
            )}
            {props.facebook && (
                <div>
                    <a href="https://facebook.com" className="fab fa-facebook-f">
                        <span className="screen-reader-text">Facebook</span>
                    </a>
                </div>
            )}
            {props.linkedin && (
                <div>
                    <a href="https://linkedin.com" className="fab fa-linkedin-in">
                        <span className="screen-reader-text">Linkedin</span>
                    </a>
                </div>
            )}
        </div>
    )
}

export default Banner;