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
              {/* <div
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
              </div> */}
              <div className="about_img_1">
                <img
                  src="/audit.webp"
                  alt="about img"
                // className="img-fluid w-auto"
                />

              </div>
              <div
                className="col-xl-6 col-sm-12 col-lg-7  wow fadeInRight"
                data-wow-duration="1s"
              >
                <div className="common_heading">
                  <h5>about us</h5>
                  {/* <h2>The Great Place of Medical Hospital Center.</h2> */}
                  <p>
                    At MedicoTech Solutions (MTS), we are a team of healthcare
                    IT and billing experts dedicated to revolutionizing the work
                    of healthcare providers by providing them with inventive
                    solutions to all their administrative problems. Our experts
                    bring precision and efficiency to every task. Being trusted
                    by numerous healthcare providers, our company is destined to
                    provide hassle-free medical billing and medical coding
                    solutions, top-notch IT consultation, and cutting-edge
                    digital Healthcare Technologies empowering healthcare
                    providers to focus more on delivering exceptional patient
                    care.
                  </p>
                </div>
                <ul className="about_iteam d-flex flex-wrap">
                  <li>
                    <i
                      className="fas fa-check"
                      style={{ color: "#00A6FB" }}
                    ></i>{" "}
                    Electronic Health Records
                  </li>
                  <li>
                    <i
                      className="fas fa-check"
                      style={{ color: "#00A6FB" }}
                    ></i>{" "}
                    Dashboard
                  </li>
                  <li>
                    <i
                      className="fas fa-check"
                      style={{ color: "#00A6FB" }}
                    ></i>{" "}
                    RPA
                  </li>
                  <li>
                    <i
                      className="fas fa-check"
                      style={{ color: "#00A6FB" }}
                    ></i>{" "}
                    Trans Capture APP
                  </li>

                </ul>

                <a href="about.html" className="common_btn">
                  LEARN MORE….
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
                      <h4>Establish Contact</h4>
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
                      <h4>Analyzing Requirements</h4>
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
                      <h4>Contracting</h4>
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
                      <h4>Project Initiation</h4>
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
