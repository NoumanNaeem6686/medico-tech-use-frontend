"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function MainServicesPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const sections = [
    {
      title: "Healthcare Revenue Management (HRM)",
      content: (
        <>
          <p>
            Optimize your financial workflow and focus on what matters most—
            providing exceptional patient care.
          </p>
          <p>
            We appreciate the challenges and complexities of healthcare revenue
            cycles. Connect with the experts today for streamlined and efficient
            solutions.
          </p>
        </>
      ),
      buttonText: "Connect Now",
    },
    {
      title:
        "Advantages of Having a Healthcare Revenue Management System for Your Practice",
      content: (
        <ul className="list-unstyled">
          <li>Accurate financial tracking by improving record-keeping</li>
          <li>Streamlines workflows to boost reimbursement rates</li>
          <li>Removes the administrative load of your team</li>
          <li>Minimizes errors in medical billing, coding, and RCM process</li>
          <li>
            Increase claim acceptance rates by 30% through streamlined
            operations.
          </li>
          <li>
            Accelerates collections to elevate practice revenue through
            technologies-based RCM
          </li>
          <li>Simplifies the process of billing and coding</li>
          <li>Manage A/R to optimize revenue cycle performance</li>
          <li>
            Strengthen overall efficiency and productivity within your practice
          </li>
        </ul>
      ),
      buttonText: "Learn More",
    },
    {
      title:
        "Improve The Profitability Of Your Practice With Our Healthcare Revenue System Management",
      content: (
        <p>
          Enhance the potential of your revenue generation by handing over the
          complexities of the healthcare revenue management system to us. We are
          skilled in optimizing your operational tasks while you deal with and
          improve your practice.
        </p>
      ),
      buttonText: "Get Started Now",
    },
    {
      title: "Importance of Outsourcing Your RCM Needs",
      content: (
        <>
          <p>
            Revenue cycle management is the fundamental component of healthcare
            operations, irrespective of the size of your practice. By entrusting
            the financial aspects of your business to specialized professionals,
            you can concentrate on core clinical activities, which can lead to
            increased productivity and attract more patients. This streamlined
            approach alleviates administrative burdens and allows you to focus
            on delivering exceptional patient care and maximizing your
            profitability.
          </p>
          <p>
            Our team of experts is committed to streamlining your billing
            procedures, improving claim accuracy, providing patient scheduling
            and authorization, and exceptional compliance support which leads to
            acceleration of payment cycles and optimization of financial
            performance.
          </p>
        </>
      ),
      buttonText: "Schedule a Free Consultation",
    },
    {
      title: "Clinical Services",
      content: (
        <>
          <p>
            We offer programs that help to provide MEDI-CARE solutions to your
            patients without burdening your staff.
          </p>
          <p>
            Your gateway to a more efficient and profitable practice.
            Streamlining solutions to enhance patient satisfaction, leading to a
            brighter and prosperous future.
          </p>
        </>
      ),
      extendedContent: (
        <>
          <p>
            MedicoTech Solutions (MTS) provides a user-friendly interface
            between patients and physicians to promote better engagement without
            any additional clinical staff. This innovative approach ultimately
            leads to revenue growth.
          </p>
          <p>
            We are destined to empower physicians to provide value-based
            healthcare solutions to their patients. Balancing high-quality care
            demand with administrative burden can be challenging.
          </p>
          <p>
            Our clinical services support provides physicians with the tools and
            resources they need to optimize their practice, benefiting both
            patients and providers. This collaborative approach fosters a more
            efficient and harmonious healthcare ecosystem.
          </p>
        </>
      ),
      buttonText: "Learn More About Clinical Services",
    },
    {
      title: "Healthcare Technology and IT Solutions",
      content: (
        <>
          <p>
            Leverage AI-driven insights and telehealth tools to revolutionize
            patient care and streamline operations.
          </p>
          <p>
            Innovative IT solutions to transform healthcare delivery. Breaking
            down barriers between healthcare and technology to bring innovation
            in the healthcare ecosystem, benefiting care providers and care
            recipients.
          </p>
        </>
      ),
      buttonText: "Transform Your Practice Today",
    },
    {
      title: "Benefits Our Clinical Services Program Has to Offer",
      content: (
        <p>
          Our clinical services programs offer significant benefits for both
          patients and physicians.
        </p>
      ),
      extendedContent: (
        <>
          <h4>Chronic Care Management (CCM) and Remote Patient Services</h4>
          <p>
            MedicoTech Solutions (MTS) offers comprehensive support for
            healthcare services including chronic care management, remote
            patient services, and comprehensive medication review. All these
            services are designed to improve patient outcomes and reduce
            healthcare costs.
          </p>
          <p>
            Utilization of advanced technology helps to empower healthcare
            providers to deliver high-quality care even for patients with
            complex conditions. Regular monitoring of a patient’s health from a
            distance enables a timely intervention and reduces the number of
            in-person visits.
          </p>
          <h4>Virtual Clinical Support</h4>
          <p>
            We offer innovative virtual clinical support services which include
            medical scribing, physician assistance, and virtual medical
            assistance. These virtual services streamline clinical workflow,
            improve patient care, and boost efficiency. Our team offers
            assistance in documentation, administrative tasks, and patient
            communication which allows physicians to break barriers in providing
            quality care.
          </p>
          <h4>Medical Records and Compliance</h4>
          <p>
            Our team provides comprehensive support in medical record management
            and regulatory compliance to ensure your practice maintains accurate
            and up-to-date documentation, fostering patient trust and supporting
            legal standards.
          </p>
          <p>
            Along with safeguarding the data integrity of every patient, our
            services also include patient counseling to enhance better
            understanding and improve overall health outcomes.
          </p>
          <p>
            Narcotics refilling service ensures timely refills for patients
            under secure guidelines. This approach not only prioritizes patient
            care but reinforces compliance with healthcare regulations, making
            your practice operations smooth and ethical.
          </p>
        </>
      ),
      buttonText: "Learn More About Benefits",
    },

    {
      title: "Why use Technology in Healthcare",
      content: (
        <p>
          Technology is empowering every system of the world. So why not use it
          to empower the healthcare system when it can benefit the healthcare
          providers and the patients in numerous ways?
        </p>
      ),
      extendedContent: (
        <>
          <p>
            From cutting the costs of the overall management system to providing
            accurate and up-to-date information to patients, incorporating
            technology can do wonders for your practice.
          </p>
          <p>
            Living in a digital era demands digital solutions and MedicoTech
            Solutions (MTS) is here to provide you with all sorts of IT
            solutions to make your practice shine brighter than the rest.
          </p>
        </>
      ),
      buttonText: "Learn More About Technology in Healthcare",
    },
    {
      title:
        "Benefits Of Choosing Us As Your Healthcare Technology And IT Solutions Partner",
      content: (
        <p>
          Choosing us as your healthcare technology and IT solutions partner can
          benefit you in a number of ways.
        </p>
      ),
      extendedContent: (
        <>
          <ul>
            <li>Keeps you updated with all advanced medical health research</li>
            <li>Use of AI to provide Advanced Healthcare Solutions</li>
            <li>Access a comprehensive suite of TeleHealth Technologies</li>
            <li>
              Benefits from custom solutions designed to meet the specific needs
              of healthcare providers
            </li>
            <li>Exceptional IT Infrastructure Support</li>
            <li>
              Provision of the latest and upgraded Software and Customization
            </li>
            <li>Seamlessly integrate cutting-edge AI and EHR solutions</li>
            <li>
              Help to improve clinical accuracy, streamline workflows, and
              enhance operational efficiency.
            </li>
            <li>Gain valuable insights from Data modeling and Analytics</li>
          </ul>
          <p>
            In the era of rapid technological advancement, boost your practice
            with technology and advanced IT solutions. Partnering with us can
            give you an opportunity to unlock your potential of technology to
            enhance the patient care experience, streamline operations, and
            promote sustainable growth.
          </p>
          <p>
            <strong>
              Book a free consultation today and start your health-tech journey
              now.
            </strong>
          </p>
          <p>
            <em>
              MedicoTech Solutions (MTS) - Where healthcare meets technology.
              Give your patients the care they deserve while we handle the
              complexities behind the scenes!
            </em>
          </p>
        </>
      ),
      buttonText: "Learn More About Our IT Solutions",
    },
    {
      title: "Healthcare Marketing and Growth",
      content: (
        <p>
          Enhance your practice with MTS Healthcare Digital Marketing Solutions.
        </p>
      ),
      extendedContent: (
        <>
          <p>
            <strong>Expand your reach with MTS,</strong> Your reliable ally in
            healthcare marketing and growth.
          </p>
          <p>
            Our digital marketing solutions are tailored to help you effectively
            connect with patients, optimize patient engagement, and grow your
            practice's presence in the competitive healthcare landscape.
          </p>
          <Link href="/contact" className="btn btn-primary mt-3">
            Get a Head Start on Your Growth Journey Today!
          </Link>
        </>
      ),
      buttonText: "Learn More About Healthcare Marketing",
    },
    {
      title: "Why Go Digital?",
      content: (
        <p>
          In today’s competitive healthcare landscape, a strong online presence
          is essential for business growth. Effective digital marketing
          strategies can enhance patient engagement, attracting a larger patient
          base.
        </p>
      ),
      extendedContent: (
        <>
          <p>
            Modern patients increasingly prioritize research before seeking a
            healthcare service, emphasizing a strong digital brand. By
            establishing a strategic digital marketing approach, healthcare
            providers can stand out from competitors with a compelling online
            presence.
          </p>
        </>
      ),
      buttonText: "Learn More About Going Digital",
    },
    {
      title: "Healthcare Marketing And Growth Services Offered By MTS",
      content: (
        <p>
          As our team is established to offer modern solutions, we know how
          essential it is to have a strong digital presence to grow your
          business in today’s era. Therefore, MTS offers a wide range of
          healthcare marketing and growth solutions.
        </p>
      ),
      extendedContent: (
        <>
          <p>Our digital services include 3 categories:</p>
          <ul>
            <li>MedicoTech AI Marketing Agency</li>
            <li>Healthcare Digital Marketing Agency</li>
            <li>Call Centre and Patient Support services</li>
          </ul>
          <h4>MedicoTech AI Marketing Agency</h4>
          <p>
            Leverage the power of artificial intelligence to redefine your
            digital marketing strategies. Our AI marketing agency provides the
            following suite of solutions for your business:
          </p>
          <ul>
            <li>
              <strong>AI-Powered Lead Generation:</strong> Leverage advanced AI
              algorithms to attract high-quality leads.
            </li>
            <li>
              <strong>Predictive Marketing Analysis:</strong> Gain valuable
              insights into patients' behavior to optimize your campaigns.
            </li>
            <li>
              <strong>Automated Campaign Management:</strong> Streamline Your
              Marketing with Intelligent, Data-Driven Automation.
            </li>
          </ul>
          <h4>Healthcare Digital Marketing Agency</h4>
          <p>
            The marketing team at MTS specializes in providing comprehensive
            digital marketing services to healthcare practices. Digital
            marketing services at MTS include:
          </p>
          <ul>
            <li>
              <strong>Social Media Marketing:</strong> For a strong and
              reputable online presence to engage with your target audience
              effectively.
            </li>
            <li>
              <strong>SEO and Content Marketing:</strong> Optimize your content
              to drive more organic traffic.
            </li>
            <li>
              <strong>Website Design and Development:</strong> Design and
              develop user-friendly and attractive websites to attract more
              patients and enhance your practice's reputation.
            </li>
          </ul>
          <h4>Call Centre and Patient Support Services</h4>
          <p>
            We have a dedicated team at the call center providing exceptional
            patient support services, ensuring seamless communication and prompt
            resolution of patient queries, enhancing your practice's reputation.
          </p>
          <p>
            <strong>
              Join hands with us and unlock the future of Marketing.
            </strong>
          </p>
          <Link href="/contact" className="btn btn-primary mt-3">
            Schedule your free consultation now
          </Link>
        </>
      ),
      buttonText: "Learn More About Our Services",
    },
    {
      title: "Business Development",
      content: (
        <p>
          Driving sustainable growth and fostering strategic initiatives to
          expand your market reach.
        </p>
      ),
      extendedContent: (
        <>
          <p>
            <strong>Empowering Healthcare Practices for a Better Future</strong>
          </p>
          <p>
            Connect with us now and get a boost in your business development
            plan today.
          </p>
          <p>
            MTS is dedicated to empowering healthcare practices through every
            available avenue. Therefore, a business development department is
            established to focus on the growth of the business by applying
            authentic strategies to expand market reach and enhance
            organizational success.
          </p>
          <Link href="/contact" className="btn btn-primary mt-3">
            Schedule a Free Consultation
          </Link>
        </>
      ),
      buttonText: "Learn More About Business Development",
    },
    {
      title: "What the Business Development Department at MTS has to offer?",
      content: (
        <p>
          Our Business Development Department has to offer multiple services for
          the sustainable growth of your practice.
        </p>
      ),
      extendedContent: (
        <>
          <ul>
            <li>Client Acquisition and Retention Strategies</li>
            <li>Strategic Partnership and Alliances</li>
            <li>Market Expansion and Growth Initiatives</li>
            <li>Investor Relations and Business Growth</li>
            <li>Customized Research for Healthcare Providers</li>
          </ul>
          <p>
            Business Development is mandatory to drive sustainable growth and
            build a long-term relationship with your patients. MTS provides
            innovative solutions to create mutually beneficial growth
            opportunities. MTS experts identify new market opportunities and
            engage with investors to drive financial growth, ensuring your
            practice thrives.
          </p>
          <p>
            <strong>
              Hence, consult with our experts today and open doors for your
              Business Development opportunities. We are more than happy to see
              your practice thrive as per the modern and innovative patterns.
            </strong>
          </p>
          <p className="text-center">
            <Link href="/contact" className="btn btn-primary mt-3">
              Claim Your Free Consultation Today!
            </Link>
          </p>
        </>
      ),
      buttonText: "Learn More About Our Business Development Services",
    },
  ];

  const openModal = (index) => {
    const selectedSection = sections[index];
    setModalContent({
      title: selectedSection.title,
      content: (
        <>
          {selectedSection.content}
          {selectedSection.extendedContent && (
            <>
              <hr />
              {selectedSection.extendedContent}
            </>
          )}
        </>
      ),
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_text text-center">
                <h1>Our Services</h1>
                <ul className="breadcrumb_nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i
                      className="fas fa-chevron-right mx-2"
                      style={{ fontSize: "12px" }}
                    ></i>
                  </li>
                  <li>Our Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main content here */}
      <section className="service_section pt-5 pb-5">
        <div className="container">
          {sections.map((section, index) => (
            <div key={index} className="row mb-5 align-items-center">
              <div
                className={`col-lg-6 ${index % 2 !== 0 ? "order-lg-2" : ""}`}
              >
                {/* Updated to cycle images */}
                <img
                  src={`images/service-${(index % 7) + 1}.jpg`}
                  alt={section.title}
                  className="img-fluid w-100"
                />
              </div>
              <div className="col-lg-6">
                <div className="service_content">
                  <h2>{section.title}</h2>
                  {section.content}
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => openModal(index)}
                  >
                    {section.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>
              {
                //@ts-ignore
                modalContent.title
              }
            </h2>
            {
              //@ts-ignore
              modalContent.content
            }
            <button className="btn btn-secondary mt-3" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 600px;
          width: 90%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}
