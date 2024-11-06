import React from "react";

const Blogs = () => {
  return (
    <>
      {/*============================
  BLOG START
    ==============================*/}
      <section className="blog pt_100 xs_pt_70 pb_100 xs_pb_70">
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
                  <a href="#" className="category">
                    Medical
                  </a>
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
                  <a href="blog-detail" className="blog_heading">
                    Telehealth Services Are Ready To Help Your Family
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur ipsum.
                  </p>
                  <div className="blog_text_icon">
                    <a className="blog_link" href="blog-detail">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
                    {/* <ul className="d-flex flex-wrap blog_react">
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
                    </ul> */}
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
                  <a href="#" className="category blue">
                    Hospital
                  </a>
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
                  <a href="blog-detail" className="blog_heading">
                    Doccure – Making your clinic painless visit
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur amet.
                  </p>
                  <div className="blog_text_icon">
                    <a className="blog_link" href="blog-detail">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
                    {/* <ul className="d-flex flex-wrap blog_react">
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
                    </ul> */}
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
                  <a href="#" className="category red">
                    Doctor
                  </a>
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
                  <a href="blog-detail" className="blog_heading">
                    What are the benefits of Online Doctor Booking
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur.
                  </p>
                  <div className="blog_text_icon">
                    <a className="blog_link" href="blog-detail">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
                    {/* <ul className="d-flex flex-wrap blog_react">
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
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BLOG END
    ==============================*/}
    </>
  );
};

export default Blogs;
