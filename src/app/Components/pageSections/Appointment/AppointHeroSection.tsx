import Link from "next/link";
import React from "react";

const AppointHeroSection = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div
            className="col-md-6 col-xl-5 wow fadeInLeft"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInLeft",
            }}
          >
            <div className="banner_text">
              <h1>
                Protect Your Health And Take Care <span>Your Health</span>
              </h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text It has roots in a piece of classical.
              </p>
              <Link href="appointment" className="common_btn">
                Get Appointment
              </Link>
            </div>
          </div>
          <div
            className="col-md-5 col-xl-6 wow fadeInRight"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInRight",
            }}
          >
            <div className="banner_img_tow">
              <img
                src="images/home-banner-tow.png"
                alt="img"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointHeroSection;
