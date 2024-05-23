import React, { useState } from 'react'
import Heading from './Heading.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = ({portfolioImg}) => {
   let [boolean, setBoolean] = useState(false);
   let [index, setIndex] = useState(0);

   
   const btn = ["All Works", "Creative", "Cooperate", "Portfolio"];
   
   function btnFunc(index) {
    setBoolean(index);
    setIndex(index);
   }

  return (
    <section className="portfolio-section">
         <Heading
          heading={"PORTFOL"}
          span={"IO"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
          }
          shortPara={"ut et dolore magna aliqua. Ut enim ad minim veniam."}
        />

        <div className="button-section container">
            {btn.map((btn, index) => (
                <button key={index} className={(boolean === index) ? 'btn-active' : '' } onClick={() => btnFunc(index)}>{btn}</button>
            ))}
        </div>

        <div className="images container grid grid-three-cols" data-aos="zoom-in-down">
            {portfolioImg.map((img, index) => (
                <div className="portfolio-img" key={index}>
                <img src={img} />
            </div>
            ))}
        </div>
    </section>
  )
}

export default Portfolio