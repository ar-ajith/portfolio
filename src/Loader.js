import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="page-loader">
      <div className="dots-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loader;
