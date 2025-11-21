import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Education from "./pages/Others";

function App() {
  useEffect(() => {
    // 🔹 Custom Cursor
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll("a, button, .project-card");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });

    // 🔹 Animated Background Canvas
    const canvas = document.createElement("canvas");
    canvas.classList.add("background-canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 247, 0.7)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cursor.remove();
      canvas.remove();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="App">
      {/* 🔹 Navigation */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certificates">Certificates</Link>
        <Link to="/education">Others</Link>
      </nav>

      {/* 🔹 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/education" element={<Education />} />
      </Routes>

      {/* 🔹 Footer */}
      <footer>
  <p><b>© 2025 AJITH AR | Python Developer</b></p>
  <p><b>📞 +91 9400383241 | 📧 ar.ajithrajan@gmail.com | 📍 Thrissur, Kerala</b></p>
  <div className="footer-links">
    <a
      href="https://www.linkedin.com/in/ajith-ar/"
      target="_blank"
      rel="noreferrer"  
      className="footer-btn linkedin"
    >
      <i className="fab fa-linkedin"></i> LinkedIn
    </a>
    <a
      href="https://github.com/ar-ajith"
      target="_blank"
      rel="noreferrer"
      className="footer-btn github"
    >
      <i className="fab fa-github"></i> GitHub
    </a>
  </div>
</footer>

    </div>
  );
}

export default App;
