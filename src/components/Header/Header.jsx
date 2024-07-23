import "./Header.css";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../assets/logo-portfolio.jpeg";


const Header = () => {


  return (
    <header className="header">
      <Link to="/accueil" >
        <img className="logo-img" src={Logo} alt="logo portfolio renaud subrini" />
      </Link>

      <nav className="links">
        <NavLink to="/Welcome" >
          <li className="active">Welcome</li>
        </NavLink>

        <NavLink to="/accueil" >
          <li className="active">Portfolio</li>
        </NavLink>
        <NavLink to="/apropos" >
          <li className="active">About</li>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
