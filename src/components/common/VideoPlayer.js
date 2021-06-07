import React from 'react';
import '../../assets/css/VideoPlayer.css';

class VideoPlayer extends React.Component{
    constructor() {
        super();
        this.state = {
          paused: true
        };
    }
    playToggle(){
        const v = document.getElementById("custom-video");
        this.setState({
            paused: !this.state.paused
        });
        if(this.state.paused){
            v.play();
        }else{
            v.pause();
        }
        
    }
    
    render(){
        return(
            <div className={`video-container ${this.props.className}`}>
                <video src={this.props.src} id="custom-video" muted={this.props.muted ? "muted" : ""}></video>
                <div className="controls" onClick={() => this.playToggle()}>
                    <button className={this.state.paused ? "play" : "pause"}></button>
                </div>
            </div>
        )
    }
    
}

export default VideoPlayer;