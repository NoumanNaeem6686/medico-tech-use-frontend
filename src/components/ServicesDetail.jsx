import Link from "next/link";
import React from "react";

const serviceDetails = {
    "consultation-advisory": {
        title: "Consultation and Advisory Services",
        description: `
      Navigating healthcare complexities is our specialty. At MTS, we provide actionable strategies to boost your operational efficiency and financial health.
      Our team understands the evolving healthcare landscape, ensuring you stay compliant while maximizing your financial performance. 
      From revenue cycle management to comprehensive operational strategies, we bring you the best practices tailored to your organization's needs.
      Partner with us to empower your healthcare practice, ensuring sustainable growth and improved patient satisfaction.
    `,
        features: [
            "Practice Management Consulting: Enhance patient care delivery with improved efficiency and outcomes.",
            "Accounting and Taxation Services: Smooth financial management for healthcare practices.",
            "Maximize Reimbursements with MACRA Services: Navigate MACRA programs to increase reimbursements.",
            "Strategic Business Development Consulting: Drive sustainable growth and achieve maximum profit.",
            "Comprehensive Compliance Strategies: Stay ahead of regulatory changes and reduce risk.",
            "Data-Driven Insights: Harness analytics to optimize practice performance.",
        ],
        cta: "Elevate your Healthcare Practice Today by Scheduling a Free Consultation.",
        image: "/image3.jpg", // Add your image path here
    },
    "training-development": {
        title: "Training and Development",
        description: `
      Unlock your potential by learning in-demand skills for Healthcare Practices. Stay ahead of industry trends with MTS’s tailored training programs.
      Designed for both beginners and professionals, our courses empower teams with the knowledge needed to excel in the ever-changing healthcare landscape.
      Our mentors bring years of hands-on experience to guide you through practical learning, ensuring your team stays competitive in the healthcare industry.
    `,
        features: [
            "Online Medical Billing and Coding Training: Gain in-depth knowledge of medical billing and coding.",
            "Certification Preparation Courses: Prepare for industry-recognized certification exams.",
            "Continuous Training and Development Programs: Enhance knowledge with evolving industry research.",
            "Webinars and Workshops: Interactive sessions with experts for hands-on experience.",
            "Tailored Corporate Training: Meet your team's unique learning needs.",
            "Industry Case Studies: Learn from real-world scenarios to solve practical challenges.",
        ],
        cta: "Connect with the Best Mentors by joining our Training and Development Program Today.",
        image: "/image8.jpg",
    },
    "outsourcing": {
        title: "Outsourcing Services",
        description: `
      Simplify your operations today—schedule a consultation to explore our outsourcing services. Outsourcing offers skilled talent, cost-effectiveness, and operational flexibility.
      Partnering with us allows you to focus on core activities while we manage the complexities. Our experienced team ensures seamless integration and reliable delivery of outsourced tasks.
      Gain a competitive edge by leveraging our expertise in healthcare outsourcing to enhance efficiency, reduce costs, and improve service quality.
    `,
        features: [
            "Contractual Based Services: Strategic partnerships with HealthTech companies.",
            "Business Process Outsourcing (BPO) Services: Streamline processes and boost efficiency.",
            "Staffing and Workforce Solutions: Tailored staffing to meet healthcare needs.",
            "24/7 Support Services: Ensure uninterrupted operations with round-the-clock support.",
            "Customizable Solutions: Adapt to your unique business requirements with flexible outsourcing.",
        ],
        cta: "Simplify success with Reliable Outsourcing Opportunities.",
        image: "/image15.jpg",
    },
};

function ServicesDetail({ slug }) {
    const service = serviceDetails[slug];

    if (!service) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-xl font-bold">Service Not Found</h1>
                <p>The service you're looking for does not exist. Please check the URL.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Section: Title, Description, and CTA */}
            <div>
                <h1 className="text-3xl xl:text-5xl font-bold mb-4"
                    data-aos="fade-right"


                >{service.title}</h1>
                <p className="mb-6 text-lg leading-relaxed"
                    data-aos="fade-down"

                >{service.description}</p>
                <p className="font-semibold text-lg"
                    data-aos="fade-down"

                >{service.cta}</p>
                <Link href="/free-audit" className="common_btn mt-7">
                    Get Free Audit
                </Link>
            </div>

            {/* Right Section: Image */}
            <div>
                <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                />
            </div>

            {/* Features Section */}
            <div className="lg:col-span-2 mt-8">
                <h2 className="text-2xl font-bold mb-4"
                    data-aos="fade-right"

                >Key Features</h2>
                <ul className="list-disc pl-5 space-y-2"
                    data-aos="fade-down"

                >
                    {service.features.map((feature, index) => (
                        <li key={index} className="text-lg">{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ServicesDetail;
