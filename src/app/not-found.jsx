import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <section className="breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_text">
                                <h1>error / 404</h1>
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>Error</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*==========================
        BREADCRUMB END
        ==============================*/}
            {/*============================
        ERROR START
        ==============================*/}
            <section className="error mt_100 xs_mt_70 pb_100 xs_pb_70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div
                            className="col-xl-6 col-sm-10 col-md-9 col-lg-8 wow fadeInUp"
                            data-wow-duration="1s"
                        >
                            <div className="error_img">
                                <img
                                    src="/images/errore-img.png"
                                    alt="error"
                                    className="img-fluid w-100"
                                />
                            </div>
                            <div className="error_text text-center">
                                <h3>Oops! Nothing Was Found</h3>
                                <p>Sorry, this page is not found. Take a look at our most popular pages.</p>
                                <Link href="/" passHref legacyBehavior>
                                    <a className="common_btn">Go To Home</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*============================
        ERROR END
        ==============================*/}
        </>
    );
};

export default NotFound;
