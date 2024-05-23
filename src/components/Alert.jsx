import Btn from "./Btn.jsx";
const Alert = ({ alertHeading, para }) => {
  return (
    <div className="alert-bg">
      <div className="container alert-section grid grid-two-cols">
        <div className="alert-text">
          <h3 className="abouth3 white-space">{alertHeading}</h3>
          <p className="main-para alert-para">{para}</p>
        </div>
        <div className="alert-div">
       <Btn/>
       </div>
      </div>
    </div>
  );
};

export default Alert;
