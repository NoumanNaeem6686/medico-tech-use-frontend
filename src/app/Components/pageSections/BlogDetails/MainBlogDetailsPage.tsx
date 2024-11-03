import React from "react";

const MainBlogDetailsPage = () => {
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
                  <h1>Blog Details</h1>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>Blog Details</li>
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
  BLOG DETAILS START
    ==============================*/}
        <section className="blog_details pt_100 xs_pt_70 pb_100 xs_pb_70">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-9 col-lg-8 wow fadeInLeft"
                data-wow-duration="1s"
              >
                <div className="blog_details_content">
                  <div className="blog_details_img">
                    <img
                      src="images/blog_dtls-1.jpg"
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="blog_details_header d-flex flex-wrap justify-content-between">
                    <ul className="blog_details_header_left d-flex flex-wrap">
                      <li>
                        <span>Medical</span>
                      </li>
                      <li>
                        <i className="far fa-user" />
                        Admin
                      </li>
                      <li>
                        <i className="far fa-calendar-alt" />
                        22 June 2023
                      </li>
                    </ul>
                    <ul className="blog_details_header_right d-flex flex-wrap">
                      <li>
                        <i className="far fa-comment" />
                        05
                      </li>
                      <li>
                        <i className="far fa-heart" />
                        20
                      </li>
                      <li>
                        <i className="fas fa-share-alt" />
                        15
                      </li>
                    </ul>
                  </div>
                  <div className="blog_details_text">
                    <h2 className="details_title">
                      Precious Tips To Help You Get Better.
                    </h2>
                    <p>
                      Dramatically syndicate alternative infrastructures through
                      backward-compatible web-readiness. Completely predom inate
                      economically sound information without maintainable
                      alignments. Compellingly generate resource maximizing
                      imperatives through cooperative best practices
                      Collaboratively syndicate
                    </p>
                    <p>
                      through cooperative best practices. Collaboratively
                      syndicate world-class information after principle-
                      centered web-readiness. Collaboratively network
                      bricks-and-clicks best practices via economically sound.
                    </p>
                    <p>
                      Dramatically syndicate alternative infrastructures through
                      backward-compatible web-readiness. Completely predom inate
                      economically sound information without maintainable
                      alignments. Compellingly generate resource maximizing
                      imperatives through cooperative best practices
                      Collaboratively syndicate
                    </p>
                    <ul>
                      <li>
                        Dramatically syndicate alternative infrastructures
                        through backward-compatible.
                      </li>
                      <li>
                        economically sound information without maintainable
                        alignments.
                      </li>
                      <li>
                        Collaboratively syndicate world-class information after
                        principle- centered.
                      </li>
                      <li>
                        Collaboratively network bricks-and-clicks best practices
                        via economically sound.
                      </li>
                      <li>
                        Compellingly generate resource maximizing imperatives
                        through.
                      </li>
                    </ul>
                    <p>
                      through cooperative best practices. Collaboratively
                      syndicate world-class information after principle-
                      centered web-readiness. Collaboratively network
                      bricks-and-clicks best practices via economically sound.
                    </p>
                    <p>
                      Dramatically syndicate alternative infrastructures through
                      backward-compatible web-readiness. Completely predom inate
                      economically sound information without maintainable
                      alignments. Compellingly generate resource maximizing
                      imperatives through cooperative best practices
                      Collaboratively syndicate
                    </p>
                    <div className="details_quot_text">
                      “There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by variations of passages”
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      is a standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to
                      make a type specimen book.
                    </p>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's is a l
                      impedit quo standard dummy text ever since the 1500.
                    </p>
                  </div>
                  <div className="blog_details_share d-flex flex-wrap justify-content-between">
                    <ul className="tags d-flex flex-wrap align-items-center">
                      <li>
                        <a href="#">Appointment</a>
                      </li>
                      <li>
                        <a href="#">Doctors</a>
                      </li>
                      <li>
                        <a href="#">Health</a>
                      </li>
                      <li>
                        <a href="#">Hospital</a>
                      </li>
                    </ul>
                    <ul className="share d-flex flex-wrap align-items-center">
                      <li>Share :</li>
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
                          <i className="fab fa-instagram-square" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="comment_area">
                    <h2>Total Comment (04)</h2>
                    <div className="single_comment">
                      <div className="comment_img">
                        <img
                          src="images/comment-1.png"
                          alt="review"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="comment_text">
                        <h4>
                          Robert Smith{" "}
                          <span>
                            <i className="fal fa-clock" />4 hour ago
                          </span>
                        </h4>
                        <p>
                          But the majority have suffered alteration in some
                          form, by injected humour, or randomi sed its wordsn
                          look even slightly believable.
                        </p>
                        <a href="#">
                          <i className="fal fa-reply-all" />
                          reply
                        </a>
                      </div>
                    </div>
                    <div className="single_comment commant_reply">
                      <div className="comment_img">
                        <img
                          src="images/comment-2.png"
                          alt="review"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="comment_text">
                        <h4>
                          Steven Smith{" "}
                          <span>
                            <i className="fal fa-clock" aria-hidden="true" />1
                            hour ago
                          </span>
                        </h4>
                        <p>
                          But the majority have suffered alteration in some
                          form, by injected humour, or randomi sed its wordsn
                          look even slightly believable.
                        </p>
                        <a href="#">
                          <i className="fal fa-reply-all" />
                          reply
                        </a>
                      </div>
                    </div>
                    <div className="single_comment">
                      <div className="comment_img">
                        <img
                          src="images/comment-3.png"
                          alt="review"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="comment_text">
                        <h4>
                          Deni Rover
                          <span>
                            <i className="fal fa-clock" aria-hidden="true" /> 6
                            hour ago
                          </span>
                        </h4>
                        <p>
                          But the majority have suffered alteration in some
                          form, by injected humour, or randomi sed its wordsn
                          look even slightly believable.
                        </p>
                        <a href="#">
                          <i className="fal fa-reply-all" />
                          reply
                        </a>
                      </div>
                    </div>
                    <div className="single_comment">
                      <div className="comment_img">
                        <img
                          src="images/comment-1.png"
                          alt="review"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="comment_text">
                        <h4>
                          Robert Smith{" "}
                          <span>
                            <i className="fal fa-clock" aria-hidden="true" />4
                            hour ago
                          </span>
                        </h4>
                        <p>
                          But the majority have suffered alteration in some
                          form, by injected humour, or randomi sed its wordsn
                          look even slightly believable.
                        </p>
                        <a href="#">
                          <i className="fal fa-reply-all" />
                          reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <form className="comment_input_area">
                    <h2>Leave a Comment</h2>
                    <div className="row">
                      <div className="col-xl-6">
                        <input type="text" placeholder="Name..." />
                      </div>
                      <div className="col-xl-6">
                        <input type="text" placeholder="Email..." />
                      </div>
                      <div className="col-xl-12">
                        <textarea
                          rows={4}
                          placeholder="Write A Comment..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-xl-12">
                        <button type="submit" className="common_btn">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 wow fadeInRight"
                data-wow-duration="1s"
              >
                <div id="sticky_sidebar">
                  <div className="service_dtls_rightside">
                    <h4>Search</h4>
                    <form action="#" className="blog_form">
                      <input type="text" placeholder="Search..." />
                      <button className="_blog_btn">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </div>
                  <div className="service_dtls_rightside">
                    <h5>Categories</h5>
                    <ul className="sidebar_category">
                      <li>
                        <a href="#">Urology</a>
                      </li>
                      <li>
                        <a href="#">Gynecologist</a>
                      </li>
                      <li>
                        <a href="#">Medicine</a>
                      </li>
                      <li>
                        <a href="#">Child Care</a>
                      </li>
                      <li>
                        <a href="#">Covid Test</a>
                      </li>
                      <li>
                        <a href="#">Dentist</a>
                      </li>
                    </ul>
                  </div>
                  <div className="service_dtls_rightside">
                    <h5>Recent Post</h5>
                    <ul className="sidebar_post">
                      <li>
                        <div className="recent_post_img">
                          <img
                            src="images/blog_dtls-2.jpg"
                            alt="post"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="recent_post_text">
                          <p>
                            <i className="fas fa-calendar-alt" />
                            22 June 2023
                          </p>
                          <a href="#">Precious Tips To Help You Get Better.</a>
                        </div>
                      </li>
                      <li>
                        <div className="recent_post_img">
                          <img
                            src="images/blog_dtls-3.jpg"
                            alt="post"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="recent_post_text">
                          <p>
                            <i className="fas fa-calendar-alt" />
                            22 June 2023
                          </p>
                          <a href="#">Precious Tips To Help You Get Better.</a>
                        </div>
                      </li>
                      <li>
                        <div className="recent_post_img">
                          <img
                            src="images/blog_dtls-4.jpg"
                            alt="post"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="recent_post_text">
                          <p>
                            <i className="fas fa-calendar-alt" />
                            22 June 2023
                          </p>
                          <a href="#">Precious Tips To Help You Get Better.</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="service_dtls_rightside sidebar_tags">
                    <h5>Post Tags</h5>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <a href="#">Appointment</a>
                      </li>
                      <li>
                        <a href="#">Doctors</a>
                      </li>
                      <li>
                        <a href="#">Importance</a>
                      </li>
                      <li>
                        <a href="#">Health</a>
                      </li>
                      <li>
                        <a href="#">Best</a>
                      </li>
                      <li>
                        <a href="#">Hospital</a>
                      </li>
                      <li>
                        <a href="#">Laboratory</a>
                      </li>
                      <li>
                        <a href="#">Antibiotics</a>
                      </li>
                      <li>
                        <a href="#">Doctors</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*============================
  BLOG DETAILS END
    ==============================*/}
      </>
    </>
  );
};

export default MainBlogDetailsPage;
