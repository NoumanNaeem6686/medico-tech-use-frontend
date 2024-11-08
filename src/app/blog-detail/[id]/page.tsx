"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import MainBlogDetailsPage from "../../Components/pageSections/BlogDetails/MainBlogDetailsPage";

const page = () => {
  const param = useSearchParams();
  const id = param.get("id");

  console.log("id", id);
  return (
    <>
      <MainBlogDetailsPage />
    </>
  );
};

export default page;
