"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MakeAuditForm = () => {
  // State variables for form inputs
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [purpose, setPurpose] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [contactType, setContactType] = useState(""); // Audio or Video
  const [loading, setLoading] = useState(false);

  // Generate time slots every 30 minutes with formatted intervals
  const generateTimeSlots = () => {
    const slots = [];
    let start = new Date();
    start.setHours(0, 0, 0, 0); // Start at midnight
    for (let i = 0; i < 48; i++) {
      const startHours = start.getHours();
      const startMinutes = start.getMinutes();
      const end = new Date(start);
      end.setMinutes(start.getMinutes() + 30);

      const formatTime = (hours, minutes) => {
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes.toString().padStart(2, "0");
        return `${formattedHours}:${formattedMinutes}${ampm}`;
      };

      slots.push(
        `${formatTime(startHours, startMinutes)} to ${formatTime(
          end.getHours(),
          end.getMinutes()
        )}`
      );
      start.setMinutes(start.getMinutes() + 30);
    }
    return slots;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    setLoading(true);
    const formData = {
      email,
      userName,
      bookingDate,
      contactNo,
      purpose,
      meetingTime,
      contactType,
    };

    try {
      // Replace with your backend API URL
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/user/book-audit`, // Replace with your actual endpoint
        formData
      );
      console.log("Response from backend:", response.data);

      // Handle success (e.g., show success message, clear form fields, etc.)
      // alert("Appointment booked successfully!");
      toast.success("Appointment booked successfully!");
      // Reset form fields
      setEmail("");
      setUserName("");
      setBookingDate("");
      setContactNo("");
      setPurpose("");
      setMeetingTime("");
      setContactType("");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message)
      // alert("There was an error booking the appointment.");
      toast.error("There was an error booking the appointment");
    } finally {
      setLoading(false); // Set loading to false after response
    }
  };

  return (
    <div>
      <div className="appoinment pt_185 xs_pt_70 pb_100 xs_pb_70">
        <div className="container">
          <div
            className="appoinment_bg"
            style={{ background: "url(images/appointment_bg.jpg)" }}
          >
            <div className="appoinment_overlay">
              <div className="row">
                <div
                  className="col-xl-7 col-lg-7 wow fadeInLeft"
                  data-wow-duration="1s"
                >
                  <div className="appoinment_form">
                    <div className="common_heading mb_30">
                      <h5>Audit</h5>
                      <h2>Apply For Audit Now</h2>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="appoinment_form_input">
                            <input
                              type="text"
                              placeholder="Patient Name*"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="appoinment_form_input">
                            <input
                              type="email"
                              placeholder="Email*"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="appoinment_form_input">
                            <input
                              type="tel"
                              placeholder="Contact Number*"
                              value={contactNo}
                              onChange={(e) => setContactNo(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="appoinment_form_input">
                            <input
                              type="date"
                              value={bookingDate}
                              onChange={(e) => setBookingDate(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="appoinment_form_input">
                            <textarea
                              placeholder="Write your purpose here..."
                              value={purpose}
                              onChange={(e) => setPurpose(e.target.value)}
                              rows={4}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="appoinment_form_input">
                            <select
                              value={meetingTime}
                              onChange={(e) => setMeetingTime(e.target.value)}
                              required
                            >
                              <option value="">Select Time</option>
                              {generateTimeSlots().map((slot, index) => (
                                <option key={index} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="appoinment_form_input">
                            <select
                              value={contactType}
                              onChange={(e) => setContactType(e.target.value)}
                              required
                            >
                              <option value="">Select Contact Type</option>
                              <option value="Audio">Audio</option>
                              <option value="Video">Video</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="appoinment_form_input">
                            <button type="submit" className="common_btn">
                              {loading ? "Booking..." : "Book Appointment"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="appoinment_img">
                    <img
                      src="images/appoinment_img.png"
                      alt="appointment"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAuditForm;
