"use client"

import React, { useEffect, useState } from "react";

import Services from "./Services";
import FaqsSection from "./FaqsSection";
import Banner from "./Banner";
const About = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const divStyle = {
    width: isClient && window.matchMedia("(max-width: 768px)").matches ? "100%" : "50%",
  };
  return (
    <>
      <>


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
              <div style={divStyle}>
                <img
                  src="/medical_billing.png"
                  alt="contact img"
                  style={{ width: "100%", height: "auto" }}
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
                    At MedicoTech Solutions (MTS), we specialize in empowering healthcare providers with innovative IT and billing solutions. Our team of experts is dedicated to streamlining administrative tasks, ensuring precision, efficiency, and compliance in every process.

                  </p>
                  <p
                    style={
                      {
                        margin: "5px 0 0 0 "
                      }
                    }
                  >
                    Trusted by numerous healthcare providers, we offer hassle-free medical billing, advanced medical coding services, and cutting-edge digital healthcare technologies. With top-tier IT consultation, we enable healthcare organizations to focus on what matters most—delivering exceptional patient care.
                  </p>
                </div>
                <ul className="about_iteam d-flex flex-wrap">
                  <li>
                    <i
                      className="fas fa-check"
                      style={{ color: "#00A6FB" }}
                    ></i>{" "}
                    Outsourcing with MTS

                  </li>
                  <li>
                    <i
                      className="fas fa-check"
                      style={{ color: "#00A6FB" }}
                    ></i>{" "}
                    Consultation Services

                  </li>
                  <li>
                    <i
                      className="fas fa-check"
                      style={{ color: "#00A6FB" }}
                    ></i>{" "}
                    Practice Management

                  </li>
                  <li>
                    <i
                      className="fas fa-check"
                      style={{ color: "#00A6FB" }}
                    ></i>{" "}
                    Training and Development
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
        {/* <FaqsSection /> */}
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
                      <h4>Initial Consultation</h4>
                      <p>
                        We begin by understanding your specific needs and challenges through a comprehensive consultation to tailor our solutions.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_process">
                      <span className="process_number num2">02</span>
                      <h4>Requirement Analysis</h4>
                      <p>
                        Our experts analyze your workflows, billing processes, and IT infrastructure to identify areas for optimization.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_process">
                      <span className="process_number num3">03</span>
                      <h4>Customized Proposal</h4>
                      <p>
                        Based on our analysis, we provide a customized proposal detailing our approach, timeline, and expected outcomes.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_process">
                      <span className="process_number num4">04</span>
                      <h4>Implementation & Support</h4>
                      <p>
                        We execute the agreed solutions and provide ongoing support to ensure seamless operations and continuous improvements.
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
