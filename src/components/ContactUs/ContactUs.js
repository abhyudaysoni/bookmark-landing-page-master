import React from "react";
import "./ContactUs.css";
import Button from "../UI/Button/Button";

export default function ContactUs() {
  return (
    <section className="contact-us">
      <h4>35,000+ already joined</h4>
      <h2>Stay up-to-date with what we're doing</h2>
      <div className="contact-field">
        <input type="email" />
        <Button className={"contact-us-btn"} name={"Contact Us"} />
      </div>
    </section>
  );
}
