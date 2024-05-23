import aboutImg from "../src/assets/sec2.jpg";
import featureImg1 from "../src/assets/feature1.jpg";
import featureImg2 from "../src/assets/feature2.jpg";
import featureImg3 from "../src/assets/feature3.jpg";
import featureImg4 from "../src/assets/feature4.jpg";
import featureImg5 from "../src/assets/feature5.jpg";
import porfolio1 from "../src/assets/awesome1.jpg";
import porfolio2 from "../src/assets/awesome2.jpg";
import porfolio3 from "../src/assets/awesome3.jpg";
import porfolio4 from "../src/assets/awesome4.jpg";
import porfolio5 from "../src/assets/awesome5.jpg";
import porfolio6 from "../src/assets/awesome6.jpg";
import teamImg from "../src/assets/team.jpg";
import avatar1 from "../src/assets/avatar.jpg";
import avatar2 from "../src/assets/avatar2.jpg";
import avatar3 from "../src/assets/avatar3.jpg";
import blog1 from "../src/assets/blog1.jpg";
import blog2 from "../src/assets/blog2.jpg";
import blog3 from "../src/assets/blog3.jpg";
import { BsGraphUpArrow, BsLinkedin } from "react-icons/bs";
import { SiAnydesk } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { SiVisualstudioappcenter } from "react-icons/si";
import {
  AiFillMessage,
  AiFillSketchCircle,
  AiTwotoneLike,
} from "react-icons/ai";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BiPaperPlane } from "react-icons/bi";
import { BsLaptop } from "react-icons/bs";
import {
  FaCode,
  FaGooglePlusG,
  FaInstagram,
  FaPhoneAlt,
  FaRegNewspaper,
  FaTwitter,
} from "react-icons/fa";
import { MdWebStories, MdWindow } from "react-icons/md";
// import FaYoutube from "react-icons/fa6";
import { CiEdit, CiFacebook } from "react-icons/ci";
import { SlSocialPintarest } from "react-icons/sl";
import { RiBloggerFill } from "react-icons/ri";
import { GiCoffeeCup } from "react-icons/gi";
import { PiShoppingBag } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export let navData = [
  {
    list: "Home",
    link: "#home",
  },
  {
    list: "About",
    link: "#about",
  },
  {
    list: "Service",
    link: "#service",
  },
  {
    list: "Features",
    link: "#features",
  },
  {
    list: "Portfolio",
    link: "#portfolio",
  },
  {
    list: "Pricing",
    link: "#pricing",
  },
  {
    list: "Team",
    link: "#team",
  },
  {
    list: "Blog",
    link: "#blog",
  },
  {
    list: "Contact",
    link: "#contact",
  },
];

export let heroData = [
  {
    small: "WE ARE COSMIX",
    big: "Creative Themes",
    para: "Cosmix - A One Page Parallax, HTML5 and Responsive Template suitable for any creative business agency. Multiple pages layouts also in this theme with lots of CSS and JQuery animations1",
  },
  {
    small: "WE ARE COSMIX",
    big: "Creative Themes",
    para: "Cosmix - A One Page Parallax, HTML5 and Responsive Template suitable for any creative business agency. Multiple pages layouts also in this theme with lots of CSS and JQuery animations2",
  },
  {
    small: "WE ARE COSMIX",
    big: "Creative Themes",
    para: "Cosmix - A One Page Parallax, HTML5 and Responsive Template suitable for any creative business agency. Multiple pages layouts also in this theme with lots of CSS and JQuery animations3",
  },
];

export let aboutData = {
  aboutHeading: "We Are Creative And Awesome",
  aboutPara:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.Lorem Ipsum is simply dummy text of the printing and typesetting industry. book.",
  aboutImg: aboutImg,
};

export let serviceData = [
  {
    serviceTitle: "UX Design",
    servicePara:
      "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater",
    serviceIcon: <BsGraphUpArrow />,
  },
  {
    serviceTitle: "SEO Services",
    servicePara:
      "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater",
    serviceIcon: <VscGraph />,
  },
  {
    serviceTitle: "UI Design",
    servicePara:
      "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater",
    serviceIcon: <SiAnydesk />,
  },
  {
    serviceTitle: "Marketing",
    servicePara:
      "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater",
    serviceIcon: <SiGooglemarketingplatform />,
  },
  {
    serviceTitle: "Clean Code",
    servicePara:
      "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater",
    serviceIcon: <AiFillSketchCircle />,
  },
  {
    serviceTitle: "Android App",
    servicePara:
      "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater",
    serviceIcon: <SiVisualstudioappcenter />,
  },
];

export let serviceProgressData = [
  { title: "User Experience", bar: "95%" },
  { title: "Web Design", bar: "80%" },
  { title: "Programming", bar: "60%" },
  { title: "Fun", bar: "70%" },
];

export let featureIcon = [
  <BiPaperPlane />,
  <BsLaptop />,
  <FaCode />,
  <MdWindow />,
  <FaRegNewspaper />,
];

export let featureData = [
  {
    heading: "Web Design",
    para1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
    para2:
      "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound ",
    img: featureImg1,
  },
  {
    heading: "Graphic Design",
    para1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
    para2:
      "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound ",
    img: featureImg2,
  },
  {
    heading: "Web Development",
    para1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
    para2:
      "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound ",
    img: featureImg3,
  },
  {
    heading: "Responsive Design",
    para1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
    para2:
      "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound ",
    img: featureImg4,
  },
  {
    heading: "Creative Gallery",
    para1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
    para2:
      "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound ",
    img: featureImg5,
  },
];

export let portfolioImg = [
  porfolio1,
  porfolio2,
  porfolio3,
  porfolio4,
  porfolio5,
  porfolio6,
];

export let priceData = [
  {
    price: "$39",
    title: "per month",
    priceHeading: "STARTER",
    list: [
      "1 Domain",
      "100GB DISK SPACE",
      "UNLIMITED BANDWIDTH",
      "SHARED SSL CERTIFICATE",
      "10 EMAIL ADDRESS",
      "24/7 SUPPORT",
    ],
  },
  {
    price: "$69",
    title: "per month",
    priceHeading: "BUSINESS",
    list: [
      "3 Domain",
      "300GB DISK SPACE",
      "UNLIMITED BANDWIDTH",
      "SHARED SSL CERTIFICATE",
      "30 EMAIL ADDRESS",
      "24/7 SUPPORT",
    ],
  },
  {
    price: "$99",
    title: "per month",
    priceHeading: "ULTRA",
    list: [
      "5 Domain",
      "500GB DISK SPACE",
      "UNLIMITED BANDWIDTH",
      "SHARED SSL CERTIFICATE",
      "50 EMAIL ADDRESS",
      "24/7 SUPPORT",
    ],
  },
  {
    price: "$199",
    title: "per month",
    priceHeading: "PRO",
    list: [
      "10 Domain",
      "1000GB DISK SPACE",
      "UNLIMITED BANDWIDTH",
      "SHARED SSL CERTIFICATE",
      "100 EMAIL ADDRESS",
      "24/7 SUPPORT",
    ],
  },
];

export let teamData = [
  {
    teamImage: teamImg,
    name: "JULIA AMANDA",
    teamPara:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    teamIcon: [
      <CiFacebook />,
      <FaGooglePlusG />,
      <FaTwitter />,
      <FaInstagram />,
      <SlSocialPintarest />,
    ],
  },
  {
    teamImage: teamImg,
    name: "MARRY LUIS",
    teamPara:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    teamIcon: [
      <CiFacebook />,
      <FaGooglePlusG />,
      <FaTwitter />,
      <FaInstagram />,
      <SlSocialPintarest />,
    ],
  },
  {
    teamImage: teamImg,
    name: "PAUL ASTIN",
    teamPara:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    teamIcon: [
      <CiFacebook />,
      <FaGooglePlusG />,
      <FaTwitter />,
      <FaInstagram />,
      <SlSocialPintarest />,
    ],
  },
  {
    teamImage: teamImg,
    name: "JANIA SURIA",
    teamPara:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    teamIcon: [
      <CiFacebook />,
      <FaGooglePlusG />,
      <FaTwitter />,
      <FaInstagram />,
      <SlSocialPintarest />,
    ],
  },
];

export let avatarData = [
  {
    id: 0,
    qSymbol: "❝",
    avatarImg: avatar1,
    avatarpara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam",
    avatarName: "JOHN DOE",
    designation: "Web Developer",
  },
  {
    id: 0,
    qSymbol: "❝",
    avatarImg: avatar2,
    avatarpara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam",
    avatarName: "SAM DEEN",
    designation: "Web Designer",
  },
  {
    id: 0,
    qSymbol: "❝",
    avatarImg: avatar3,
    avatarpara:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam",
    avatarName: "BRANDEN EICH",
    designation: "CEO",
  },
];

export let funData = [
  {
    funIcon: <AiTwotoneLike />,
    funNumber: 365,
    funItem: "Happy Clients",
  },
  {
    funIcon: <PiShoppingBag />,
    funNumber: 73969,
    funItem: "Completed Projects",
  },
  {
    funIcon: <GiCoffeeCup />,
    funNumber: 297272,
    funItem: "Cups of Coffee",
  },
  {
    funIcon: <FaCode />,
    funNumber: 9821263,
    funItem: "Lines of Code",
  },
];

export let blogData = [
  {
    blogMonth: "JAN",
    blogDate: 10,
    blogYear: 2023,
    blogTitle: "Sed ut perspective design",
    blogImg: blog1,
    userInformation: [
      { type: "icon", value: <CiEdit key="edit3" /> },
      { type: "name", value: "Bear" },
      { type: "icon", value: <AiFillMessage key="message3" /> },
      { type: "name", value: "04" },
    ],
    blogPara:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.",
    read: "Read More",
  },
  {
    blogMonth: "JAN",
    blogDate: 20,
    blogYear: 2023,
    blogTitle: "Sed ut perspective design",
    blogImg: blog2,
    userInformation: [
      { type: "icon", value: <CiEdit key="edit3" /> },
      { type: "name", value: "Maria" },
      { type: "icon", value: <AiFillMessage key="message3" /> },
      { type: "name", value: "24" },
    ],
    blogPara:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.",
    read: "Read More",
  },
  {
    blogMonth: "JAN",
    blogDate: 30,
    blogYear: 2022,
    blogTitle: "Sed ut perspective design",
    blogImg: blog3,
    userInformation: [
      { type: "icon", value: <CiEdit key="edit3" /> },
      { type: "name", value: "John" },
      { type: "icon", value: <AiFillMessage key="message3" /> },
      { type: "name", value: "14" },
    ],
    blogPara:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.",
    read: "Read More",
  },
];
// icon: [<FaLocationDot />, <IoMdMail />, <FaPhoneAlt />, <MdWebStories />],
// strong: ["Address:", "Mail Us", "Phone", "Website"],
// span: [
//   "No 123, Wallstreet, Pakistan",
//   "info@domain.com",
//   "+91 123 -456-7890",
//   "www.domain.com",
// ],

export let contactData = {
  contactHeading: "CONTACT IN",
  headingSpan: "FO",
  contactInfo: [
    {
      icon: <FaLocationDot />,
      strong: "Address:",
      span: "No 123, Wallstreet, Pakistan"
    },
    {
      icon: <IoMdMail />,
      strong: "Mail Us",
      span: "info@domain.com"
    },
    {
      icon:<FaPhoneAlt />,
      strong: "Phone",
      span: "+91 123 -456-7890"
    },
    {
      icon:  <MdWebStories />,
      strong: "Website",
      span: "www.domain.com"
    }
  ],
  
};

export let footerIcons = [
  <CiFacebook />,
  <FaTwitter />,
  <FaInstagram />,
  <SlSocialPintarest />,
  <BsLinkedin />,
  // <FaYoutube />,
  <RiBloggerFill />,
];

export default featureIcon;
