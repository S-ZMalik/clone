import Heading from "./Heading.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Service = ({ serviceData, serviceProgressData, serviceImg }) => {
  return (
    <section className="service-section container">
      <Heading
        heading={"OUR SERVI"}
        span={"CE"}
        para={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        }
        shortPara={"ut et dolore magna aliqua. Ut enim ad minim veniam."}
      />

      <div className="container normal grid grid-three-cols">
        {serviceData.map((serviceData, index) => (
          <div key={index} className="column" data-aos="zoom-in-up">
            <div className="icon">{serviceData.serviceIcon}</div>
            <div className="service-text">
              <h3 className="service-heading abouth3 white-space">
                {serviceData.serviceTitle}
              </h3>
              <p className="service-para main-para">
                {serviceData.servicePara}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="service-progress-section container grid grid-two-cols">
        <div className="progress" data-aos="fade-up">
          {serviceProgressData.map((data, index) => (
            <div className="progress-bar" key={index}>
              <h4 className="progress-heading ">{data.title}</h4>
              <div className="bar-grey">
                <div className="red" style={{ width: data.bar }}>
                  {data.bar}
                </div>
              </div>
            </div>))}
        </div>
        <div className="img" data-aos="fade-up">
          <img src={serviceImg} alt="this is my service image" />
        </div>
      </div>
    </section>
  );
};

export default Service;
