import React from 'react'

const Contact = () => {
  return (
<>
  {/*============================
  APPOINMENT START
    ==============================*/}
  <section className="appoinment pt_185 xs_pt_70 pb_100 xs_pb_70">
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
                        <input type="email" placeholder="Email Address*" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <select className="select_2">
                          <option value="">Select Department</option>
                          <option value="">Cardiology</option>
                          <option value="">Ophthalmology</option>
                          <option value="">Pediatric</option>
                          <option value="">Radiology</option>
                          <option value="">Urology</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <select className="select_2">
                          <option value="">Select Doctor</option>
                          <option value="">Dr. Hasan Mahamud</option>
                          <option value="">Dr. Moinuddin</option>
                          <option value="">Dr. Afroja Akter</option>
                          <option value="">Dr. Mamunur Rasid</option>
                          <option value="">Dr. Abdus Salam</option>
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
                        <select className="reservation_input select_2">
                          <option value="">Select Time</option>
                          <option value="">10.00 am to 11.00 am</option>
                          <option value="">11.00 am to 12.00 pm</option>
                          <option value="">3.00 pm to 4.00 pm</option>
                          <option value="">4.00 pm to 5.00 pm</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="appoinment_form_input">
                        <button className="common_btn">book appoinment</button>
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
  </section>
  {/*============================
  APPOINMENT END
    ==============================*/}
</>

  )
}

export default Contact
