import Link from "next/link";
import React from "react";
import { IMAGES } from "../../../../public";

const Navbar = () => {
  return (
    <>
      <>
        {/*============================
  MAIN MANU START
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link active" href="/">
                    Home
                    {/* <i className="far fa-plus" /> */}
                  </Link>
                  {/* <ul className="dropdown">
                    <li>
                      <a className="active" href="index.html">
                        Home Style 01
                      </a>
                    </li>
                    <li>
                      <a href="index_2.html">Home Style 02</a>
                    </li>
                    <li>
                      <a href="index_3.html">Home Style 03</a>
                    </li>
                  </ul> */}
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">
                    services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/careers">
                    Careers
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    pages <i className="far fa-plus" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="become_doctor.html">become a doctor</a>
                    </li>
                    <li>
                      <a href="blog-detail">Blog Details</a>
                    </li>
                    <li>
                      <a href="service_details.html">Services Details</a>
                    </li>
                    <li>
                      <a href="doctor.html">doctor</a>
                    </li>
                    <li>
                      <a href="doctor_details.html">doctor details</a>
                    </li>
                    <li>
                      <a href="gallary.html">Gallery</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing Plan</a>
                    </li>
                    <li>
                      <a href="payment.html">Payment</a>
                    </li>
                    <li>
                      <a href="dashboard.html">dashboard</a>
                    </li>
                    <li>
                      <a href="error.html">Error/404</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ’s</a>
                    </li>
                    <li>
                      <a href="sign_in.html">Sign In</a>
                    </li>
                    <li>
                      <a href="sing_up.html">Sign Up</a>
                    </li>
                    <li>
                      <a href="forgot_password.html">Forgot Password</a>
                    </li>
                    <li>
                      <a href="privacy_policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="terms_condition.html">Terms And Condition</a>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" href="/blog">
                    blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/free-audit">
                    Free Audit
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    contact
                  </Link>
                </li>
              </ul>
              {/* <ul className="menu_btn d-flex flex-wrap align-items-center">
                <li>
                  <a href="#" className="menu_search_icon">
                    <i className="fal fa-search" />
                  </a>
                </li>
                <li>
                  <Link href="/appointment" className="common_btn">
                    Meeting
                  </Link>
                </li>
              </ul> */}
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
  MAIN MANU END
    ==============================*/}
      </>
    </>
  );
};

export default Navbar;
