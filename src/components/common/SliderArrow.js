import React from 'react';

function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${props.direction === "right" ? "fas fa-chevron-right" : "fas fa-chevron-left"} ${className}`}
        style={{ ...style, bottom: props.bottom, left: props.left,
            position: props.position }}
        onClick={onClick}
      />
    );
}
export default SampleArrow;