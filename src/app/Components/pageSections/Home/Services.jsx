"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Services = () => {
  return (
    <>
      <section
        className="service"
        style={{ background: "url(images/service_bg.jpg)" }}
      >
        <div className="service_overlay pt_100 xs_pt_70 pb_100 xs_pb_70">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="common_heading center_heading mb_15">
                  <h2>our service</h2>
                </div>
              </div>
            </div>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <div className="single_service">
                  <div className="service_img">
                    <span className="tf_service_icon">
                      <i className="fas fa-eye" />
                    </span>
                    <img
                      src="image13.jpg"
                      alt="service img"
                      className=" w-100"
                    />
                  </div>
                  <div className="service_text">
                    <a href="service_details.html" className="service_heading">
                      Regulatory Compalines
                    </a>
                    <p>
                      Expert coding for accurate claims and reduced denials.
                    </p>
                    <a href="service_details.html" className="service_link">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single_service">
                  <div className="service_img">
                    <span className="tf_service_icon tf_service_icon2">
                      <i className="fas fa-heartbeat" />
                    </span>
                    <img
                      src="image12.jpg"

                      alt="service img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="service_text">
                    <a href="service_details.html" className="service_heading">
                      Tablet, night, scientist
                    </a>
                    <p>
                      Optimize your revenue cycle with data-driven solutions
                      that maximize efficiency and minimize losses.
                    </p>
                    <a href="service_details.html" className="service_link">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single_service">
                  <div className="service_img">
                    <span className="tf_service_icon tf_service_icon3">
                      <i className="fas fa-capsules" />
                    </span>
                    <img
                      src="image15.jpg"
                      alt="service img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="service_text">
                    <a href="service_details.html" className="service_heading">
                      Custom HER Hospital
                    </a>
                    <p>
                      Boost efficiency with our tailored MedicoTech IT solutions
                    </p>
                    <a href="service_details.html" className="service_link">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single_service">
                  <div className="service_img">
                    <span className="tf_service_icon tf_service_icon4">
                      <i className="fas fa-heartbeat" />
                    </span>
                    <img
                      src="image14.jpg"

                      alt="service img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="service_text">
                    <a href="service_details.html" className="service_heading">
                      Medicaltech research, innovative
                    </a>
                    <p>
                      Enhance patient care through innovative digital health
                      solutions.
                    </p>
                    <a href="service_details.html" className="service_link">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single_service">
                  <div className="service_img">
                    <span className="tf_service_icon tf_service_icon4">
                      <i className="fas fa-heartbeat" />
                    </span>
                    <img
                      src="image10.jpg"

                      alt="service img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="service_text">
                    <a href="service_details.html" className="service_heading">
                      Medicine Doctor and Digital
                    </a>
                    <p>
                      Enhance patient care through innovative digital health
                      solutions.
                    </p>
                    <a href="service_details.html" className="service_link">
                      read more <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
