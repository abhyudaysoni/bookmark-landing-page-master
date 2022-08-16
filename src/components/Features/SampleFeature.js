import React from "react";
import Button from "../UI/Button/Button";
import "./SampleFeature.css";

export default function SampleFeature(props) {
  return (
    <div className="feature-container">
      <img src={props.imgSrc} alt={`${props.name}-logo`} />
      <br />
      <div className="feature-description">
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
        <br />
        <Button
          name={"More Info"}
          style={{
            background: "hsl(231, 69%, 60%)",
            color: "white",
            fontSize: "0.7rem",
            height: "40px",
            width: "fit-content",
          }}
        />
      </div>
    </div>
  );
}
