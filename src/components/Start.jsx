import React, { useState, useEffect } from 'react';
import "../static/css/Start.css"

function Start({onStartClick}) {

    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div 
            className="Start"
            style={isHover ? {backgroundSize: "160%"} : {backgroundSize: "100%"}}
        >
            <div 
                className="container"
                style={isHover ? {backdropFilter: "blur(1.2px)", } : {backdropFilter: "blur(0px)"}}
            >
                <button className='startButton' onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} onClick={onStartClick}>
                    <h2>{!isHover ? "Start" : "Yes"}</h2>
                </button>
            </div>
        </div>
    )
}

export default Start;