import React from "react";
import DownloadExtension from "../DownloadExtension/DownloadExtension";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import Intro from "../Intro/Intro";
import "./BodyContainer.css";

export default function BodyContainer() {
  return (
    <main>
      <Intro />
      <Features />
      <DownloadExtension />
      <FAQ />
    </main>
  );
}
