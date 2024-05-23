import Heading from "./Heading.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Blog = ({blogData}) => {
  return (
    <section className="blog-section">
    <Heading
          heading={"LATEST BL"}
          span={"OG"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
          }
          shortPara={"ut et dolore magna aliqua. Ut enim ad minim veniam."}
        />
        
        <div className="container grid grid-three-cols blogs-holder">
            {blogData.map((blog, index) => (
                <div className="blog-card" key={index}>
                <div className="blog-img">
                    <img src={blog.blogImg} alt={blog.blogTitle} />
                </div>
            <div className="date-box">
                <h4 className="month">
                   {blog.blogMonth}
                </h4>
                <strong>
                    {blog.blogDate}
                </strong>
                <em>
                   {blog.blogYear}
                </em>
            </div>
            <div className="blog-text">
            <h5 className="blog-title">
              {blog.blogTitle}
             </h5>
             <ul className="blog-main-list">
             <li className="blog-list">
                {blog.userInformation.map((item, i) => (
                  item.type === 'icon' ? (
                    <i className="blog-icon" key={i}>{item.value}</i>
                  ) : (
                    <h6 className="blog-name" key={i}>{item.value}</h6>
                  )
                ))}
              </li>
             </ul>
             <p className="blog-desc">
             {blog.blogPara}
             </p>
             <div className="anch-btn">
                <a href="/">
                    {blog.read}
                </a>
             </div>
            </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Blog