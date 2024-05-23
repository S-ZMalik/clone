import Header from "./components/Header.jsx";
import HeroData from "./components/Hero.jsx";
import logo from "./assets/logo.png";
import { navData, heroData } from "../data/Data.jsx";
import { aboutData } from "../data/Data.jsx";
import { serviceData, serviceProgressData } from "../data/Data.jsx";
import About from "./components/About.jsx";
import serviceImg from "./assets/service.png";
import "./App.css";
import Service from "./components/Service.jsx";
import Features from "./components/Features.jsx";
import featureIcon from "../data/Data.jsx";
import { featureData } from "../data/Data.jsx";
import Portfolio from "./components/Portfolio.jsx";
import { portfolioImg } from "../data/Data.jsx";
import Price from "./components/Price.jsx";
import { priceData } from "../data/Data.jsx";
import Team from "./components/Team.jsx";
import { teamData } from "../data/Data.jsx";
import Avatar from "./components/Avatar.jsx";
import { avatarData } from "../data/Data.jsx";
import Fun from "./components/Fun.jsx";
import { funData } from "../data/Data.jsx";
import Blog from "./components/Blog.jsx";
import { blogData } from "../data/Data.jsx";
import Contact from "./components/Contact.jsx";
import { contactData } from "../data/Data.jsx";
import Footer from "./components/Footer.jsx";
import { footerIcons } from "../data/Data.jsx";


const App = () => {
  return (
    <>
      <Header navData={navData} logo={logo} />
      <HeroData heroData={heroData} />
      <About aboutData={aboutData} />
      
      <Service
        serviceData={serviceData}
        serviceImg={serviceImg}
        serviceProgressData={serviceProgressData}
      />
      <Features featureIcon={featureIcon} featureData={featureData} />
      <Portfolio portfolioImg={portfolioImg}/>
      <Price priceData={priceData} />
      <Team teamData={teamData} />
      <Avatar avatarData={avatarData}/>
      <Fun funData={funData}/>
      <Blog blogData={blogData}/>
      <Contact contactData={contactData}/>
      <Footer footerIcons={footerIcons}/>
    </>
  );
};

export default App;
