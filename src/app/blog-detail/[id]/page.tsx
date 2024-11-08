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
    console.log("Loading blog data...");
    return <p>Loading...</p>;
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
