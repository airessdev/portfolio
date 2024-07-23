


import "./Host.css";
import Stars from "../Stars/Stars"

import Logo from "../../assets/logo-portfolio.jpeg";


const Host = ({ title, rating, name}) => {

  
  
  return (

    <>
      <div className="housing-info">

        <h1 className="housing-title">{title}</h1>


      </div>

      <div className="housing-host">

        <div className="host-info">

          <div className="host-name">

            <p>Renaud</p>
            <p>Subrini</p>
          </div>
          <img className="host-img" src={Logo} alt="host" />
        </div>
        <div className="host-rating">

          <p>Difficulté</p>
          <Stars rating={rating} />
        </div>
      </div>

    </>
  )
};

export default Host;
