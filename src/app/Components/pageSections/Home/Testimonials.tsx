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
          slidesPerView={1}
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
                Medico Tech Solutions (MTS) has brought peace and comfort to my
                practice, allowing me to focus more on my patients’ care. I no
                longer worry about billing problems, credentialing, and denials
                management, thanks to their efficient solutions.
              </p>
              <div className="reviewer_info">
                {/* <div className="img">
                  <img
                    src="images/review-1.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div> */}
                <h3> A. Herrerar</h3>
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
                I’ve seen a remarkable increase in my revenue after partnering
                with the experts at MedicoTech Solutions (MTS). Their tailored
                approach transformed my revenue management, and I highly
                recommend their services to any healthcare provider looking to
                optimize their financial performance.
              </p>
              <div className="reviewer_info">
                {/* <div className="img">
                  <img
                    src="images/review-2.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div> */}
                <h3>Lilly-Rose</h3>
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
                It's incredible to see a company advancing technology for
                healthcare providers, especially as innovation is crucial in
                today's healthcare landscape. I truly value their services and
                the positive impact they've had on my practice. The team is
                incredibly professional and dedicated to providing accurate,
                efficient service that drives results.
              </p>
              <div className="reviewer_info">
                {/* <div className="img">
                  <img
                    src="images/review-3.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div> */}
                <h3>L. Taylor</h3>
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
                As a healthcare provider, partnering with MedicoTech Solutions
                (MTS) has been a game-changer for both my practice and my
                patients. Their team of pharmacy experts has delivered
                outstanding clinical analysis, offering detailed medication
                reviews that identify potential drug interactions and recommend
                necessary modifications to therapeutic regimens. This
                comprehensive approach has not only maximized my revenue but has
                also significantly improved therapeutic outcomes and clinical
                decision-making.
              </p>
              <div className="reviewer_info">
                {/* <div className="img">
                  <img
                    src="images/review-2.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div> */}
                <h3>K. Tamara</h3>
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
                MTS's virtual medical assistance has been instrumental in
                streamlining processes and enhancing patient care. Their support
                has empowered me to make informed, evidence-based decisions that
                optimize patient safety and treatment effectiveness. I truly
                appreciate the professionalism and dedication of the MTS team,
                and I highly recommend their services to any healthcare provider
                looking to elevate their practice.
              </p>
              <div className="reviewer_info">
                {/* <div className="img">
                  <img
                    src="images/review-2.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div> */}
                <h3>W. Carry</h3>
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
