import React from "react";
import { motion } from "framer-motion";   // ⭐ Added
import "./Others.css";

function Education() {
  return (
    <motion.div
      className="education page"
      initial={{ opacity: 0, y: 20 }}     // enter animation
      animate={{ opacity: 1, y: 0 }}       // while active
      exit={{ opacity: 0, y: -20 }}        // leaving animation
      transition={{ duration: 0.5 }}       // smooth transition
    >
      <h2>Education</h2>
      <div className="education-section">
        <ul>
          <li>BCA (UG) 2020–2023 | University of Calicut</li>
          <li>XII 2018–2020 | GMBHSS Chalakudy</li>
        </ul>
      </div>

      <h2>Non-Technical Skills</h2>
      <div className="education-section">
        <ul>
          <li>Analytical Thinking</li>
          <li>Problem-solving & Debugging</li>
          <li>Communication Skills</li>
          <li>Teamwork</li>
        </ul>
      </div>

      <h2>Languages</h2>
      <div className="education-section">
        <ul>
          <li>English</li>
          <li>Malayalam</li>
          <li>Hindi</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Education;
