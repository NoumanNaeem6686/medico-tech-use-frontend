import React from 'react'

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
                                            What Happens To My Sample Once I Have Provided It?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do isus mods mpor incididunt ut labore et dolore
                                            magna aliqua. Ut en onim ad minim on adipiscing elit
                                            veniam.
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
                                            Where Can I Go To Provide A Sample For Testing?{" "}
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do isus mods mpor incididunt ut labore et dolore
                                            magna aliqua. Ut en onim ad minim on adipiscing elit
                                            veniam.
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
                                            What Will Laboratory Testing Cost Me?{" "}
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do isus mods mpor incididunt ut labore et dolore
                                            magna aliqua. Ut en onim ad minim on adipiscing elit
                                            veniam.
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
                                            Can I Make Appointments by Phone?{" "}
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFour"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do isus mods mpor incididunt ut labore et dolore
                                            magna aliqua. Ut en onim ad minim on adipiscing elit
                                            veniam.
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
                                            Using Innovative Technology{" "}
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFive"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do isus mods mpor incididunt ut labore et dolore
                                            magna aliqua. Ut en onim ad minim on adipiscing elit
                                            veniam.
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
                                    src="/three.jpg"
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
    )
}

export default FaqsSection
