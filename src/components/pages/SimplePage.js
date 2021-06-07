import React from 'react';

const SimplePage = (props) =>{
    return(
        <div className="container">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.content}
            </p>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default SimplePage;