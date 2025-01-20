import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlineClipboardList,
  HiOutlinePhotograph,
  HiOutlineMail,
  HiOutlineX,
  HiOutlineMenu,
} from "react-icons/hi";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("/home");
  const [scrollHeader, setScrollHeader] = useState(false);

  // Handle scroll event to add/remove "scroll-header" class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrollHeader ? "scroll-header" : ""}`}>
      <nav className="container nav">
        <Link to="/" className="nav__logo">
          Portfolio
        </Link>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="grid nav__list">
            <li className="nav__item">
              <Link
                to="/home"
                onClick={() => setActiveNav("/home")}
                className={
                  activeNav === "/home" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineHome className="nav__icon" />
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/about"
                onClick={() => setActiveNav("/about")}
                className={
                  activeNav === "/about" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineUser className="nav__icon" />
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/skills"
                onClick={() => setActiveNav("/skills")}
                className={
                  activeNav === "/skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineBadgeCheck className="nav__icon" />
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/services"
                onClick={() => setActiveNav("/services")}
                className={
                  activeNav === "/services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineClipboardList className="nav__icon" />
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/portfolio"
                onClick={() => setActiveNav("/portfolio")}
                className={
                  activeNav === "/portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlinePhotograph className="nav__icon" />
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                onClick={() => setActiveNav("/contact")}
                className={
                  activeNav === "/contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineMail className="nav__icon" />
                Contact
              </Link>
            </li>
          </ul>
          <HiOutlineX
            className="nav__close"
            onClick={() => showMenu(!Toggle)}
          />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
