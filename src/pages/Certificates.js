import React from "react";
import "./certificates.css"; // import the CSS

import pythonCert from "../assets/python-cert.jpg";
import oracleData from "../assets/oracle-data.jpg";

function Certificates() {
  const certificates = [
    {
      title: "Python Full Stack Developer - Synnefo Solutions",
      image: pythonCert,
    },
    {
      title: "Oracle Data Platform",
      image: oracleData,
    },
  ];

  return (
    <div className="certificates page">
      <h2>Certificates</h2>
      <ul className="certificates-list">
        {certificates.map((cert, index) => (
          <li key={index}>
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificates;
