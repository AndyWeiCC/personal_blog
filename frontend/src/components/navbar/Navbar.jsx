import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher"; // Adjust the path as needed
import { useTranslation, Trans } from 'react-i18next';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = react.useState(false);
  const { t } = useTranslation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navHeader">
      <a href="/" className="logo">
        <Trans i18nKey="navbarTitle">
          Wanderer's <span>Blog</span>
        </Trans>
      </a>
      <nav className="navbar">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/articles">Articles</a>
      </nav>
      <div className="menuIconContainer">
        <FontAwesomeIcon
          className="menuIcon"
          icon={faBars}
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="dropdownMenu">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/articles">Articles</a>
          </div>
        )}
      </div>
      <LanguageSwitcher />
    </div>
  );
}

export default Navbar;
