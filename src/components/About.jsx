import Heading from "./Heading.jsx";
import Alert from "./Alert.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = ({ aboutData }) => {
  return (
    <>
      <section className="about-section">
        <Heading
          heading={"ABOUT"}
          span={"US"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
          }
          shortPara={"ut et dolore magna aliqua. Ut enim ad minim veniam."}
        />
        
        <div className="container grid grid-two-cols">
          <div className="text-area" data-aos="fade-up">
            <h3 className="abouth3">{aboutData.aboutHeading}</h3>
            <p className="main-para about-para">{aboutData.aboutPara}</p>
          </div>
          <div className="img-area" data-aos="fade-up">
            <img src={aboutData.aboutImg} />
          </div>
        </div>

        <Alert
        alertHeading={"Premium quality free onepage template"}
        para={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        }
      />
      </section>
      
     
    </>
  );
};

export default About;
