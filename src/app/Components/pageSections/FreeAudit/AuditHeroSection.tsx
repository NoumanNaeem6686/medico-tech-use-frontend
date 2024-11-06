import React from "react";

const AuditHeroSection = () => {
  return (
    <>
      <section
        className="banner banner_3"
        style={{ background: "url(images/banner-bg-h3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 wow fadeInLeft"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInLeft",
              }}
            >
              <div className="banner_text">
                <h1>
                  Find The Perfect
                  <br />
                  Caregiver For Your
                  <br />
                  Loved One
                </h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text It has roots in a piece of classical.
                </p>
                {/* <div className="button_group">
                  <a href="appointment" className="common_btn">
                    Get Appointment
                  </a>
                  <a href="appointment" className="common_btn read_more">
                    Read More
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuditHeroSection;
