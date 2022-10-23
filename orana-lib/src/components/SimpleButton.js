import React from "react";
import "./SimpleButton.css";

const SimpleButton = ({
    handleClick = () => console.log("Works!"),
    colorBg = "#000000",
    colorTxt = "#ffffff",
    buttonTxt = "Click!",
    link = "#",
}) => {
    const styles = { backgroundColor: colorBg, color: colorTxt };

    return (
        <div onClick={handleClick} style={styles} className="button-outer">
            <div className="button-inner">
                <a href={link}>{buttonTxt}</a>
            </div>
        </div>
    );
};

export default SimpleButton;
