"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Services = () => {
  const services = [
    {
      id: 1,
      iconClass: "fas fa-eye",
      imgSrc: "image13.jpg",
      title: "Regulatory Compliance",
      description: "Expert coding for accurate claims and reduced denials.",
      link: "/services/regulatory-compliance",
    },
    {
      id: 2,
      iconClass: "fas fa-heartbeat",
      imgSrc: "image12.jpg",
      title: "Revenue Optimization",
      description:
        "Optimize your revenue cycle with data-driven solutions that maximize efficiency and minimize losses.",
      link: "/services/revenue-cycle-optimization",
    },
    {
      id: 3,
      iconClass: "fas fa-capsules",
      imgSrc: "image15.jpg",
      title: "Custom HER Solutions",
      description:
        "Boost efficiency with our tailored MedicoTech IT solutions.",
      link: "/services/custom-her-solutions",
    },
    {
      id: 4,
      iconClass: "fas fa-heartbeat",
      imgSrc: "image14.jpg",
      title: "Innovative Digital Health",
      description:
        "Enhance patient care through innovative digital health solutions.",
      link: "/services/innovative-digital-health",
    },
    {
      id: 5,
      iconClass: "fas fa-heartbeat",
      imgSrc: "image17.jpg",
      title: "Digital Medicine Solutions",
      description:
        "Improve healthcare outcomes with cutting-edge digital tools.",
      link: "/services/digital-medicine-solutions",
    },
  ];

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
                  <h2>Our Services</h2>
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
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="single_service">
                    <div className="service_img">
                      <span className={`tf_service_icon`}>
                        <i className={service.iconClass} />
                      </span>
                      <img
                        src={service.imgSrc}
                        alt={`${service.title} image`}
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="service_text">
                      <a
                        href={service.link}
                        className="service_heading"
                      >
                        {service.title}
                      </a>
                      <p>{service.description}</p>
                      <a href={service.link} className="service_link">
                        Read more <i className="far fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
