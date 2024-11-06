import Link from 'next/link';
import React from 'react';

const MakeAppointmentSection = () => {
  return (
    <section className="appoinment_home_2 pb_100 xs_pb_70 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 wow fadeInLeft" data-wow-duration="1s" style={{ visibility: "visible", animationDuration: "1s", animationName: "fadeInLeft" }}>
            <div className="appoinment_wraper">
              <div className="appoinment_form">
                <div className="common_heading home_tow_heading mb_25">
                  <h5>Appointment</h5>
                  <h2>Apply For Free Now</h2>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <input type="text" placeholder="Patient Name*" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <input type="email" placeholder="Email*" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <select>
                          <option value="">Select Department</option>
                          <option value="cardiology">Cardiology</option>
                          <option value="ophthalmology">Ophthalmology</option>
                          <option value="pediatric">Pediatric</option>
                          <option value="radiology">Radiology</option>
                          <option value="urology">Urology</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <select>
                          <option value="">Select Doctor</option>
                          <option value="dr-hasan">Dr. Hasan Mahamud</option>
                          <option value="dr-moin">Dr. Moinuddin</option>
                          <option value="dr-afroja">Dr. Afroja Akter</option>
                          <option value="dr-mamun">Dr. Mamunur Rasid</option>
                          <option value="dr-abdus">Dr. Abdus Salam</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <select>
                          <option value="">Select Time</option>
                          <option value="10-11">10:00 am to 11:00 am</option>
                          <option value="11-12">11:00 am to 12:00 pm</option>
                          <option value="3-4">3:00 pm to 4:00 pm</option>
                          <option value="4-5">4:00 pm to 5:00 pm</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <button className="common_btn">Book Appointment</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInRight" data-wow-duration="1s" style={{ visibility: "visible", animationDuration: "1s", animationName: "fadeInRight" }}>
            <div className="appoinment_contact">
              <div className="icon_text_wraper">
                <div className="appoinment_icon">
                  <img src="images/appointment-man-icon.png" alt="appointment-man-icon" />
                </div>
                <div className="appoinment_text">
                  <p>Give Us a Call</p>
                  <a href="tel:+8801355656585">+880 13556 56585</a>
                </div>
              </div>
              <p>
                We use as filler text for layouts, non-readability is of great
                importance but because those who do not know how to pursue pleasure
                rationally encounter consequ.
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
