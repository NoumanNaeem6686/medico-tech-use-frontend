"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      stars: 5,
      content:
        "Medico Tech Solutions (MTS) brought peace to my practice, allowing me to focus on patients’ care. Their efficient solutions handle billing, credentialing, and denials management effortlessly, ensuring everything runs smoothly. I no longer worry about administrative problems, thanks to their dedicated and professional team.",
      name: "A. Herrerar",
      role: "Customer",
    },
    {
      id: 2,
      stars: 5,
      content:
        "I’ve seen remarkable revenue growth after partnering with MedicoTech Solutions (MTS). Their tailored approach transformed my revenue management. I highly recommend their expert services to healthcare providers seeking to optimize financial performance and operational efficiency. Their expertise made a significant positive impact on my practice.",
      name: "Lilly-Rose",
      role: "Customer",
    },
    {
      id: 3,
      stars: 5,
      content:
        "MedicoTech Solutions (MTS) is advancing healthcare technology with innovative solutions. Their services positively impacted my practice, showcasing professionalism and dedication. They deliver accurate and efficient results while focusing on innovation in today’s healthcare landscape. I truly value their expertise and highly recommend their exceptional team.",
      name: "L. Taylor",
      role: "Customer",
    },
    {
      id: 4,
      stars: 5,
      content:
        "Partnering with MedicoTech Solutions (MTS) transformed my practice. Their clinical analysis identified drug interactions, offered therapeutic recommendations, and improved outcomes. This comprehensive approach enhanced revenue and clinical decision-making. I’m impressed by their expertise, professionalism, and dedication to maximizing results and improving patient care.",
      name: "K. Tamara",
      role: "Customer",
    },
    {
      id: 5,
      stars: 5,
      content:
        "MTS's virtual medical assistance streamlined processes and improved patient care. Their support empowers evidence-based decisions, optimizing safety and treatment outcomes. I appreciate their professionalism and dedication to healthcare innovation. MedicoTech Solutions is a game-changer for providers looking to elevate practice efficiency and results.",
      name: "W. Carry",
      role: "Customer",
    },
  ];


  return (
    <section className="review pt_100 xs_pt_70 pb_100 xs_pb_70">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="common_heading center_heading mb_45">
              <h5>Testimonials</h5>
              <h2>What Our Clients Say</h2>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="single_review">
                <p className="review_icon">
                  {Array.from({ length: testimonial.stars }, (_, index) => (
                    <i key={index} className="fas fa-star" />
                  ))}
                </p>
                <p>{testimonial.content}</p>
                <div className="reviewer_info">
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
