import React from "react";
import { motion } from "framer-motion";   // ⭐ Added
import getAnyCarsImg from "../assets/getanycars.jpg";
import bookstoreImg from "../assets/bookstore.jpg";

function Projects() {
  return (
    <motion.div
      className="projects page"
      initial={{ opacity: 0, y: 20 }}     // enter animation
      animate={{ opacity: 1, y: 0 }}       // active animation
      exit={{ opacity: 0, y: -20 }}        // leave animation
      transition={{ duration: 0.5 }}       // smooth timing
    >
      <h2>Projects</h2>

      <div className="project-card">
        <img src={getAnyCarsImg} alt="GetAnyCars" />
        <h3>GetAnyCars</h3>
        <p>
          Vehicle management platform with role-based dashboards, real-time chat,
          wishlist, and product comparison.
        </p>
      </div>

      <div className="project-card">
        <img src={bookstoreImg} alt="Book Store Management" />
        <h3>Book Store Management System</h3>
        <p>
          Full-stack bookstore system with admin, seller, and user dashboards.
          Includes pincode filtering & JWT authentication.
        </p>
      </div>
    </motion.div>
  );
}

export default Projects;
