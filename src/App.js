import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import AnimatedRoutes from "./AnimatedRoutes";
import EntryScreen from "./EntryScreen";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [entered, setEntered] = useState(false);

  // ⭐ Show loader on route change
  useEffect(() => {
    if (!entered) return; // prevent loader before entering site

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname, entered]);

  // ⭐ Custom Cursor + Background Animation
  useEffect(() => {
    if (!entered) return; // don't load animations before entering

    // Custom Cursor
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

    // Background Canvas Animation
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
  }, [entered]);

  // ⭐ CONDITIONAL RETURN (valid because hooks are above)
  if (!entered) {
    return <EntryScreen onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="App">

      {/* Navigation */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certificates">Certificates</Link>
        <Link to="/education">Others</Link>
      </nav>

      {/* Loader */}
      {loading && <Loader />}

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <AnimatedRoutes key={location.pathname} />
      </AnimatePresence>

      {/* Footer */}
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
