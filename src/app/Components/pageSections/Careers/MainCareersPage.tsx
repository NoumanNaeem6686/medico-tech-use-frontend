import Link from "next/link";
import React from "react";

const MainCareersPage = () => {
  return (
    <div>
      {/*============================
  BREADCRUMB START
    ==============================*/}
      <section className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_text">
                <h1>Careers</h1>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i
                      className="fas fa-chevron-right"
                      style={{ margin: "0 8px", fontSize: "12px" }}
                    ></i>
                  </li>
                  <li>Career</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BREADCRUMB END
    ==============================*/}
      <section className="project_area pt_100 xs_pt_70 pb_100 xs_pb_70">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-6">
              <div className="common_heading home_tow_heading mb_15">
                <h5>Our Project</h5>
                <h2>Great Work We Done</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="single_project">
                <img src="images/project-one.jpg" alt="" />
                <div className="text">
                  <h3>Scientist medical laboratory</h3>
                  <p>Operation Theater</p>
                </div>
                <div className="icon">
                  <img src="images/Vecto-plusr.png" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="single_project">
                <img src="images/project-tow.jpg" alt="" />
                <div className="text">
                  <h3>Scientist medical laboratory</h3>
                  <p>Operation Theater</p>
                </div>
                <div className="icon">
                  <img src="images/Vecto-plusr.png" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="single_project">
                <img src="images/project-three.jpg" alt="" />
                <div className="text">
                  <h3>Scientist medical laboratory</h3>
                  <p>Operation Theater</p>
                </div>
                <div className="icon">
                  <img src="images/Vecto-plusr.png" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="single_project">
                <img src="images/project-four.jpg" alt="" />
                <div className="text">
                  <h3>Scientist medical laboratory</h3>
                  <p>Operation Theater</p>
                </div>
                <div className="icon">
                  <img src="images/Vecto-plusr.png" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="single_project">
                <img src="images/project-five.jpg" alt="" />
                <div className="text">
                  <h3>Scientist medical laboratory</h3>
                  <p>Operation Theater</p>
                </div>
                <div className="icon">
                  <img src="images/Vecto-plusr.png" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="single_project">
                <img src="images/project-six.jpg" alt="" />
                <div className="text">
                  <h3>Scientist medical laboratory</h3>
                  <p>Operation Theater</p>
                </div>
                <div className="icon">
                  <img src="images/Vecto-plusr.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainCareersPage;
