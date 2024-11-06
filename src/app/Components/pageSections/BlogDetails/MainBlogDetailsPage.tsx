import Link from "next/link";
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
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <i
                        className="fas fa-chevron-right"
                        style={{ margin: "0 8px", fontSize: "12px" }}
                      ></i>
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
                className="col-xl-12 col-lg-12 wow fadeInLeft"
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
                    <ul className="features-list">
                      <li>
                        <span style={{ marginRight: "8px" }}>→</span>
                        Dramatically syndicate alternative infrastructures
                        through backward-compatible.
                      </li>
                      <li>
                        <span style={{ marginRight: "8px" }}>→</span>
                        Economically sound information without maintainable
                        alignments.
                      </li>
                      <li>
                        <span style={{ marginRight: "8px" }}>→</span>
                        Collaboratively syndicate world-class information after
                        principle-centered.
                      </li>
                      <li>
                        <span style={{ marginRight: "8px" }}>→</span>
                        Collaboratively network bricks-and-clicks best practices
                        via economically sound.
                      </li>
                      <li>
                        <span style={{ marginRight: "8px" }}>→</span>
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
