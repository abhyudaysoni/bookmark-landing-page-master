import React from "react";
import "./Footer.css";
import footerLogo from "../../images/logo-bookmark-footer.svg";
import Button from "../UI/Button/Button";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";

export default function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="footer-logo" />
      <div>
        <Button
          className="btn"
          type="button"
          name={"features"}
          style={{ color: "white", background: "none" }}
        />

        <Button
          className="btn"
          type="button"
          name={"pricing"}
          style={{ color: "white", background: "none" }}
        />

        <Button
          className="btn"
          type="button"
          name={"contact"}
          style={{ color: "white", background: "none" }}
        />
      </div>
      <div className="social-media-links">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>
    </footer>
  );
}
