"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/admin/all-blogs`
        ); // Update '/api/blogs' with your actual API endpoint
        if (response.data.success && response.data.data) {
          console.log("🚀 ~ fetchBlogs ~ response:", response)
          setBlogs(response.data.data); // Accessing the 'data' array
        } else {
          console.error("Failed to retrieve blogs or no data available");
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  const handleBlogClick = (id) => {
    router.push(`/blog-detail/${id}`);
  };

  return (
    <>
      <section className="blog pt_100 xs_pt_70 pb_100 xs_pb_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="common_heading center_heading mb_15">
                <h5 data-aos="fade-right"> Latest Blogs</h5>
                <h2 data-aos="fade-down">Insights &amp; Innovations in Healthcare</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div
              data-aos="zoom-in"
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
              data-aos="zoom-in"

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
              data-aos="zoom-in"
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
            </div> */}

            {blogs.length > 0 ? (
              blogs.slice(0, 3).map((blog, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
                  data-wow-duration="1s"
                  onClick={() => handleBlogClick(blog.id)}
                >
                  <div className="single_blog">
                    <div className="blog_img">
                      <Link href="#" className="category">
                        Medical {/* Static category */}
                      </Link>
                      <img
                        src={blog.blogImageUrl || "images/default-blog.jpg"} // Provide a default image if no blogImageUrl
                        alt="blog img"
                        className=" img-fluid w-100"
                        style={{ height: "200px", objectFit: "cover" }} // Adjust image height
                      />
                    </div>
                    <div className="blog_text">
                      <h2 className="text-xl font-bold">
                        {blog.title}
                      </h2>

                      <p className="blog_description">
                        {blog.description
                          .replace(/(<([^>]+)>)/gi, "")
                          .substring(0, 100)}
                        ...
                      </p>
                      <div className="blog_text_icon">
                        <Link
                          href={`/blog-detail/${blog.id}`}
                          className="blog_link"
                        >
                          read more <i className="far fa-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading blogs...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
