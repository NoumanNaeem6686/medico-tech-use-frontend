import React from "react";
import { IMAGES } from "../../../../public";
import Link from "next/link";

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

            </div>
          </div>
          <div className="row mt_10 pt-5">
            <div className="col-lg-3 col-sm-9 col-md-6">
              <div className="footer_left">
                <Link href="/" className="tf_footer_logo">
                  <img
                    src={IMAGES.LOGO}
                    alt="MediFax"
                    className="img-fluid w-100"
                  />
                </Link>
                <p>
                  There are to popular belie Lorem is Ipsum is not simply
                  random.
                </p>
                <div className="footer_mail">
                  <span>Hello to :</span>
                  <Link href="#">Support@medicotechsolutions.com</Link>
                </div>
                <div className="tf_footer_icon d-flex flex-wrap align-items-center">
                  <span>Follow :</span>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
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
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <Link href="about">about us</Link>
                  </li>
                  <li>
                    <Link href="services">our service</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg col-sm-6 col-md-3">
              <div className="quick_link">
                <h5>Important</h5>
                <ul>
                  <li>
                    <Link href="#">Our Process</Link>
                  </li>
                  <li>
                    <Link href="#">Appointment</Link>
                  </li>
                  <li>
                    <Link href="faq">faq</Link>
                  </li>
                  <li>
                    <Link href="privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="terms_condition">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg col-sm-6 col-md-3">
              <div className="quick_link">
                <h5>Quick Link</h5>
                <ul>
                  <li>
                    <Link href="appointment">Get Appointment</Link>
                  </li>
                  {/* <li>
                    <Link href="#">Why Choose Us</Link>
                  </li> */}
                  {/* <li>
                    <Link href="priceing">Pricing Plan</Link>
                  </li> */}
                  <li>
                    <Link href="blog">News &amp; Articles</Link>
                  </li>
                  {/* <li>
                    <Link href="sing_up">login</Link>
                  </li> */}
                  <li>
                    <Link href="contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 order-md-2">
              <div className="address">
                <h5>Official Info</h5>
                <div className="tf_footer_address">
                  <p>
                    <i className="fas fa-map-marker-alt" /> : 5900 Balcones
                    Drive, Suite 18270 Austin, , TX 78731, USA
                  </p>
                  <Link href="#">
                    <i className="fas fa-envelope" />
                    Support@medicotechsolutions.com
                  </Link>
                  <Link href="#">
                    <i className="fas fa-phone-alt" />
                    +1 (737) 283-1792
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt_70 xs_mt_45 sm_margin ">
            <div className="col-xl-12">
              <div className="copyright d-flex flex-wrap justify-content-center">
                <p>© 2024 MedicoTech Soultions. All Rights Reserved</p>
                {/* <ul className="d-flex flex-wrap">
                  <li>
                    <Link href="#">Terms and conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Cookies</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy policy</Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
