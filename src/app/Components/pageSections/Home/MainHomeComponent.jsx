import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import HelpLine from "./HelpLine";
import Testimonials from "./Testimonials";
import HomeSlider from "./HomeSlider";
import Certification from "./Certification";

const MainHomeComponent = () => {
  return (
    <div>
      <HomeSlider />
      <About />
      <HelpLine />
      <Certification />
      <Testimonials />
      {/* <Blogs /> */}
    </div>
  );
};

export default MainHomeComponent;
