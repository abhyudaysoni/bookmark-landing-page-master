import React from "react";
import Card from "../UI/Card/Card";
import "./DownloadExtension.css";
import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";

export default function DownloadExtension() {
  return (
    <section className="download-extension">
      <section className="section-description">
        <h3>Download the Extension</h3>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite, you'd like us to prioritize
        </p>
      </section>
      <div className="card-container">
        <Card name={"chrome"} imgSrc={chrome} version={"3.0"} />
        <Card name={"firefox"} imgSrc={firefox} version={"4.0"} />
        <Card name={"opera"} imgSrc={opera} version={"2.0"} />
      </div>
    </section>
  );
}
