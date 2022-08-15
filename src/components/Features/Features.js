import React, { useState } from "react";
import "./Features.css";
import SampleFeature from "./SampleFeature";
import simpleBookmarking from "../../images/illustration-features-tab-1.svg";
import speedySearching from "../../images/illustration-features-tab-2.svg";
import easySharing from "../../images/illustration-features-tab-3.svg";

export default function Features() {
  const [tab, setTab] = useState(1);
  const simpleBookmarkingHandler = () => {
    setTab(1);
  };
  const speedySearchingHandler = () => {
    setTab(2);
  };
  const easySharingHandler = () => {
    setTab(3);
  };
  return (
    <div className="features">
      <section className="section-description">
        <div>
          <h3>Features</h3>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>
      <div className="features-tab-btn-container">
        <button
          className={`tab-links ${tab === 1 ? "active" : "inactive"}`}
          onClick={simpleBookmarkingHandler}
        >
          Simple Bookmarking
        </button>
        <button
          className={`tab-links ${tab === 2 ? "active" : "inactive"}`}
          onClick={speedySearchingHandler}
        >
          Speedy Searching
        </button>
        <button
          className={`tab-links ${tab === 3 ? "active" : "inactive"}`}
          onClick={easySharingHandler}
        >
          Easy Sharing
        </button>
      </div>
      {tab === 1 && (
        <SampleFeature
          name={"simpleBookmarking"}
          imgSrc={simpleBookmarking}
          heading={"Bookmark in one click"}
          description={
            "Organize your bookmarks however you like. our simple drag and drop interface gives you complete control over how you manage your favourite sites."
          }
        />
      )}
      {tab === 2 && (
        <SampleFeature
          name={"speedySearching"}
          imgSrc={speedySearching}
          heading={"Intelligent Search"}
          description={
            "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
          }
        />
      )}
      {tab === 3 && (
        <SampleFeature
          name={"simpleBookmarking"}
          imgSrc={easySharing}
          heading={"Share your Bookmark"}
          description={
            "Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button."
          }
        />
      )}
    </div>
  );
}
