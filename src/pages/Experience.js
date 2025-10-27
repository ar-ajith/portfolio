import React from "react";
import "./Experience.css"; // 👈 Import your Experience-specific CSS file

function Experience() {
  return (
    <div className="experience page">
      <h2>Professional Experience</h2>

      <div className="job">
        <h3>Python Developer Trainee | Senscript Technologies Pvt Ltd</h3>
        <p>02/2025 – Present | Kochi Infopark</p>
        <ul>
          <li>Developed scalable web apps using Python and Django.</li>
          <li>Designed & integrated RESTful APIs.</li>
          <li>Managed databases with MySQL & PostgreSQL.</li>
          <li>Implemented JWT authentication & secure authorization.</li>
          <li>Worked on Oracle VBCS enterprise apps.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Python Developer Intern | Synnefo Solutions</h3>
        <p>06/2023 – 12/2023 | Ernakulam</p>
        <ul>
          <li>Assisted in Django apps and automation tools.</li>
          <li>Supported APIs and database operations.</li>
          <li>Participated in debugging & testing.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
