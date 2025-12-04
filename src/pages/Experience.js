import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
  return (
    <motion.div
      className="experience page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Professional Experience</h2>

      <div className="job">
        <h3>Python Developer Trainee | Senscript Technologies Pvt Ltd</h3>
        <p>02/2025 – Present | Kochi Infopark</p>
        <ul>
          <li>Developed scalable web applications using Python & Django.</li>
          <li>Designed and integrated RESTful APIs.</li>
          <li>Managed relational databases (MySQL, PostgreSQL).</li>
          <li>Implemented JWT-based authentication & security workflows.</li>
          <li>Worked on enterprise-level Oracle VBCS applications.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Python Developer Intern | Synnefo Solutions</h3>
        <p>06/2023 – 12/2023 | Ernakulam</p>
        <ul>
          <li>Contributed to Django application development.</li>
          <li>Assisted with API and database integrations.</li>
          <li>Participated in debugging, testing, and performance tuning.</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Experience;
