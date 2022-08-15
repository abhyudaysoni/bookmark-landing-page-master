import React from "react";
import Features from "../Features/Features";
import Intro from "../Intro/Intro";
import "./BodyContainer.css";

export default function BodyContainer() {
  return (
    <main>
      <Intro />
      <Features />
    </main>
  );
}
