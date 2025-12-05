import React from "react";
import "./EntryScreen.css";

function EntryScreen({ onEnter }) {
  return (
    <div className="entry-screen">
      <div className="entry-content">

        {/* Tooltip Wrapper */}
        <div className="tooltip">
          <div className="power-btn-wrapper" onClick={onEnter}>
            <img
              src="/power-btn.png"
              alt="Power Button"
              className="power-btn"
            />
          </div>

          {/* Tooltip Text */}
          <span className="tooltip-text">
            Click here to power on
          </span>
        </div>

      </div>
    </div>
  );
}

export default EntryScreen;
