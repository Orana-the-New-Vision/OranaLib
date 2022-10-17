import React from "react";
import "./SimpleButton.css";

const SimpleButton = ({ handleClick, colorBg = "#000000", colorTxt = "#ffffff", buttonTxt = "Click!" }) => {
    const styles = { backgroundColor: colorBg, color: colorTxt };

    return (
        <div onClick={handleClick} style={styles} className="button-outer">
            <div className="button-inner">{buttonTxt}</div>
        </div>
    );
};

export default SimpleButton;
