"use client";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <>
      <section
        className="banner"
      // style={{ background: "url(images/banner_bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xxl-5 col-md-9 col-xl-6 col-lg-6 wow fadeInLeft "
              style={
                {
                  marginTop: "20px"
                }
              }
              data-wow-duration="1s"
            >
              <div className="banner_text">
                <h5>Welcome to MedicoTech Solutions (MTS)</h5>
                <h1>Where Healthcare Meets Innovation</h1>
                <p className="">
                  Unlock the Future of Healthcare Management Today
                </p>
                <p>
                  Embrace the future of healthcare with our advanced solutions.
                  From streamlining medical billing to cutting-edge IT
                  consultation, we empower you to deliver the highest quality
                  patient care
                </p>
                <Link href="/free-audit" className="common_btn">
                  LET’S GET STARTED
                </Link>
                <ul className="banner_counter d-flex flex-wrap">
                  <li>
                    <h3>
                      <CountUp end={355} suffix="k+" duration={2.5} />
                    </h3>
                    <p>Recovered Patients</p>
                  </li>
                  <li>
                    <h3>
                      <CountUp end={98} suffix="%" duration={2.5} />
                    </h3>
                    <p>Good Review</p>
                  </li>
                  <li>
                    <h3>
                      <CountUp end={120} suffix="+" duration={2.5} />
                    </h3>
                    <p>Popular Doctors</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div
              className="col-xxl-6 col-lg-6 col-xl-6 wow fadeInRight"
              data-wow-duration="1s"
            >
              <div className="banner_img">
                <div className="img">
                  <img
                    src="images/banner_img.png"
                    alt="img"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="react">
                  <img
                    src="images/react.png"
                    alt="react img"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="video_call">
                  <img
                    src="images/Video-call.png"
                    alt="video img"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="call">
                  <img
                    src="images/Call.png"
                    alt="call img"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="review">
                  <img
                    src="images/Review.png"
                    alt="review img"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
