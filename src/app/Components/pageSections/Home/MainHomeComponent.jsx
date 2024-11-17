import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Contact from "./Contact";
import HelpLine from "./HelpLine";
import Testimonials from "./Testimonials";
import HomeSlider from "./HomeSlider";

const MainHomeComponent = () => {
  return (
    <div>
      {/* <Banner /> */}
      <HomeSlider />
      <About />
      {/* <Contact /> */}
      <HelpLine />
      <Testimonials />
      {/* <Blogs /> */}
    </div>
  );
};

export default MainHomeComponent;
