"use client";

import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

function HomeSlider() {
    return (
        <div className="slider-container">
            <Swiper
                slidesPerView={1}
                spaceBetween={28}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Navigation, Autoplay, Pagination]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 28,
                    },

                }}
            >
                <SwiperSlide>
                    <div
                        style={{
                            height: "70vh",
                            marginTop: "20px",
                            width: "100vw",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundImage: "url(/slider/slider-1.jpg)",
                        }}
                    >
                        <div

                            style={{
                                display: "flex",
                                width: "100%",
                                padding: "30px",
                                maxWidth: "600px",
                                paddingTop: "70px",
                                flexDirection: "column"

                            }}

                        >

                            <h1 style={
                                {
                                    fontWeight: "700",
                                    margin: "40px 0 0 0 "


                                }
                            }>Get comprehensive Medical Billing Audit</h1>
                            <p
                                style={{
                                    margin: "20px 0px"
                                }}
                            >
                                Discover clarity and efficiency in your revenue streams through our specialized medical billing audit services.
                            </p>
                            <div style={{
                                display: "flex"
                            }}>
                                <Link href="/free-audit" className="common_btn">
                                    LET’S GET STARTED
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            height: "70vh",
                            marginTop: "20px",
                            width: "100vw",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundImage: "url(/slider/slider-2.jpeg)",
                        }}
                    >
                        <div

                            style={{
                                display: "flex",
                                width: "100%",
                                padding: "30px",
                                maxWidth: "600px",
                                paddingTop: "70px",
                                flexDirection: "column"

                            }}

                        >

                            <h1 style={
                                {
                                    fontWeight: "700",
                                    margin: "40px 0 0 0 "


                                }
                            }>Efficient Revenue Cycle Management Services</h1>
                            <p
                                style={{
                                    margin: "20px 0px"
                                }}
                            >
                                Maximize your revenue potential with our streamlined RCM services tailored to your medical practice needs.
                            </p>
                            <div style={{
                                display: "flex"
                            }}>
                                <Link href="/free-audit" className="common_btn">
                                    LET’S GET STARTED
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            height: "70vh",
                            marginTop: "20px",
                            width: "100vw",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundImage: "url(/slider/slider-3.jpeg)",
                        }}
                    >
                        <div

                            style={{
                                display: "flex",
                                width: "100%",
                                padding: "30px",
                                maxWidth: "600px",
                                paddingTop: "70px",
                                flexDirection: "column"

                            }}

                        >

                            <h1 style={
                                {
                                    fontWeight: "700",
                                    margin: "40px 0 0 0 "


                                }
                            }>Tailored Medical Billing Services For Your Practice</h1>
                            <p
                                style={{
                                    margin: "20px 0px"
                                }}
                            >
                                Minimize administrative burdens and fast reimbursement with our comprehensive medical billing services.
                            </p>
                            <div style={{
                                display: "flex"
                            }}>
                                <Link href="/free-audit" className="common_btn">
                                    LET’S GET STARTED
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* Pagination dots will appear below the slider */}
        </div>
    );
}

export default HomeSlider;
