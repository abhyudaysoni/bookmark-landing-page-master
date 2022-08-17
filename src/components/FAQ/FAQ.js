import React from "react";
import Button from "../UI/Button/Button";
import "./FAQ.css";
import arrow from "../../images/icon-arrow.svg";

export default function FAQ() {
  return (
    <section className="FAQ">
      <section className="section-description">
        <h3>Frequently Asked Questions</h3>
        <p>
          Here are some of our freuently asked questions you'd like answered,
          please feel free to e-mail us.
        </p>
      </section>
      <section className="accordion-container">
        <Button
          name={"What is Bookmark?"}
          className={"faq-btn"}
          content={
            <img className="arrow-down" src={arrow} alt={"arrow-down"}></img>
          }
        />
        <Button
          name={"How can I request a new Browser?"}
          className={"faq-btn"}
          content={
            <img className="arrow-down" src={arrow} alt={"arrow-down"}></img>
          }
        />
        <Button
          name={"Is there a mobile app?"}
          className={"faq-btn"}
          content={
            <img className="arrow-down" src={arrow} alt={"arrow-down"}></img>
          }
        />
        <Button
          name={"What about other Chromium browsers?"}
          className={"faq-btn"}
          content={
            <img className="arrow-down" src={arrow} alt={"arrow-down"}></img>
          }
        />
      </section>
    </section>
  );
}
