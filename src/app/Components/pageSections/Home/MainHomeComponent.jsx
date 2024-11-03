import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Contact from "./Contact";
import HelpLine from "./HelpLine";
import Testimonials from "./Testimonials";

const MainHomeComponent = () => {
  return (
    <div>
   
    
      <Banner />
      <About />
      <Contact />
      <HelpLine />
      <Testimonials/>
      <Blogs />
    </div>
  );
};

export default MainHomeComponent;
