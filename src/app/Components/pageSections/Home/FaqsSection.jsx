import React from 'react';

const FaqsSection = () => {
    return (
        <>
            {/*============================
  FAQ START
    ==============================*/}
            <section className="faq pt_100 xs_pt_70 pb_100 xs_pb_70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="common_heading center_heading mb_25">
                                <h5>FAQ</h5>
                                <h2>Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-xl-7 col-lg-6 wow fadeInLeft"
                            data-wow-duration="1s"
                        >
                            <div
                                className="faq_accordion accordion accordion-flush"
                                id="accordionFlushExample"
                            >
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="true"
                                            aria-controls="flush-collapseOne"
                                        >
                                            What does your Training and Development service include?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Our Training and Development services are designed to
                                            enhance the skills and productivity of healthcare staff.
                                            We provide customized training sessions focusing on
                                            compliance, billing accuracy, and operational excellence.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
                                            How can Practice Management Consulting benefit my practice?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Practice Management Consulting helps streamline your
                                            operations, improve patient satisfaction, and boost
                                            financial performance. Our team identifies areas of
                                            inefficiency and provides actionable strategies for
                                            optimization.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >
                                            What topics are covered in Consultation and Advisory Services?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Our Consultation and Advisory Services cover compliance
                                            guidance, revenue cycle management, staff training
                                            recommendations, and strategic planning for long-term
                                            success.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseFour"
                                        >
                                            Do you provide customized solutions for different practices?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFour"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Yes, all our services are tailored to meet the unique
                                            needs of your practice. Whether you're a small clinic or
                                            a large hospital, we adapt our strategies to suit your
                                            goals and challenges.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFive"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseFive"
                                        >
                                            How long does it take to see results from your services?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFive"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            The timeline for results varies depending on the scope of
                                            the services provided. Generally, significant improvements
                                            can be seen within a few weeks to a few months.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-5 col-lg-6 wow fadeInRight"
                            data-wow-duration="1s"
                        >
                            <div className="faq_img">
                                <img
                                    src="/image22.jpg"
                                    alt="faq"
                                    className="img-fluid w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*============================
  FAQ END
    ==============================*/}
        </>
    );
};

export default FaqsSection;
