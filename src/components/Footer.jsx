const Footer = ({footerIcons}) => {
  return (
    <div className="footer-bg">
    <footer className="footer-section container">
      <h2 className="footer-heading">
        Follow Us On
      </h2>
      <div className="footer-icons">
        {
            footerIcons.map((icon, index) => (
                <div data-aos="fade-up" key={index} className="footer-icon"><i>{icon}</i></div>
            ))
        }
</div>
        <div className="copy">
          &copy; Copyright 2045 Cosmix - Created By : <a href="/">S-Z Malik</a>
        </div>
    </footer>
    </div>
  )
}

export default Footer