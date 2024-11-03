"use client"
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
                                    <h5>our service</h5>
                                    <h2>our medical service</h2>
                                </div>
                            </div>
                        </div>
                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={30}
                            slidesPerView={3}
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
                                            src="images/service-1.jpg"
                                            alt="service img"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                    <div className="service_text">
                                        <a
                                            href="service_details.html"
                                            className="service_heading"
                                        >
                                            Online Monitoring
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                                            elit. Rem quia officia quaerat ipsam hic sunt quaerat!
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
                                            src="images/service-2.jpg"
                                            alt="service img"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                    <div className="service_text">
                                        <a
                                            href="service_details.html"
                                            className="service_heading"
                                        >
                                            Holter Heart surgery
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                                            elit. Rem quia officia quaerat ipsam hic sunt quaerat!
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
                                            src="images/service-3.jpg"
                                            alt="service img"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                    <div className="service_text">
                                        <a
                                            href="service_details.html"
                                            className="service_heading"
                                        >
                                            Diagnose & Research
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                                            elit. Rem quia officia quaerat ipsam hic sunt quaerat!
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
                                            src="images/service-2.jpg"
                                            alt="service img"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                    <div className="service_text">
                                        <a
                                            href="service_details.html"
                                            className="service_heading"
                                        >
                                            Holter Heart surgery
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur ipsam adipisicing
                                            elit. Rem quia officia quaerat ipsam hic sunt quaerat!
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
