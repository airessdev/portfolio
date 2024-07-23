
import Logo from "../../assets/logo-portfolio.jpeg";

import "./Footer.css";



const Footer = () => {
  return (

    <footer className="footer-wrap">
      <img src={Logo} alt="Logo" />
      <div className="footer-text">© 2024 Renaud Subrini All rights reserved</div>
    </footer>
  );
};

export default Footer;
