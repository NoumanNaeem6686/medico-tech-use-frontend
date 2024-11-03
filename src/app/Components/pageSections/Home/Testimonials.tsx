"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="review pt_100 xs_pt_70 pb_100 xs_pb_70">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="common_heading center_heading mb_45">
              <h5>Testimonials</h5>
              <h2>What Our Client Says</h2>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <div className="single_review">
              <p className="review_icon">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </p>
              <p>
                “Lorem ipsum dolor sit amet, consectetur on pisc ing elit, sed
                do eiusmod tempor incidids is magna aliqua established fact”
              </p>
              <div className="reviewer_info">
                <div className="img">
                  <img
                    src="images/review-1.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div>
                <h3>Jenny Wilson</h3>
                <span>Customer</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single_review">
              <p className="review_icon">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </p>
              <p>
                “Lorem ipsum dolor sit amet, consectetur on pisc ing elit, sed
                do eiusmod tempor incidids is magna aliqua established fact”
              </p>
              <div className="reviewer_info">
                <div className="img">
                  <img
                    src="images/review-2.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div>
                <h3>Vlack Marvin</h3>
                <span>Customer</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single_review">
              <p className="review_icon">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </p>
              <p>
                “Lorem ipsum dolor sit amet, consectetur on pisc ing elit, sed
                do eiusmod tempor incidids is magna aliqua established fact”
              </p>
              <div className="reviewer_info">
                <div className="img">
                  <img
                    src="images/review-3.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div>
                <h3>Robert Floxder</h3>
                <span>Customer</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single_review">
              <p className="review_icon">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </p>
              <p>
                “Lorem ipsum dolor sit amet, consectetur on pisc ing elit, sed
                do eiusmod tempor incidids is magna aliqua established fact”
              </p>
              <div className="reviewer_info">
                <div className="img">
                  <img
                    src="images/review-2.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div>
                <h3>Vlack Marvin</h3>
                <span>Customer</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
