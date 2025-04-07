import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher"; // Adjust the path as needed

const Navbar = () => {
  return (
    <div className="navHeader">
      <a href="/" className="logo">
        Andy Wei's <span>Blog</span>
      </a>
      <nav className="navbar">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/articles">Articles</a>
        <a href="/contact">Contact</a>
      </nav>
      <LanguageSwitcher />
      <button className="gradient-btn">Contact Me</button>
    </div>
  )
}

export default Navbar;
