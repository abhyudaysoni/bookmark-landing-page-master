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
          className={"intro-download-btn"}
          name={"Get it on Chrome"}
        />
        <Button
          id={"on-firefox"}
          className={"intro-download-btn"}
          name={"Get it on Firefox"}
        />
      </div>
      <div className="sample-img-container">
        <img className="sample-img" src={illustrationHero} alt="intro-img" />
      </div>
    </section>
  );
}
