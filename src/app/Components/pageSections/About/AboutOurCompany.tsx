import React from "react";

const AboutOurCompany = () => {
  return (
    <>
      <section className="about_2 pt_100 xs_pt_70 pb_100 xs_pb_70 mt-5">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInLeft",
              }}
            >
              <div className="about_2_img">
                <img src="./images/about-our-company.png" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInRight",
              }}
            >
              <div className="about_2_text">
                <div className="common_heading home_tow_heading">
                  <h5>Who We Are</h5>
                  <h2>
                    About Our Company <span>Since 1998</span>
                  </h2>
                  <p>
                    We use as filler text for layouts, non-readability is of
                    great importance but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain.
                  </p>
                  <p>
                    when our power of choice is untrammeled and when nothing
                    prevents our being able to do what we like best, every
                    pleasure is to be welcomed and every pain avoided. But in
                    certain circumstances
                  </p>
                </div>
                <h4>Max Conversion</h4>
                <div className="about_us_signature">
                  <img
                    src="./images/signature.png"
                    alt="img"
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

export default AboutOurCompany;
