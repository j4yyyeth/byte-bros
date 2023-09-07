import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <a href="/"><img className="logo-img-navbar" src="./logo.png"></img></a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact Us</a>
    </nav>
  );
}
