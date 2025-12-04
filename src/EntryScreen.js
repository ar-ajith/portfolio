import React from "react";
import "./EntryScreen.css";

function EntryScreen({ onEnter }) {
  return (
    <div className="entry-screen">
      <div className="entry-content">

        <h1 className="entry-title">Welcome</h1>

        <p className="entry-subtitle">
          Discover my work, experience, and projects
        </p>

        <button className="entry-btn" onClick={onEnter}>
          Enter Portfolio
        </button>

      </div>
    </div>
  );
}

export default EntryScreen;
