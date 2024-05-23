import Heading from "./Heading.jsx"

const Contact = ({contactData}) => {
  return (
    <section className="contact-section" id="contact">
         <Heading
          heading={"CONTACT "}
          span={"US"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
          }
          shortPara={"ut et dolore magna aliqua. Ut enim ad minim veniam."}
        />

        <div className="container grid grid-two-cols contact-cols">
            {
                <div className="contact-area">
                  <div className="contact-div">
                <h4 className="contact-heading">
                    {contactData.contactHeading}
                 <span>{contactData.headingSpan}</span>
                </h4>
             {
              contactData.contactInfo.map((info, index) => (
                <h6 className="contact-info" key={index}>
                <i className="icon">
                  {info.icon}
                </i>
                &nbsp;&nbsp;
                <strong className="c-strong">
                     {info.strong}
                </strong>
                &nbsp;&nbsp;
               <span>
                 {info.span}
               </span>
            </h6>
              ))
             }
             </div>
             </div>
            }

            <div className="form-area">
               <form action="" className="contact-form">
                <div className="row-one">
                  <input type="text" className="input-name" placeholder="Name"/>
                  <input type="email" className="email" name="email" placeholder="Email Address"/>
                </div>
                <div className="row-2">
                  <input type="text" className="subject" placeholder="Subject" />
                </div>
                <div className="row-3">
                  <textarea rows="10" name="message" id="message" placeholder="Enter Your Message">
                  </textarea>
                </div>
                <input className="form-btn" type="button" value="Send Now" />
               </form>
            </div>
        </div>

        <div className="looking alert-bg">
          <h2 className="look-text container">
            LOOKING FORWARD TO <span>HEARING</span> FROM YOU
          </h2>
        </div>
    </section>
  )
}

export default Contact