import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/">
            <img className="logo-img-navbar" src="./logo.png" alt="Logo" />
          </a>
        </div>
        <div className={`nav-links ${showMenu ? "show" : ""}`}>
          <a href="/about" className="nav-link">About</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/contact" className="nav-link">Contact Us</a>
        </div>
        <div className={`hamburger ${showMenu ? "show" : ""}`}>
          <Hamburger toggled={showMenu} toggle={setShowMenu} />
        </div>
      </div>
    </nav>
  );
}

