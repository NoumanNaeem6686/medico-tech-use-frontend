import React from "react";

import Services from "./Services";
import FaqsSection from "./FaqsSection";
const About = () => {
  return (
    <>
      <>
        {/*============================
  ABOUT START
    ==============================*/}
        <section className="about pt_100 xs_pt_70 pb_100 xs_pb_70">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-sm-9  col-lg-5 col-md-7 wow fadeInLeft"
                data-wow-duration="1s"
              >
                <div className="about_img">
                  <div className="about_img_1">
                    <img
                      src="images/about-img1.jpg"
                      alt="about img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="about_img_2">
                    <img
                      src="images/about_img2.jpg"
                      alt="about img"
                      className="img-fluid w-100"
                    />
                    <a
                      className="play_btn venobox"
                      data-autoplay="true"
                      data-vbtype="video"
                      href="https://youtu.be/nqye02H_H6I"
                    >
                      <i className="fas fa-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-sm-12 col-lg-7  wow fadeInRight"
                data-wow-duration="1s"
              >
                <div className="common_heading">
                  <h5>about us</h5>
                  <h2>The Great Place of Medical Hospital Center.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum susp endisse ultrices gravida tempor
                    incididu ut labore et dolore magna aliqua. Quis ipsum susp
                    endisse ultrices gravida.
                  </p>
                </div>
                <ul className="about_iteam d-flex flex-wrap">
                  <li>Ambulance Services</li>
                  <li>Oxizen on Wheel</li>
                  <li>Pharmacy on Clinic</li>
                  <li>On duty Doctors</li>
                  <li>24/7 Medical Emergency</li>
                </ul>
                <a href="about.html" className="common_btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*============================
  ABOUT END
    ==============================*/}
        <Services />
        <FaqsSection />
        <>
          {/*============================
  PROCESS START
    ==============================*/}
          <section
            className="process pt_100 xs_pt_70 pb_95 xs_pb_65"
            style={{ background: "url(images/work_bg.jpg)" }}
          >
            <div className="container process_shape">
              <div className="row">
                <div className="col-xl-12">
                  <div className="common_heading center_heading mb_25">
                    <h5>How We Work</h5>
                    <h2>Our Working Process</h2>
                  </div>
                </div>
              </div>
              <div className="work_process_area">
                <div className="row">
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_process">
                      <span className="process_number num1">01</span>
                      <h4>fill the form</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                        elit. Rem quia officia quaerat ipsam!
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_process">
                      <span className="process_number num2">02</span>
                      <h4>Book an Appointment</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                        elit. Rem quia officia quaerat ipsam!
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_process">
                      <span className="process_number num3">03</span>
                      <h4>Check-Ups</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                        elit. Rem quia officia quaerat ipsam!
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_process">
                      <span className="process_number num4">04</span>
                      <h4>Get Reports</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                        elit. Rem quia officia quaerat ipsam!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*============================
  PROCESS END
    ==============================*/}
        </>
      </>
    </>
  );
};

export default About;
