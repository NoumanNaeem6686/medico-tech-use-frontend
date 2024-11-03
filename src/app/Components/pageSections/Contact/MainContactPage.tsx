import React from "react";

const MainContactPage = () => {
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
                  <h1>contact us</h1>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>contact</li>
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
            <div className="row">
              <div
                className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="contact_address">
                  <span className="contact_icon">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <h4>Office Address</h4>
                  <p>16/A, Romadan House City, Tower New York, United States</p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="contact_address">
                  <span className="contact_icon icon_2">
                    <i className="fas fa-phone-alt" />
                  </span>
                  <h4>Phone Number</h4>
                  <p>+880 1234 567895 </p>
                  <p>+880 9876 543217</p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="contact_address">
                  <span className="contact_icon icon_3">
                    <i className="fas fa-envelope-open" />
                  </span>
                  <h4>Office Address</h4>
                  <p> example@gmail.com </p>
                  <p>junayedallinone@gmail.com</p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="contact_address">
                  <span className="contact_icon icon_4">
                    <i className="fas fa-globe" />
                  </span>
                  <h4>Website Address</h4>
                  <p>16/A, Romadan House City Tower New York, United States</p>
                </div>
              </div>
            </div>
            <div className="contact_form_area mt_100 xs_mt_70">
              <div className="row">
                <div
                  className="col-lg-4  wow fadeInLeft"
                  data-wow-duration="1s"
                >
                  <div className="contact_img">
                    <img
                      src="images/contact_img.jpg"
                      alt="contact img"
                      className=" img-fluid w-100"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-8  wow fadeInRight"
                  data-wow-duration="1s"
                >
                  <form className="contact_form">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" placeholder="Full Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" placeholder="Email Address" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="Phone Number" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="Subject" />
                      </div>
                      <div className="col-xl-12">
                        <input type="text" placeholder="Service" />
                      </div>
                      <div className="col-xl-12">
                        <textarea
                          rows={5}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-xl-12">
                        <button className="common_btn">submit now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="row mt_100 xs_mt_70  wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="col-xl-12">
                <div className="tf_contact_map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527999752!2d-74.14448764398652!3d40.69763123336165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1685551467309!5m2!1sen!2sbd"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                   
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*============================
  CONTACT END
    ==============================*/}
      </>
    </div>
  );
};

export default MainContactPage;
