import React from 'react'
import Heading from './Heading.jsx'
import Btn from './Btn.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Price = ({priceData}) => {
  return (
   <section className="price-section">
    <Heading
          heading={"PRICE PACKAG"}
          span={"ES"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
          }
          shortPara={"ut et dolore magna aliqua. Ut enim ad minim veniam."}
        />

        <div className="price-data container grid grid-four-cols">
            {priceData.map((price) => (
                <div key={price.price} className="price-card" data-aos="fade-up">
                 <div className="price-extra">
                <div className="card-header">
                <div className="circle">
                    <div className="circle-price">
                      {price.price}
                    </div>
                    <div className="circle-text">
                       {price.title}
                    </div>
                </div>
                <div className="card-title">
                  {price.priceHeading}
                </div>
                </div>
                <div className="card-body">
                    <ul className="body-list">
                    {price.list.map((list, index) => (
                        <li key={index} className="card-list">
                        {list}
                     </li>
                    )) }
                    </ul>
                    <div className="price-btn">
                    <a href="/">Order Now</a>
                    </div>
                </div>
            </div>
            </div>
            ))}
        </div>
        
   </section>
  )
}

export default Price