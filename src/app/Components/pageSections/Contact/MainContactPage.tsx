"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const MainContactPage = () => {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");
  const [contactType, setContactType] = useState(""); // Audio or Video
  const [loading, setLoading] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    setLoading(true);
    const formData = {
      name,
      email,
      contactNo,
      message,
      contactType,
    };

    try {
      // Replace with your backend API URL
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/user/contact-us`, // Adjust to your actual endpoint
        formData
      );
      console.log("Response from backend:", response.data);

      // Handle success (e.g., show success message, clear form fields, etc.)
      // alert("Contact form submitted successfully!");
      toast.success("Contact form submitted successfully!");
      // Reset form fields
      setName("");
      setEmail("");
      setContactNo("");
      setMessage("");
      setContactType("");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message)
      // alert("There was an error submitting the form.");
      toast.error("There was an error submitting the form.");
    } finally {
      setLoading(false); // Set loading to false after response
    }
  };

  return (
    <div>
      <>
        {/*============================
        BREADCRUMB START
        ==============================*/}
        <section className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb_text">
                  <h1>Contact Us</h1>
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
                    <li>Contact</li>
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
        CONTACT START
        ==============================*/}
        <section className="contact mt_75 xs_mt_45 pb_100 xs_pb_70">
          <div className="container">
            <div className="contact_form_area mt_100 xs_mt_70">
              <div className="row">
                <div className="col-lg-4 wow fadeInLeft" data-wow-duration="1s">
                  <div className="contact_img">
                    <img
                      src="images/contact_img.jpg"
                      alt="contact img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-8 wow fadeInRight"
                  data-wow-duration="1s"
                >
                  <form className="contact_form" onSubmit={handleFormSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="custom_input"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="custom_input"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Contact Number"
                          value={contactNo}
                          onChange={(e) => setContactNo(e.target.value)}
                          required
                          className="custom_input"
                        />
                      </div>
                      <div className="col-md-6">
                        <select
                          value={contactType}
                          onChange={(e) => setContactType(e.target.value)}
                          required
                          className="custom_input"
                        >
                          <option value="">Select Contact Type</option>
                          <option value="audio">Audio</option>
                          <option value="video">Video</option>
                        </select>
                      </div>
                      <div className="col-xl-12">
                        <textarea
                          rows={5}
                          placeholder="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          className="custom_input"
                        />
                      </div>
                      <div className="col-xl-12">
                        <button type="submit" className="common_btn">
                          {loading ? "Loading..." : "Submit Now"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*============================
        CONTACT END
        ==============================*/}

        {/* Custom styles for input fields */}
        <style jsx>{`
          .custom_input {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            box-sizing: border-box;
            border: 2px solid #ccc;
            border-radius: 8px; /* Added border-radius */
            transition: border-color 0.3s ease;
          }

          .custom_input:focus {
            border-color: #007bff;
            outline: none;
          }

          .custom_input::placeholder {
            color: #aaa;
          }

          .common_btn {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 8px; /* Added border-radius */
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .common_btn:hover {
            background-color: #0056b3;
          }
        `}</style>
      </>
    </div>
  );
};

export default MainContactPage;
