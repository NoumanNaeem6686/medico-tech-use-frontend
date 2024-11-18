import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import HelpLine from "./HelpLine";
import Testimonials from "./Testimonials";
import HomeSlider from "./HomeSlider";
import Certification from "./Certification";
import AboutUs from "./About-Us";
import OurServices from './Our-Services'
import Services from "./Services";
import GrowthNumbers from "./Growth";
const MainHomeComponent = () => {
  return (
    <div>
      <HomeSlider />
      <AboutUs />
      <Services />
      <GrowthNumbers />
      {/* <About /> */}
      <HelpLine />
      <Certification />
      <Testimonials />
      {/* <Blogs /> */}
    </div>
  );
};

export default MainHomeComponent;
