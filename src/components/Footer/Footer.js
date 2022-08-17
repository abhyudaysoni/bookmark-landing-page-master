import React from "react";
import "./Footer.css";
import footerLogo from "../../images/logo-bookmark-footer.svg";
import Button from "../UI/Button/Button";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import ContactUs from "../ContactUs/ContactUs";

export default function Footer() {
  return (
    <>
      <ContactUs />
      <footer>
        <img src={footerLogo} alt="footer-logo" />
        <div>
          <Button className="footer-btn" type="button" name={"features"} />
          <Button className="footer-btn" type="button" name={"pricing"} />
          <Button className="footer-btn" type="button" name={"contact"} />
        </div>
        <div className="social-media-links">
          <a href="/">
            <img src={facebook} alt="" />
          </a>
          <a href="/">
            <img src={twitter} alt="" />
          </a>
        </div>
      </footer>
    </>
  );
}
