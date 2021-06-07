import React from 'react';
import '../assets/css/testimonial.css'

function Testimoial(props){
    return(
        <div className="container testimonial">
            <blockquote>
                <span className="content">{props.content}</span>
                <cite className="author">{props.author}</cite>
            </blockquote>
        </div>
    )
}

export default Testimoial;