import React from "react";

const Blogs = () => {
  return (
    <>
      <section className="blog pt_100 xs_pt_70 pb_100 xs_pb_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="common_heading center_heading mb_15">
                <h5>Latest Blogs</h5>
                <h2>Insights &amp; Innovations in Healthcare</h2>
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
                  <img
                    src="/image1.jpg"
                    alt="blog img"
                    className=" img-fluid w-100"
                  />
                </div>
                <div className="blog_text">
                  <ul className="d-flex flex-wrap blog_date">

                    <li>
                      <i className="fas fa-calendar-alt" />
                      22 June 2024
                    </li>
                  </ul>
                  <a href="blog-detail" className="blog_heading">
                    The Rise of Telehealth: Transforming Patient Care
                  </a>
                  <p>
                    Explore how telehealth is reshaping the healthcare
                    landscape, providing accessible and efficient care for
                    patients globally.
                  </p>
                  <div className="blog_text_icon">
                    <a className="blog_link" href="blog-detail">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
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
                  <img
                    src="/image2.jpg"
                    alt="blog img"
                    className=" img-fluid w-100"
                  />
                </div>
                <div className="blog_text">
                  <ul className="d-flex flex-wrap blog_date">

                    <li>
                      <i className="fas fa-calendar-alt" />
                      22 June 2024
                    </li>
                  </ul>
                  <a href="blog-detail" className="blog_heading">
                    Revolutionizing Medical Billing with AI
                  </a>
                  <p>
                    Discover how AI-driven solutions streamline medical billing
                    processes, reducing errors and improving efficiency for
                    healthcare providers.
                  </p>
                  <div className="blog_text_icon">
                    <a className="blog_link" href="blog-detail">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
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
                  <img
                    src="/image3.jpg"
                    alt="blog img"
                    className=" img-fluid w-100"
                  />
                </div>
                <div className="blog_text">
                  <ul className="d-flex flex-wrap blog_date">

                    <li>
                      <i className="fas fa-calendar-alt" />
                      22 June 2024
                    </li>
                  </ul>
                  <a href="blog-detail" className="blog_heading">
                    Enhancing Practice Efficiency Through EHR Systems
                  </a>
                  <p>
                    Learn how custom electronic health record (EHR) solutions
                    can improve workflow and patient care in healthcare
                    practices.
                  </p>
                  <div className="blog_text_icon">
                    <a className="blog_link" href="blog-detail">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
