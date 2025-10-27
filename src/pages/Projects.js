import React from "react";
import getAnyCarsImg from "../assets/getanycars.jpg";
import bookstoreImg from "../assets/bookstore.jpg";

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <img src={getAnyCarsImg} alt="GetAnyCars" />
        <h3>GetAnyCars</h3>
        <p>Vehicle management platform with role-based dashboards, real-time chat, wishlist, and product comparison.</p>
      </div>

      <div className="project-card">
        <img src={bookstoreImg} alt="Book Store Management" />
        <h3>Book Store Management System</h3>
        <p>Full-stack bookstore system with admin, seller, and user dashboards. Includes pincode filtering & JWT authentication.</p>
      </div>
    </div>
  );
}

export default Projects;
