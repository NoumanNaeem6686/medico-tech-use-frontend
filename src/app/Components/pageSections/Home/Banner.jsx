"use client"
import React from "react";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <>
      <section
        className="banner"
        style={{ background: "url(images/banner_bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xxl-5 col-md-9 col-xl-6 col-lg-6 wow fadeInLeft"
              data-wow-duration="1s"
            >
              <div className="banner_text">
                <h5>Welcome to Medico</h5>
                <h1>We Are Committed To Your Health</h1>
                <p>
                  It is a established fact that a reader will be distracted by
                  the content of a page when looking at this layout.
                </p>
                <a href="doctor.html" className="common_btn">
                  meet a doctor
                </a>
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
            <div
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
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Banner;
