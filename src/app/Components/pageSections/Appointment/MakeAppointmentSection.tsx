"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MakeAppointmentSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    bookingDate: "",
    contactNo: "",
    purpose: "",
    meetingTime: "",
    contactType: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://medico-tech-backend-one.vercel.app/api/user/book-meeting",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        await response.json();
        toast.success("Appointment booked successfully!");
        setFormData({
          email: "",
          userName: "",
          bookingDate: "",
          contactNo: "",
          purpose: "",
          meetingTime: "",
          contactType: "",
        }); // Reset form fields on success
      } else {
        toast.error("Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("An error occurred while booking the appointment.");
    }
  };

  return (
    <section className="appoinment_home_2 pb_100 xs_pb_70 mt-5">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 wow fadeInLeft">
            <div className="appoinment_wraper">
              <div className="appoinment_form">
                <div className="common_heading home_tow_heading mb_25">
                  <h5>Appointment</h5>
                  <h2>Apply For Free Now</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <input
                          type="text"
                          name="userName"
                          placeholder="Name*"
                          value={formData.userName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <input
                          type="date"
                          name="bookingDate"
                          value={formData.bookingDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <select
                          name="meetingTime"
                          value={formData.meetingTime}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Time</option>
                          <option value="10:00 Am">10:00 Am</option>
                          <option value="11:00 Am">11:00 Am</option>
                          <option value="3:00 Pm">3:00 Pm</option>
                          <option value="4:00 Pm">4:00 Pm</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <select
                          name="contactType"
                          value={formData.contactType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Contact Type</option>
                          <option value="audio">Audio</option>
                          <option value="video">Video</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="contactNo"
                        placeholder="Phone Number"
                        value={formData.contactNo}
                        onChange={handleInputChange}
                        style={{ marginTop: "20px" }}
                        required
                      />
                    </div>
                    <div className="col-xl-12">
                      <textarea
                        rows={5}
                        name="purpose"
                        placeholder="Purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        style={{ marginTop: "20px" }}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <button type="submit" className="common_btn">
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInRight">
            <div className="appoinment_contact">
              <div className="icon_text_wraper">
                <div className="appoinment_icon">
                  <img
                    src="images/appointment-man-icon.png"
                    alt="appointment-man-icon"
                  />
                </div>
                <div className="appoinment_text">
                  <p>Give Us a Call</p>
                  <a href="tel:+8801355656585">+880 13556 56585</a>
                </div>
              </div>
              <p>
                We use as filler text for layouts, non-readability is of great
                importance but because those who do not know how to pursue
                pleasure rationally encounter consequ.
              </p>
              <Link href="contact" className="common_btn app_button">
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointmentSection;
