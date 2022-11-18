import React, { useState } from "react";
import { css, cx } from "@emotion/css";
import "./OutlineNeonButton.css";
import halloween from "../assets/HALLO.png";

const OutlineNeonButton = ({
    handleClick = () => console.log("Works!"),
    outlineColor = "#fff",
    bgColor = "#000",
    buttonTxt = "Click!",
    neonColor = "#219afe",
    link = "#",
}) => {
    const styles = { backgroundColor: outlineColor };
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="container">
            <div
                onClick={handleClick}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={styles}
                className={css`
                    position: relative;
                    text-transform: uppercase;
                    font-size: 25px;
                    letter-spacing: 0.1em;
                    font-weight: 400;
                    padding: 10px 25px;
                    transition: 0.5s;
                    &:hover {
                        letter-spacing: 0.25em;
                        background: ${neonColor} !important;
                        box-shadow: 0 0 35px ${neonColor};
                    }
                    &:before {
                        content: "";
                        position: absolute;
                        inset: 2px;
                        background: ${bgColor};
                    }
                `}>
                <a
                    className={css`
                        text-decoration: none;
                        color: ${outlineColor};
                        position: relative;
                        width: 100%;
                        &:hover {
                            color: ${neonColor};
                        }
                    `}
                    href={link}>
                    {buttonTxt}
                </a>
                <i
                    className={[
                        css`
                            position: absolute;
                            width: 10px;
                            height: 10px;
                            top: 0;
                            left: 80%;
                            background: ${bgColor};
                            transition: 0.5s ease-out;
                            transform: skewX(120deg);
                            &:hover {
                                left: 20%;
                            }
                        `,
                    ]}></i>
                <i
                    className={css`
                        position: absolute;
                        width: 10px;
                        height: 5px;
                        bottom: 0;
                        right: 80%;
                        background: ${bgColor};
                        transition: 0.5s ease-out;
                        transform: skewX(120deg);
                        &:hover {
                            right: 20%;
                        }
                    `}></i>
            </div>
            <div style={{ backgroundColor: neonColor }} className={isHovering ? "reflector-hover" : "reflector"}>
                {/* <img src={halloween} className="img-hallo"></img> */}
            </div>
            {/* <div>
                <img src={halloween} className="img-hallo"></img>
            </div> */}
        </div>
    );
};

export default OutlineNeonButton;
