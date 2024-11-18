"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Consultation Advisory",
      description: "Navigating healthcare complexities is our specialty. At MTS, we provide actionable strategies to boost your operational efficiency and financial health.",
      details: [
        "Practice Management Consulting: Enhance patient care delivery and operational efficiency.",
        "Accounting and Taxation Services: Comprehensive financial solutions for smooth operations.",
        "MACRA Services: Navigate MACRA Program intricacies and maximize reimbursements.",
        "Strategic Business Development Consulting: Drive sustainable growth with tailored guidance."
      ],
      cta: "Book your Free Consultation today to enhance your practice!",
      link: "/services/consultation-advisory",
      imgSrc: "image13.jpg",
    },
    {
      id: 2,
      title: "Training and Development",
      description: "Stay ahead of industry trends with MTS’s tailored training program. Empower your team with in-demand skills to deliver exceptional patient care.",
      details: [
        "Online Medical Billing and Coding Training: In-depth knowledge for professionals.",
        "Certification Preparation Courses: Prep for industry-recognized exams.",
        "Continuous Training Programs: Stay updated with evolving healthcare standards.",
        "Webinars and Workshops: Interactive sessions for meaningful insights."
      ],
      cta: "Join our Training and Development Program Today!",
      link: "/services/training-development",
      imgSrc: "image12.jpg",
    },
    {
      id: 3,
      title: "Outsourcing Services",
      description: "Simplify your operations today—schedule a consultation to explore our outsourcing services!",
      details: [
        "Contractual Services: Partnerships with HealthTech companies.",
        "Business Process Outsourcing (BPO): Streamline processes and reduce costs.",
        "Staffing and Workforce Solutions: Tailored solutions for optimal talent management."
      ],
      cta: "Simplify success with Reliable Outsourcing Opportunities!",
      link: "/services/outsourcing",
      imgSrc: "image15.jpg",
    }
  ];

  return (
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
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              576: { slidesPerView: 1 },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="single_service" data-aos="zoom-in">
                  <div className="service_img">
                    <img
                      src={service.imgSrc}
                      alt={`${service.title} image`}
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="service_text">
                    <h3 className="service_heading">{service.title}</h3>
                    <p>{service.description}</p>
                    <p className="cta">{service.cta}</p>
                    <Link href={service.link} className="service_link">
                      Read more <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
