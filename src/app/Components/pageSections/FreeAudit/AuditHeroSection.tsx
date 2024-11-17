import React from "react";

const AuditHeroSection = () => {
  return (
    <>
      <section
        className="banner banner_3"
        style={{ background: "url(/image8.jpg)" }}
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
                  Unlock Hidden Revenue
                  <br />
                  with a Free
                  <br />
                  Billing Audit
                </h1>
                <p>
                  Optimize your practice's profitability by identifying missed charges and compliance issues. Get your complimentary audit from our experts today.
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
