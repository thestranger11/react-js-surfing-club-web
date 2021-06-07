import React from 'react';
import '../assets/css/Subscribe.css'
import Separator from './common/Separator';


const SubscribeSection = (props) => {
    return(
        <div className="subscribe-section">
            <Separator
                height="80px"
                width="2px"
                color="#5da7ef"
                position="center"
            />
            <div className="container">
                <h3 className="title">
                    {props.title}
                </h3>
                <p>
                    {props.description}
                </p>
                <form className="subscribe-form">
                    <input type="email" placeholder="Your e-mail" />
                    <input type="submit" value="»" />
                </form>
            </div>
        </div>
    )
}
export default SubscribeSection;