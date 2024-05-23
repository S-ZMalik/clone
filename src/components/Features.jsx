import { useState } from "react"
import Heading from "./Heading.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = ({ featureIcon , featureData}) => {
  let [boolean, setBoolean] = useState(false);
  let [index, setIndex] = useState(0);

  function handleFunc(index) {
    setBoolean(index);
    setIndex(index);
  }


  return (
    <section className="features">
        <Heading
          heading={"AWESOME FEATUR"}
          span={"ES"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
          }
          shortPara={"ut et dolore magna aliqua. Ut enim ad minim veniam."}
        />

        <div className="container icons">
          { featureIcon.map((icon, index) => (
            <div key={index} className={`feature-icon ${(boolean === index) ? 'active' : ''}`} onClick={() => handleFunc(index)}>
               {icon}
            </div>
          ))
          }
        </div>

        {featureData[index] && (
          <div key={index} className="container grid grid-two-cols">
          <div className="text-area" data-aos="fade-up">
            <h3 className="abouth3 feature-heading">{featureData[index].heading}</h3>
            <div className="feature-border-div "></div>
            <p className="main-para about-para">{featureData[index].para1}</p>
            <p className="main-para about-para para2">{featureData[index].para2}</p>
          </div>
          <div className="img-area" data-aos="fade-up">
            <img src={featureData[index].img} />
          </div>
        </div>
        )}        
    </section>
  )
}

export default Features