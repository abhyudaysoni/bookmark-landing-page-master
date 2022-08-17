import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button
      className={props.className}
      type={props.type}
      style={props.style}
      id={props.id}
      onClick={props.onClick}
    >
      {props.content && (
        <div className="btn-content">
          {props.name}
          {props.content}
        </div>
      )}
      {!props.content && props.name}
    </button>
  );
}
