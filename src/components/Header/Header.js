import React from "react";
import "./Header.css";
import headerLogo from "../../images/logo-bookmark.svg";
import hamburger from "../../images/icon-hamburger.svg";
import Button from "../UI/Button/Button";

export default function Header() {
  const openNavigationMenu = () => {
    console.log("hello");
  };
  return (
    <header>
      <section className="header-logo">
        <a href="/">
          <img className="header-logo" src={headerLogo} alt="headerLogo" />
        </a>
      </section>
      <section className="header-btns">
        <Button
          className="btn"
          type="button"
          name={"features"}
          style={{ color: "black", background: "none" }}
        />
        <Button
          className="btn"
          type="button"
          name={"pricing"}
          style={{ color: "black", background: "none" }}
        />
        <Button
          className="btn"
          type="button"
          name={"contact"}
          style={{ color: "black", background: "none" }}
        />
        <Button
          className="btn"
          type="button"
          name={"login"}
          style={{ color: "white", width: "150px" }}
        />
        <div className="dropdown-menu">
          <img
            id="hamburger"
            onClick={openNavigationMenu}
            src={hamburger}
            alt="ham"
          />
        </div>
      </section>
    </header>
  );
}
