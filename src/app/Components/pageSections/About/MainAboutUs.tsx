import React from "react";
import AboutOurCompany from "./AboutOurCompany";
import Link from "next/link";
import WhyUs from "../Home/WhyUs";

const MainAboutUs = () => {
  return (
    <>
      <>
        {/*============================
  BREADCRUMB START
    ==============================*/}
        <section className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb_text">
                  <h1>About Us</h1>
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
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*============================
  BREADCRUMB END
    ==============================*/}
        {/*============================
  ABOUT PAGE START
    ==============================*/}



        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
              <div
                className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                  <img className=" rounded-xl object-cover" src="/image3.jpg" alt="about Us image" />
                </div>
                <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="/image1.jpg"
                  alt="about Us image" />
              </div>
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2
                      className="text-gray-900 text-4xl font-bold font-manrope leading-normal text-start ">
                      Welcome to MedicoTech Solutions (MTS)</h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed text-start ">
                      At MedicoTech Solutions (MTS), we are a team of healthcare
                      IT and billing experts dedicated to revolutionizing the
                      work of healthcare providers by providing them with
                      inventive solutions to all their administrative problems.
                      Our experts bring precision and efficiency to every task.</p>
                  </div>
                  <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                    <div className="flex-col justify-start items-start inline-flex">
                      <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">33+</h3>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">125+</h4>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">Successful Projects</h6>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">52+</h4>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
                    </div>
                  </div>
                </div>
                <Link href={'/free-audit'}>
                  <button
                    className="sm:w-fit w-full px-3.5 py-2 bg-primaryColor transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-white text-sm font-medium leading-6">Get Free Audit</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">                      Our Mission
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed text-start ">  Our mission is to empower healthcare providers globally by
                    streamlining critical operational processes, enabling them
                    to focus solely on delivering outstanding patient care. We
                    are dedicated to optimizing billing workflows, providing
                    robust IT support, and offering advanced digital health
                    solutions.</p>
                  <p className="text-gray-500 text-base font-normal leading-relaxed text-start ">
                    By simplifying administrative tasks, we aim to enhance
                    patient care quality while helping medical practices
                    achieve optimal financial results.</p>
                </div>

              </div>
              <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="/image1.jpg" alt="about Us image" />
            </div>
          </div>
        </section>
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="/image2.jpg" alt="about Us image" />

              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Our Vision
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed text-start ">  We envision a healthcare ecosystem where technology
                    effortlessly addresses operational complexities, fostering
                    a sustainable and impactful environment that benefits
                    providers and patients.</p>
                  <p className="text-gray-500 text-base font-normal leading-relaxed text-start ">
                    We are committed to simplifying revenue cycle management,
                    reducing denials, boosting revenue, and delivering
                    exceptional IT support, allowing medical professionals to
                    focus on patient care.</p>
                </div>

              </div>
            </div>
          </div>
        </section>
        <WhyUs />

        <section className="about_page">
          <div className="about pt_100 xs_pt_70 pb_100 xs_pb_70">
            <div className="container">
              <div className="row">
                <div className="col-12 wow fadeInRight" data-wow-duration="1s">






                  <div className="common_heading" style={{ marginTop: "20px" }}>
                    <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
                      REQUEST A FREE CONSULTATION NOW!
                    </h3>
                    <p>
                      Transform your practice with MedicoTech
                      Solutions—experience seamless efficiency, enhanced patient
                      care, and optimal financial outcomes.
                    </p>
                  </div>

                  <Link
                    href="/free-audit"
                    className="common_btn"
                    style={{ marginTop: "25px" }}
                  >
                    Get Free Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="about_counter">
            <div className="container">
              <div
                className="about_counter_bg"
                style={{ background: "url(images/counter_bg.jpg)" }}
              >
                <div className="row">
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_counter">
                      <span className="counter_icon">
                        <i className="fas fa-users" />
                      </span>
                      <h4 className="counter">950</h4>
                      <p>Happy Patients</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_counter">
                      <span className="counter_icon icon2">
                        <i className="fas fa-user-md" />
                      </span>
                      <h4 className="counter">256</h4>
                      <p>Expert Doctors</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_counter">
                      <span className="counter_icon icon3">
                        <i className="fas fa-trophy-alt" />
                      </span>
                      <h4 className="counter">90</h4>
                      <p>Award Wining</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_counter last_counter">
                      <span className="counter_icon icon4">
                        <i className="far fa-stars" />
                      </span>
                      <h4 className="counter">4.9</h4>
                      <p>Average Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AboutOurCompany />

          {/* <div
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
                      <h4>fill the form</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                        elit. Rem quia officia quaerat ipsam!
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_process">
                      <span className="process_number num2">02</span>
                      <h4>Book an Appointment</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                        elit. Rem quia officia quaerat ipsam!
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_process">
                      <span className="process_number num3">03</span>
                      <h4>Check-Ups</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                        elit. Rem quia officia quaerat ipsam!
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="single_process">
                      <span className="process_number num4">04</span>
                      <h4>Get Reports</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                        elit. Rem quia officia quaerat ipsam!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="team pt_100 xs_pt_70 pb_100 xs_pb_70">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="common_heading center_heading mb_25">
                    <h5>our team</h5>
                    <h2>Meet Our expert doctor</h2>
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
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-whatsapp" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
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
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-whatsapp" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
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
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-whatsapp" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
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
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-whatsapp" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
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
                <div className="col-12 text-center mt_40">
                  <Link className="common_btn" href="doctor.html">
                    view more
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="helpline pt_100 xs_pt_70 pb_100 xs_pb_70">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum susp endisse ultrices gravida tempor
                      incididu ut labore.
                    </p>
                  </div>
                  <ul className="helpline_iteam">
                    <li>24/7 Contact Our Hospital.</li>
                    <li>24 hours Open Our Hospital.</li>
                    <li>Emergency Contact Our Phone Number.</li>
                  </ul>
                  <ul className="d-flex flex-wrap helpline_contact">
                    <li>
                      <span>
                        <i className="fas fa-phone-alt" />
                      </span>
                      <div className="helpline_contact_text">
                        <p>Phone Number</p>
                        <Link href="callto:123456789">+880 13 2525 065</Link>
                      </div>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-comment-alt-lines" />
                      </span>
                      <div className="helpline_contact_text">
                        <p>Quick Your Email</p>
                        <Link href="mailto:example@gmail.com">
                          help.info@gmail.com
                        </Link>
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
          </div> */}
          {/* <div className="blog pt_100 xs_pt_70 pb_100 xs_pb_70">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="common_heading center_heading mb_15">
                    <h5>Latest News</h5>
                    <h2>Latest Post &amp; Articles</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="single_blog">
                    <div className="blog_img">
                      <Link href="#" className="category">
                        Medical
                      </Link>
                      <img
                        src="images/blog-1.jpg"
                        alt="blog img"
                        className=" img-fluid w-100"
                      />
                    </div>
                    <div className="blog_text">
                      <ul className="d-flex flex-wrap blog_date">
                        <li>
                          <i className="fas fa-user" />
                          Admin
                        </li>
                        <li>
                          <i className="fas fa-calendar-alt" />
                          22 june 2023
                        </li>
                      </ul>
                      <Link href="blog-detail" className="blog_heading">
                        Telehealth Services Are Ready To Help Your Family
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                        Veritatis consectetur ipsum.
                      </p>
                      <div className="blog_text_icon">
                        <Link className="blog_link" href="blog-detail">
                          read more <i className="far fa-long-arrow-right" />
                        </Link>
                        <ul className="d-flex flex-wrap blog_react">
                          <li>
                            <i className="fas fa-comment-lines" />5
                          </li>
                          <li>
                            <i className="fas fa-heart" />
                            20
                          </li>
                          <li>
                            <i className="fas fa-share-alt" />
                            15
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="single_blog">
                    <div className="blog_img">
                      <Link href="#" className="category blue">
                        Hospital
                      </Link>
                      <img
                        src="images/blog-2.jpg"
                        alt="blog img"
                        className=" img-fluid w-100"
                      />
                    </div>
                    <div className="blog_text">
                      <ul className="d-flex flex-wrap blog_date">
                        <li>
                          <i className="fas fa-user" />
                          Admin
                        </li>
                        <li>
                          <i className="fas fa-calendar-alt" />
                          22 june 2023
                        </li>
                      </ul>
                      <Link href="blog-detail" className="blog_heading">
                        Doccure – Making your clinic painless visit
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                        Veritatis consectetur amet.
                      </p>
                      <div className="blog_text_icon">
                        <Link className="blog_link" href="blog-detail">
                          read more <i className="far fa-long-arrow-right" />
                        </Link>
                        <ul className="d-flex flex-wrap blog_react">
                          <li>
                            <i className="fas fa-comment-lines" />5
                          </li>
                          <li>
                            <i className="fas fa-heart" />
                            20
                          </li>
                          <li>
                            <i className="fas fa-share-alt" />
                            15
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="single_blog">
                    <div className="blog_img">
                      <Link href="#" className="category red">
                        Doctor
                      </Link>
                      <img
                        src="images/blog-3.jpg"
                        alt="blog img"
                        className=" img-fluid w-100"
                      />
                    </div>
                    <div className="blog_text">
                      <ul className="d-flex flex-wrap blog_date">
                        <li>
                          <i className="fas fa-user" />
                          Admin
                        </li>
                        <li>
                          <i className="fas fa-calendar-alt" />
                          22 june 2023
                        </li>
                      </ul>
                      <Link href="blog-detail" className="blog_heading">
                        What are the benefits of Online Doctor Booking
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                        Veritatis consectetur.
                      </p>
                      <div className="blog_text_icon">
                        <Link className="blog_link" href="blog-detail">
                          read more <i className="far fa-long-arrow-right" />
                        </Link>
                        <ul className="d-flex flex-wrap blog_react">
                          <li>
                            <i className="fas fa-comment-lines" />5
                          </li>
                          <li>
                            <i className="fas fa-heart" />
                            20
                          </li>
                          <li>
                            <i className="fas fa-share-alt" />
                            15
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
        {/*============================
  ABOUT PAGE END
    ==============================*/}
      </>
    </>
  );
};

export default MainAboutUs;
