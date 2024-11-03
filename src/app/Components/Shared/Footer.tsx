import React from "react";
import { IMAGES } from "../../../../public";

const Footer = () => {
  return (
    <>
      {/*============================
    FOOTER START
      ==============================*/}
      <footer
        className="mt_60"
        style={{ background: "url(images/footer_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 wow fadeInUp" data-wow-duration="1s">
              <div className="subscription">
                <div className="row justify-content-between align-items-center">
                  <div className="col-xxl-6 col-lg-6 col-xl-7">
                    <div className="subscribe_text">
                      <h2>Subscribe for the Exclusive Updates!</h2>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-lg-6 col-xl-5">
                    <form action="#" className="subscrib_form">
                      <input type="text" placeholder="your Email Address" />
                      <button className="common_btn subscrib_btn">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt_10">
            <div className="col-lg-3 col-sm-9 col-md-6">
              <div className="footer_left">
                <a href="index.html" className="tf_footer_logo">
                  <img
                    src={IMAGES.LOGO}
                    alt="MediFax"
                    className="img-fluid w-100"
                  />
                </a>
                <p>
                  There are to popular belie Lorem is Ipsum is not simply
                  random.
                </p>
                <div className="footer_mail">
                  <span>Hello to :</span>
                  <a href="#">support@gmail.com</a>
                </div>
                <div className="tf_footer_icon d-flex flex-wrap align-items-center">
                  <span>Follow :</span>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-md-4">
              <div className="quick_link">
                <h5>Company</h5>
                <ul>
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="about.html">about us</a>
                  </li>
                  <li>
                    <a href="service.html">our service</a>
                  </li>
                
                 
                </ul>
              </div>
            </div>
            {/* <div className="col-lg col-sm-6 col-md-3">
              <div className="quick_link">
                <h5>Important</h5>
                <ul>
                  <li>
                    <a href="#">Our Process</a>
                  </li>
                  <li>
                    <a href="#">Appointment</a>
                  </li>
                  <li>
                    <a href="faq.html">faq</a>
                  </li>
                  <li>
                    <a href="privacy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="terms_condition.html">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg col-sm-6 col-md-3">
              <div className="quick_link">
                <h5>Quick Link</h5>
                <ul>
                  {/* <li>
                    <a href="#">Why Choose Us</a>
                  </li> */}
                  {/* <li>
                    <a href="priceing.html">Pricing Plan</a>
                  </li> */}
                  <li>
                    <a href="blog.html">News &amp; Articles</a>
                  </li>
                  {/* <li>
                    <a href="sing_up.html">login</a>
                  </li> */}
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 order-md-2">
              <div className="address">
                <h5>Official Info</h5>
                <div className="tf_footer_address">
                  <p>
                    <i className="fas fa-map-marker-alt" /> 2767 Sunrise Street,
                    NY 1002, USA
                  </p>
                  <a href="#">
                    <i className="fas fa-envelope" />
                    company@gmail.com
                  </a>
                  <a href="#">
                    <i className="fas fa-phone-alt" />
                    +965548547564
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt_70 xs_mt_45 sm_margin ">
            <div className="col-xl-12">
              <div className="copyright d-flex flex-wrap justify-content-between">
                <p>2024 Medico. All rights reserved.</p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="terms_condition.html">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="privacy.html">Privacy policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
