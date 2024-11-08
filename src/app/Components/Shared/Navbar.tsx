"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IMAGES } from "../../../../public";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");

  // Set the initial active tab based on the URL pathname
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveTab(currentPath);
  }, []);

  // Function to handle setting the active tab
  const handleSetActiveTab = (path) => {
    setActiveTab(path);
  };

  return (
    <>
      {/*============================
        MAIN MENU START
        ==============================*/}
      <nav className="navbar navbar-expand-lg main_menu">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src={IMAGES.LOGO} alt="logo" className="img-fluid w-100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars bar_icon" />
            <i className="far fa-times close_icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${activeTab === "/" ? "active" : ""}`}
                  onClick={() => handleSetActiveTab("/")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link ${
                    activeTab === "/about" ? "active" : ""
                  }`}
                  onClick={() => handleSetActiveTab("/about")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/services"
                  className={`nav-link ${
                    activeTab === "/services" ? "active" : ""
                  }`}
                  onClick={() => handleSetActiveTab("/services")}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/careers"
                  className={`nav-link ${
                    activeTab === "/careers" ? "active" : ""
                  }`}
                  onClick={() => handleSetActiveTab("/careers")}
                >
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/blog"
                  className={`nav-link ${
                    activeTab === "/blog" ? "active" : ""
                  }`}
                  onClick={() => handleSetActiveTab("/blog")}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/free-audit"
                  className={`nav-link ${
                    activeTab === "/free-audit" ? "active" : ""
                  }`}
                  onClick={() => handleSetActiveTab("/free-audit")}
                >
                  Free Audit
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link ${
                    activeTab === "/contact" ? "active" : ""
                  }`}
                  onClick={() => handleSetActiveTab("/contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="menu_search">
        <form>
          <input type="text" placeholder="Search" />
          <button className="common_btn" type="submit">
            Search
          </button>
          <span className="close_search">
            <i className="far fa-times" />
          </span>
        </form>
      </div>
      {/*============================
        MAIN MENU END
        ==============================*/}
    </>
  );
};

export default Navbar;
