import React from "react";

const Header = () => {
  return (
    <>
      <section className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-9 d-none d-md-block">
              <ul className="topbar_link d-flex flex-wrap">
                <li>
                  <a href="callto:123456789">
                    <i className="fas fa-phone-alt" />
                    +1 (737) 283-1792
                  </a>
                </li>
                <li>
                  <a href="mailto:example@gmail.com">
                    <i className="fas fa-envelope" />
                    Support@medicotechsolutions.com
                  </a>
                </li>
                <li>
                  <p>
                    <i className="fas fa-map-marker-alt" />
                    5900 Balcones Drive, Suite 18270 Austin, TX 78731, USA
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 d-md-none d-lg-block">
              <ul className="topbar_icon d-flex flex-wrap">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
