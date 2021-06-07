import React from 'react';
import Button from './common/Button';
import VideoPlayer from './common/VideoPlayer.js';
import '../assets/css/Vlog.css'


function Vlog(props){
    return(
        <div className="container vlog">
            <div className="descriptions">
                <img src={props.imgSrc} alt={props.imgAlt} />
                <p>
                    {props.content}
                    <Button link="#" title="Read more" />
                </p>
            </div>
            <VideoPlayer src={props.src} muted={props.muted} className="video-over" />
        </div>
            )
}

export default Vlog;