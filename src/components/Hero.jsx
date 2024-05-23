import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect , useRef} from "react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import required modules

const Hero = ({heroData}) => {
    let hero1 = heroData[0];
    let hero3 = heroData[1];
    let hero2 = heroData[2];

    //  ====================SWIPER JS================

    const progressCircle = useRef(null);
  const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    
    useEffect(() => {
        AOS.init(2000);
      }, []);
  return (
    <main>
      <Swiper
       spaceBetween={30}
       centeredSlides={true}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero-section hero-section1" data-aos="zoom-in">
            <div className="container grid grid-two-cols">
              <div className="extra1">
                <h1 className="hero-heading">{hero1.small}</h1>
                <h2 className="hero-subheading white-space">{hero1.big}</h2>
                <p className="hero-para">{hero1.para}</p>
              </div>
              <div className="extra2"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-section hero-section2" data-aos="zoom-in">
            <div className="container grid grid-two-cols">
              <div className="extra1">
                <h1 className="hero-heading">{hero2.small}</h1>
                <h2 className="hero-subheading white-space">{hero2.big}</h2>
                <p className="hero-para">{hero2.para}</p>
              </div>
              <div className="extra2"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-section hero-section3" data-aos="zoom-in">
            <div className="container grid grid-two-cols">
              <div className="extra1">
                <h1 className="hero-heading">{hero3.small}</h1>
                <h2 className="hero-subheading white-space">{hero3.big}</h2>
                <p className="hero-para">{hero3.para}</p>
              </div>
              <div className="extra2"></div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg  ref={progressCircle}>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </main>
  );
};

export default Hero;
