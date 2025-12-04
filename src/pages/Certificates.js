import React from "react";
import { motion } from "framer-motion";   // ⭐ Added
import "./certificates.css";

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
    <motion.div
      className="certificates page"
      initial={{ opacity: 0, y: 20 }}      // fade + slide animation
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Certificates</h2>

      <ul className="certificates-list">
        {certificates.map((cert, index) => (
          <li key={index}>
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Certificates;
