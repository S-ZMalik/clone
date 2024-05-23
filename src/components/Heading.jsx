const Heading = ({heading, span, para, shortPara}) => {
  return (
    <div className="heading">
        <h2 className="main-heading">
            {heading}<span>{span}</span>
        </h2>
        <div className="border-div"></div>
        <p className="main-para">
            <span>{para}</span>
            <span className="shortPara">{shortPara}</span>
        </p>
        
    </div>
  )
}

export default Heading