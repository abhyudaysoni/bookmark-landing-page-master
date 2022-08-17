import React from "react";
import "./Intro.css";
import Button from "../UI/Button/Button";
import illustrationHero from "../../images/illustration-hero.svg";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-section">
        <h1>A Simple Bookmark Manager</h1>
        <p className="intro-para">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free
        </p>
        <Button
          id={"on-chrome"}
          name={"Get it on Chrome"}
          style={{
            color: "white",
            background: "hsl(231, 69%, 60%)",
            letterSpacing: "1px",
            fontWeight: "700",
          }}
        />
        <Button
          id={"on-firefox"}
          name={"Get it on Firefox"}
          style={{
            color: "black",
            background: "#f5f7f6",
            letterSpacing: "1px",
            fontWeight: "700",
            boxShadow: "0px 5px 10px #d5d9e0",
          }}
        />
      </div>
      <div className="sample-img-container">
        <img className="sample-img" src={illustrationHero} alt="intro-img" />
      </div>
    </section>
  );
}
