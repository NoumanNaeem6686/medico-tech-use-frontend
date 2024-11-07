"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const MainBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://medico-tech-backend-one.vercel.app/api/admin/all-blogs");
        console.log("Fetched Blog Data:", response.data);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <section className="breadcrumb">
        {/* Breadcrumb content */}
      </section>

      <section className="blog_page pt_75 xs_pt_45 pb_100 xs_pb_70">
        <div className="container">
          {isLoading ? (
            <div className="spinner">
              <FontAwesomeIcon icon={faSpinner} spin size="3x" className="loader-icon" />
            </div>
          ) : (
            <div className="row">
              {blogs.map((blog) => (
                <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s" key={blog.id}>
                  <div className="single_blog">
                    <div className="blog_img">
                      <Link
                        href={{
                          pathname: "/blog-detail",
                          query: {
                            id: blog.id,
                            title: blog.title,
                            description: blog.description,
                            imageUrl: blog.blogImageUrl,
                          },
                        }}
                        className="category"
                      >
                        Medical
                      </Link>
                      <img
                        src={blog.blogImageUrl || "images/blog-1.jpg"}
                        alt="blog img"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="blog_text">
                      <div>
                        <strong>Author: {blog.doctorName}</strong>
                      </div>
                      <Link
                        href={{
                          pathname: "/blog-detail",
                          query: {
                            id: blog.id,
                            title: blog.title,
                            description: blog.description,
                            imageUrl: blog.blogImageUrl,
                          },
                        }}
                        className="blog_heading"
                      >
                        {blog.title}
                      </Link>
                      <p>{blog.description.replace(/<[^>]+>/g, "").slice(0, 100)}...</p>
                      <div className="blog_text_icon">
                        <Link
                          href={{
                            pathname: "/blog-detail",
                            query: {
                              id: blog.id,
                              title: blog.title,
                              description: blog.description,
                              imageUrl: blog.blogImageUrl,
                            },
                          }}
                          className="blog_link"
                        >
                          read more <i className="far fa-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px;
        }
        .loader-icon {
          color: #007bff;
        }
      `}</style>
    </>
  );
};

export default MainBlogPage;
