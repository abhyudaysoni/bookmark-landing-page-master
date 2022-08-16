import React from "react";
import "./Card.css";
import Button from "../Button/Button";
import dots from "../../../images/bg-dots.svg";

export default function Card(props) {
  const classes = `card ${props.className}`;
  return (
    <div className={classes}>
      <img src={props.imgSrc} alt="" />
      <h4>{`Add to ${props.name}`}</h4>
      <p>{`Minimum Version ${props.version}`}</p>
      <img src={dots} alt="dots" />
      <Button
        className={"download-extension-btn"}
        name={"Add & Install Extension"}
        style={{
          background: "hsl(231, 69%, 60%)",
          color: "white",
          fontSize: "0.7rem",
          fontWeight: "700",
          letterSpacing: "2px",
          width: "90%",
        }}
      />
    </div>
  );
}
