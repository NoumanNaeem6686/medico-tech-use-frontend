import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import HelpLine from "./HelpLine";
import Testimonials from "./Testimonials";
import HomeSlider from "./HomeSlider";
import Certification from "./Certification";
import AboutUs from "./About-Us";

const MainHomeComponent = () => {
  return (
    <div>
      <HomeSlider />
      <AboutUs />
      <About />
      <HelpLine />
      <Certification />
      <Testimonials />
      {/* <Blogs /> */}
    </div>
  );
};

export default MainHomeComponent;
