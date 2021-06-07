import React from 'react';
import '../../assets/css/Button.css';

function Button(props){
    return(
        <a className="btn" href={props.link}>
            {props.title}
        </a>
    )
}

export default Button;