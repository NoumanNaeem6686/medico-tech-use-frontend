"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MainBlogDetailsPage = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchBlogDetails = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/get-blog/${id}`
          ); // Ensure this endpoint is correct
          console.log("blog response", response);
          if (response.data.success) {
            setBlog(response.data); // Assuming data contains the blog details
          } else {
            console.error("Failed to retrieve blog details");
          }
        } catch (error) {
          console.error("Error fetching blog details:", error);
        } finally {
          setLoading(false); // Set loading to false once data fetching is complete
        }
      } else {
        setLoading(false); // Stop loading if id is not available
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) {
    return <p>Loading blog details...</p>;
  }

  if (!blog) {
    return <p>No blog details found.</p>;
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BLOG DETAILS END
    ==============================*/}
    </>
  );
};

export default MainBlogDetailsPage;
