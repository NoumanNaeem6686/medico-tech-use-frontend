import About from "./About";
import Banner from "./Banner";
import WhyUs from './WhyUs'
import Blogs from "./Blogs";
import HelpLine from "./HelpLine";
import Testimonials from "./Testimonials";
import HomeSlider from "./HomeSlider";
import Certification from "./Certification";
import AboutUs from "./About-Us";
import OurServices from './Our-Services'
import Services from "./Services";
import GrowthNumbers from "./Growth";
import Link from "next/link";
const MainHomeComponent = () => {
  return (
    <div>
      <HomeSlider />
      <AboutUs />
      <Services />
      <GrowthNumbers />
      <section className="py-16"
        data-aos="flip-left"

      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="lg:py-14 lg:px-20 p-10 rounded-2xl flex items-center justify-between flex-col lg:flex-row bg-gradient-to-r from-[#050A30] to-[#107ACC]"
          >
            <div className="block text-center mb-5 lg:text-left lg:mb-0 sm:max-w-[600px]">
              <h2
                className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
              >
                Partner with Us for Healthcare Excellence
              </h2>
              <p className="text-xl text-indigo-100">
                Let’s revolutionize healthcare together. Reach out for customized solutions or to explore how we can empower your practice.
              </p>

            </div>
            <Link
              href="/free-audit"
              className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
            >Get In Touch
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                  stroke="#4F46E5"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* <About /> */}
      <HelpLine />
      <WhyUs />
      <Testimonials />
      <Certification />
      <Blogs />
    </div>
  );
};

export default MainHomeComponent;
