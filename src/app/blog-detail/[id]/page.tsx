"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MainBlogDetailsPage from "../../Components/pageSections/BlogDetails/MainBlogDetailsPage";
import axios from "axios";

const Page = () => {
  const params = useParams();
  const id = params.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!id) return;

      console.log("Fetching blog data for ID:", id); // Log the ID being fetched

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/admin/get-blog/${id}`
        );
        console.log("API response:", response.data); // Log the entire response

        if (response.data.success) {
          console.log("Blog data:", response.data.blog); // Log the blog data specifically
          setBlog(response.data.blog); // Accessing the `blog` key in the response
        } else {
          console.error("Failed to retrieve blog data");
          setError("Blog data not found");
        }
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
        setError("Failed to fetch blog data");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  if (!id) {
    console.error("Blog ID not found in URL");
    return <h1>Blog ID not found</h1>;
  }

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <style jsx>{`
          .loader-container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f8f9fa; /* Background color for loader screen */
          }
          .loader {
            border: 8px solid #f3f3f3; /* Light gray border */
            border-top: 8px solid #007bff; /* Blue border on top */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    console.error("Error:", error);
    return <p>{error}</p>;
  }

  return (
    <>
      <MainBlogDetailsPage blog={blog} />
    </>
  );
};

export default Page;
