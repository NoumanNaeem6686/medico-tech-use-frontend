import Link from "next/link";
import React from "react";

const HelpLine = () => {
  return (
    <>

      <section className="helpline pt_100 xs_pt_70 pb_100 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xxl-6 col-lg-6 col-xl-6 wow fadeInLeft"
              data-wow-duration="1s"
            >
              <div className="common_heading">
                <h5>Emergency helpline</h5>
                <h2>Need Emergency Contact</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum susp endisse ultrices gravida tempor incididu ut
                  labore.
                </p>
              </div>
              <ul className="helpline_iteam">
                <li>24/7 Contact .</li>
                <li>24 hours Open .</li>
                <li>Emergency Contact Our Phone Number.</li>
              </ul>
              <ul className="d-flex flex-wrap helpline_contact">
                <li>
                  <span>
                    <i className="fas fa-phone-alt" />
                  </span>
                  <div className="helpline_contact_text">
                    <p>Phone Number</p>
                    <a href="callto:123456789">+880 13 2525 065</a>
                  </div>
                </li>
                <li>
                  <span>
                    <i className="fas fa-comment-alt-lines" />
                  </span>
                  <div className="helpline_contact_text">
                    <p>Quick Your Email</p>
                    <a href="mailto:example@gmail.com">help.info@gmail.com</a>
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
                  alt="help img"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
    HELPLINE END
      ==============================*/}
      {/*============================
    TEAM START
      ==============================*/}
      {/* <section className="team pt_100 xs_pt_70 pb_100 xs_pb_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="common_heading center_heading mb_25">
                <h5>our team</h5>
                <h2>Meet Our expert </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single_team">
                <div className="team_img">
                  <img
                    src="images/team-1.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                  <div className="team_overlay">
                    <ul className="team_icon">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_designation">
                  <h6>Dr. Jon Miller</h6>
                  <p>Neurology</p>
                  <span>MBBS, FCPS, FRCS</span>
                  <Link href="/appointment">
                    <i className="fal fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single_team">
                <div className="team_img">
                  <img
                    src="images/team-2.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                  <div className="team_overlay">
                    <ul className="team_icon">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_designation">
                  <h6>Dr. Jon Miller</h6>
                  <p>Cardiology</p>
                  <span>MBBS, FCPS, FRCS</span>
                  <Link href="/appointment">
                    <i className="fal fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single_team">
                <div className="team_img">
                  <img
                    src="images/team-3.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                  <div className="team_overlay">
                    <ul className="team_icon">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_designation">
                  <h6>Dr. Jon Miller</h6>
                  <p>Ophthalmology</p>
                  <span>MBBS, FCPS, FRCS</span>
                  <Link href="/appointment">
                    <i className="fal fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single_team">
                <div className="team_img">
                  <img
                    src="images/team-4.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                  <div className="team_overlay">
                    <ul className="team_icon">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_designation">
                  <h6>Dr. Jon Miller</h6>
                  <p>Pediatric</p>
                  <span>MBBS, FCPS, FRCS</span>
                  <Link href="/appointment">
                    <i className="fal fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-12 text-center mt_40">
              <a className="common_btn" href="doctor.html">
                view more
              </a>
            </div> 
    </div >
        </div >
      </section > */}

    </>
  );
};

export default HelpLine;
