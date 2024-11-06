import Link from "next/link";
import React from "react";

const MainBlogPage = () => {
  return (
    <>
      {/*============================
  BREADCRUMB START
    ==============================*/}
      <section className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_text">
                <h1>Popular blogs</h1>
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
                  <li>Blogs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_page pt_75 xs_pt_45 pb_100 xs_pb_70">
        <div className="container">
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
                  <Link href="blog-detail" className="blog_heading">
                    Telehealth Services Are Ready To Help Your Family
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur ipsum.
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
                  <Link href="blog-detail" className="blog_heading">
                    Doccure – Making your clinic painless visit
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur amet.
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
                  <Link href="blog-detail" className="blog_heading">
                    What are the benefits of Online Doctor Booking
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur.
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
                  <Link href="#" className="category red">
                    Doctor
                  </Link>
                  <img
                    src="images/blog-6.jpg"
                    alt="blog img"
                    className=" img-fluid w-100"
                  />
                </div>
                <div className="blog_text">
                  <Link href="blog-detail" className="blog_heading">
                    What are the benefits of Online Doctor Booking
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur.
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
                  <Link href="#" className="category">
                    Medical
                  </Link>
                  <img
                    src="images/blog-4.jpg"
                    alt="blog img"
                    className=" img-fluid w-100"
                  />
                </div>
                <div className="blog_text">
                  <Link href="blog-detail" className="blog_heading">
                    Telehealth Services Are Ready To Help Your Family
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur ipsum.
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
                  <Link href="#" className="category blue">
                    Hospital
                  </Link>
                  <img
                    src="images/blog-5.jpg"
                    alt="blog img"
                    className=" img-fluid w-100"
                  />
                </div>
                <div className="blog_text">
                  <Link href="blog-detail" className="blog_heading">
                    Doccure – Making your clinic painless visit
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur amet.
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
                  <Link href="#" className="category">
                    Medical
                  </Link>
                  <img
                    src="images/blog-7.jpg"
                    alt="blog img"
                    className=" img-fluid w-100"
                  />
                </div>
                <div className="blog_text">
                  <Link href="blog-detail" className="blog_heading">
                    Telehealth Services Are Ready To Help Your Family
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur ipsum.
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
                  <Link href="#" className="category blue">
                    Hospital
                  </Link>
                  <img
                    src="images/blog-5.jpg"
                    alt="blog img"
                    className=" img-fluid w-100"
                  />
                </div>
                <div className="blog_text">
                  <Link href="blog-detail" className="blog_heading">
                    Doccure – Making your clinic painless visit
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur amet.
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
                  <Link href="blog-detail" className="blog_heading">
                    What are the benefits of Online Doctor Booking
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Veritatis consectetur.
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
          <div className="row mt_60">
            <div className="col-12">
              <div id="pagination">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="far fa-angle-double-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBlogPage;
