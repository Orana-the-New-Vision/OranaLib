import React, { useState } from "react";
import "./OutlineNeonButton.css";

const OutlineNeonButton = ({
    handleClick,
    colorBg = "#ffffff",
    colorTxt = "#ffffff",
    buttonTxt = "Click!",
    link = "#",
}) => {
    const styles = { backgroundColor: colorBg, color: colorTxt };
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="container">
            <div
                onClick={handleClick}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={styles}
                className="button">
                <a href={link}>{buttonTxt}</a>
                <i className="up"></i>
                <i className="down"></i>
            </div>
            <div className={isHovering ? "reflector-hover" : "reflector"}></div>
        </div>
    );
};

export default OutlineNeonButton;
