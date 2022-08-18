import React, { useState } from "react";
import "./ContactUs.css";
import Button from "../UI/Button/Button";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [formValidity, setFormValidity] = useState(true);
  const checkValidity = (e) => {
    if (e.target.value.length === 0) {
      setFormValidity(true);
      setEmail("");
      return;
    }
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setFormValidity(true);
      setEmail(e.target.value);
    } else {
      setFormValidity(false);
      setEmail(e.target.value);
    }
  };
  const submitForm = () => {
    if (formValidity && email.length > 0) {
      console.log("form submitted");
      setEmail("");
      setFormValidity(true);
    } else if (email.length > 0 && !formValidity) {
      alert("incorrect email");
    }
  };
  return (
    <section className="contact-us">
      <h4>35,000+ already joined</h4>
      <h2>Stay up-to-date with what we're doing</h2>
      <div className="contact-field">
        <input
          placeholder="tell us your email..."
          className={formValidity ? "valid" : "invalid"}
          type="email"
          value={email}
          onChange={checkValidity}
        />
        <Button
          className={"contact-us-btn"}
          onClick={submitForm}
          name={"Contact Me"}
        />
      </div>
    </section>
  );
}
