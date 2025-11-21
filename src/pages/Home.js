import React from "react";
import profileImg from "../assets/profile.jpg";
import project1 from "../assets/bookstore.jpg";
import project2 from "../assets/getanycars.jpg";


function Home() {
  return (
    <div className="home page">
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="profile-container">
            <img src={profileImg} alt="AJITH AR" className="profile-img" />
          </div>
          <div className="hero-text">
            <h1>Hi, I'm AJITH AR</h1>
            <p>Python Developer | VBCS Builder </p>
            <div className="hero-buttons">
              <a href="#projects">Projects</a>
              <a href="/experience" className="btn-link">Experience</a>
              <a href="#skills">Skills</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
     <section className="about glass-card" id="about">
  <h2>Profile</h2>

  <p>
    Passionate Python Developer with experience in Django, REST APIs, and Oracle VBCS. 
    I enjoy building interactive web apps, solving problems, and learning new technologies.

    I specialize in designing scalable backend systems and clean, user-friendly front-end interfaces.
    My focus is on writing efficient, maintainable code and collaborating in agile teams to deliver impactful digital solutions.

    Over the years, I have worked on various real-world projects, integrating databases like MySQL and PostgreSQL,
    implementing secure authentication systems, and deploying applications on cloud environments.

    I’m highly motivated to stay updated with the latest trends in web technologies,
    particularly in Python frameworks, JavaScript libraries, and modern DevOps tools.

    Outside of coding, I enjoy contributing to open-source projects, exploring UI/UX design ideas,
    and mentoring peers on Python and web development best practices.
  </p>
</section>


      {/* Skills Section */}
      <section className="skills glass-card" id="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          <span>Python</span>
          <span>Django</span>
          <span>REST APIs</span>
          <span>React</span>
          <span>Oracle VBCS</span>
          <span>HTML, CSS, JS</span>
          <span>Bootstrap</span>
          <span>MySQL, PostgreSQL</span>
          <span>SQLite</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <img src={project2} alt="Project 2" />
          <h3>GetAnyCars</h3>
          <p>Vehicle management platform using Django & React with real-time chat and subscriptions.</p>
        </div>
        <div className="project-card">
          <img src={project1} alt="Project 1" />
          <h3>Bookstore Management</h3>
          <p>Fullstack system with role-based dashboards, JWT auth, and real-time chat.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
