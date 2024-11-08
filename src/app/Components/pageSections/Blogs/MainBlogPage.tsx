"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MainBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/admin/all-blogs`
        ); // Update '/api/blogs' with your actual API endpoint
        if (response.data.success && response.data.data) {
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

  const handleBlogClick = (id: string) => {
    router.push(`/blog-detail/${id}`);
  };

  return (
    <>
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
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
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
                      {blog.title}

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

      {/* CSS styling for blog description */}
      <style jsx>{`
        .blog_description {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          max-height: 3rem; /* Adjust as needed */
          line-height: 1.5;
        }
      `}</style>
    </>
  );
};

export default MainBlogPage;
