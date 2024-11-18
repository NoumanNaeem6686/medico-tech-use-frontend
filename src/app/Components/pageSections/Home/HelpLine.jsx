"use client"

import Link from "next/link";
import React from "react";

const HelpLine = () => {
  return (
    <>
      <section className="helpline pt_100 xs_pt_70 pb_100 xs_pb_70 px-4 sm:px-8">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xxl-6 col-lg-6 col-xl-6 wow fadeInLeft"
              data-wow-duration="1s"
            >
              <div className="common_heading">
                <h2 data-aos="fade-right">We're Here to Help, Anytime</h2>
                <p data-aos="fade-down">
                  At MedicoTech Solutions, we prioritize your healthcare needs.
                  Whether you have an emergency, need assistance with billing,
                  or require expert guidance, our team is available 24/7 to support you.
                </p>
              </div>
              <ul className="helpline_iteam">
                <li>Available 24/7 for your convenience.</li>
                <li>Dedicated professionals ready to assist you.</li>
                <li>Quick response to all emergency inquiries.</li>
              </ul>
              <ul className="d-flex flex-wrap helpline_contact">

                <li>
                  <span>
                    <i className="fas fa-envelope" />
                  </span>
                  <div className="helpline_contact_text">
                    <p>Email Support</p>
                    <a href="mailto:support@medicotech.com">support@medicotech.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-xxl-5 col-lg-6 col-xl-6 wow fadeInRight"
              data-wow-duration="1s"
            >
              <div className="helpline_img">
                <img
                  src="images/helpline_img.png"
                  alt="Helpline"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpLine;
