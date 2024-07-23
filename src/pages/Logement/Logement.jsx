
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Host from "../../components/Host/Host";
import Slideshow from "../../components/Slideshow/Slideshow";
import Data from "../../data/data.json";

import "./Logement.css";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const elementHostel = Data.find((item) => item.id === id);

  useEffect(() => {
    if (!elementHostel) {
      navigate("/404");
    }
  }, [elementHostel, navigate]);

  if (!elementHostel) return null;

  const {
    pictures,
    rating,
    tags,
    description,
    title,
    location,
    lien,
    host: { name, picture },
  } = elementHostel;

  return (
    <>
      <Header />
      <div className="housing-main">
        <Slideshow images={pictures} />
        <div className="housing-header">
          <Host
            title={title}
            location={location}
            tags={tags}
            rating={rating}
            name={name}
            picture={picture}
            lien={lien}
          />
        </div>
        <div className="housing-collapse">
          <Collapse title="Description">
            <p>{description}</p>
          </Collapse>
          <Collapse title="Liens">
            <p>https://github.com/airessdev/</p>
            <p>{lien}</p>
          </Collapse>
        </div>
        <div className="frame-container">
          <iframe className="frame" title="mon site" src={lien}></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Logement;
