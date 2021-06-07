import React from 'react';

function Separator(props){
    const { style } = props;
    let position_style;
    if(props.position === "center"){
        position_style = "30px auto";
    }else if(props.position === "right"){
        position_style = "30px 0 30px auto";
    }else{
        position_style = "30px 0";
    }
    return(
        <div className={`separator ${props.style ? "transparent" : "solid"}`}>
            <span
                style={{ ...style,
                    display: "block",
                    height: props.height,
                    width: props.width,
                    background: props.color,
                    margin: position_style }}
            />
        </div>
    )
}

export default Separator;