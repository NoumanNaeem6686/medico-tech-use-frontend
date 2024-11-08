"use client";

import React from "react";
import Link from "next/link";

const MainBlogDetailsPage = ({ blog }) => {
  if (!blog) {
    return <p>No blog data available.</p>;
  }

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
                    src={blog.blogImageUrl || "images/default-blog.jpg"} // Fallback to a default image
                    alt="blog img"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="blog_details_header d-flex flex-wrap justify-content-between">
                  <ul className="blog_details_header_left d-flex flex-wrap">
                    <li>
                      <span>Medical</span> {/* Static category */}
                    </li>
                    <li>
                      <i className="far fa-user" />
                      {blog.doctorName || "Admin"} {/* Fallback to "Admin" */}
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      {new Date(blog.createdAt).toLocaleDateString()}{" "}
                      {/* Format the date */}
                    </li>
                  </ul>
                </div>
                <div className="blog_details_text">
                  <h2 className="details_title">{blog.title}</h2>
                  {/* Render the description as HTML */}
                  <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                </div>
                {/* Tags Section */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="blog_tags mt_30">
             
                    <ul className="tags_list d-flex flex-wrap">
                      {blog.tags.map((tag, index) => (
                        <li key={index} className="tag_item">
                          <span className="tag">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BLOG DETAILS END
    ==============================*/}
      <style jsx>{`
        .blog_tags {
          margin-top: 30px;
        }
        .tags_list {
          padding: 0;
          list-style: none;
          gap: 10px;
        }
        .tag_item {
          margin-right: 10px;
        }
        .tag {
          display: inline-block;
          padding: 5px 10px;
          background-color: #f1f1f1;
          border-radius: 20px;
          font-size: 14px;
          color: #333;
        }
        .tag:hover {
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default MainBlogDetailsPage;
