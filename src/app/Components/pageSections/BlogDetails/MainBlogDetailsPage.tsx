"use client"
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React from "react";

const MainBlogDetailsPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const imageUrl = searchParams.get("imageUrl");

  return (
    <>
      {/* Breadcrumb section */}
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
                    <i className="fas fa-chevron-right" style={{ margin: "0 8px", fontSize: "12px" }}></i>
                  </li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog details section */}
      <section className="blog_details pt_100 xs_pt_70 pb_100 xs_pb_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 wow fadeInLeft" data-wow-duration="1s">
              <div className="blog_details_content">
                <div className="blog_details_img">
                  <img src={imageUrl || "images/blog_dtls-1.jpg"} alt="blog img" className="img-fluid w-100" />
                </div>
                <div className="blog_details_header d-flex flex-wrap justify-content-between">
                  <ul className="blog_details_header_left d-flex flex-wrap">
                    <li><span>Medical</span></li>
                    <li><i className="far fa-user" /> Admin</li>
                    <li><i className="far fa-calendar-alt" /> 22 June 2023</li>
                  </ul>
                </div>
                <div className="blog_details_text">
                  <h2 className="details_title">{title}</h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBlogDetailsPage;
